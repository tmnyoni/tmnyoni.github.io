import { Anton } from "next/font/google"
import Image from "next/image"

import { cn } from "@/lib/utils"

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
})

export default function Page() {
    return (
        <section className="relative flex min-h-screen flex-col px-4 pt-8">
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
                    <div className="mt-1 text-sm text-gray-700">
                        Who am I, and what are my aspirations
                    </div>
                    <Image
                        alt="my-picutre"
                        src="/images/about-img.jpg"
                        width={1920}
                        height={1080}
                        className="mt-8 rounded-2xl"
                    />

                    <div className="mt-8 grid gap-6">
                        <p>
                            I&apos;m Tawanda M. Nyoni, a Software Developer &
                            UI/UX Designer. I create user-centric software
                            solutions by seamlessly blending development
                            expertise with UI/UX design thinking.
                        </p>
                        <p>
                            I&apos;m a full-stack developer with proficiency in
                            both front-end and back-end development. My primary
                            languages are Python and TypeScript, but I can also
                            navigate C++ and am currently on a quest to master
                            Rust (without the self-inflicted torture,
                            hopefully).
                        </p>

                        <p>
                            In UI/UX design, I leverage Figma to translate user
                            research and usability testing into intuitive and
                            visually appealing interfaces. My passion lies in
                            constantly seeking ways to improve user experience,
                            whether it&apos;s for apps I&apos;m developing or
                            exploring innovative solutions for future projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
