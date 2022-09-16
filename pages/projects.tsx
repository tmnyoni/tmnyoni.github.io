import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { GlobeAltIcon, BugAntIcon, ChatBubbleBottomCenterTextIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import Layout from "./components/layout";
import type {NextPageWithLayout} from "./_app";

const Projects: NextPageWithLayout = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="mt-20 mx-10 max-w-xl">
                    <h2 className="text-4xl text-slate-800 font-bold">
                        I am software Developer, engineer and ui & ux designer based in Zimbabwe
                    </h2>
                    <p className="mt-4">
                        I have created number of projects, some are open source and some are not,
                        so I have listed some of those here.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
                    <div className="mt-8">
                        <div className="px-4 py-7 rounded-xl hover:bg-slate-50">
                            <CursorArrowRaysIcon className="w-10 h-10 p-2 border rounded-full shadow"/>
                            <h3 className="text-sm font-semibold text-slate-800 mt-2">
                                Lecui Contributor
                            </h3>
                            <p className="text-sm mt-3">
                                Lecui is a rapid UI development library created by 
                                <a className="text-blue-900" href="https:github.com/alecmus"> Alec T. Musasa </a> using
                                modern c++, and the Direct 2D library.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="px-4 py-7 rounded-xl hover:bg-slate-50">
                            <CursorArrowRaysIcon className="w-10 h-10 p-2 border rounded-full shadow"/>
                            <h3 className="text-sm font-semibold text-slate-800 mt-2">
                                Lecui Contributor
                            </h3>
                            <p className="text-sm mt-3">
                                Lecui is a rapid UI development library created by 
                                <a href="https:github.com/alecmus"> Alec T. Musasa </a> using
                                modern c++, and the Direct 2D library.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="px-4 py-7 rounded-xl hover:bg-slate-50">
                            <CursorArrowRaysIcon className="w-10 h-10 p-2 border rounded-full shadow"/>
                            <h3 className="text-sm font-semibold text-slate-800 mt-2">
                                Lecui Contributor
                            </h3>
                            <p className="text-sm mt-3">
                                Lecui is a rapid UI development library created by 
                                <a href="https:github.com/alecmus"> Alec T. Musasa </a> using
                                modern c++, and the Direct 2D library.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="px-4 py-7 rounded-xl hover:bg-slate-50">
                            <CursorArrowRaysIcon className="w-10 h-10 p-2 border rounded-full shadow"/>
                            <h3 className="text-sm font-semibold text-slate-800 mt-2">
                                Lecui Contributor
                            </h3>
                            <p className="text-sm mt-3">
                                Lecui is a rapid UI development library created by 
                                <a href="https:github.com/alecmus"> Alec T. Musasa </a> using
                                modern c++, and the Direct 2D library.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="px-4 py-7 rounded-xl hover:bg-slate-50">
                            <CursorArrowRaysIcon className="w-10 h-10 p-2 border rounded-full shadow"/>
                            <h3 className="text-sm font-semibold text-slate-800 mt-2">
                                Lecui Contributor
                            </h3>
                            <p className="text-sm mt-3">
                                Lecui is a rapid UI development library created by 
                                <a href="https:github.com/alecmus"> Alec T. Musasa </a> using
                                modern c++, and the Direct 2D library.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="px-4 py-7 rounded-xl hover:bg-slate-50">
                            <CursorArrowRaysIcon className="w-10 h-10 p-2 border rounded-full shadow"/>
                            <h3 className="text-sm font-semibold text-slate-800 mt-2">
                                Lecui Contributor
                            </h3>
                            <p className="text-sm mt-3">
                                Lecui is a rapid UI development library created by 
                                <a href="https:github.com/alecmus"> Alec T. Musasa </a> using
                                modern c++, and the Direct 2D library.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Projects.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Projects;