import "@/styles/globals.css"

import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface RootLayoutProps {
    children: React.ReactNode
}

const poppins = Poppins({
    weight: ["400", "500"],
    subsets: ["latin"],
})

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-white text-gray-900 antialiased",
                    poppins.className
                )}
            >
                {/* <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                > */}
                {children}
                <Analytics />
                {/* </ThemeProvider> */}
            </body>
        </html>
    )
}
