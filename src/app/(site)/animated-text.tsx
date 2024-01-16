"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const defaultVariants = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
        },
    },
}

type AnimatedTextProps = {
    text: string
    el?: keyof JSX.IntrinsicElements
    className?: string
    animateOnce?: boolean
}

export function AnimatedText({
    text,
    el: Wrapper = "p",
    className,
    animateOnce,
}: Readonly<AnimatedTextProps>) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5, once: animateOnce })

    return (
        <Wrapper className={className}>
            <span className="sr-only">{text}</span>
            <motion.span
                ref={ref}
                aria-hidden="true"
                initial={isInView ? "visible" : "hidden"}
                animate="visible"
                transition={{ staggerChildren: 0.1 }}
            >
                {text.split(" ").map((word, index) => (
                    <span key={`${index}.word`} className="inline-block">
                        {word.split("").map((letter, index) => (
                            <motion.span
                                variants={defaultVariants}
                                key={`char-${index}`}
                                className="inline-block"
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    )
}
