import { staticAsset } from "@/lib/paths";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/site";

const mainProjects = projects.filter((p) => p.slug !== "other-works");

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section-container min-h-[80vh] flex flex-col justify-center pt-28 pb-16">
        <div>
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-medium leading-none tracking-tight text-primary">
            YAO WEI
          </h1>
          <p className="mt-4 text-xs font-mono tracking-[0.15em] uppercase text-secondary">
            Product Designer
          </p>
        </div>
        <div className="mt-16 max-w-xl">
          <p className="text-xl md:text-2xl leading-snug font-medium text-primary">
            赋形态以思考，予设计以实效。
          </p>
          <p className="mt-4 text-sm text-secondary leading-relaxed">
            Shaping products through research, reasoning and execution.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono tracking-wider uppercase text-accent hover:text-primary transition-colors group"
          >
            View Works
            <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* Selected Works */}
      <section className="section-container py-24 border-t border-line">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="text-xs font-mono tracking-wider text-tertiary uppercase">Selected Works</h2>
          <Link
            href="/projects"
            className="mt-4 md:mt-0 text-xs font-mono tracking-wider text-accent hover:text-primary transition-colors flex items-center gap-1"
          >
            All Projects <span className="inline-block">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-24">
          {mainProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="section-container py-24 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="aspect-[4/5] max-w-md w-full bg-gray-200 rounded-lg overflow-hidden">
            <img
              loading="lazy"
              decoding="async"
              src={staticAsset("/images/profile/photo.webp")}
              alt={aboutData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-primary">{aboutData.name}</h2>
            <p className="text-xs font-mono tracking-[0.15em] uppercase text-secondary mt-3">
              {aboutData.position}
            </p>
            <p className="text-sm text-secondary mt-6 leading-relaxed max-w-md">
              {aboutData.bioEn}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs font-mono tracking-wider uppercase text-accent hover:text-primary transition-colors group"
            >
              More About Me
              <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
