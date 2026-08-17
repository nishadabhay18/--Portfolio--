import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import FadeIn from "../animations/FadeIn";
import scrollToSection from "../../utils/scrollToSection";

import {
    PERSONAL_INFO,
    SOCIAL_LINKS,
} from "../../utils/contants";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            {/* Background Glow */}
            <RadialGradientBackground
                size="800px"
                opacity={0.4}
                position="center"
            />

            {/* Additional Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
            </div>

            {/* Grid Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Hero Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="max-w-3xl">

                        {/* Small Heading */}
                        <FadeIn>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-primary" />

                                <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                                    Welcome to my portfolio
                                </span>
                            </div>
                        </FadeIn>

                        {/* Main Heading */}
                        <FadeIn delay={0.1}>
                            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                                Hi, I'm{" "}

                                <span className="text-primary">
                                    {PERSONAL_INFO.name.split(" ")[0]}
                                </span>

                                <br />

                                <span className="text-white">
                                    {PERSONAL_INFO.title.split("|")[0]}
                                </span>
                            </h1>
                        </FadeIn>

                        {/* Description */}
                        <FadeIn delay={0.2}>
                            <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                                {PERSONAL_INFO.tagline}
                            </p>
                        </FadeIn>

                        {/* Buttons */}
                        <FadeIn delay={0.3}>
                            <div className="mt-9 flex flex-wrap items-center gap-4">

                                {/* View Projects */}
                                <button
                                    onClick={() =>
                                        scrollToSection("projects")
                                    }
                                    className="group flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(141,255,105,0.25)]"
                                >
                                    View My Work

                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </button>

                                {/* Contact */}
                                <button
                                    onClick={() =>
                                        scrollToSection("contact")
                                    }
                                    className="rounded-full border border-white/15 px-7 py-3.5 font-medium text-white transition-all duration-300 hover:border-primary hover:text-primary"
                                >
                                    Let's Talk
                                </button>
                            </div>
                        </FadeIn>

                        {/* Social Links */}
                        <FadeIn delay={0.4}>
                            <div className="mt-10 flex items-center gap-4">

                                <span className="mr-2 text-sm text-white/30">
                                    Find me on
                                </span>

                                {/* GitHub */}
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/50 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                                    aria-label="GitHub"
                                >
                                    GH
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/50 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                                    aria-label="LinkedIn"
                                >
                                    in
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* ================= RIGHT VISUAL ================= */}
                    <FadeIn
                        direction="right"
                        delay={0.3}
                        className="hidden lg:block"
                    >
                        <div className="relative mx-auto h-[500px] w-full max-w-[500px]">

                            {/* Outer Circle */}
                            <div className="absolute inset-8 rounded-full border border-primary/10" />

                            {/* Middle Circle */}
                            <div className="absolute inset-20 rounded-full border border-primary/15" />

                            {/* Inner Glow */}
                            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

                            {/* Main Circle */}
                            <div className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-black/60 shadow-[0_0_80px_rgba(141,255,105,0.08)] backdrop-blur-xl">

                                <div className="text-center">

                                    <div className="text-6xl font-bold text-primary">
                                        &lt;/&gt;
                                    </div>

                                    <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/40">
                                        Developer
                                    </p>
                                </div>
                            </div>

                            {/* React */}
                            <div className="absolute left-0 top-1/4 rounded-full border border-white/10 bg-black/70 px-5 py-2.5 text-sm text-white/60 backdrop-blur-md">
                                MERN
                            </div>

                            {/* JavaScript */}
                            <div className="absolute right-0 top-1/3 rounded-full border border-white/10 bg-black/70 px-5 py-2.5 text-sm text-white/60 backdrop-blur-md">
                                DSA
                            </div>

                            {/* Express.js */}
                            <div className="absolute bottom-1/4 left-8 rounded-full border border-white/10 bg-black/70 px-5 py-2.5 text-sm text-white/60 backdrop-blur-md">
                                GEN AI
                            </div>

                            {/* B.tech */}
                            <div className="absolute bottom-16 right-4 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm text-primary backdrop-blur-md">
                                B.tech Student
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Scroll Indicator */}
                <button
                    onClick={() =>
                        scrollToSection("about")
                    }
                    className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/30 transition-colors hover:text-primary"
                    aria-label="Scroll to About"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em]">
                        Scroll
                    </span>

                    <ArrowDown
                        size={18}
                        className="animate-bounce"
                    />
                </button>
            </div>
        </section>
    );
};

export default Hero;