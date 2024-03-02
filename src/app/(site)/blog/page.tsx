import { Anton } from "next/font/google"
import Link from "next/link"

import { cn } from "@/lib/utils"

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
})

export default function Page() {
    return (
        <main className="flex min-h-screen  w-screen flex-col px-4 pt-8">
            <section className="mx-auto max-w-[600px]">
                <div className={cn("text-3xl", anton.className)}>Blog</div>
                <div className="mt-2 text-sm text-slate-700">
                    I do a little research and write my opinions & its allowed
                    😉
                </div>
                <div className="mt-4 grid gap-4">
                    <div>
                        <div className="flex gap-x-1">
                            <div className="flex aspect-square h-5 items-center justify-center rounded bg-blue-400 text-sm font-semibold text-white">
                                1
                            </div>
                            <h4
                                className={cn(
                                    "font-medium text-slate-700",
                                    anton.className
                                )}
                            >
                                What&apos;s the point
                            </h4>
                        </div>
                        <p>
                            People often ask me, &quot;What&apos;s the
                            point?&quot; Why do we need programming? Why do we
                            need to do all this? I mean, there are sites like
                            Webflow and Wix that are there. We can use them to
                            create whatever we want, right? Well, my first
                            answer is: go to the artist and ask them what&apos;s
                            the point. Why draw when we have cameras and AI that
                            can generate all those things in the blink of an
                            eye? I&apos;m sure they&apos;ll appreciate your
                            insightful question.
                            <Link
                                href={"/blog/whats-the-point"}
                                className="ml-1 text-blue-700"
                            >
                                Read more..
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
