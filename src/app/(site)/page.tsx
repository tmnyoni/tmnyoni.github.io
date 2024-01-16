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

const defaultVariants = {
    hidden: {
        opacity: 0,
        y: 80,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        },
    },
}

export default function Page() {
    return (
        <main className={cn("px-2", anton.className)}>
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.5 }}
            >
                <motion.div
                    variants={defaultVariants}
                    className={cn(
                        "text-center text-3xl font-medium ",
                        caveat.className
                    )}
                >
                    Hey👋, I&apos;m Tawanda M.
                </motion.div>
                <motion.div
                    variants={defaultVariants}
                    // className="mt-10 text-balance text-center text-4xl font-black leading-tight sm:text-6xl md:text-8xl"
                >
                    <AnimatedText
                        text="Software Developer and UI & UX Designer"
                        className="mt-10 max-w-[19ch] text-center text-4xl font-black leading-tight md:text-8xl"
                    />
                </motion.div>
            </motion.div>
        </main>
    )
}
