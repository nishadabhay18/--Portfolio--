import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = (options = {}) => {
    const elementRef = useRef(null);

    const {
        y = 50,
        x = 0,
        duration = 0.8,
        delay = 0,
        opacity = 0,
        start = "top 85%",
        ease = "power3.out",
        once = true,
    } = options;

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                element,
                {
                    opacity,
                    x,
                    y,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration,
                    delay,
                    ease,
                    scrollTrigger: {
                        trigger: element,
                        start,
                        toggleActions: once
                            ? "play none none none"
                            : "play reverse play reverse",
                    },
                }
            );
        }, element);

        return () => {
            ctx.revert();
        };
    }, [
        y,
        x,
        duration,
        delay,
        opacity,
        start,
        ease,
        once,
    ]);

    return elementRef;
};

export default useScrollReveal;