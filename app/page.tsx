import React from "react";
import "./globals.css"
import Image from "next/image";
import Link from "next/link";
import {
    GlobeAltIcon,
    BugAntIcon,
    ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

import HeroSection from "./hero";
import SkillsSection from "./skills";
import SocialProof from "./social-proof";
import Project from "./project";
import Projects from "./projects";

export default function Page() {

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

                        <Projects />
                    </div>
                </div>
            </section>

            <SocialProof />

            <section className="container mx-auto">
                <div className="mx-2 my-10">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="ml-4">
                            <h5 className="font-medium text-gray-800">
                                Hi there, I&apos;m Tawanda M. Nyoni
                            </h5>
                            <h3 className="mt-2 text-4xl font-light">
                                Software Developer, Engineer Based in Zimbabwe
                            </h3>
                            <p className="mt-6 text-slate-800">
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
                        <div className="py-1 px-2">
                            <Image
                                src="/assets/images/hero-image.png"
                                width={350}
                                height={400}
                                alt="me-on-laptop"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
