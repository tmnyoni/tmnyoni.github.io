import { Anton } from "next/font/google"

import { projects } from "@/config/site"
import { cn } from "@/lib/utils"

import { Project } from "./project"

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
})

export default function Page() {
    return (
        <main className="flex min-h-screen   flex-col px-4 pt-8">
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
