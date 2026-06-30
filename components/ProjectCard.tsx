import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
          <img loading="lazy" decoding="async"             src={project.images.cover.src}
            alt={project.images.cover.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-medium text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-secondary mt-2">{project.subtitleCn}</p>
          <p className="text-xs text-tertiary mt-1 font-mono">{project.subtitle}</p>
          <span className="inline-block mt-4 text-xs font-mono tracking-wider text-accent uppercase">View Project &rarr;</span>
        </div>
      </article>
    </Link>
  );
}
