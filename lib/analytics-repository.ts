import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import {
  type AnalyticsItem,
  type AnalyticsInput,
  slugify
} from "@/lib/analytics-types";

export type { AnalyticsItem, AnalyticsInput };
export { slugify };

const DATA_FILE_PATH = path.join(process.cwd(), "data", "analytics-data.json");

async function readDataFile(): Promise<AnalyticsItem[]> {
  try {
    const raw = await fs.readFile(DATA_FILE_PATH, "utf-8");
    const data = JSON.parse(raw);
    if (Array.isArray(data)) {
      return data;
    }
    return [];
  } catch (error) {
    console.error("Failed to read analytics-data.json, returning empty list", error);
    return [];
  }
}

async function writeDataFile(items: AnalyticsItem[]): Promise<void> {
  const tmpPath = `${DATA_FILE_PATH}.${Date.now()}.tmp`;
  const json = JSON.stringify(items, null, 2);
  await fs.writeFile(tmpPath, json, "utf-8");
  await fs.rename(tmpPath, DATA_FILE_PATH);
}

function triggerRevalidation(slug?: string) {
  try {
    revalidatePath("/");
    revalidatePath("/analytics");
    revalidatePath("/admin/analytics");
    if (slug) {
      revalidatePath(`/analytics/${slug}`);
    }
  } catch {
    // In static generation or test context, revalidatePath can be safely ignored
  }
}

/**
 * Get all analytics visualizations.
 * @param includeUnpublished If true, returns draft & published (for admin). If false, returns only published.
 */
