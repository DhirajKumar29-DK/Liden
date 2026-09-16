import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "../styles/css/all.min.css";
import "../styles/style.css";
import "./globals.css";
import Preloader from "@/components/Preloader";
import PageContainer from "@/components/PageContainer";
import CustomCursor from "@/components/CustomCursor";

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://liden.in"),
  title: {
    default: "Nanotech Website - A Creative Portfolio Template",
    template: "%s | Liden - Creative Portfolio Agency",
  },
  description: "Liden is a premier creative design agency specializing in modern web design, motion graphics, interactive digital experiences, and web development.",
  applicationName: "Liden Agency",
  authors: [{ name: "Liden Team", url: "https://liden.in" }],
  generator: "Next.js",
  keywords: [
    "Creative Agency",
    "Portfolio Template",
    "Next.js Portfolio",
    "Web Design",
    "Motion Design",
    "Liden",
    "Nanotech",
    "Web Development",
    "UX UI Design"
  ],
  creator: "Liden Agency",
  publisher: "Liden Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nanotech Website - A Creative Portfolio Template",
    description: "Liden is a premier creative design agency specializing in modern web design, motion graphics, interactive digital experiences, and web development.",
    url: "https://liden.in",
    siteName: "Liden",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Liden Creative Portfolio Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanotech Website - A Creative Portfolio Template",
    description: "Bringing brands to life through innovative web design and interactive digital experiences.",
    images: ["/images/hero-bg.jpg"],
    creator: "@lidenagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Liden Agency",
    url: "https://liden.in",
    logo: "https://liden.in/favicon.ico",
    image: "https://liden.in/images/hero-bg.jpg",
    description: "Premier creative design agency specializing in web development, motion design, and digital experiences.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "35 M Str",
      addressLocality: "New York",
      addressCountry: "US",
    },
    telephone: "+1004077635748901",
    sameAs: [
      "https://twitter.com",
      "https://facebook.com",
      "https://instagram.com",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,450,500,600,700" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="hidden-ball smooth-scroll rounded-borders hero-below-caption" data-primary-color="#ffba00">
        <main>
          {/* Preloader */}
          <Preloader />

          <div className="cd-index cd-main-content">
            <PageContainer>{children}</PageContainer>
          </div>
        </main>

        <CustomCursor />

        {/* Core & Animation Scripts */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/ajax/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/ajax/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/ajax/Flip.min.js" strategy="beforeInteractive" />
        <Script src="/ajax/three.min.js" strategy="beforeInteractive" />
        <Script src="/ajax/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/ajax/smooth-scrollbar.js" strategy="beforeInteractive" />
        <Script src="/js/clapat.js" strategy="afterInteractive" />
        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script src="/js/common.js" strategy="afterInteractive" />
        <Script src="/js/contact.js" strategy="afterInteractive" />
        <Script src="/js/scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
