import AboutUsPage from "@/scenes/about";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about Sawyer Camp Farmers Common Initiative Group (CIG), our mission in Banga Bakundu, and how we empower farmers with sustainable agriculture practices and economic opportunities.",

  openGraph: {
    url: "/about-us",
    title: "About Us",
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
    title: "About Us",
    description:
      "Discover the story behind Sawyer Camp Farmers CIG and how we support sustainable farming in Banga Bakundu, Cameroon.",
    url: "/about-us",
    images: ["https://ik.imagekit.io/thormars/Sawyer-Camp/cones-crop.jpg"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

const AboutUs = () => {
  return (
    <>
      <AboutUsPage />
    </>
  );
};

export default AboutUs;
