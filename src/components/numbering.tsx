import { ComponentProps } from "react"

type NumberingProps = {
    number: number
} & ComponentProps<"div">

export function Numbering({ number, ...props }: NumberingProps) {
    return (
        <div
            className="flex aspect-square h-5 items-center justify-center rounded bg-blue-400 text-sm font-semibold text-white"
            {...props}
        >
            {number}
        </div>
    )
}
