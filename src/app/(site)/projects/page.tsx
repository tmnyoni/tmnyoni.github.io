import { ComponentProps } from "react"
import { Anton, Caveat } from "next/font/google"
import Link from "next/link"
import { Link2 } from "lucide-react"

import { cn } from "@/lib/utils"

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
})

const caveat = Caveat({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--heading",
})

const projects = [
    {
        number: 1,
        title: "The Masterpiece",
        description:
            "Let's talk about the Masterpiece that I created and that masterpiece is the website that you're looking at right now... for sure I outdid myself",
        href: "/",
        status: "In development",
    },
    {
        number: 2,
        title: "Good Habits",
        description:
            "It is a budgeting application. It tracks all your finances and give you insights on how to achieve best of your money",
        href: "https://app.goodhabits.tmnyoni.site",
        status: "In development",
    },
    {
        number: 3,
        title: "Cognitive Analytica Website",
        description:
            "The other masterpiece is the Cognitive Analytica Website that I designed using Figma and Developed using NextJS a ReactJS framework",
        href: "https://cognitiveanalyticazimbabwe.com",
        status: "In development",
    },
] as const

export default function Page() {
    return (
        <main className="flex min-h-screen  w-screen flex-col px-2 pt-8">
            <section className="mx-auto max-w-[600px]">
                <div>
                    <div
                        className={cn(
                            "text-3xl tracking-wider",
                            anton.className
                        )}
                    >
                        Projects
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                        Okay, here we talking about &quot;The job&quot; well
                        done 😉
                    </div>
                </div>

                <div className="mt-4 grid gap-8">
                    {projects.map((project) => (
                        <Project key={project.number} {...project} />
                    ))}
                </div>
            </section>
        </main>
    )
}
type ProjectProps = {
    number: number
    title: string
    description: string
    href: string
    status?: string
} & ComponentProps<"div">

export function Project({
    number,
    title,
    description,
    href,
    status,
}: Readonly<ProjectProps>) {
    return (
        <div>
            <div
                className={cn(
                    "flex items-center gap-x-1 font-medium text-slate-700",
                    anton.className
                )}
            >
                <div className="flex aspect-square h-5 items-center justify-center rounded bg-blue-400 pb-0.5 text-sm font-semibold text-white">
                    {number}
                </div>
                <div>{title}</div>
            </div>
            <p className="max-w-[60ch] text-sm text-slate-500">{description}</p>
            {status && (
                <div className="flex items-center gap-2 text-xs text-red-500">
                    <div className="flex h-5 w-8 items-center justify-end rounded-full bg-red-300 px-0.5">
                        <div className="h-4 w-4 rounded-full bg-red-900"></div>
                    </div>
                    <div>{status}</div>
                </div>
            )}
            <Link
                href={href}
                target="_blank"
                className="mt-2 flex items-center text-sm text-slate-600"
            >
                <Link2 className="mr-2" /> <span>Go there</span>
            </Link>
        </div>
    )
}
