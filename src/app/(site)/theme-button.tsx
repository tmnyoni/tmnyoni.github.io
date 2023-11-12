"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ToggleThemeButton() {
    const { theme, setTheme } = useTheme()
    return (
        <Button
            className="absolute right-4 top-4 border"
            onClick={() => {
                setTheme(theme === "light" ? "dark" : "light")
            }}
        >
            Theme
        </Button>
    )
}
