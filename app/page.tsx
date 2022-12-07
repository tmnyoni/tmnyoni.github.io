import React from "react";
import "./globals.css"
import Image from "next/image";
import HeroSection from "./hero";
import SkillsSection from "./skills";
import SocialProof from "./social-proof";
import Projects from "./projects";

export default function Page() {

    return (
        <div>
            <HeroSection />

            <section>
                <div className="container mx-auto pt-10">
                    <div className="text-center flex flex-col items-center">
                        <h1 className="max-w-xl text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                            My Top Skills
                        </h1>
                        <p className="w-96 text-center text-sm text-gray-400 mt-3">
                            These are the characteristics that distinguish me from other developers.
                        </p>
                    </div>

                    <div className="mx-2 my-12 md:my-16">
                        <div className="grid md:grid-cols-2 gap-y-4 md:gap-x-4">
                            <SkillsSection />
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <div className="container mx-auto">
                    <div className="mx-2 my-10">
                        <div className="text-center flex flex-col items-center">
                            <h1 className="max-w-xl text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                                Featured Projects
                            </h1>
                            <p className="w-96 text-center text-sm text-gray-400 mt-3">
                                This is a compendium of projects that I have worked on over the years.
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
                            <h3 className="mt-2 text-5xl font-black">
                                Software Engineer and Developer
                            </h3>

                            <p className="mt-6 text-slate-800">
                                I am a passionate software developer ready to give anything I have to any endeavor.
                                My main expertise is in web development. But I&apos;m not just a web developer; occasionally,
                                I also develop desktop applications. I value both innovation and creativity.
                            </p>

                            <p className="mt-6 text-base text-slate-800">
                                I was first introduced to programming through Visual Basic 6 when I was in GCE Ordinary level.
                                I discovered a passion for creating incredible things and I embraced it.
                                I tried to learn how to make applications but failed due to a lack of information
                                and resources until I reached the GCE Advanced level.
                            </p>

                            <p className="mt-6 text-base text-slate-800">
                                Since then, I&apos;ve devoted my life to mastering the art of better coding and using my coding skills to
                                produce amazing things that will alter the course of history. To prepare for my purpose,
                                I have been conducting research and exercising. I guess I have accomplished my task.
                            </p>
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
        </div >
    );
};
