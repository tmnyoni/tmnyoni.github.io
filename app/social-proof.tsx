"use client"

import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";

export default function SocialProof() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? proofSlides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === proofSlides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const gotoSlideWithIndex = (index: number) => {
        setCurrentIndex(index);
    }

    const proofSlides = [
        {
            author: "Alec T. Musasa"
        },
        {
            author: "Another Guy"
        },
        {
            author: "Another Guy"
        }
    ]

    return (
        <div className="w-full flex flex-col items-center justify-center my-20 relative md:px-8 lg:w-9/12">
            <div className="rounded-md py-2 px-4 mt-6 md:w-[500px]">
                <div className="flex items-center my-6 space-x-2">
                    <div className="w-16 h-16 rounded-full border bg-gray-400">
                    </div>
                    <div className="ml-2">
                        <div className="text-md font-medium">Alec M. Musasa</div>
                        <div> Software Engineer </div>
                    </div>
                </div>
                <p className="">
                    Tawanda is a diligent, curious, talented and artistic creator that
                    learns technical concepts quickly. He is tech-savvy and proficient
                    in various programming languages and frameworks. He has a great
                    personality, responds well to constructive feedback, is relatable
                    and free-spirited ...which have all added to my enjoyment of working
                    with him.
                </p>
            </div>
            <div
                onClick={prevSlide}
                className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-black px-1 absolute top-1/2 -translate-x-0 -translate-y-1/2 left-0 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </div>

            <div
                onClick={nextSlide}
                className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-black px-1 absolute top-1/2 -translate-x-0 -translate-y-1/2 right-0 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </div>

            <div className="flex top-4 justify-center py-2 space-x-1 mt-10">
                {proofSlides.map((project, index) =>
                    <div
                        key={index}
                        className={clsx("h-4 rounded-full bg-black", index === currentIndex ? "w-8" : "w-4")}
                        onClick={() => gotoSlideWithIndex(index)}
                    >
                    </div>
                )}
            </div>
        </div>
    );
}
