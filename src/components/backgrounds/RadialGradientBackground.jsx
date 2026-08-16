import React from "react";

const RadialGradientBackground = ({
    className = "",
    opacity = 0.35,
    size = "600px",
    position = "center",
}) => {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        >
            <div
                className="absolute rounded-full blur-3xl"
                style={{
                    width: size,
                    height: size,
                    opacity,
                    background:
                        "radial-gradient(circle, rgba(141, 255, 105, 0.35) 0%, rgba(141, 255, 105, 0.12) 35%, transparent 70%)",
                    left:
                        position === "left"
                            ? "-10%"
                            : position === "right"
                              ? "70%"
                              : "50%",
                    top: "10%",
                    transform: "translateX(-50%)",
                }}
            />
        </div>
    );
};

export default RadialGradientBackground;