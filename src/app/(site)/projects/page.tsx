import React from "react"
import { Anton } from "next/font/google"
import Link from "next/link"
import { Link2 } from "lucide-react"

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
                        Projects
                    </div>
                    <div className="mt-2 text-sm text-slate-700">
                        Okay, here we talking about &quot;The job&quot; well
                        done 😉
                    </div>
                    <div className="mt-4 grid gap-4">
                        <div>
                            <h4
                                className={cn(
                                    "font-medium text-slate-700",
                                    anton.className
                                )}
                            >
                                1️⃣The Masterpiece
                            </h4>
                            <p className="w-[60ch] text-sm text-slate-500">
                                Let&apos;s talk about the Masterpiece that I
                                created and that masterpiece is the website that
                                you&apos;re looking at right now... for sure I
                                outdid myself
                            </p>
                            <Link
                                href="#master-piece"
                                className="mt-2 flex text-sm text-slate-600"
                            >
                                <Link2 className="mr-2" /> Go there
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
