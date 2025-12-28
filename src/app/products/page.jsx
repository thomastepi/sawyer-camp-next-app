import ProductsPage from "@/scenes/products";

export const metadata = {
  title: "Our Products",
  description:
    "Explore Sawyer Camp Farmers CIG cash crops: crude palm oil, cocoa, coffee, citrus, grains, and more from Banga-Bakundu, Cameroon.",
  openGraph: {
    url: "/products",
    title: "Our Products",
    description:
      "See our export-ready crude palm oil, cocoa beans, coffee, citrus, and staple grains sourced from smallholder farmers in Cameroon.",
    images: [
      {
        url: "https://ik.imagekit.io/thormars/Sawyer-Camp/palm-oil.jpg?updatedAt=1718742708430",
        alt: "Sawyer Camp Farmers crude palm oil",
        width: 1200,
        height: 800,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products",
    description:
      "Cash crops and bulk supply from Sawyer Camp Farmers CIG: palm oil, cocoa, coffee, citrus, grains, and seeds.",
    url: "/products",
    images: ["https://ik.imagekit.io/thormars/Sawyer-Camp/cones-crop.jpg"],
  },
  alternates: {
    canonical: "/products",
  },
};

const Products = () => {
  return <ProductsPage />;
};

export default Products;
