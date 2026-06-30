import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <Link href={"/projects/" + project.slug}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
            <img
              loading="lazy"
              decoding="async"
              src={project.images.cover.src}
              alt={project.images.cover.alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-medium text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              {project.subtitleCn}
            </p>
            <p className="text-xs text-tertiary font-mono">
              {project.subtitle}
            </p>
            <span className="inline-block mt-4 text-xs font-mono tracking-wider text-accent group-hover:text-primary transition-colors duration-300">
              View Project →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}