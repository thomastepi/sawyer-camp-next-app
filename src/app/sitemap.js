import { articles } from "@/data/blogArticles";
import projects from "@/data/projects";
import { products } from "@/data/products";

const URL = "https://www.sawyercampfarmers.org";

export default function sitemap() {
  const articlesRoutes = articles.map((article) => ({
    url: `${URL}/blog/${article.slug}`,
    lastModified: new Date(article.date).toISOString(),
  }));

  const projectsRoutes = projects.map((project) => ({
    url: `${URL}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const productsRoutes = products.map((product) => ({
    url: `${URL}/products/${product.slug}`,
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
    "/products",
    "/volunteer",
    "/signin",
    "/register",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...articlesRoutes, ...projectsRoutes, ...productsRoutes];
}
