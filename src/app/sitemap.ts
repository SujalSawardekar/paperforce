import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://paperforceindia.com";
  const routes = ["", "/about", "/products", "/reach-markets", "/blog", "/contact", "/certifications", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
