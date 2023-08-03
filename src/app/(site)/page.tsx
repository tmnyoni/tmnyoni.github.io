import React from "react"
import { Anton, Caveat } from "next/font/google"
import Link from "next/link"

import { cn } from "@/lib/utils"

const caveat = Caveat({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--heading",
})

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
})

export default function Page() {
    return (
        <main className={cn(anton.className)}>
            <div className="flex flex-col items-center justify-center">
                <div
                    className={cn(
                        "mb-10 text-center text-3xl font-medium",
                        caveat.className
                    )}
                >
                    Hey 👋, I&apos;m Tawanda M.
                </div>
                <div className="max-w-[19ch] text-center text-[90px] font-black leading-tight">
                    Software Developer and UI & UX Designer
                </div>
            </div>
        </main>
    )
}
