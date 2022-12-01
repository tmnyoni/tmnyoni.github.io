import React, { ReactElement, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    PhoneIcon,
    GlobeAltIcon,
    BugAntIcon,
    ChatBubbleBottomCenterTextIcon,
    LinkIcon,
} from "@heroicons/react/24/outline";

import { NextPageWithLayout } from "../pages/_app";
import Layout from "../pages/components/layout";
import HeroSection from "../pages/components/hero";
import SkillsSection from "../pages/components/skills";

import Testimonals from "../pages/components/testimonials";
import SocialProof from "./social-proof";

type Project = {
    image: string;
};

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

const Project = ({ image }: Project) => {
    return (
        <div className="bg-gray-50 rounded">
            <Image src={image}
                alt="lecui-demo"
                width={500}
                height={192}
                className="w-full object-top object-cover rounded-t"
                loading="lazy"
            />

            <div className="px-4 mb-4">
                <h4 className="mt-6 inline-block text-lg font-bold text-gray-700">
                    Lecui User Interface Library
                </h4>
                <p className="mt-3 mb-6 text-sm text-gray-800">
                    I am an active contributor to the lecui C++ Library, which is
                    used to create user interfaces using modern C++.
                </p>
                <Link href="https:github.com/alecmus/lecui" className="text-sm font-semibold  text-gray-500">

                    <LinkIcon className="w-4 h-4 inline mr-2" />
                    check it out on github.com
                </Link>
            </div>
        </div>
    )
}

const Home: NextPageWithLayout = () => {

    return (
        <div>
            <HeroSection />
            <SkillsSection />

            <section>
                <div className="container mx-auto">
                    <div className="mx-2 my-10">
                        <div className="text-center flex flex-col items-center">
                            <h1 className="max-w-xl text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                                Featured Projects
                            </h1>
                            <p className="w-96 text-center text-sm text-gray-400 mt-3">
                                I know you have trust issues, so listen to what others have to say about me.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-16">
                            <Project image="/assets/images/lecui.jpeg" />
                            <Project image="/assets/images/lecui.jpeg" />
                            <Project image="/assets/images/lecui.jpeg" />
                            <Project image="/assets/images/lecui.jpeg" />
                        </div>
                    </div>
                </div>
            </section>

            <SocialProof />

            <div>
                <div className="container mx-auto">
                    <div className="mx-2 my-10">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="py-1 px-2">
                                <Image
                                    src="/assets/images/hero-image.png"
                                    width={350}
                                    height={400}
                                    alt="me-on-laptop"
                                />
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-800"> Hi there, I&apos;m Tawanda M. Nyoni </h5>
                                <h3 className="mt-2 text-4xl font-light">
                                    Software Developer, Engineer Based in Zimbabwe
                                </h3>
                                <p className="mt-6 text-base text-slate-800">
                                    I am an enthusiastic software developer willing to
                                    contribute everything I have to any venture.
                                    Web development is my primary area of expertise.
                                    But I&apos;m not just a web developer; I also create
                                    desktop applications on occasion. I value both
                                    creativity and innovation.
                                </p>
                                <p className="mt-6 text-base text-slate-800">
                                    When I was in O level, I was introduced to programming through
                                    Visual Basic 6. I developed an interest in building
                                    amazing things and embraced it, learning to create cool
                                    apps but failing due to a lack of resources and knowledge
                                    until I reached A level.
                                </p>
                                <p className="mt-6 text-base text-slate-800">
                                    Since then, Ive dedicated my life to learning how to write
                                    better code and using my coding abilities to create
                                    amazing things that will change the world. I&apos;ve been
                                    doing research and practicing to get ready for my purpose.
                                    I&apos;ve done my homework.
                                </p>
                                <div className="mt-5 flex items-center text-slate-500">
                                    Find me on:
                                    <div className="inline-flex items-center">
                                        <Link href="https://github.com/tmnyoni" className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                                            <ChatBubbleBottomCenterTextIcon className="inline h-6 w-6" />
                                        </Link>
                                        <Link href="https://linkedin/in/tmnyoni" className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                                            <BugAntIcon className="inline h-6 w-6" />
                                        </Link>
                                        <Link href="https://tmnyoni.ml" className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                                            <GlobeAltIcon className="inline h-6 w-6" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Home;
