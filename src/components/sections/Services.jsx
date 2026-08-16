import React from "react";
import {
    ArrowUpRight,
    Code2,
    Layout,
    Smartphone,
    Palette,
    Database,
} from "lucide-react";

import ScrollReveal from "../animations/ScrollReveal";
import Card from "../ui/Card";

const SERVICES = [
    {
        id: 1,
        number: "01",
        title: "Web Development",
        description:
            "Building modern, responsive, and high-performance websites using React and modern frontend technologies.",
        icon: Code2,
        tags: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
        id: 2,
        number: "02",
        title: "Frontend Development",
        description:
            "Creating interactive user interfaces with clean components, reusable code, and smooth animations.",
        icon: Layout,
        tags: ["React", "Tailwind CSS", "GSAP"],
    },
    {
        id: 3,
        number: "03",
        title: "Responsive Design",
        description:
            "Designing websites that look and work beautifully across desktops, tablets, and mobile devices.",
        icon: Smartphone,
        tags: ["Responsive", "Mobile UI", "UX"],
    },
    {
        id: 4,
        number: "04",
        title: "UI Implementation",
        description:
            "Turning designs into polished, functional interfaces while maintaining consistency and attention to detail.",
        icon: Palette,
        tags: ["UI Design", "Figma", "CSS"],
    },
    {
        id: 5,
        number: "05",
        title: "JavaScript Development",
        description:
            "Developing interactive functionality and dynamic web experiences using modern JavaScript.",
        icon: Code2,
        tags: ["ES6+", "DOM", "APIs"],
    },
    {
        id: 6,
        number: "06",
        title: "Database Integration",
        description:
            "Working with backend services and databases to build applications with structured and dynamic data.",
        icon: Database,
        tags: ["MongoDB", "SQL", "APIs"],
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-black py-24 sm:py-32"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

                {/* Heading */}
                <ScrollReveal>
                    <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-primary" />

                                <span className="text-sm uppercase tracking-[0.25em] text-primary">
                                    What I do
                                </span>
                            </div>

                            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                Services I{" "}
                                <span className="text-primary">
                                    provide
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-white/40 md:text-right">
                            I create modern digital experiences with
                            clean code, thoughtful design, and
                            responsive interfaces.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <ScrollReveal
                                key={service.id}
                                delay={index * 0.08}
                            >
                                <Card className="group h-full min-h-[300px]">
                                    {/* Top */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black">
                                            <Icon size={22} />
                                        </div>

                                        <span className="text-sm font-medium text-white/20 transition-colors duration-300 group-hover:text-primary/50">
                                            {service.number}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-10">
                                        <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-primary">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/45">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                                        <ArrowUpRight
                                            size={17}
                                        />
                                    </div>
                                </Card>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;