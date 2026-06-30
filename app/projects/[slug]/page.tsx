import { staticAsset } from "@/lib/paths";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="section-container pt-28 pb-8">
        <Link href="/projects" className="text-xs font-mono tracking-wider text-tertiary hover:text-primary transition-colors">
          &larr; Back to Projects
        </Link>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-primary mt-6">
          {project.title}
        </h1>
        <p className="text-base text-secondary mt-2">{project.subtitleCn}</p>
        <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono text-tertiary">
          <span>{project.category}</span>
          <span>{project.duration}</span>
        </div>

        {project.team && (
          <div className="mt-4 text-xs text-tertiary">
            <span>Team: {project.team.members.join(", ")}</span>
            {project.team.instructor && <span className="ml-4">Instructor: {project.team.instructor}</span>}
          </div>
        )}
      </section>

      {/* Hero Image */}
      <section className="section-container pb-8">
        <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
          <img loading="lazy" decoding="async" src={project.images.hero.src} alt={project.images.hero.alt} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Overview */}
      <section className="section-container py-8 border-t border-line">
        <h2 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-4">Overview</h2>
        <p className="text-base leading-relaxed text-primary max-w-3xl">{project.overview}</p>
      </section>

      {/* Problem */}
      <section className="section-container py-8 border-t border-line">
        <h2 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-4">Problem</h2>
        <p className="text-sm leading-relaxed text-secondary max-w-3xl">{project.problem}</p>
      </section>

      {/* Images */}
      <section className="section-container py-8">
        {project.slug === "peak-rescue" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/peak-rescue/clean/product.png")} alt="Product" className="w-full h-full object-cover" /></div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/peak-rescue/clean/exploded.png")} alt="Exploded view" className="w-full h-full object-cover" /></div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/peak-rescue/clean/six-views.jpg")} alt="Six views" className="w-full h-full object-cover" /></div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/peak-rescue/clean/ui.png")} alt="UI" className="w-full h-full object-cover" /></div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/peak-rescue/clean/detail-front.png")} alt="Detail" className="w-full h-full object-cover" /></div>
          </div>
        )}
        {project.slug === "herb-tech-cup" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/herb-tech-cup/clean/product.png")} alt="Product" className="w-full h-full object-cover" /></div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/herb-tech-cup/clean/process.png")} alt="Process" className="w-full h-full object-cover" /></div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/herb-tech-cup/clean/colors.png")} alt="Colors" className="w-full h-full object-cover" /></div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/herb-tech-cup/clean/detail.png")} alt="Detail" className="w-full h-full object-cover" /></div>
          </div>
        )}
        {project.slug === "baby-chair" && (
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/baby-chair/clean/product-1.png")} alt="Product" className="w-full h-full object-cover" /></div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/baby-chair/clean/product-2.png")} alt="Product" className="w-full h-full object-cover" /></div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/baby-chair/clean/product-3.png")} alt="Product" className="w-full h-full object-cover" /></div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/baby-chair/clean/product-4.png")} alt="Product" className="w-full h-full object-cover" /></div>
          </div>
        )}
        {project.slug === "photographer-exoskeleton" && (
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/photographer-exoskeleton/clean/worn.jpg")} alt="Worn" className="w-full h-full object-cover" /></div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/photographer-exoskeleton/clean/product-2.png")} alt="Product" className="w-full h-full object-cover" /></div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/photographer-exoskeleton/clean/product-3.png")} alt="Product" className="w-full h-full object-cover" /></div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"><img loading="lazy" decoding="async" src={staticAsset("/images/photographer-exoskeleton/clean/product-4.png")} alt="Product" className="w-full h-full object-cover" /></div>
          </div>
        )}
      </section>

      {/* Process */}
      <section className="section-container py-8 border-t border-line">
        <h2 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-6">Process</h2>
        <div className="grid grid-cols-1 gap-6 max-w-3xl">
          {project.process.map((step: any, i: number) => (
            <div key={i}>
              <h3 className="text-sm font-medium text-primary">{step.title}</h3>
              <p className="text-sm text-secondary mt-2 leading-relaxed">{step.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering */}
      <section className="section-container py-8 border-t border-line">
        <h2 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-4">Engineering</h2>
        <p className="text-sm leading-relaxed text-secondary max-w-3xl">{project.engineering}</p>
      </section>

      {/* Final Design */}
      <section className="section-container py-8 border-t border-line">
        <h2 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-4">Final Design</h2>
        <p className="text-sm leading-relaxed text-secondary max-w-3xl">{project.finalDesign}</p>
      </section>
    </>
  );
}
