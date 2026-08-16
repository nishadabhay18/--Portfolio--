import React from "react";

const Card = ({
    children,
    className = "",
    hover = true,
    padding = true,
}) => {
    return (
        <div
            className={`
                relative overflow-hidden rounded-2xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                transition-all duration-500
                ${padding ? "p-6" : ""}
                ${
                    hover
                        ? "hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.05] hover:shadow-[0_10px_40px_rgba(141,255,105,0.06)]"
                        : ""
                }
                ${className}
            `}
        >
            {/* Green glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default Card;