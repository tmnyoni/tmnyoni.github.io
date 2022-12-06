import { PhoneIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import SocialNetworks from "./social-networks"
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

export default function HeroSection() {
    return (
        <section className="container mx-auto my-10 py-6">
            <div className="max-w-2xl">
                <div className="w-20 h-20 border rounded-full">
                    <Image
                        src={"/assets/images/icon.png"}
                        width={100}
                        height={100}
                        alt="icon"
                        className="rounded-full p-1"
                    />
                </div>
                <h1 className="mt-8 text-4xl font-extrabold tracking-normal leading-[50px] text-gray-800 sm:text-5xl">
                    Software engineer, developer and UI/UX designer
                </h1>
                <p className="mt-8 text-gray-700">
                    Hello, my name is Tawanda M. I am an enthusiastic software developer and engineer.
                    I also design user interfaces and user interfaces for websites. I am full of enthusiasm, creativity, and innovation.
                </p>
                <div className="mt-8 flex items-center">
                    <Link href="#" className="border px-6 py-2 font-medium text-sm shadow bg-gray-900 text-gray-100 mr-2 rounded-lg focus:bg-gray-800 focus:text-gray-100 hover:text-gray-100 focus:ring-gray-400 focus:outline-none focus:ring-2">
                        Contact me
                        <PhoneIcon className="m-auto ml-3 inline-block h-4  w-6 -rotate-180" />
                    </Link>
                    
                    <SocialNetworks />
                </div>
            </div>
        </section>
    )
}