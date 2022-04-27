import { useEffect, useRef, useState } from "react"

/**
 * This is an observer hook, that observes if the 
 * elements are intersecting with the viewer and 
 * do some animations.
 * 
 * @param {string} animation animation class to be toggled.
 * @returns reference to the element.
 */
export default function useIntersectionObserver(animation) {
    const elementRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    /**
     * Setting up the observer as the compoent is being 
     * initilised so that it observes as long the element
     * is not distroyed.
     */
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIsIntersecting(entry.isIntersecting)
        )

        observer.observe(elementRef.current);
        return () => observer.disconnect()
    }, [])

    /**
     * Every time the value of is intersecting is changed,
     * This part should run and see if the element is 
     * intersecting with the viewer and trigger animation.
     */
    useEffect(() => {
        if (isIntersecting) {
            const element = elementRef.current;
            element.classList.toggle(animation);
        }
    }, [isIntersecting]);

    // Returns the reference to the element.
    return elementRef;
}