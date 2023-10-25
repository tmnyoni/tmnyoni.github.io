import { Anton } from "next/font/google"

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
                        About me
                    </div>
                    <div className="mt-2 text-sm text-slate-700">
                        Who am I, and what are my aspirations
                    </div>
                    <div className="mt-4 grid gap-4">
                        <p>
                            My name is Tawanda M. Nyoni. I am a software
                            developer based in Harare. I speciliaze in web
                            development, Mobile and Desktop apps development.I
                            am currently working at Claxon Acturies. I almost
                            forgot, I am also a Data analyst.
                        </p>
                        <p>
                            I like calling myself a full-stack developer,
                            because I develop both frontend and backend. My
                            stack usually includes python & TypeScript. But I
                            have also developed applications in C++ and Java
                        </p>
                        <p>
                            I spend most of my time developing applications, and
                            I also like playing games. And drinking coffee, of
                            course, I mean 😉.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
