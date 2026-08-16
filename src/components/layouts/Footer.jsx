import React from "react";
import { ArrowUp, Code, Mail } from "lucide-react";

import {
    NAV_LINKS,
    PERSONAL_INFO,
    SOCIAL_LINKS,
} from "../../utils/contants";

import scrollToSection from "../../utils/scrollToSection";

const Footer = () => {
    const handleNavClick = (e, href) => {
        e.preventDefault();

        const sectionId = href.replace("#", "");
        scrollToSection(sectionId);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="border-t border-white/10 bg-black">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

                {/* Top Section */}
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

                    {/* Brand */}
                    <div className="max-w-sm">
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2"
                        >
                            <Code
                                size={28}
                                className="text-primary transition-transform duration-300 group-hover:rotate-12"
                            />

                            <span className="text-2xl font-semibold text-primary">
                                {PERSONAL_INFO.name}
                            </span>
                        </button>

                        <p className="mt-5 text-sm leading-7 text-white/50">
                            {PERSONAL_INFO.tagline}
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex items-center gap-3">

                            {/* GitHub */}
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/60 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                            >
                                GH
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/60 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                            >
                                in
                            </a>

                            {/* Email */}
                            <a
                                href={`mailto:${PERSONAL_INFO.email}`}
                                aria-label="Email"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                            >
                                <Mail size={18} />
                            </a>

                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Navigation
                        </h3>

                        <nav className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavClick(
                                            e,
                                            link.href
                                        )
                                    }
                                    className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Get In Touch
                        </h3>

                        <a
                            href={`mailto:${PERSONAL_INFO.email}`}
                            className="text-sm text-white/50 transition-colors duration-300 hover:text-primary"
                        >
                            {PERSONAL_INFO.email}
                        </a>

                        <p className="mt-3 text-sm text-white/50">
                            {PERSONAL_INFO.location}
                        </p>
                    </div>

                    {/* Back To Top */}
                    <button
                        onClick={scrollToTop}
                        className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                        aria-label="Back to top"
                    >
                        <ArrowUp
                            size={20}
                            className="transition-transform duration-300 group-hover:-translate-y-1"
                        />
                    </button>
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm md:flex-row md:items-center md:justify-between">
                    <p className="text-white/40">
                        © {new Date().getFullYear()}{" "}
                        {PERSONAL_INFO.name}. All rights reserved.
                    </p>

                    <p className="text-white/30">
                        Built with React, Tailwind CSS & GSAP
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;