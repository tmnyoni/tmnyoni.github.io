import { PhoneIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import SocialNetworks from "./socials"
import { motion } from "framer-motion";

const easing = [.6, -0.5, .01, .99]

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate: {
        y: 1,
        opacity: 1,
        transition: {
            duration: .6,
            ease: easing
        }
    }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        }
    }
}

const HeroSection = (): JSX.Element => {
    return (

        <div>
            <div className="container mx-auto my-10 py-6">
                <motion.div variants={stagger} className="max-w-2xl">
                    <motion.div variants={fadeInUp} className="w-20 h-20 p-1 border rounded-full mb-4">
                        <Image
                            src={"/assets/images/icon.png"}
                            width={100}
                            height={100}
                            alt="icon"
                            className="rounded-full"
                        />
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="mt-8 text-5xl font-extrabold tracking-normal text-gray-800 sm:text-5xl">
                        Software engineer, developer and ui & ux designer
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="mt-8 text-gray-700">
                        Hi. I am Tawanda M. I am a passionate software developer and engineer based
                        in Zimbabwe. I also do ui and ux designing. I hold high enthusiasm, creative and innovative skills
                    </motion.p>
                    <motion.div variants={fadeInUp} className="mt-8 flex items-center">
                        <Link href="#">
                            <a className="mr-2 rounded-lg border px-6 py-2 font-semibold shadow bg-gray-900 text-gray-100 focus:bg-gray-800 focus:text-gray-100 hover:text-gray-100 focus:ring-gray-400 focus:outline-none focus:ring-2">
                                Contact me
                                <PhoneIcon className="ml-3 inline-block h-4  w-6 -rotate-180" />
                            </a>
                        </Link>
                        <SocialNetworks />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection;