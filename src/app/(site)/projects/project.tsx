import { ComponentProps } from "react"
import { Anton } from "next/font/google"
import Link from "next/link"
import { Link2 } from "lucide-react"

import { cn } from "@/lib/utils"

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
})

type ProjectProps = {
    number: number
    title: string
    description: string
    href: string
    status?: string
} & ComponentProps<"div">

export function Project({
    number,
    title,
    description,
    href,
    status,
}: Readonly<ProjectProps>) {
    return (
        <div>
            <div
                className={cn(
                    "flex items-center gap-x-1 font-medium text-slate-700",
                    anton.className
                )}
            >
                <div className="flex aspect-square h-5 items-center justify-center rounded bg-blue-400 pb-0.5 text-sm font-semibold text-white">
                    {number}
                </div>
                <div className="text-md">{title}</div>
            </div>
            <p className="max-w-[60ch]text-slate-500">{description}</p>
            {status && (
                <div className="flex items-center gap-2 text-red-500">
                    <div className="flex h-5 w-8 items-center justify-end rounded-full bg-red-300 px-0.5">
                        <div className="h-4 w-4 rounded-full bg-red-900"></div>
                    </div>
                    <div>{status}</div>
                </div>
            )}
            <Link
                href={href}
                target="_blank"
                className="mt-2 flex items-center text-sm text-slate-600"
            >
                <Link2 className="mr-2" /> <span>Go there</span>
            </Link>
        </div>
    )
}
