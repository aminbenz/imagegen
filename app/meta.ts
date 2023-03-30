import { Metadata } from "next";
import app from "../data/app.json";

const metadata: Metadata = {
  title: "ImageGen | Home",
  generator: app.name,
  applicationName: app.name,
  category: app.category,
  description: app.description,
  keywords: app.keywords,
  creator: app.creator,
  publisher: app.publisher,
  themeColor: app.theme_color,
  colorScheme: "dark",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icons/favicon-32x32.png",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-icon.png",
    other: {
      rel: "/icons/apple-touch-icon",
      url: "/icons/apple-touch-icon.png",
    },
  },
  openGraph: {
    title: app.title,
    description: app.description,
    // type: "website",
    url: app.url,
    siteName: app.name,
    images: [
      {
        url: "/assets/img-2.png",
        width: 800,
        height: 600,
        alt: `${app.name} logo`,
      },
      {
        url: "/assets/img-2.png",
        width: 1800,
        height: 1600,
        alt: `${app.name} logo`,
      },
    ],
    locale: app.locale,
    authors: ["Amin Benz"],
    // publishedTime: '2023-01-01T00:00:00.000Z',
  },
  twitter: {
    card: "summary_large_image",
    title: app.name,
    description: app.description,
    siteId: app.url,
    creator: app.creator,
    // creatorId: '1467726470533754880',
    // images: ['https://nextjs.org/og.png'],
  },

  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
};

export default metadata;
