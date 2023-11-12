"use client"

import React from "react"
import { ThemeProvider } from "next-themes"

type NextThemesProviderProps = {
    defaultTheme: "system" | "light" | "dark"
    children: React.ReactNode
}

export default function NextThemesProvider({
    defaultTheme,
    children,
}: Readonly<NextThemesProviderProps>) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme={defaultTheme}
            enableSystem
        >
            {children}
        </ThemeProvider>
    )
}
