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
                    "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
