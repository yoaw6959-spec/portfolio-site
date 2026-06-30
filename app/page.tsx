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
      <section className="section-container min-h-screen flex flex-col justify-end pb-16 pt-28">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium leading-none tracking-tight text-primary">
          YAO<br />WEI
        </h1>
        <p className="mt-4 text-sm font-mono tracking-widest uppercase text-secondary">
          Product Designer
        </p>
        <div className="mt-10 max-w-xl">
          <p className="text-xl md:text-2xl leading-snug font-medium text-primary">
            璧嬪舰鎬佷互鎬濊€冿紝浜堣璁′互瀹炴晥銆?          </p>
          <p className="mt-4 text-sm text-secondary leading-relaxed">
            Shaping products through research, reasoning and execution.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-mono tracking-wider uppercase text-accent hover:text-primary transition-colors">
            View Works &rarr;
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="section-container py-16">
        <h2 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-8">Selected Works</h2>
        <div className="grid grid-cols-1 gap-16">
          {mainProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-mono tracking-wider uppercase text-accent hover:text-primary transition-colors">
            All Works &rarr;
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="section-container py-16 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="aspect-square max-w-xs bg-gray-200 rounded-lg overflow-hidden">
            <img loading="lazy" decoding="async" src={staticAsset("/images/profile/photo.webp")} alt={aboutData.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-medium text-primary">{aboutData.name}</h2>
            <p className="text-xs font-mono tracking-wider text-secondary mt-1 uppercase">{aboutData.position}</p>
            <p className="text-sm text-secondary mt-4 leading-relaxed">{aboutData.bioEn}</p>
            <Link href="/about" className="inline-flex items-center gap-2 mt-6 text-sm font-mono tracking-wider uppercase text-accent hover:text-primary transition-colors">
              About &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


