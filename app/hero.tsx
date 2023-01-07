import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
import SocialNetworks from "./social-networks";

export default function HeroSection() {
    return (
        <section className="w-full md:w-9/12 my-28 mx-auto flex flex-col justify-center">
            <div className="px-4 sm:px-8">
                <div className="flex items-center">
                    <div className="w-[80px] h-[80px] border-2 border-black rounded-full flex items-center justify-end">
                        <Image
                            src={"/assets/images/icon.png"}
                            width={100}
                            height={100}
                            alt="icon"
                            className="rounded-full w-[80px] h-[80px] p-1"
                        />
                    </div>
                    <SocialNetworks />
                </div>

                <h1 className="mt-12 text-4xl sm:text-5xl font-black w-96 sm:w-[500px]">
                    Software developer and UI & UX designer
                </h1>

                <div className="mt-8 font-medium text-lg">
                    Hi, I&apos;m Tawanda M. Nyoni
                </div>
                <p className="mt-2 text-lg md:w-8/12">
                    I&apos;m a passionate software developer, willing to
                    give one hundred percent to any endeavor. <span className="hidden md:inline">
                        I&apos;m a passionate software developer, willing to
                        give one hundred percent to any endeavor.
                    </span>
                </p>

                <div className="mt-12">
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
    );
}
