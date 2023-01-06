import React from "react";
import "./globals.css";
import Image from "next/image";
import HeroSection from "./hero";
import SkillsSection from "./skills";
import SocialProof from "./social-proof";
import Projects from "./projects";
import Link from "next/link";

export default function Page() {
    return (
        <React.Fragment>
            <HeroSection />

            <section className="w-full flex flex-col justify-center items-center px-4 my-10">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-3xl font-black">
                        About me
                    </h1>
                    <p className="text-center mt-1">
                        Who am I and what I do
                    </p>
                </div>

                <div className="w-72 h-48 mt-12 bg-gray-200 rounded">
                </div>

                <div className="mt-12">
                    <p className="w-full px-4">
                        I was first introduced to programming through Visual Basic 6
                        when I was in GCE Ordinary level. I discovered a passion for
                        creating incredible things and I embraced it. I tried to learn
                        how to make applications but failed due to a lack of information
                        and resources until I reached the GCE Advanced level.
                    </p>

                    <div className="mt-12 mx-auto flex flex-col items-center">
                        <Link
                            href="#"
                            className="rounded-md uppercase bg-black text-white py-2 px-4 border border-black flex items-center justify-center space-x-5 w-60"
                        >
                            <div> Contact me </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col justify-center items-center px-4 my-12">
                <div className="container mx-auto pt-10">
                    <div className="text-center flex flex-col items-center">
                        <h1 className="text-3xl font-black ">
                            My Top Skills
                        </h1>
                        <p className="w-96 text-center mt-1">
                            Skills that I possess
                        </p>
                    </div>

                    <div className="mx-2 my-12 md:my-16">
                        <div className="grid md:grid-cols-2 gap-y-4 md:gap-x-4">
                            <SkillsSection />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col justify-center items-center px-4 my-12">
                    <div className="text-center flex flex-col items-center">
                        <h1 className="text-3xl font-black">
                            Featured Projects
                        </h1>
                        <p className="w-96 text-center mt-1">
                            Collection of work
                        </p>
                    </div>

                    <Projects />
            </section>

            <section className="w-full flex flex-col justify-center items-center px-4 my-12">
                <div className="text-center flex flex-col items-center">
                    <h1 className="text-3xl font-black">
                        Testimonals
                    </h1>
                    <p className="text-center mt-1">
                        What other people say
                    </p>
                </div>

                <SocialProof />
            </section>

        </React.Fragment >
    );
}
