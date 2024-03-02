"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export function ToggleThemeButton() {
    const { theme, setTheme } = useTheme()
    return (
        <button
            className="absolute right-4 top-4 inline-flex justify-between gap-x-1 rounded-full border border-gray-500 p-0.5 shadow-inner"
            onClick={() => {
                setTheme(theme === "light" ? "dark" : "light")
            }}
        >
            <p className="sr-only">Theme</p>
            <div
                className={cn(
                    "p-1",
                    theme === "light" ? "" : "rounded-full bg-white text-black"
                )}
            >
                <MoonIcon className="size-5" />
            </div>
            <div
                className={cn(
                    "p-1",
                    theme === "dark" ? "" : "rounded-full bg-black text-white"
                )}
            >
                <SunIcon className="size-5" />
            </div>
        </button>
    )
}
