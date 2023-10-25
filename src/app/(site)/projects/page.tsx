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
            <section className="mx-auto max-w-[600px]">
                <div>
                    <div className={cn("text-3xl", anton.className)}>
                        Projects
                    </div>
                    <div className="mt-2 text-sm text-slate-700">
                        Okay, here we talking about &quot;The job&quot; well
                        done 😉
                    </div>
                    <div className="mt-4 grid gap-8">
                        <div>
                            <h4
                                className={cn(
                                    "font-medium text-slate-700",
                                    anton.className
                                )}
                            >
                                1️⃣The Masterpiece
                            </h4>
                            <p className="max-w-[60ch] text-sm text-slate-500">
                                Let&apos;s talk about the Masterpiece that I
                                created and that masterpiece is the website that
                                you&apos;re looking at right now... for sure I
                                outdid myself
                            </p>
                            <div className="flex items-center gap-2 text-xs text-red-500">
                                <div className="flex h-5 w-8 items-center justify-end rounded-full bg-red-300 px-0.5">
                                    <div className="h-4 w-4 rounded-full bg-red-900"></div>
                                </div>
                                <div>Dev Mode</div>
                            </div>
                            <Link
                                href="#master-piece"
                                className="mt-2 flex items-center text-sm text-slate-600"
                            >
                                <Link2 className="mr-2" /> Go there
                            </Link>
                        </div>
                        <div>
                            <h4
                                className={cn(
                                    "font-medium text-slate-700",
                                    anton.className
                                )}
                            >
                                2️⃣Cognitive Analytica Website
                            </h4>
                            <p className="max-w-[60ch] text-sm text-slate-500">
                                The other masterpiece is the Cognitive Analytica
                                Website that I designed using Figma and
                                Developed using NextJS a ReactJS framework
                            </p>
                            <div className="flex items-center gap-2 text-xs text-red-500">
                                <div className="flex h-5 w-8 items-center justify-end rounded-full bg-red-300 px-0.5">
                                    <div className="h-4 w-4 rounded-full bg-red-900"></div>
                                </div>
                                <div>Dev Mode</div>
                            </div>
                            <Link
                                href="https://cognitiveanalyticazimbabwe.co.zw"
                                target="_blank"
                                className="mt-2 flex items-center text-sm text-slate-600"
                            >
                                <Link2 className="mr-2" /> <span>Go there</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
