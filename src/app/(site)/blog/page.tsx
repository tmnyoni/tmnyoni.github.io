import { Anton } from "next/font/google"

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
                    <div className={cn("text-3xl", anton.className)}>Blog</div>
                    <div className="mt-2 text-sm text-slate-700">
                        I do a little research and write my opinions & its
                        allowed 😉
                    </div>
                    <div className="mt-4 grid gap-4">
                        <div>
                            <h4
                                className={cn(
                                    "font-medium text-slate-700",
                                    anton.className
                                )}
                            >
                                Blog heading
                            </h4>
                            <p className="text-sm text-slate-500">
                                I haven&apos;t written anything yet
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
