import React from "react";
import { ArrowUpRight } from "lucide-react";
import Card from "./Card";

const ProjectCard = ({ project }) => {
    if (!project) return null;

    return (
        <Card
            padding={false}
            className="group h-full overflow-hidden"
        >
            {/* Project Image */}
            <div className="relative h-60 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70" />

                {/* Category */}
                {project.category && (
                    <span className="absolute left-5 top-5 rounded-full border border-primary/20 bg-black/70 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur-md">
                        {project.category}
                    </span>
                )}

                {/* Open Project */}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:border-primary hover:bg-primary hover:text-black"
                        aria-label={`Open ${project.title}`}
                    >
                        <ArrowUpRight size={18} />
                    </a>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between gap-4">

                    {/* Title */}
                    <div>
                        <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-primary">
                            {project.title}
                        </h3>

                        {project.year && (
                            <p className="mt-1 text-xs text-white/30">
                                {project.year}
                            </p>
                        )}
                    </div>

                    {/* GitHub */}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold text-white/40 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                            aria-label={`${project.title} GitHub repository`}
                        >
                            GH
                        </a>
                    )}
                </div>

                {/* Description */}
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/50">
                    {project.description}
                </p>

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/50 transition-colors duration-300 group-hover:border-primary/10"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                )}

                {/* View Project */}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                    >
                        View Project

                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </a>
                )}
            </div>
        </Card>
    );
};

export default ProjectCard;