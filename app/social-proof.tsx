import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function SocialProof() {
    return (
        <section className="container mx-auto pt-10">
            <div className="text-center flex flex-col items-center">
                <h1 className="max-w-xl text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                    Testimonals
                </h1>
                <p className="w-96 text-center text-sm text-gray-400 mt-3">
                    This is what my work colleagues and clients have to say about me.
                </p>
            </div>

            <div className="flex flex-col items-center">
                <div className="w-[500px] py-8 px-12 my-20 border border-zinc-100 bg-zinc-100 rounded-md">
                    <div className="w-16 h-16 my-6 rounded-full border bg-gray-400"></div>
                    <p className="text-sm leading-6">
                        Tawanda is a diligent, curious, talented and artistic creator that learns
                        technical concepts quickly. He is tech-savvy and proficient in various
                        programming languages and frameworks. He has a great personality, responds well to
                        constructive feedback, is relatable and free-spirited ...which have all added
                        to my enjoyment of working with him.
                    </p>

                    <div className="flex items-center mt-6 space-x-4">
                        <div className="text-md font-medium">
                            Alec M. Musasa
                        </div>
                        <Link
                            href="https://www.linkedin.com/in/tmnyoni/details/recommendations/"
                            target="_blank"
                            className="text-xs text-gray-900/60 flex items-center space-x-1"
                        >
                            <LinkIcon className="inline h-3 w-3" />
                            <span> LinkedIn </span>
                        </Link>
                    </div>
                </div>
                <div></div>
            </div>
        </section >
    )
}