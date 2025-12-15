import ArticlePage from "@/scenes/blogs/blog-article";
import { articles } from "@/data/blogArticles";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) {
    return notFound();
  }
  return {
    title: article.metadata.title,
    description: article.metadata.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.metadata.title,
      description: article.metadata.description,
      url: `/blog/${article.slug}`,
      images: article.metadata.imageUrl
        ? [{ url: article.metadata.imageUrl }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metadata.title,
      description: article.metadata.description,
      images: article.metadata.imageUrl ? [article.metadata.imageUrl] : undefined,
    },
  };
}

const BlogArticlePage = async ({ params }) => {
  const { slug } = await params;
  return <ArticlePage slug={slug} />;
};

export default BlogArticlePage;
