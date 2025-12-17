import { articles } from "@/data/blogArticles";
import projects from "@/data/projects";

const URL = "https://sawyercamp.thomastepi.com";

export default function sitemap() {
  const articlesRoutes = articles.map((article) => ({
    url: `${URL}/blog/${article.slug}`,
    lastModified: new Date(article.date).toISOString(),
  }));

  const projectsRoutes = projects.map((project) => ({
    url: `${URL}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const staticRoutes = [
    "",
    "/about-us",
    "/ai-lab",
    "/ai-lab/ai-crop-planner",
    "/ai-lab/farm-doctor",
    "/become-a-member",
    "/blog",
    "/contact-us",
    "/donate",
    "/donate/checkout",
    "/farm-tools",
    "/our-work",
    "/projects",
    "/volunteer",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...articlesRoutes, ...projectsRoutes];
}
