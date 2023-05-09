import clsx from "clsx";
import "@/styles/globals.css"

interface RootLayoutProps {
    children: React.ReactNode;
}

import { siteConfig } from "@/config/site";

export const metadata = {
     title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      "Next.js",
      "Fullstack Developer",
      "Frontend Developer",
      "Software Developer",
      "UI & UX Designer",
    ],
    authors: [
      {
        name: "tmnyoni",
        url: "https://tmnyoni.ml",
      },
    ],
    creator: "tmnyoni",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
    //   images: [`${siteConfig.url}/og.jpg`],
      creator: "@tmnyoni",
    },
    // icons: {
    //   icon: "/favicon.ico",
    //   shortcut: "/favicon-16x16.png",
    //   apple: "/apple-touch-icon.png",
    // },
    // manifest: `${siteConfig.url}/site.webmanifest`,
  }

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body
                className={clsx(
                    "bg-white min-h-screen text-gray-900 antialiased",
                    // inter.className
                )}
            >
                {/* <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                > */}
                    {children}
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
