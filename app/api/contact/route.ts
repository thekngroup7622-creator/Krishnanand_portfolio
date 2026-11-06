import nodemailer from "nodemailer";

// Fallback recipient email per user specification
const RECIPIENT_EMAIL =
  process.env.CONTACT_RECEIVER_EMAIL ||
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
  "krishnanandcricketanalyst@gmail.com";

// RFC 5322-compliant simple email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  honeypot?: unknown;
}

export async function POST(req: Request) {
  const timestamp = new Date().toISOString();
  console.log(`[Contact API] [${timestamp}] Incoming contact form submission request received.`);

  try {
    let body: ContactPayload;
    try {
      body = (await req.json()) as ContactPayload;
    } catch {
      console.warn(`[Contact API] [${timestamp}] Validation failed: Invalid or malformed JSON payload.`);
      return Response.json(
        { success: false, error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = body;

    // 1. Honeypot check (anti-bot)
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      console.warn(`[Contact API] [${timestamp}] Anti-spam triggered: Honeypot field was populated.`);
      return Response.json(
        { success: false, error: "Invalid submission detected." },
        { status: 400 }
      );
    }

    // 2. Field presence validation
    if (!name || typeof name !== "string" || !name.trim()) {
      console.warn(`[Contact API] [${timestamp}] Validation failed: Missing or empty 'name' field.`);
      return Response.json(
        { success: false, error: "Your name is required." },
        { status: 422 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      console.warn(`[Contact API] [${timestamp}] Validation failed: Missing or empty 'email' field.`);
      return Response.json(
        { success: false, error: "Your email address is required." },
        { status: 422 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      console.warn(`[Contact API] [${timestamp}] Validation failed: Missing or empty 'message' field.`);
      return Response.json(
        { success: false, error: "Message content is required." },
        { status: 422 }
      );
    }

    // 3. String trimming & sanitation
    const trimmedName = name.trim().slice(0, 100);
    const trimmedEmail = email.trim().toLowerCase().slice(0, 120);
    const trimmedSubject = (typeof subject === "string" && subject.trim())
      ? subject.trim().slice(0, 150)
      : "General Cricket Analytics Inquiry";
    const trimmedMessage = message.trim().slice(0, 5000);

    // 4. Email format validation
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      console.warn(`[Contact API] [${timestamp}] Validation failed: Invalid email format (${trimmedEmail.slice(0, 3)}***).`);
      return Response.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    // 5. Length minimums
    if (trimmedName.length < 2) {
      return Response.json(
        { success: false, error: "Name must be at least 2 characters." },
        { status: 422 }
      );
    }

    if (trimmedMessage.length < 10) {
      return Response.json(
        { success: false, error: "Message must be at least 10 characters." },
        { status: 422 }
      );
    }

    console.log(`[Contact API] [${timestamp}] Validation passed for sender: ${trimmedName} (${trimmedEmail}). Engagement Area: ${trimmedSubject}`);

    // 6. Retrieve server-side SMTP credentials
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const rawPass =
      process.env.SMTP_PASS ||
      process.env.SMTP_PASSWORD ||
      process.env.GMAIL_APP_PASSWORD ||
      process.env.GMAIL_PASS;

    if (!smtpUser || !rawPass) {
      console.error(
        `[Contact API] [${timestamp}] CONFIGURATION ERROR: SMTP credentials missing. ` +
        `Required environment variables: SMTP_USER and SMTP_PASS (or GMAIL_USER and GMAIL_APP_PASSWORD). ` +
        `Current status: SMTP_USER=${smtpUser ? "SET" : "MISSING"}, SMTP_PASS=${rawPass ? "SET" : "MISSING"}.`
      );
      // Return safe 503 response without exposing internal secrets
      return Response.json(
        {
          success: false,
          error: "Your message could not be sent. Please try again or contact me directly by email."
        },
        { status: 503 }
      );
    }

    // Clean Google App Password whitespace (Google often displays passwords as "xxxx xxxx xxxx xxxx")
    const smtpPass = rawPass.replace(/\s+/g, "");

    // 7. Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 15000
    });

    // Formatted timestamps for email body
    const formattedDateUTC = new Date().toUTCString();
    const formattedDateIST = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long"
    }).format(new Date());

    // 8. Construct Email Content
    const mailOptions = {
      from: `"Krishna Nand Yadav Portfolio" <${smtpUser}>`,
      to: RECIPIENT_EMAIL,
      replyTo: `"${trimmedName}" <${trimmedEmail}>`,
      subject: "New Portfolio Inquiry – Krishna Nand Yadav",
      text: `NEW PORTFOLIO INQUIRY – KRISHNA NAND YADAV
=====================================================

Sender Name:     ${trimmedName}
Sender Email:    ${trimmedEmail}
Engagement Area: ${trimmedSubject}
Date & Time IST: ${formattedDateIST}
Date & Time UTC: ${formattedDateUTC}

Message:
-----------------------------------------------------
${trimmedMessage}
-----------------------------------------------------

Dispatched from portfolio contact form:
https://krishnanand-portfolio-theta.vercel.app/contact
`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Portfolio Inquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #001D38; background-color: #F8FAFC; margin: 0; padding: 24px 16px;">
  <div style="max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0, 29, 56, 0.06);">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #001D38 0%, #073A68 100%); color: #ffffff; padding: 24px 28px;">
      <span style="display: inline-block; font-size: 10px; font-weight: 800; letter-spacing: 1.5px; color: #F28C28; text-transform: uppercase; margin-bottom: 6px;">PORTFOLIO CONTACT FORM</span>
      <h1 style="margin: 0; font-size: 20px; font-weight: 900; letter-spacing: -0.4px; color: #ffffff;">New Portfolio Inquiry – Krishna Nand Yadav</h1>
      <p style="margin: 6px 0 0; font-size: 12px; color: #C0CFDE;">Inquiry received via krishnanand-portfolio-theta.vercel.app</p>
    </div>

    <!-- Body Details -->
    <div style="padding: 28px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px;">
        <tbody>
          <tr style="border-bottom: 1px solid #F1F5F9;">
            <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #64748B; width: 140px; text-transform: uppercase;">Sender Name:</td>
            <td style="padding: 10px 0; font-size: 14px; font-weight: 800; color: #001D38;">${escapeHtml(trimmedName)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F1F5F9;">
            <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase;">Sender Email:</td>
            <td style="padding: 10px 0; font-size: 14px; font-weight: 700;">
              <a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #3979BC; text-decoration: none;">${escapeHtml(trimmedEmail)}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #F1F5F9;">
            <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase;">Inquiry Area:</td>
            <td style="padding: 10px 0; font-size: 14px; color: #001D38; font-weight: 600;">${escapeHtml(trimmedSubject)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase;">Submission Time:</td>
            <td style="padding: 10px 0; font-size: 12.5px; color: #334155;">${escapeHtml(formattedDateIST)}</td>
          </tr>
        </tbody>
      </table>

      <!-- Message Container -->
      <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #F28C28; border-radius: 8px; padding: 18px 20px; margin-top: 10px;">
        <span style="display: block; font-size: 10px; font-weight: 900; letter-spacing: 1px; color: #475569; text-transform: uppercase; margin-bottom: 8px;">MESSAGE / MATCH CONTEXT:</span>
        <div style="font-size: 14px; line-height: 1.7; color: #0F172A; white-space: pre-wrap;">${escapeHtml(trimmedMessage)}</div>
      </div>

      <!-- Quick Action: Reply button -->
      <div style="margin-top: 24px; text-align: center;">
        <a href="mailto:${escapeHtml(trimmedEmail)}?subject=Re:%20${encodeURIComponent(trimmedSubject)}%20-%20Krishna%20Nand%20Yadav"
           style="display: inline-block; background: #001D38; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 6px; font-size: 13px; font-weight: 700;">
          Reply to ${escapeHtml(trimmedName)}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: #F1F5F9; border-top: 1px solid #E2E8F0; padding: 14px 24px; text-align: center; font-size: 11px; color: #64748B;">
      This email was delivered to <strong>${escapeHtml(RECIPIENT_EMAIL)}</strong> from Krishna Nand Yadav's Portfolio contact form.
    </div>
  </div>
</body>
</html>`
    };

    console.log(`[Contact API] [${timestamp}] Attempting email dispatch via SMTP (${smtpHost}:${smtpPort}, user: ${smtpUser})...`);

    // 9. Send Email and Await Provider Response
    const info = await transporter.sendMail(mailOptions);

    console.log(
      `[Contact API] [${timestamp}] SUCCESS: Email accepted by provider. ` +
      `MessageId: ${info.messageId}, Response: ${info.response}, Accepted: ${JSON.stringify(info.accepted)}`
    );

    // 10. Return confirmed 200 response
    return Response.json(
      {
        success: true,
        message: "Your message has been sent successfully. Thank you for contacting me."
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const err = error as { code?: string; command?: string; responseCode?: number; message?: string };
    // Log safe diagnostic details without exposing passwords
    console.error(`[Contact API] [${timestamp}] SMTP TRANSMISSION ERROR:`, {
      code: err?.code,
      command: err?.command,
      responseCode: err?.responseCode,
      message: err?.message ? err.message.slice(0, 200) : "Unknown error"
    });

    return Response.json(
      {
        success: false,
        error: "Your message could not be sent. Please try again or contact me directly by email."
      },
      { status: 500 }
    );
  }
}

// Basic HTML escaping to prevent injection in generated email HTML
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
