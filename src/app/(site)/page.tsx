"use client"

import { Anton, Caveat } from "next/font/google"
import { motion } from "framer-motion"

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

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5,
        },
    },
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
}

export default function Page() {
    return (
        <main className={cn("px-4", anton.className)}>
            <motion.div variants={container} initial="hidden" animate="visible">
                <motion.div
                    variants={item}
                    className={cn(
                        "text-center text-3xl font-medium",
                        caveat.className
                    )}
                >
                    Hey👋, I&apos;m Tawanda M.
                </motion.div>
                <motion.div
                    variants={item}
                    className="mt-10 max-w-[19ch] text-center text-4xl font-black leading-tight md:text-8xl"
                >
                    <AnimatedText
                        text="Software Developer and UI & UX Designer"
                        className="mt-10 max-w-[19ch] text-center text-4xl font-black leading-tight md:text-8xl"
                    />
                </motion.div>
                <motion.div
                    variants={item}
                    // className="mt-10 text-balance text-center text-4xl font-black leading-tight sm:text-6xl md:text-8xl"
                >
                    {/* <AnimatedText
                        text="Software Developer and UI & UX Designer"
                        className="mt-10 max-w-[19ch] text-center text-4xl font-black leading-tight md:text-8xl"
                    /> */}
                </motion.div>
            </motion.div>
        </main>
    )
}
