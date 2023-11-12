import "@/styles/globals.css"

import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"

import NextThemesProvider from "./theme"

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props: Readonly<RootLayoutProps>) {
    const { children } = props

    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={GeistSans.className}
        >
            <body
                className={cn(
                    "min-h-screen bg-[url('/images/bg.svg')] antialiased"
                )}
            >
                <NextThemesProvider defaultTheme="system">
                    {children}
                    <Analytics />
                </NextThemesProvider>
            </body>
        </html>
    )
}
