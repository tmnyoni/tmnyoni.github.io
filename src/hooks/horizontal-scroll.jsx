import { useRef, useEffect } from "react";

export default function useHorizontalScroll() {
    const elementRef = useRef();

    useEffect(() => {
        const element = elementRef.current;

        if (element) {
            const onWheel = (event) => {
                if (event.deltaY === 0) return

                if (!(element.scrollLeft === 0 && event.deltaY < 0) &&
                    !(element.scrollWidth - element.clientWidth - Math.round(element.scrollLeft) === 0 &&
                        event.deltaY > 0)
                ) {
                    event.preventDefault();
                }
                element.scrollTo({
                    left: element.scrollLeft + event.deltaY,
                    behavior: 'smooth'
                });
            }

            element.addEventListener('wheel', onWheel);
            return () => element.removeEventListener('wheel', onWheel);
        }

    }, [])

    return elementRef;
}