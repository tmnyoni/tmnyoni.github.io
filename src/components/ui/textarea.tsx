import * as React from "react"
import { AriaTextFieldProps } from "react-aria"

import { cn } from "@/lib/utils"

type TextareaProps = AriaTextFieldProps &
    React.InputHTMLAttributes<HTMLTextAreaElement> & { asChild?: boolean }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[80px] rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-gray-600 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)

Textarea.displayName = "Textarea"
export { Textarea }
