import React, { ComponentProps } from "react"
import { motion, MotionProps } from "framer-motion"
import { AriaButtonProps } from "react-aria"

import { cn } from "@/lib/utils"

type ButtonProps = {
    asChild?: boolean
} & AriaButtonProps &
    ComponentProps<"button"> &
    MotionProps

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, asChild = false, children, ...props }, ref) => {
        return (
            <motion.button
                {...props}
                ref={ref}
                className={cn(
                    "inline-flex items-center space-x-2 rounded px-6 py-2 text-sm",
                    className
                )}
            >
                {children}
            </motion.button>
        )
    }
)
Button.displayName = "button"

export { Button }
