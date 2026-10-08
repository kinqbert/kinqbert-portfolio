import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import "./globals.scss";

const dmSans = localFont({
  src: "./fonts/DMSans-Variable.woff2",
  weight: "100 1000",
  display: "swap",
  variable: "--font-dm-sans",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maksym Perekhodko",
  jobTitle: "Full-stack Engineer",
  url: "https://kinqbert.dev",
  sameAs: [
    "https://github.com/kinqbert",
    "https://www.linkedin.com/in/maksym-perekhodko/",
  ],
};

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
    <html lang="en" className={dmSans.variable}>
      <head>
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`window.history.scrollRestoration = "manual";`}
        </Script>
        {/* Hide reveal targets only when JS will animate them in; un-hide if the app never boots. */}
        <Script id="motion-flag" strategy="beforeInteractive">
          {`if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  var root = document.documentElement;
  root.classList.add("motion");
  setTimeout(function () {
    if (!window.__motionReady) root.classList.remove("motion");
  }, 4000);
}`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
