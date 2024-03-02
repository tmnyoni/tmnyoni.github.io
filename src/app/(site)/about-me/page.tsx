import { Anton, Caveat } from "next/font/google"
import Link from "next/link"

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

export default function Page() {
    return (
        <main className="flex min-h-screen  flex-col px-4 pt-8">
            <section className="relative flex flex-col px-4">
                <div className="mx-auto max-w-[600px]">
                    <div>
                        <div
                            className={cn(
                                "text-3xl tracking-wider",
                                anton.className
                            )}
                        >
                            About me
                        </div>
                        <div className="mt-1 text-sm text-slate-700">
                            Who am I, and what are my aspirations
                        </div>
                        <div className="mt-8 grid gap-6">
                            <p>
                                Hello there, world. Tawanda M. Nyoni here, a
                                Harare-based software developer extraordinaire.
                                I work on web development, mobile and desktop
                                apps, and data analysis. You name it, and I code
                                it. I work at Claxon Acturies, where I make
                                magic happen with numbers and algorithms.
                            </p>
                            <p>
                                As if being a software developer extraordinaire
                                wasn&apos;t enough, I&apos;m also a brilliant UI
                                & UX designer. I have a passion for colors and
                                fonts, and I know how to make them work together
                                in harmony. I like drawing lines and circles,
                                because they are the essence of design. I also
                                do photography, because I&apos;m a visual
                                storyteller. Just say hi, and I&apos;ll blow
                                your mind with my amazing stories.
                            </p>
                            <p>
                                I&apos;m a full-stack developer, which means
                                I&apos;m equally adept at frontend and backend
                                development. Python and TypeScript are my
                                favorite tools, but I can also use C++ and Java
                                when I feel like torturing myself.
                            </p>
                            <p>
                                When I&apos;m not busy creating awesome
                                applications, I like to play games and drink
                                coffee. Because, you know, I&apos;m a normal
                                human being with hobbies and caffeine addiction.
                                That&apos;s me in a nutshell. Nice to meet you
                                😉.
                            </p>

                            <p className="text-slate-700">
                                Just so you know, I&apos;m not that great at
                                English, and my sarcasm is pretty lame. But hey,
                                I&apos;m a good prompt engineer. Do you even
                                know what that is? You should google it, maybe
                                you&apos;ll learn something. And while
                                you&apos;re at it,{" "}
                                <Link
                                    href="/blog"
                                    className="font-medium text-blue-800 underline underline-offset-2 active:scale-95"
                                >
                                    check out my blog
                                </Link>
                                . I mean, it&apos;s not like you have anything
                                better to do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
