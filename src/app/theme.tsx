"use client"

import React from "react"
import { ThemeProvider } from "next-themes"

type Props = {
    children: React.ReactNode
}

export default function NextThemesProvider({ children }: Props) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}
