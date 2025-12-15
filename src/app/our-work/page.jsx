import React from "react";
import OurWorkPage from "@/scenes/our-work";

export const metadata = {
  title: "Our Work",
  description:
    "Sawyer Camp Farmers CIG is a grassroots initiative in Banga Bakundu, Cameroon, helping farmers adopt sustainable practices and improve their livelihoods.",
  openGraph: {
    url: "/our-work",
    title: "Our Work",
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
    title: "Our Work",
    description:
      "Sawyer Camp Farmers CIG is a grassroots initiative in Banga Bakundu, Cameroon, helping farmers adopt sustainable practices and improve their livelihoods.",
    url: "/our-work",
    images: ["https://ik.imagekit.io/thormars/Sawyer-Camp/cones-crop.jpg"],
  },
  alternates: {
    canonical: "/our-work",
  },
};

const OurWork = () => {
  return (
    <>
      <OurWorkPage />
    </>
  );
};

export default OurWork;
