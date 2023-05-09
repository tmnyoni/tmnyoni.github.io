import clsx from "clsx";
import "@/styles/globals.css"

interface RootLayoutProps {
    children: React.ReactNode;
}

import { siteConfig } from "@/config/site";

export const metadata = {
    title: "Tawanda M. Portfolio",
    description: "Tawanda M. Portfolio",
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
