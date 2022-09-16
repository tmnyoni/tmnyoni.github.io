import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GlobeAltIcon,
  BugAntIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import Layout from "./components/layout";
import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="mx-10 grid gap-4 md:grid-cols-2">
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-slate-800">
              I am software Developer, engineer and ui & ux designer based in
              Zimbabwe
            </h2>
            <p className="mt-6 text-base text-slate-800">
              I am a highly motivated IT enthusiast prepared to offer everything
              I have to any venture. My main area of expertise is web
              development. But I&apos;m not only a web developer; occasion, I
              also make desktop and mobile applications. Creativity and
              innovation are important to me.
            </p>
            <p className="mt-6 text-base text-slate-800">
              My life goal is to use technology to improve the human society. So
              I spend the most of my time studying about new technology on the
              market and how they may benefit human civilization.
            </p>
            <p className="mt-6 text-base text-slate-800">
              In my leisure time, I enjoy learning new programming techniques as
              well as enjoying video games. Which is what I usually do when
              I&apos;m bored. I enjoy open-world computer games such as COD and
              others. COD is my favorite game.
            </p>
            <div className="mt-5 flex items-center text-slate-500">
              Find me on:
              <div className="inline-flex items-center">
                <Link href="https://github.com/tmnyoni">
                  <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                    <ChatBubbleBottomCenterTextIcon className="inline h-6 w-6" />
                  </a>
                </Link>
                <Link href="https://linkedin/in/tmnyoni">
                  <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                    <BugAntIcon className="inline h-6 w-6" />
                  </a>
                </Link>
                <Link href="https://tmnyoni.ml">
                  <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600">
                    <GlobeAltIcon className="inline h-6 w-6" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="py-1 px-2">
              <Image
                src="/assets/hero-image.jpg"
                width={400}
                height={400}
                alt="me-on-laptop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
