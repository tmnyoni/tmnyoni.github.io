import Image from "next/image";
import Link from "next/link";

import {
    LinkIcon,
} from "@heroicons/react/24/outline";


interface IProjectProps {
    title: string;
    imageUrl: string;
    description: string;
    sourceUrl: string;
}

export default function Project(props: IProjectProps) {
    const { title, imageUrl, description, sourceUrl } = props;

    return (
        <section className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <Image
                src={imageUrl}
                alt="project"
                width={500}
                height={100}
                className="w-full object-center object-cover rounded-md relative"
                loading="lazy"
            />
            <div className="absolute inset-0 text-white bg-black/20 group-hover:bg-black/60 rounded-md"></div>

            <div className="absolute inset-0 flex flex-col items-center rounded-md justify-center bg-black/40 px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h4 className="mt-6 mb-10 inline-block text-2xl tracking-normal font-black text-gray-100 group-hover:text-gray-100">
                    {title}
                </h4>
                <p className="mt-3 mb-6 text-sm text-gray-100">
                    {description}
                </p>
                <Link href={sourceUrl} className="text-sm font-medium bg-black/70 rounded-2xl px-4 py-1 text-gray-100">
                    <LinkIcon className="w-4 h-4 inline mr-2" />
                    check it out on github.com
                </Link>
            </div>
        </section>
    )
}