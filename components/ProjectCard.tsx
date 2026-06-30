import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <Link href={"/projects/" + project.slug}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-center">
          <div className="md:col-span-7 aspect-[4/3] bg-bg rounded-sm overflow-hidden ring-1 ring-black/5">
            <img
              loading="lazy"
              decoding="async"
              src={project.images.cover.src}
              alt={project.images.cover.alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <div className="md:col-span-5 space-y-3.5">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-primary leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              {project.subtitleCn}
            </p>
            <p className="text-xs text-tertiary font-mono leading-relaxed">
              {project.subtitle}
            </p>
            <span className="inline-block mt-5 text-xs font-mono tracking-[0.15em] text-accent group-hover:text-primary transition-colors duration-300">
              View Project &rarr;
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
