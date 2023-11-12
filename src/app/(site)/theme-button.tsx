"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
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
            <Moon className={cn(theme === "light" ? "block" : "hidden")} />
            <Sun className={cn(theme === "dark" ? "block" : "hidden")} />
        </Button>
    )
}
