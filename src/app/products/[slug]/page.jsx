import { notFound } from "next/navigation";
import ProductsPage from "@/scenes/product-detail";
import { products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};

  const title = `${product.name} | Sawyer Camp Farmers CIG`;
  const description =
    product.description ||
    "Cash crops and bulk supply from Sawyer Camp Farmers CIG.";

  return {
    title,
    description,
    openGraph: {
      url: `/products/${product.slug}`,
      title,
      description,
      images: [
        {
          url: product.imageUrl,
          alt: product.name,
          width: 1200,
          height: 800,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.imageUrl],
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

const ProductDetailPage = async ({ params }) => {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    notFound();
  }

  return <ProductsPage product={product} />;
};

export default ProductDetailPage;
