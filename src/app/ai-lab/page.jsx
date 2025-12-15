import AILabPage from "@/scenes/ai-lab/ai-lab";

export const metadata = {
  title: "AI Lab",
  description:
    "Sawyer Camp Farmers CIG is a grassroots initiative in Banga Bakundu, Cameroon, helping farmers adopt sustainable practices and improve their livelihoods.",
  openGraph: {
    url: "/ai-lab",
    title: "AI Lab",
    description:
      "Sawyer Camp Farmers CIG is a grassroots initiative in Banga Bakundu, Cameroon, helping farmers adopt sustainable practices and improve their livelihoods.",
    images: [
      {
        url: "https://ik.imagekit.io/thormars/Sawyer-Camp/white-logo.jpeg?tr=w-800,h-600",
        alt: "Sawyer Camp Farmers CIG logo",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lab",
    description:
      "Sawyer Camp Farmers CIG is a grassroots initiative in Banga Bakundu, Cameroon, helping farmers adopt sustainable practices and improve their livelihoods.",
    url: "/ai-lab",
    images: ["https://ik.imagekit.io/thormars/Sawyer-Camp/cones-crop.jpg"],
  },
  alternates: {
    canonical: "/ai-lab",
  },
};

const AILab = () => {
  return <AILabPage />;
};

export default AILab;
