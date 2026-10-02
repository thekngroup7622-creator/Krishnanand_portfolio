import { cookies } from "next/headers";
import crypto from "crypto";
import { redirect } from "next/navigation";

const SESSION_COOKIE_NAME = "krishna_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

// Configurable Admin Password from environment variable, with a sensible default
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "krishna2026";
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || "krishna-cricket-analytics-secret-salt-2026";

/**
 * Generate a signed session token based on timestamp and secret HMAC
 */
function createSessionToken(): string {
  const timestamp = Date.now().toString();
  const signature = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(timestamp)
    .digest("hex");
  return `${timestamp}.${signature}`;
}

/**
 * Validate a session token
 */
function verifySessionToken(token: string): boolean {
  if (!token || !token.includes(".")) return false;
  const [timestampStr, signature] = token.split(".");
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;

  // Check expiration (7 days)
  if (Date.now() - timestamp > SESSION_MAX_AGE * 1000) {
    return false;
  }

  const expectedSignature = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(timestampStr)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature, "hex"),
      Buffer.from(expectedSignature, "hex")
    );
  } catch {
    return false;
  }
}

/**
 * Check if the current request is authenticated as an admin on the server
 */
export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
  if (!sessionCookie || !sessionCookie.value) {
    return false;
  }
  return verifySessionToken(sessionCookie.value);
}

/**
 * Require admin authentication. If not authenticated, redirects to /admin/login
 */
export async function requireAdminAuth(redirectTo = "/admin/analytics") {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    redirect(`/admin/login?from=${encodeURIComponent(redirectTo)}`);
  }
}

/**
 * Authenticate admin with password and set session cookie
 */
export async function setAdminSession(password: string): Promise<boolean> {
  // Constant time comparison
  const isValid =
    password.length === ADMIN_PASSWORD.length &&
    crypto.timingSafeEqual(Buffer.from(password), Buffer.from(ADMIN_PASSWORD));

  if (!isValid) {
    return false;
  }

  const token = createSessionToken();
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE
  });

  return true;
}

/**
 * Clear admin session cookie
 */
export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
