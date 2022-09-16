import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GlobeAltIcon,
  BugAntIcon,
  ChatBubbleBottomCenterTextIcon,
  CursorArrowRaysIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Layout from "./components/layout";
import type { NextPageWithLayout } from "./_app";

const Articles: NextPageWithLayout = () => {
  return (
    <div>
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

        <div className="mt-7 grid gap-4 md:grid-cols-6">
          <div className="col-span-4 mt-8 border-l">
            <div className="grid md:grid-cols-3">
              <div className="ml-8 md:mt-9">
                <h6 className="text-sm text-gray-400"> 12 Sept, 2022 </h6>
              </div>
              <div className="col-span-2 rounded-xl px-4 py-7 text-gray-700 hover:bg-slate-50">
                <h3 className="mt-2 text-sm font-semibold text-slate-800">
                  Building amazings UI using C++ made easy
                </h3>
                <p className="mt-3 text-sm">
                  Are you a C++ developer? I am sure that you have been toiling
                  trying to find UI libraries that you could Use to build your
                  amazing apps but all efforts for none.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 ">
              <div className="ml-8 md:mt-9">
                <h6 className="text-sm text-gray-400"> 12 Sept, 2022 </h6>
              </div>
              <div className="col-span-2 rounded-xl px-4 py-7 text-gray-700 hover:bg-slate-50">
                <h3 className="mt-2 text-sm font-semibold text-slate-800">
                  Building amazings UI using C++ made easy
                </h3>
                <p className="mt-3 text-sm">
                  Are you a C++ developer? I am sure that you have been toiling
                  trying to find UI libraries that you could Use to build your
                  amazing apps but all efforts for none.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3">
              <div className="ml-8 md:mt-9">
                <h6 className="text-sm text-gray-400"> 12 Sept, 2022 </h6>
              </div>
              <div className="col-span-2 rounded-xl px-4 py-7 text-gray-700 hover:bg-slate-50">
                <h3 className="mt-2 text-sm font-semibold text-slate-800">
                  Building amazings UI using C++ made easy
                </h3>
                <p className="mt-3 text-sm">
                  Are you a C++ developer? I am sure that you have been toiling
                  trying to find UI libraries that you could Use to build your
                  amazing apps but all efforts for none.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mt-16 rounded-xl border px-6 py-8">
              <EnvelopeIcon className="inline h-6 w-6 text-slate-600" />
              <p className="ml-3 inline text-xs font-semibold text-slate-600">
                Stay up to date
              </p>
              <p className="mt-4 text-xs text-slate-700">
                Get notified when I publish something new, and unsubscribe at
                any time
              </p>
              <div className="mt-4">
                <form action="" method="post">
                  <input
                    type="email"
                    name="email"
                    id=""
                    className="inline rounded-md border py-2 px-3 text-sm shadow"
                    placeholder="Email address"
                  />
                  <button
                    type="submit"
                    className="line ml-2 rounded-md border px-4 py-2 text-sm text-slate-700"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Articles.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Articles;
