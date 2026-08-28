import type { Metadata } from "next";
import Script from "next/script";

import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://kinqbert.dev"),
  title: "Maksym Perekhodko — Full-stack Engineer",
  description:
    "Full-stack engineer building production-grade web applications with React, TypeScript, Node.js, and NestJS.",
  keywords: [
    "Maksym Perekhodko",
    "Full-stack Engineer",
    "React Developer",
    "NestJS Developer",
    "TypeScript",
  ],
  openGraph: {
    title: "Maksym Perekhodko — Full-stack Engineer",
    description: "Reliable product engineering from interface to infrastructure.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Maksym Perekhodko — Full-stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maksym Perekhodko — Full-stack Engineer",
    description: "Reliable product engineering from interface to infrastructure.",
    images: ["/og-preview.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`window.history.scrollRestoration = "manual";`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