export async function getAllAnalytics(includeUnpublished = false): Promise<AnalyticsItem[]> {
  const items = await readDataFile();

  const filtered = includeUnpublished ? items : items.filter((item) => item.published);

  return filtered.sort((a, b) => {
    if (a.displayOrder !== b.displayOrder) {
      return a.displayOrder - b.displayOrder;
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

/**
 * Get featured analytics for homepage and showcases.
 */
export async function getFeaturedAnalytics(): Promise<AnalyticsItem[]> {
  const items = await readDataFile();
  return items
    .filter((item) => item.published && item.featured)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Get single analytics visualization by slug.
 */
export async function getAnalyticsBySlug(slug: string, includeUnpublished = false): Promise<AnalyticsItem | null> {
  const items = await readDataFile();
  const found = items.find((item) => item.slug === slug);
  if (!found) return null;
  if (!includeUnpublished && !found.published) return null;
  return found;
}

/**
 * Get single analytics visualization by ID.
 */
export async function getAnalyticsById(id: string): Promise<AnalyticsItem | null> {
  const items = await readDataFile();
  return items.find((item) => item.id === id) || null;
}

/**
 * Create a new analytics visualization record.
 */
export async function createAnalytics(input: AnalyticsInput): Promise<AnalyticsItem> {
  const items = await readDataFile();

  // Determine unique slug
  let baseSlug = input.slug ? slugify(input.slug) : slugify(input.title);
  if (!baseSlug) baseSlug = `analytics-${Date.now()}`;
  let finalSlug = baseSlug;
  let counter = 1;
  while (items.some((i) => i.slug === finalSlug)) {
    finalSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  // Determine display order if not explicitly specified
  let order = input.displayOrder;
  if (typeof order !== "number" || isNaN(order)) {
    const maxOrder = items.reduce((max, i) => Math.max(max, i.displayOrder || 0), 0);
    order = maxOrder + 1;
  }

  const now = new Date().toISOString();
  const newItem: AnalyticsItem = {
    id: input.id || `analytics-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    slug: finalSlug,
    title: input.title.trim(),
    category: input.category.trim() || "Player Performance",
    analysisType: input.analysisType.trim() || "Batting Performance",
    description: input.description.trim(),
    visualizationMethod: input.visualizationMethod?.trim() || "",
    image: input.image.trim(),
    dataUsed: input.dataUsed?.trim() || "",
    objective: input.objective?.trim() || "",
    keyMetrics: Array.isArray(input.keyMetrics) ? input.keyMetrics : [],
    keyInsights: Array.isArray(input.keyInsights) ? input.keyInsights : [],
    tools: Array.isArray(input.tools) ? input.tools : [],
    tags: Array.isArray(input.tags) ? input.tags : [],
    metricFocus: Array.isArray(input.metricFocus) ? input.metricFocus : [],
    featured: Boolean(input.featured),
    published: input.published !== undefined ? Boolean(input.published) : true,
    displayOrder: order,
    createdAt: now,
    updatedAt: now
  };

  items.push(newItem);
  await writeDataFile(items);
  triggerRevalidation(newItem.slug);
  return newItem;
}

/**
 * Update an existing analytics visualization.
 */
export async function updateAnalytics(id: string, updates: Partial<AnalyticsInput>): Promise<AnalyticsItem> {
  const items = await readDataFile();
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) {
    throw new Error(`Analytics item with ID "${id}" not found.`);
  }

  const existing = items[index];

  // If slug is changing, verify uniqueness
  let targetSlug = existing.slug;
  if (updates.slug && updates.slug !== existing.slug) {
    const requested = slugify(updates.slug);
    let finalSlug = requested;
    let counter = 1;
    while (items.some((i) => i.id !== id && i.slug === finalSlug)) {
      finalSlug = `${requested}-${counter}`;
      counter++;
    }
    targetSlug = finalSlug;
  }

  const updated: AnalyticsItem = {
    ...existing,
    ...updates,
    id: existing.id,
    slug: targetSlug,
    title: updates.title !== undefined ? updates.title.trim() : existing.title,
    category: updates.category !== undefined ? updates.category.trim() : existing.category,
    analysisType: updates.analysisType !== undefined ? updates.analysisType.trim() : existing.analysisType,
    description: updates.description !== undefined ? updates.description.trim() : existing.description,
    image: updates.image !== undefined ? updates.image.trim() : existing.image,
    displayOrder: updates.displayOrder !== undefined ? Number(updates.displayOrder) : existing.displayOrder,
    featured: updates.featured !== undefined ? Boolean(updates.featured) : existing.featured,
    published: updates.published !== undefined ? Boolean(updates.published) : existing.published,
    tags: updates.tags !== undefined ? updates.tags : existing.tags,
    metricFocus: updates.metricFocus !== undefined ? updates.metricFocus : existing.metricFocus,
    updatedAt: new Date().toISOString()
  };

  items[index] = updated;
  await writeDataFile(items);
  triggerRevalidation(updated.slug);
  return updated;
}

/**
 * Delete an analytics visualization.
 */
export async function deleteAnalytics(id: string): Promise<AnalyticsItem> {
  const items = await readDataFile();
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) {
    throw new Error(`Analytics item with ID "${id}" not found.`);
  }

  const [removed] = items.splice(index, 1);
  await writeDataFile(items);
  triggerRevalidation(removed.slug);
  return removed;
}

/**
 * Duplicate an analytics visualization (useful for quick templates).
 */
export async function duplicateAnalytics(id: string): Promise<AnalyticsItem> {
  const source = await getAnalyticsById(id);
  if (!source) {
    throw new Error(`Source analytics item with ID "${id}" not found.`);
  }

  const maxOrder = (await readDataFile()).reduce((max, i) => Math.max(max, i.displayOrder || 0), 0);

  return createAnalytics({
    ...source,
    id: undefined,
    title: `${source.title} (Copy)`,
    slug: `${source.slug}-copy`,
    published: false, // Default to draft for duplicates
    displayOrder: maxOrder + 1
  });
}

/**
 * Get distinct categories that currently have published visuals.
 */
export async function getActiveCategories(): Promise<string[]> {
  const items = await getAllAnalytics(false);
  const set = new Set<string>();
  items.forEach((item) => {
    if (item.category) set.add(item.category);
  });
  return Array.from(set);
}

/**
 * Get management stats (total, featured, published, draft).
 */
export async function getAnalyticsStats(): Promise<{
  total: number;
  featured: number;
  published: number;
  draft: number;
}> {
  const items = await readDataFile();
  const total = items.length;
  const published = items.filter((i) => i.published).length;
  const featured = items.filter((i) => i.featured && i.published).length;
  const draft = total - published;
  return { total, featured, published, draft };
}
