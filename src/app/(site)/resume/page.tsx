import React from "react"
import { Anton } from "next/font/google"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { GitHubButton } from "./github-button"
import { LinkedInButton } from "./linkedin-button"

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
})

export default function Page() {
    return (
        <main className="flex min-h-screen  w-screen flex-col pt-8">
            <section className="mx-auto w-[600px]">
                <div>
                    <div className={cn("text-3xl", anton.className)}>
                        Resume
                    </div>
                    <div className="mt-2 text-sm text-slate-700">
                        This is the walk I have walked 😉
                    </div>
                    <div className="mt-4 grid gap-4">
                        <div>
                            <p className="mb-4">
                                What did you think I will put, haahahhaa
                            </p>
                            <span>Just go to my </span>

                            <Link
                                href="https://linkedin.com/in/tmnyoni"
                                target="_blank"
                                className="inline-flex justify-center rounded bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-100 hover:bg-blue-400 active:scale-95"
                            >
                                <Linkedin className="mr-1 h-4 w-4" />
                                <span>LinkedIn</span>
                            </Link>
                            <span className="mx-2">or</span>
                            <Link
                                href="https://github.com/tmnyoni"
                                target="_blank"
                                className="inline-flex justify-center rounded bg-slate-900 px-4 py-2 text-sm text-slate-50 duration-100 hover:bg-slate-700 active:scale-95"
                            >
                                <Github className="mr-1 h-4 w-4" />
                                <span>GitHub</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
