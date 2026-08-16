import { useEffect, useRef } from "react";

const useScrollReveal = (options = {}) => {
    const elementRef = useRef(null);

    const {
        threshold = 0.15,
        rootMargin = "0px 0px -50px 0px",
        once = true,
    } = options;

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("is-visible");

                    if (once) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    element.classList.remove("is-visible");
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, once]);

    return elementRef;
};

export default useScrollReveal;