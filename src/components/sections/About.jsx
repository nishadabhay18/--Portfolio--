import React from "react";
import {
    ArrowUpRight,
    Code2,
    GraduationCap,
    Lightbulb,
    UserRound,
} from "lucide-react";

import ScrollReveal from "../animations/ScrollReveal";
import Card from "../ui/Card";

import {
    PERSONAL_INFO,
    ABOUT_STATS,
} from "../../utils/contants";

import scrollToSection from "../../utils/scrollToSection";

const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-black py-24 sm:py-32"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

                {/* ================= HEADER ================= */}
                <ScrollReveal>
                    <div className="mb-16">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-primary" />

                            <span className="text-sm uppercase tracking-[0.25em] text-primary">
                                About Me
                            </span>
                        </div>

                        <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Passionate about{" "}
                            <span className="text-primary">
                                technology
                            </span>
                            <br />
                            and creating meaningful experiences.
                        </h2>
                    </div>
                </ScrollReveal>

                {/* ================= MAIN GRID ================= */}
                <div className="grid gap-8 lg:grid-cols-5">

                    {/* ================= LEFT ================= */}
                    <ScrollReveal
                        direction="left"
                        className="lg:col-span-3"
                    >
                        <Card className="h-full p-8 sm:p-10">

                            {/* Icon */}
                            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary">
                                <UserRound size={26} />
                            </div>

                            <h3 className="text-2xl font-semibold text-white">
                                Who I Am
                            </h3>

                            <div className="mt-6 space-y-5">
                                {PERSONAL_INFO.bio?.map(
                                    (paragraph, index) => (
                                        <p
                                            key={index}
                                            className="text-sm leading-7 text-white/50 sm:text-base"
                                        >
                                            {paragraph}
                                        </p>
                                    )
                                )}
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() =>
                                    scrollToSection("contact")
                                }
                                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-black"
                            >
                                Let's Connect

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </button>
                        </Card>
                    </ScrollReveal>

                    {/* ================= RIGHT ================= */}
                    <ScrollReveal
                        direction="right"
                        delay={0.1}
                        className="lg:col-span-2"
                    >
                        <div className="grid h-full gap-6">

                            {/* Education Card */}
                            <Card className="p-7">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
                                        <GraduationCap size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-white/30">
                                            Education
                                        </p>

                                        <h3 className="mt-2 text-lg font-semibold text-white">
                                            Bachelor Of Engineering & Technology
                                        </h3>

                                        <p className="mt-1 text-sm text-white/40">
                                            B.tech Student
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            {/* Development Card */}
                            <Card className="p-7">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
                                        <Code2 size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-white/30">
                                            Development
                                        </p>

                                        <h3 className="mt-2 text-lg font-semibold text-white">
                                            Frontend Developer
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-white/40">
                                            React · JavaScript · Tailwind CSS
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            {/* Learning Card */}
                            <Card className="p-7">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
                                        <Lightbulb size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-white/30">
                                            Currently
                                        </p>

                                        <h3 className="mt-2 text-lg font-semibold text-white">
                                            Learning & Improving
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-white/40">
                                            DSA · Problem Solving · Modern Web
                                        </p>
                                    </div>
                                </div>
                            </Card>

                        </div>
                    </ScrollReveal>
                </div>

                {/* ================= STATS ================= */}
                <ScrollReveal delay={0.2}>
                    <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">

                        {ABOUT_STATS.map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-black p-7 text-center transition-colors duration-300 hover:bg-white/[0.03]"
                            >
                                <div className="text-3xl font-bold text-primary sm:text-4xl">
                                    {stat.value}
                                </div>

                                <p className="mt-2 text-xs uppercase tracking-wider text-white/30">
                                    {stat.label}
                                </p>
                            </div>
                        ))}

                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default About;