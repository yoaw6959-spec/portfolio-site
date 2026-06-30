import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const mainProjects = projects.filter((p) => p.slug !== "other-works");

export default function ProjectsPage() {
  return (
    <>
      <section className="section-container pt-28 pb-12">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-primary">Projects</h1>
        <p className="mt-3 text-sm text-secondary max-w-xl">
          A collection of product design projects spanning medical rescue, smart hardware, wearable technology, and children&apos;s products.
        </p>
      </section>

      <section className="section-container pb-20">
        <div className="grid grid-cols-1 gap-16">
          {mainProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
