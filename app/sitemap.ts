import { MetadataRoute } from "next";
import { analyticsCaseStudies } from "@/data/analytics";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://krishnanand-portfolio-theta.vercel.app";
  const currentDate = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/about-krishna`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/cricket-analyst-ghazipur`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.95 },
    { url: `${baseUrl}/international-cricket-analysis`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/analytics`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/projects`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/articles`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/experience`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/skills`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/visualizations`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${baseUrl}/resume`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 }
  ];

  const dynamicAnalytics = analyticsCaseStudies.map((study) => ({
    url: `${baseUrl}/analytics/${study.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85
  }));

  const dynamicProjects = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85
  }));

  const dynamicArticles = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  return [...staticPages, ...dynamicAnalytics, ...dynamicProjects, ...dynamicArticles];
}

