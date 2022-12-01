import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    GlobeAltIcon,
    BugAntIcon,
    ChatBubbleBottomCenterTextIcon,
    CursorArrowRaysIcon,
    LinkIcon,
} from "@heroicons/react/24/outline";
import Layout from "./components/layout";
import type { NextPageWithLayout } from "./_app";

const Projects: NextPageWithLayout = () => {
    return (
        <div >
            <div className="container mx-auto">
                <div className="mt-20 max-w-xl">
                    <h2 className="text-4xl font-bold text-slate-800">
                        I am software Developer, engineer and ui & ux designer based in
                        Zimbabwe
                    </h2>
                    <p className="mt-4">
                        I have created number of projects, some are open source and some are
                        not, so I have listed some of those here.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="mt-2">
                        <div className="rounded-xl px-4 py-7 hover:bg-slate-50">
                            <CursorArrowRaysIcon className="h-10 w-10 rounded-full border p-2 shadow" />
                            <h3 className="mt-2 text-sm font-semibold text-slate-800">
                                Lecui Library
                            </h3>
                            <p className="mt-3 text-sm">
                                I am a contributor to the Lecui library which is a rapid UI development library created by
                                <Link href="https:github.com/alecmus" className="text-blue-900">
                                        Alec T. Musasa
                                </Link>{" "}
                                using modern c++, and the Direct 2D library.
                            </p>
                            <div className="text-sm font-semibold mt-3 text-slate-600">
                                <Link href="https:github.com/alecmus/lecui">
                                        <LinkIcon className="w-4 h-4 inline mr-2" />
                                        github.com
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="rounded-xl px-4 py-7 hover:bg-slate-50">
                            <CursorArrowRaysIcon className="h-10 w-10 rounded-full border p-2 shadow" />
                            <h3 className="mt-2 text-sm font-semibold text-slate-800">
                                Lecui Contributor
                            </h3>
                            <p className="mt-3 text-sm">
                                Lecui is a rapid UI development library created by
                                <a href="https:github.com/alecmus"> Alec T. Musasa </a> using
                                modern c++, and the Direct 2D library.
                            </p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="rounded-xl px-4 py-7 hover:bg-slate-50">
                            <CursorArrowRaysIcon className="h-10 w-10 rounded-full border p-2 shadow" />
                            <h3 className="mt-2 text-sm font-semibold text-slate-800">
                                Lecui Contributor
                            </h3>
                            <p className="mt-3 text-sm">
                                Lecui is a rapid UI development library created by
                                <a href="https:github.com/alecmus"> Alec T. Musasa </a> using
                                modern c++, and the Direct 2D library.
                            </p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="rounded-xl px-4 py-7 hover:bg-slate-50">
                            <CursorArrowRaysIcon className="h-10 w-10 rounded-full border p-2 shadow" />
                            <h3 className="mt-2 text-sm font-semibold text-slate-800">
                                Lecui Contributor
                            </h3>
                            <p className="mt-3 text-sm">
                                Lecui is a rapid UI development library created by
                                <a href="https:github.com/alecmus"> Alec T. Musasa </a> using
                                modern c++, and the Direct 2D library.
                            </p>

                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="rounded-xl px-4 py-7 hover:bg-slate-50">
                            <CursorArrowRaysIcon className="h-10 w-10 rounded-full border p-2 shadow" />
                            <h3 className="mt-2 text-sm font-semibold text-slate-800">
                                Lecui Contributor
                            </h3>
                            <p className="mt-3 text-sm">
                                Lecui is a rapid UI development library created by
                                <a href="https:github.com/alecmus"> Alec T. Musasa </a> using
                                modern c++, and the Direct 2D library.
                            </p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="rounded-xl px-4 py-7 hover:bg-slate-50">
                            <CursorArrowRaysIcon className="h-10 w-10 rounded-full border p-2 shadow" />
                            <h3 className="mt-2 text-sm font-semibold text-slate-800">
                                Lecui Contributor
                            </h3>
                            <p className="mt-3 text-sm">
                                Lecui is a rapid UI development library created by
                                <a href="https:github.com/alecmus"> Alec T. Musasa </a> using
                                modern c++, and the Direct 2D library.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Projects.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Projects;
