import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative bg-black px-6 py-24 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mb-14 max-w-2xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        My Work
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Featured{" "}
                        <span className="text-white/40">
                            Projects
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
                        A collection of projects I've built while exploring
                        modern web technologies and full-stack development.
                    </p>
                </div>

                {/* Projects */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id || project.title}
                            project={project}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;