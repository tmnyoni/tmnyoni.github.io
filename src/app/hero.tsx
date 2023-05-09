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
                    <div className="w-[80px] h-[80px] border border-black rounded-full flex items-center justify-end ring-2 ring-black/10">
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

                <h1 className="mt-12 text-4xl sm:text-5xl sm:leading-tight font-bold w-96 sm:w-[500px]">
                    Software developer and UI & UX designer
                </h1>

                <p className="mt-4 md:w-8/12">
                    Hi, I&apos;m Tawanda M. Nyoni, a passionate software developer, willing to
                    give one hundred percent to any endeavor.
                </p>

                <div className="mt-12">
                    <Link
                        href="#"
                        className="flex-inline bg-gray-900 text-gray-200 text-sm leading-6 font-medium py-2 px-6 rounded-lg"
                    >
                    <span> Contact me </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 hidden"
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
