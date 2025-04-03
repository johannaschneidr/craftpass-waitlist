import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://craftpass.co"),
  title: "CraftPass",
  description:
    "CraftPass. The platform powering your creative wellness.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "CraftPass",
    description: "CraftPass. The platform powering your creative wellness.",
    images: [
      {
        url: "/og-image.png", // Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "CraftPass Preview"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CraftPass",
    description: "CraftPass. The platform powering your creative wellness.",
    images: ["/og-image.png?v=2"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          property="og:site_name"
          content="CraftPass"
        />
        <meta
          property="og:url"
          content="https://craftpass.co"
        />
      </head>
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
