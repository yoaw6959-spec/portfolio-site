import { staticAsset } from "@/lib/paths";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import { projects } from "@/data/projects";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/site";

var mainProjects = projects.filter(function(p) { return p.slug !== "other-works"; });

export default function Home() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="section-container min-h-[80vh] flex flex-col justify-center pt-28 pb-16 md:pb-24">
        <div className="max-w-5xl">
          <div className="animate-fade-up" style={{ animationDelay: "0s" }}>
            <h1 className="text-[clamp(3.5rem,12vw,12rem)] font-medium leading-none tracking-tight text-primary">
              YAO WEI
            </h1>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <p className="mt-5 text-xs font-mono tracking-[0.18em] uppercase text-secondary">
              Product Designer
            </p>
          </div>
        </div>

        <div className="mt-20 md:mt-24 max-w-2xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-2xl md:text-3xl leading-snug font-light text-primary">
              {siteConfig.tagline}
            </p>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <p className="mt-5 text-base leading-relaxed text-secondary">
              {siteConfig.taglineEn}
            </p>
          </div>
        </div>

        <div className="mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-sm font-mono tracking-wider uppercase text-accent hover:text-primary transition-colors group"
          >
            View Works
            <span className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ─── Selected Works ────────────────────────────────────── */}
      <RevealOnScroll>
        <section className="section-container py-24 md:py-32 border-t border-line">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-xs font-mono tracking-[0.15em] text-tertiary uppercase">Selected Works</h2>
            <Link
              href="/projects"
              className="text-xs font-mono tracking-[0.15em] text-accent hover:text-primary transition-colors flex items-center gap-1.5 group"
            >
              All Projects
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-28 md:gap-32">
            {mainProjects.map(function(project) {
              return (
                <RevealOnScroll key={project.slug}>
                  <ProjectCard project={project} />
                </RevealOnScroll>
              );
            })}
          </div>
        </section>
      </RevealOnScroll>

      {/* ─── About Preview ─────────────────────────────────────── */}
      <RevealOnScroll>
        <section className="section-container py-24 md:py-32 border-t border-line">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            <div className="aspect-[4/5] max-w-md w-full bg-bg rounded-sm overflow-hidden ring-1 ring-black/5">
              <img
                loading="lazy"
                decoding="async"
                src={staticAsset("/images/profile/photo.webp")}
                alt={aboutData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-normal text-primary leading-tight">{aboutData.name}</h2>
              <p className="text-xs font-mono tracking-[0.18em] uppercase text-secondary mt-4">
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
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
