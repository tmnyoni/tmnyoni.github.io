import { Anton, Caveat } from "next/font/google"

import { cn } from "@/lib/utils"

import { AnimatedText } from "./animated-text"

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
        <main className={cn("px-2", anton.className)}>
            <div className="flex flex-col items-center justify-center">
                <div
                    className={cn(
                        "mb-2 text-center text-3xl font-medium md:mb-10",
                        caveat.className
                    )}
                >
                    Hey👋, I&apos;m Tawanda M.
                </div>
                <AnimatedText
                    text="Software Developer and UI & UX Designer"
                    className="mt-10 max-w-[19ch] text-center text-4xl font-black leading-tight md:text-8xl"
                />
            </div>
        </main>
    )
}
