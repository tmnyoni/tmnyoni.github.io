import { ReactElement } from "react";
import Image from "next/image";
import {
    GlobeAltIcon,
    BugAntIcon,
    ChatBubbleBottomCenterTextIcon,
    CursorArrowRaysIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <div>
            <div className="container mx-auto">
                <div className="mt-20 max-w-xl">
                    <h2 className="text-4xl font-bold text-slate-800">
                        You already know that I am a genius, but you want to get know
                        exactly what I am good, then well, let&apos;s find out
                    </h2>
                    <p className="mt-4">
                        A list of my soft skills and the technologies that I use to
                        transform the world through my designs and creativity.
                    </p>
                </div>
                <div className="mt-10 max-w-3xl">
                    <div className="mt-8 border-l">
                        <div className="grid md:grid-cols-3">
                            <div className="ml-8 md:mt-9">
                                <h6 className="text-sm text-gray-400"> Languages </h6>
                            </div>
                            <div className="col-span-2 rounded-xl px-4 py-7 text-gray-700">
                                <div>
                                    <h3 className="mt-2 text-sm font-semibold text-slate-800">
                                        C & C++ Language
                                    </h3>
                                    <p className="mt-3 text-sm">
                                        Are you a C++ developer? I am sure that you have been
                                        toiling trying to find UI libraries that you could Use to
                                        build your amazing apps but all efforts for none.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        Python
                                    </h3>
                                    <p className="mt-3 text-sm">
                                        Are you a C++ developer? I am sure that you have been
                                        toiling trying to find UI libraries that you could Use to
                                        build your amazing apps but all efforts for none.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 border-l">
                        <div className="grid md:grid-cols-3">
                            <div className="ml-8 md:mt-9">
                                <h6 className="text-sm text-gray-400"> Frameworks </h6>
                            </div>
                            <div className="col-span-2 rounded-xl px-4 py-7 text-gray-700">
                                <div className="mt-2">
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        ReactJS & Next.JS
                                    </h3>
                                    <p className="mt-3 text-sm">
                                        Are you a C++ developer? I am sure that you have been
                                        toiling trying to find UI libraries that you could Use to
                                        build your amazing apps but all efforts for none.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        Django
                                    </h3>
                                    <p className="mt-3 text-sm">
                                        Are you a C++ developer? I am sure that you have been
                                        toiling trying to find UI libraries that you could Use to
                                        build your amazing apps but all efforts for none.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        Lecui
                                    </h3>
                                    <p className="mt-3 text-sm">
                                        Are you a C++ developer? I am sure that you have been
                                        toiling trying to find UI libraries that you could Use to
                                        build your amazing apps but all efforts for none.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}