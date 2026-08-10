import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Geist } from "next/font/google";
import { portfolio } from "@/config/portfolio";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// ─── Font Loading (next/font for performance) ───────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  keywords: portfolio.seo.keywords,
  authors: [{ name: portfolio.personal.name }],
  openGraph: {
    type: "website",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    siteName: portfolio.personal.name,
    ...(portfolio.seo.ogImage && { images: [portfolio.seo.ogImage] }),
    ...(portfolio.seo.canonicalUrl && { url: portfolio.seo.canonicalUrl }),
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    ...(portfolio.seo.ogImage && { images: [portfolio.seo.ogImage] }),
  },
  ...(portfolio.seo.canonicalUrl && {
    alternates: { canonical: portfolio.seo.canonicalUrl },
  }),
  robots: {
    index: true,
    follow: true,
  },
};

// ─── Root Layout ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, spaceGrotesk.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
