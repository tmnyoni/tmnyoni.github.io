"use client"

import React, { useRef } from "react"
import { AriaButtonProps, useButton } from "react-aria"

import { cn } from "@/lib/utils"

type ButtonProps = AriaButtonProps & React.HTMLAttributes<HTMLButtonElement>
export function Button(props: ButtonProps) {
    let ref = useRef(null)
    let { buttonProps } = useButton(props, ref)
    let { children, className } = props

    return (
        <button
            {...buttonProps}
            ref={ref}
            className={cn(
                "inline-flex items-center space-x-2 rounded px-6 py-2 text-sm",
                className
            )}
        >
            {children}
        </button>
    )
}
