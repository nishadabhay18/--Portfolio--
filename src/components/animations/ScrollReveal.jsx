import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const ScrollReveal = ({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    distance = 40,
    direction = "up",
}) => {
    const revealRef = useScrollReveal({
        threshold: 0.15,
        once: true,
    });

    const getTransform = () => {
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
            ref={revealRef}
            className={`scroll-reveal ${className}`}
            style={{
                "--reveal-delay": `${delay}s`,
                "--reveal-duration": `${duration}s`,
                "--reveal-transform": getTransform(),
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;