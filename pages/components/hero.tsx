import { PhoneIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import SocialNetworks from "./socials"

const HeroSection = (): JSX.Element => {
    return (
        <section className="container mx-auto my-10 py-6">
            <div className="max-w-2xl">
                <div className="mb-4">.
                    <div className="w-20 h-20 p-1 border rounded-full animate-[reveal_0.5s_forwards]">
                        <Image
                            src={"/assets/images/icon.png"}
                            width={100}
                            height={100}
                            alt="icon"
                            className="rounded-full"
                        />
                    </div>
                </div>
                <h1 className="mt-8 text-5xl font-extrabold tracking-normal text-gray-800 sm:text-5xl animate-[reveal_1s_forwards]">
                    Software engineer, developer and ui & ux designer
                </h1>
                <p className="mt-8 text-gray-700 animate-reveal">
                    Hi. I am Tawanda M. I am a passionate software developer and engineer based
                    in Zimbabwe. I also do ui and ux designing. I hold high enthusiasm, creative and innovative skills
                </p>
                <div className="mt-8 flex items-center">
                    <Link href="#">
                        <a className="mr-2 rounded-lg border px-6 py-2 font-semibold shadow bg-gray-900 text-gray-100 focus:bg-gray-800 focus:text-gray-100 hover:text-gray-100 focus:ring-gray-400 focus:outline-none focus:ring-2">
                            Contact me
                            <PhoneIcon className="ml-3 inline-block h-4  w-6 -rotate-180" />
                        </a>
                    </Link>
                    <SocialNetworks />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;