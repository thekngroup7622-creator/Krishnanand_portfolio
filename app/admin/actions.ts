"use server";

import {
  createAnalytics,
  updateAnalytics,
  deleteAnalytics,
  duplicateAnalytics,
  getAnalyticsById,
  AnalyticsInput
} from "@/lib/analytics-repository";
import {
  isAdminAuthenticated,
  setAdminSession,
  clearAdminSession
} from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginAdminAction(prevState: unknown, formData: FormData) {
  const password = formData.get("password") as string;
  const from = (formData.get("from") as string) || "/admin/analytics";

  if (!password) {
    return { error: "Password is required." };
  }

  const success = await setAdminSession(password);
  if (!success) {
    return { error: "Invalid admin password. Please try again." };
  }

  redirect(from);
}

export async function logoutAdminAction() {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function createAnalyticsAction(input: AnalyticsInput) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    throw new Error("Unauthorized. Admin authentication required.");
  }

  if (!input.title || !input.title.trim()) {
    throw new Error("Title is required.");
  }
  if (!input.image || !input.image.trim()) {
    throw new Error("Visualization image is required.");
  }

  const created = await createAnalytics(input);
  revalidatePath("/admin/analytics");
  revalidatePath("/analytics");
  revalidatePath("/");
  return { success: true, item: created };
}

export async function updateAnalyticsAction(id: string, updates: Partial<AnalyticsInput>) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    throw new Error("Unauthorized. Admin authentication required.");
  }

  const updated = await updateAnalytics(id, updates);
  revalidatePath("/admin/analytics");
  revalidatePath("/analytics");
  revalidatePath(`/analytics/${updated.slug}`);
  revalidatePath("/");
  return { success: true, item: updated };
}

export async function deleteAnalyticsAction(id: string) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    throw new Error("Unauthorized. Admin authentication required.");
  }

  const deleted = await deleteAnalytics(id);
  revalidatePath("/admin/analytics");
  revalidatePath("/analytics");
  revalidatePath(`/analytics/${deleted.slug}`);
  revalidatePath("/");
  return { success: true, item: deleted };
}

export async function toggleFeaturedAction(id: string) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    throw new Error("Unauthorized. Admin authentication required.");
  }

  const existing = await getAnalyticsById(id);
  if (!existing) {
    throw new Error("Item not found.");
  }

  const updated = await updateAnalytics(id, { featured: !existing.featured });
  revalidatePath("/admin/analytics");
  revalidatePath("/analytics");
  revalidatePath("/");
  return { success: true, featured: updated.featured };
}

export async function togglePublishedAction(id: string) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    throw new Error("Unauthorized. Admin authentication required.");
  }

  const existing = await getAnalyticsById(id);
  if (!existing) {
    throw new Error("Item not found.");
  }

  const updated = await updateAnalytics(id, { published: !existing.published });
  revalidatePath("/admin/analytics");
  revalidatePath("/analytics");
  revalidatePath("/");
  return { success: true, published: updated.published };
}

export async function duplicateAnalyticsAction(id: string) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    throw new Error("Unauthorized. Admin authentication required.");
  }

  const duplicated = await duplicateAnalytics(id);
  revalidatePath("/admin/analytics");
  return { success: true, item: duplicated };
}
