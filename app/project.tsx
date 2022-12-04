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
        <section className="bg-gray-50 rounded-md relative cursor-pointer">
            <Image
                src={imageUrl}
                alt="project"
                width={500}
                height={100}
                className="w-full object-top object-cover rounded-md relative"
                loading="lazy"
            />

            <div className="px-8 mb-4 absolute inset-0 z-10 w-full h-full bg-gray-400 hidden group-hover:flex flex-col justify-center rounded-md">
                <h4 className="mt-6 inline-block text-lg font-bold text-gray-700">
                    {title}
                </h4>
                <p className="mt-3 mb-6 text-sm text-gray-800">
                    {description}
                </p>
                <Link href={sourceUrl} className="text-sm font-semibold  text-gray-500">
                    <LinkIcon className="w-4 h-4 inline mr-2" />
                    check it out on github.com
                </Link>
            </div>
        </section>
    )
}