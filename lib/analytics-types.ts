export interface AnalyticsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  analysisType: string;
  description: string;
  visualizationMethod?: string;
  image: string;
  dataUsed?: string;
  objective?: string;
  keyMetrics?: string[];
  keyInsights?: string[];
  tools?: string[];
  tags: string[];
  metricFocus: string[];
  featured: boolean;
  published: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export type AnalyticsInput = Omit<AnalyticsItem, "id" | "createdAt" | "updatedAt"> & {
  id?: string;
};

// Helper to slugify string (safe to run on client and server)
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "and") // Replace & with and
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
