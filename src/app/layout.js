import MainLayout from "@/components/layout/mainLayout";
import ProviderWrapper from "@/lib/providers/wrapper";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sawyercamp.thomastepi.com"),

  title: {
    default: "Sawyer Camp Farmers CIG",
    template: "%s | Sawyer Camp Farmers CIG",
  },
  description:
    "Sawyer Camp Farmers Common Initiative Group (CIG) empowers farmers in Banga Bakundu, Cameroon with sustainable agriculture practices and economic opportunities.",

  openGraph: {
    title:
      "Sawyer Camp Farmers CIG | Sustainable Agriculture in Banga Bakundu, Cameroon",
    description:
      "Sawyer Camp Farmers Common Initiative Group (CIG) empowers farmers in Banga Bakundu, Cameroon with sustainable agriculture practices and economic opportunities.",
    type: "website",
    url: "/",
    siteName: "Sawyer Camp Farmers CIG",
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
    title: "Sawyer Camp Farmers CIG | Sustainable Agriculture in Cameroon",
    description:
      "Sawyer Camp Farmers CIG supports farmers in Banga Bakundu, Cameroon with sustainable agriculture training, tools, and economic opportunities.",
    url: "/",
    images: ["https://ik.imagekit.io/thormars/Sawyer-Camp/cones-crop.jpg"],
  },

  icons: {
    icon: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  applicationName: "Sawyer Camp Farmers CIG",
  appleWebApp: {
    title: "Sawyer Camp Farmers CIG",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#008000",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ProviderWrapper>
          <MainLayout>{children}</MainLayout>
        </ProviderWrapper>
      </body>
    </html>
  );
}
