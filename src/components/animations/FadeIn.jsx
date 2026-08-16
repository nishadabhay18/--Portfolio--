import React, { useEffect, useRef } from "react";

const FadeIn = ({
    children,
    direction = "up",
    delay = 0,
    duration = 0.8,
    distance = 40,
    className = "",
}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.style.opacity = "1";
                    element.style.transform = "translate(0, 0)";

                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    const getInitialTransform = () => {
        switch (direction) {
            case "up":
                return `translateY(${distance}px)`;

            case "down":
                return `translateY(-${distance}px)`;

            case "left":
                return `translateX(${distance}px)`;

            case "right":
                return `translateX(-${distance}px)`;

            case "none":
                return "translate(0, 0)";

            default:
                return `translateY(${distance}px)`;
        }
    };

    return (
        <div
            ref={elementRef}
            className={className}
            style={{
                opacity: 0,
                transform: getInitialTransform(),
                transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
                transitionDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
};

export default FadeIn;