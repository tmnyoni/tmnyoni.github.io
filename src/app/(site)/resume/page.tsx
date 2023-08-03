import React from "react"
import { Anton } from "next/font/google"
import Link from "next/link"

import { cn } from "@/lib/utils"

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
                                className="rounded border bg-blue-500 p-2 text-slate-50"
                            >
                                LinkedIn Profile
                            </Link>
                            <span className="mx-2">or</span>
                            <Link
                                href="https://github.com/tmnyoni"
                                target="_blank"
                                className="rounded border bg-black p-2 text-slate-50"
                            >
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
