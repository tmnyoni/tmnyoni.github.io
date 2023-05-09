"use client"

import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";

const proofSlides = [
    {
        author: "Alec T. Musasa",
        title: "Software Engineer",
        comment: ` Tawanda is a diligent, curious, talented and artistic creator that
        learns technical concepts quickly. He is tech-savvy and proficient
        in various programming languages and frameworks. He has a great
        personality, responds well to constructive feedback, is relatable
        and free-spirited ...which have all added to my enjoyment of working
        with him.`
    },
    {
        author: "Cephas Fumhanda",
        title: "IT Manager at Mpilo Hospital",
        comment: ` Tawanda is a talented, hardworking and artistic creator that
        learns technical concepts quickly. He is tech-savvy and proficient
        in various programming languages and frameworks. He has a great
        personality, responds well to constructive feedback, is relatable
        and free-spirited ...which have all added to my enjoyment of working
        with him.`
    },
    {
        author: "Some sweet Lady",
        title: "CEO & Founder of OnionPeels",
        comment: ` I know I am sweet but this young man is beyond. He is
        very capable and determined in any of his endevour. He works intelligently
        and I never regretted working with him. He has a great
        personality, responds well to constructive feedback, is relatable
        and free-spirited ...which have all added to my enjoyment of working
        with him.`
    }
]

export default function SocialProof() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const previousSlide = () => {
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

    return (
        <div className="w-full flex flex-col items-center justify-center my-8 relative md:px-8 lg:w-9/12 group">
            <div className="rounded-md py-2 px-4 mt-4 md:w-[500px]">
                <div className="flex items-center my-6 space-x-2">
                    <div className="w-16 h-16 rounded-full border bg-gray-400">
                    </div>
                    <div className="ml-2">
                        <div className="text-md font-medium">
                            {proofSlides[currentIndex].author}
                        </div>
                        <div>
                            {proofSlides[currentIndex].title}
                        </div>
                    </div>
                </div>
                <p>
                    {proofSlides[currentIndex].comment}
                </p>
            </div>

            <button
                onClick={previousSlide}
                className={`w-8 h-8 md:w-12 md:h-12 hidden group-hover:flex md:flex items-center justify-center rounded-full border-2
                border-black bg-black text-white hover:text-gray-200 hover:bg-gray-900 hover:border-gray-900 
                focus:ring-2 focus:ring-black focus:ring-offset-1  px-1 absolute top-1/2 -translate-x-0 -translate-y-1/2 left-0 
                 cursor-pointer focus:bg-black focus:text-white`}
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
            </button>


            <button
                onClick={nextSlide}
                className={`hidden md:flex w-8 h-8 md:w-12 md:h-12 items-center justify-center rounded-full border-2
                border-black bg-black text-white hover:text-gray-200 hover:bg-gray-900 hover:border-gray-900
                focus:ring-2 focus:ring-black focus:ring-offset-1 px-1 absolute top-1/2 -translate-x-0 -translate-y-1/2
                right-0 cursor-pointer focus:bg-black focus:text-white group-hover:flex`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>

            <div className="flex top-4 justify-center py-2 space-x-1 mt-12">
                {proofSlides.map((project, index) =>
                    <button
                        key={index}
                        className={clsx(
                            `h-4 rounded-full transform transition-trasform duration-700 bg-black`,
                            index === currentIndex ? "w-8" : "w-4"
                        )}
                        onClick={() => gotoSlideWithIndex(index)}
                    >
                    </button>
                )}
            </div>
        </div>
    );
}
