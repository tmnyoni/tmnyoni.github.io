import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GlobeAltIcon,
  BugAntIcon,
  ChatBubbleBottomCenterTextIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
// import { motion } from "framer-motion";

export default function Page() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-slate-800">
              I am software Developer, engineer and ui & ux designer based in
              Zimbabwe
            </h2>
            <p className="mt-6 text-base text-slate-800">
              I am an enthusiastic software developer willing to contribute
              everything I have to any venture. Web development is my primary
              area of expertise. But I&apos;m not just a web developer; I also
              create desktop applications on occasion. I value both creativity
              and innovation.
            </p>
            <p className="mt-6 text-base text-slate-800">
              When I was in O level, I was introduced to programming through
              Visual Basic 6. I developed an interest in building amazing things
              and embraced it, learning to create cool apps but failing due to a
              lack of resources and knowledge until I reached A level.
            </p>
            <p className="mt-6 text-base text-slate-800">
              Since then, Ive dedicated my life to learning how to write better
              code and using my coding abilities to create amazing things that
              will change the world. I&apos;ve been doing research and
              practicing to get ready for my purpose. I&apos;ve done my
              homework.
            </p>
            <div className="mt-5 flex items-center text-slate-500">
              Find me on:
              <div className="inline-flex items-center">
                <Link
                  href="https://github.com/tmnyoni"
                  className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600"
                >
                  <ChatBubbleBottomCenterTextIcon className="inline h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin/in/tmnyoni"
                  className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600"
                >
                  <BugAntIcon className="inline h-6 w-6" />
                </Link>
                <Link
                  href="https://tmnyoni.ml"
                  className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-slate-600"
                >
                  <GlobeAltIcon className="inline h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="py-1 px-2">
              <Image
                src="/assets/images/hero-image.png"
                width={350}
                height={400}
                alt="me-on-laptop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
