import rawAnalytics from "@/data/analytics-data.json";
import { type AnalyticsItem, slugify } from "@/lib/analytics-types";

export type { AnalyticsItem };
export { slugify };

// Static source of truth for cricket analytics case studies
const staticAnalytics: AnalyticsItem[] = rawAnalytics as AnalyticsItem[];

/**
 * Get all analytics visualizations (statically).
 * @param includeUnpublished If true, returns draft & published. If false, returns only published.
 */
export async function getAllAnalytics(includeUnpublished = false): Promise<AnalyticsItem[]> {
  const items = includeUnpublished ? staticAnalytics : staticAnalytics.filter((item) => item.published);

  return [...items].sort((a, b) => {
    if (a.displayOrder !== b.displayOrder) {
      return a.displayOrder - b.displayOrder;
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

/**
 * Get featured analytics for homepage and showcases (statically).
 */
export async function getFeaturedAnalytics(): Promise<AnalyticsItem[]> {
  return staticAnalytics
    .filter((item) => item.published && item.featured)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Get single analytics visualization by slug (statically).
 */
export async function getAnalyticsBySlug(slug: string, includeUnpublished = false): Promise<AnalyticsItem | null> {
  const found = staticAnalytics.find((item) => item.slug === slug);
  if (!found) return null;
  if (!includeUnpublished && !found.published) return null;
  return found;
}

/**
 * Get single analytics visualization by ID (statically).
 */
export async function getAnalyticsById(id: string): Promise<AnalyticsItem | null> {
  return staticAnalytics.find((item) => item.id === id) || null;
}

/**
 * Get distinct categories that currently have published visuals (statically).
 */
export async function getActiveCategories(): Promise<string[]> {
  const set = new Set<string>();
  staticAnalytics
    .filter((item) => item.published)
    .forEach((item) => {
      if (item.category) set.add(item.category);
    });
  return Array.from(set);
}
