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
                        Chat-me
                    </div>
                    <div className="mt-2 text-sm text-slate-700">
                        You wanna talk to me, let&apos; talk. You gonna like
                        it😉
                    </div>
                    <div className="mt-4 grid gap-4">
                        <div className="h-0 w-0 border-[solid_38px]" />
                        <div className="max-w-[40ch] rounded-lg bg-slate-100 p-4 text-sm">
                            <p>Lemme be the first</p>
                            <p className="mt-1">Hi</p>
                        </div>
                        <textarea
                            className="rounded border p-2 placeholder:text-sm"
                            placeholder="Type your whatchu wanna say here..."
                        />
                        <button className="px- inline-block w-fit items-center gap-2 rounded-lg bg-slate-900 px-8 py-2 text-white">
                            Send it
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
