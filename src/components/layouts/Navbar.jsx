import React, { useEffect, useState } from "react";
import { Code, Menu, X } from "lucide-react";
import {
    NAV_LINKS,
    PERSONAL_INFO,
    SOCIAL_LINKS,
} from "../../utils/contants";
import useScrollSpy from "../../hooks/useScrollSpy";
import scrollToSection from "../../utils/scrollToSection";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = NAV_LINKS.map((link) =>
                link.href.replace("#", "")
            );

            let currentSection = "home";

            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);

                if (section) {
                    const sectionTop = section.offsetTop - 150;

                    if (window.scrollY >= sectionTop) {
                        currentSection = sectionId;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Smooth scroll
    const handleNavClick = (e, href) => {
        e.preventDefault();

        const sectionId = href.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
                isScrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "#home")}
                    className="group flex items-center gap-2"
                >
                    <Code
                        size={28}
                        strokeWidth={2.5}
                        className="text-primary transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="text-2xl font-semibold text-primary">
                        {PERSONAL_INFO.name}
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-9 md:flex">
                    {NAV_LINKS.map((link) => {
                        const sectionId = link.href.replace("#", "");
                        const isActive = activeSection === sectionId;

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) =>
                                    handleNavClick(e, link.href)
                                }
                                className={`relative py-2 text-sm transition-colors duration-300 ${
                                    isActive
                                        ? "text-white"
                                        : "text-white/60 hover:text-white"
                                }`}
                            >
                                {link.name}

                                {/* Active underline */}
                                <span
                                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                                        isActive
                                            ? "w-full"
                                            : "w-0"
                                    }`}
                                />
                            </a>
                        );
                    })}
                </nav>

                {/* Hire Me Button */}
                <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="hidden rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-primary md:block"
                >
                    Hire Me
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-lg border border-white/10 p-2 text-white md:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
                    isMenuOpen
                        ? "max-h-[400px] opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <nav className="flex flex-col px-6 py-5">
                    {NAV_LINKS.map((link) => {
                        const sectionId = link.href.replace("#", "");
                        const isActive =
                            activeSection === sectionId;

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) =>
                                    handleNavClick(e, link.href)
                                }
                                className={`border-b border-white/10 py-4 text-sm transition-colors ${
                                    isActive
                                        ? "text-primary"
                                        : "text-white/70 hover:text-white"
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}

                    <a
                        href="#contact"
                        onClick={(e) =>
                            handleNavClick(e, "#contact")
                        }
                        className="mt-5 rounded-full bg-white py-3 text-center text-sm font-medium text-black transition-all hover:bg-primary"
                    >
                        Hire Me
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;