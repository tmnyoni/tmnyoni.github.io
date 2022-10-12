import React, { ReactElement, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    PhoneIcon,
    GlobeAltIcon,
    BugAntIcon,
    ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

import { NextPageWithLayout } from "./_app";
import Layout from "./components/layout";
import HeroSection from "./components/hero";
import SkillsSection from "./components/skills";

const Home: NextPageWithLayout = () => {

    return (
        <React.Fragment>
            <HeroSection />
            <SkillsSection />

            {/**
       ** Social Proof.
       */}
            <div className="mt-10 py-6 min-h-screen">
                <div className="container mx-auto">
                    <div className="text-center flex flex-col items-center">
                        <h1 className="max-w-xl text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                            Testimonals
                        </h1>
                        <p className="w-96 text-center text-sm text-gray-400 mt-3">
                            I know you have trust issues, so listen to what others have to say about me.
                        </p>
                    </div>

                    <div className="mx-2 my-12 grid gap-4 md:grid-cols-3">
                        <div className="rounded bg-gray-100 py-6 px-4">
                            <div className="flex items-center">
                                <Image
                                    src={"/assets/hero-image.jpg"}
                                    width={45}
                                    height={45}
                                    alt="bobo"
                                    className="inline-block rounded-full"
                                />
                                <div className="ml-4 inline-block">
                                    <h4 className="text-sm font-semibold text-slate-800">
                                        Some on Stakeoverflow
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Developer
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-slate-800">
                                Tawanda is a great talent, and it has been a pleasure to collaborate with him.
                                He is a young, ambitious developer that is dedicated to his profession.
                            </p>
                        </div>
                        <div className="rounded bg-gray-100 py-6 px-4">
                            <div className="flex items-center">
                                <Image
                                    src={"/assets/hero-image.jpg"}
                                    width={45}
                                    height={45}
                                    alt="bobo"
                                    className="inline-block rounded-full"
                                />
                                <div className="ml-4 inline-block">
                                    <h4 className="text-sm font-semibold text-slate-800">
                                        Some Random Guy
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Internet Surfer
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-slate-800">
                                I&apos;ve seen Tawanda M.&apos;s work and I&apos;ve seen him work; he&apos;s a genius.
                                His work demonstrates his obsession with perfection.
                            </p>
                        </div>
                        <div className="rounded bg-gray-100 py-6 px-4">
                            <div className="flex items-center">
                                <Image
                                    src={"/assets/hero-image.jpg"}
                                    width={45}
                                    height={45}
                                    alt="bobo"
                                    className="inline-block rounded-full"
                                />
                                <div className="ml-4 inline-block">
                                    <h4 className="text-sm font-semibold text-slate-800">
                                        Coffee-Code Converter
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        Code
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-slate-800">
                                This guy is a true genius, Its been a pleasure working with him.
                                He is a young ambious developer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

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
        </React.Fragment>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Home;
