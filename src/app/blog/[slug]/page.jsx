import ArticlePage from "@/scenes/blogs/blog-article";
import { articles } from "@/data/blogArticles";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return {
    title: article.metadata.title,
    description: article.metadata.description,
  };
}

const BlogArticlePage = async ({ params }) => {
  const { slug } = await params;
  return <ArticlePage slug={slug} />;
};

export default BlogArticlePage;
