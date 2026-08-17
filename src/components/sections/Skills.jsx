import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import {
    Code2,
    Database,
    GitBranch,
    Globe,
    Layers,
    Terminal,
} from "lucide-react";

import ScrollReveal from "../animations/ScrollReveal";
import Card from "../ui/Card";

const SKILLS = [
    {
        title: "Frontend",
        icon: Code2,
        skills: [
            { name: "React.js", level: "Advanced" },
            { name: "JavaScript", level: "Advanced" },
            { name: "Node.js", level: "Intermediate" },
            { name: "Express.js", level: "Intermediate" },
            { name: "MongoDB", level: "Intermediate" },
        ],
    },
    {
        title: "Programming",
        icon: Terminal,
        skills: [
            { name: "Java", level: "Advanced" },
            { name: "Python", level: "Intermediate" },
            { name: "C", level: "Intermediate" },
            { name: "DSA", level: "Advanced" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        skills: [
            { name: "MySQL", level: "Basic" },
            { name: "SQL", level: "Basic" },
            { name: "MongoDB", level: "Intermediate" },
            { name: "Local Storage", level: "Advanced" },
        ],
    },
    {
        title: "Tools",
        icon: GitBranch,
        skills: [
            { name: "Git", level: "Advanced" },
            { name: "GitHub", level: "Intermediate" },
            { name: "VS Code", level: "Advanced" },
            { name: "Vite", level: "Intermediate" },
        ],
    },
    {
        title: "Web Technologies",
        icon: Globe,
        skills: [
            { name: "REST APIs", level: "Intermediate" },
            { name: "Responsive Design", level: "Advanced" },
            { name: "JSON", level: "Advanced" },
            { name: "DOM", level: "Intermediate" },
        ],
    },
    {
        title: "Currently Learning",
        icon: Layers,
        skills: [
            { name: "DSA", level: "Learning" },
            { name: "GenAI", level: "Learning" },
            { name: "Full Stack Development", level: "Learning" },
        ],
    },
];

const TECHS = [
    "React",
    "JavaScript",
    "Java",
    "Node",
    "Git",
    "Express",
    "MongoDB",
    "TypeScript",
    "TailwindCSS",
    "DSA",
    "GitHub",
];

const Skills = () => {

    const techRef = useRef(null);

    useEffect(() => {
        const animation = gsap.to(techRef.current, {
            xPercent: -50,
            duration: 20,
            ease: "none",
            repeat: -1,
        });

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-black py-24 sm:py-32"
        >

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-0 top-1/3 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

                {/* Heading */}
                <ScrollReveal>
                    <div className="mb-16">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-primary" />

                            <span className="text-sm uppercase tracking-[0.25em] text-primary">
                                My Skills
                            </span>
                        </div>

                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

                            <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                Technologies I{" "}
                                <span className="text-primary">
                                    work with
                                </span>
                            </h2>

                            <p className="max-w-md text-sm leading-7 text-white/40 md:text-right">
                                A growing collection of technologies
                                and tools I use to build modern web
                                applications.
                            </p>

                        </div>
                    </div>
                </ScrollReveal>


                {/* Skills Grid */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {SKILLS.map((category, index) => {

                        const Icon = category.icon;

                        return (
                            <ScrollReveal
                                key={category.title}
                                delay={index * 0.08}
                            >

                                <Card className="group h-full">

                                    {/* Category Header */}
                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center gap-4">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black">
                                                <Icon size={21} />
                                            </div>

                                            <h3 className="text-lg font-semibold text-white">
                                                {category.title}
                                            </h3>

                                        </div>

                                        <span className="text-xs text-white/20">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                    </div>


                                    {/* Skills */}
                                    <div className="mt-7 space-y-4">

                                        {category.skills.map((skill) => (

                                            <div
                                                key={skill.name}
                                                className="group/skill"
                                            >

                                                <div className="mb-2 flex items-center justify-between">

                                                    <span className="text-sm text-white/70">
                                                        {skill.name}
                                                    </span>

                                                    <span className="text-[10px] uppercase tracking-wider text-white/25">
                                                        {skill.level}
                                                    </span>

                                                </div>

                                                <div className="h-1 overflow-hidden rounded-full bg-white/5">

                                                    <div
                                                        className={`
                                                            h-full rounded-full bg-primary
                                                            transition-all duration-700
                                                            group-hover/skill:shadow-[0_0_12px_rgba(141,255,105,0.5)]
                                                            ${
                                                                skill.level === "Advanced"
                                                                    ? "w-[90%]"
                                                                    : skill.level === "Intermediate"
                                                                    ? "w-[70%]"
                                                                    : skill.level === "Learning"
                                                                    ? "w-[45%]"
                                                                    : "w-[45%]"
                                                            }
                                                        `}
                                                    />

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                </Card>

                            </ScrollReveal>
                        );
                    })}

                </div>


                {/* Bottom Tech Strip */}
                <ScrollReveal delay={0.2}>

                    <div className="mt-15 overflow-hidden pt-12">

                        <div
                            ref={techRef}
                            className="flex w-max items-center gap-x-8"
                        >

                            {/* First Set */}
                            {TECHS.map((tech) => (
                                <span
                                    key={tech}
                                    className="whitespace-nowrap text-2xl text-white/30 transition-colors duration-300 hover:text-primary"
                                >
                                    {tech}
                                </span>
                            ))}

                            {/* Duplicate Set */}
                            {TECHS.map((tech) => (
                                <span
                                    key={`copy-${tech}`}
                                    className="whitespace-nowrap text-2xl text-white/30 transition-colors duration-300 hover:text-primary"
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>

                    </div>

                </ScrollReveal>

            </div>

        </section>
    );
};

export default Skills;