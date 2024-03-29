import { Anton } from "next/font/google"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Bullet } from "@/components/bullet"
import { Numbering } from "@/components/numbering"

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
})

export default function Page() {
    return (
        <main className="flex min-h-screen  flex-col px-4 pt-8">
            <section className="mx-auto max-w-[600px]">
                <div>
                    <div className={cn("text-3xl", anton.className)}>
                        Resume
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                        This is the walk I have walked 😉
                    </div>
                    <div className="mt-4 grid gap-8">
                        <div>
                            <p className="mb-4">
                                What did you think I will put, haahahhaa
                            </p>
                            <span>Just go to my </span>

                            <Link
                                href="https://linkedin.com/in/tmnyoni"
                                target="_blank"
                                className="inline-flex justify-center rounded bg-blue-500 px-4 py-2 text-sm text-gray-50 duration-100 hover:bg-blue-400 active:scale-95"
                            >
                                <Linkedin className="mr-1 h-4 w-4" />
                                <span>LinkedIn</span>
                            </Link>
                            <span className="mx-2">or</span>
                            <Link
                                href="https://github.com/tmnyoni"
                                target="_blank"
                                className="inline-flex justify-center rounded bg-gray-900 px-4 py-2 text-sm text-gray-50 duration-100 hover:bg-gray-700 active:scale-95"
                            >
                                <Github className="mr-1 h-4 w-4" />
                                <span>GitHub</span>
                            </Link>
                        </div>

                        <div>
                            <div className={cn(anton.className)}>
                                Oh well, lemme not bore you to death 🩻
                            </div>
                            <div
                                className={cn(anton.className, "mt-6 text-lg")}
                            >
                                Work Experience
                            </div>
                            <div>
                                <div className="flex items-center gap-x-1 font-medium">
                                    <Numbering number={1} />
                                    <div>Claxon Actuaries</div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-500">
                                    <div>Graduate Trainee: Analyst</div>
                                    <div className="rounded-lg bg-gray-100 px-4 py-1 text-sm">
                                        July 2023 - present
                                    </div>
                                </div>
                                <div className="mt-2 space-y-1 text-sm">
                                    <div className="flex items-start">
                                        <Bullet />
                                        <p className="ml-1">
                                            Redesigned and Developed a system
                                            that is created in ReactJS and
                                            Python using FastApi and NextJS
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <Bullet />
                                        <p className="ml-1">
                                            Research on new ways to authenticate
                                            users using MFA and implemented the
                                            solution
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
