import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { GlobeAltIcon, BugAntIcon, ChatBubbleBottomCenterTextIcon, CursorArrowRaysIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Layout from "./components/layout";
import type { NextPageWithLayout } from "./_app";

const Skills: NextPageWithLayout = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="mt-20 mx-10 max-w-xl">
                    <h2 className="text-4xl text-slate-800 font-bold">
                        You already know that I am a genius, but you want to get know
                        exactly what I am good, then well, let&apos;s find out
                    </h2>
                    <p className="mt-4">
                        A list of my soft skills and the technologies that I use to transform
                        the world through my designs and creativity.
                    </p>
                </div>
                <div className="max-w-3xl mx-10 mt-10">
                    <div className="mt-8 border-l">
                        <div className="grid md:grid-cols-3">
                            <div className="md:mt-9 ml-8">
                                <h6 className="text-sm text-gray-400"> Languages </h6>
                            </div>
                            <div className="col-span-2 px-4 py-7 rounded-xl text-gray-700">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-800 mt-2">
                                        C & C++ Language
                                    </h3>
                                    <p className="text-sm mt-3">
                                        Are you a C++ developer? I am sure that you have been
                                        toiling trying to find UI libraries that you could Use
                                        to build your amazing apps but all efforts for none.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        Python
                                    </h3>
                                    <p className="text-sm mt-3">
                                        Are you a C++ developer? I am sure that you have been
                                        toiling trying to find UI libraries that you could Use
                                        to build your amazing apps but all efforts for none.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 border-l">
                        <div className="grid md:grid-cols-3">
                            <div className="md:mt-9 ml-8">
                                <h6 className="text-sm text-gray-400"> Frameworks </h6>
                            </div>
                            <div className="col-span-2 px-4 py-7 rounded-xl text-gray-700">
                                <div className="mt-2">
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        ReactJS & Next.JS
                                    </h3>
                                    <p className="text-sm mt-3">
                                        Are you a C++ developer? I am sure that you have been
                                        toiling trying to find UI libraries that you could Use
                                        to build your amazing apps but all efforts for none.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        Django
                                    </h3>
                                    <p className="text-sm mt-3">
                                        Are you a C++ developer? I am sure that you have been
                                        toiling trying to find UI libraries that you could Use
                                        to build your amazing apps but all efforts for none.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        Lecui
                                    </h3>
                                    <p className="text-sm mt-3">
                                        Are you a C++ developer? I am sure that you have been
                                        toiling trying to find UI libraries that you could Use
                                        to build your amazing apps but all efforts for none.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

Skills.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Skills;