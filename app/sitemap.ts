import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = siteConfig.nav.map((item) => ({
    url: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00`),
  }));

  return [...staticPages, ...posts];
}
