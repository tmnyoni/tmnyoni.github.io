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

import { NextPageWithLayout } from "./_app";
import Layout from "./components/layout";
import HeroSection from "./components/hero";
import SkillsSection from "./components/skills";

import { motion } from "framer-motion"
import Testimonals from "./components/testimonials";

type Project = {
    image: string;
};

const Project = ({image}: Project) => {
    return (
        <div className="bg-gray-50 rounded">
            <img src={image} alt="lecui-demo"
                className="h-48 w-full object-top object-cover rounded-t"
            />

            <div className="px-4 mb-4">
                <h4 className="mt-6 inline-block text-lg font-bold text-gray-700">
                    Lecui User Interface Library
                </h4>
                <p className="mt-3 mb-6 text-sm text-gray-800">
                    I am an active contributor to the lecui C++ Library, which is
                    used to create user interfaces using modern C++.
                </p>
                <Link href="https:github.com/alecmus/lecui">
                    <a className="text-sm font-semibold  text-gray-500">
                        <LinkIcon className="w-4 h-4 inline mr-2" />
                        check it out on github.com
                    </a>
                </Link>
            </div>
        </div>
    )
}

const Home: NextPageWithLayout = () => {

    return (
        <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
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
                            <Project image="assets/images/lecui.jpeg"/>
                            <Project image="assets/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg"/>
                            <Project image="assets/images/mohammad-rahmani-gA396xahf-Q-unsplash.jpg"/>
                            <Project image="assets/images/windows-C6T6vr1sQI0-unsplash (1).jpg"/>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonals />


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
                                        <Link href="https://github.com/tmnyoni">
                                            <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                                                <ChatBubbleBottomCenterTextIcon className="inline h-6 w-6" />
                                            </a>
                                        </Link>
                                        <Link href="https://linkedin/in/tmnyoni">
                                            <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                                                <BugAntIcon className="inline h-6 w-6" />
                                            </a>
                                        </Link>
                                        <Link href="https://tmnyoni.ml">
                                            <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                                                <GlobeAltIcon className="inline h-6 w-6" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Home;
