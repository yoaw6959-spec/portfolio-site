import { staticAsset } from "@/lib/paths";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <section className="section-container pt-28 pb-12">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-primary">Contact</h1>
        <p className="mt-3 text-sm text-secondary max-w-xl">
          Feel free to reach out for collaborations, opportunities, or just to say hello.
        </p>
      </section>

      <section className="section-container pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="border border-line rounded-lg p-6 hover:border-primary transition-colors">
            <h3 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-2">Email</h3>
            <a href={`mailto:${siteConfig.email}`} className="text-base text-primary hover:text-accent transition-colors">{siteConfig.email}</a>
          </div>
          <div className="border border-line rounded-lg p-6 hover:border-primary transition-colors">
            <h3 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-2">GitHub</h3>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-base text-primary hover:text-accent transition-colors">{siteConfig.github}</a>
          </div>
          <div className="border border-line rounded-lg p-6 hover:border-primary transition-colors">
            <h3 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-2">Portfolio</h3>
            <a href={staticAsset("/files/portfolio.pdf")} className="text-base text-primary hover:text-accent transition-colors">Download PDF</a>
          </div>
          <div className="border border-line rounded-lg p-6 hover:border-primary transition-colors">
            <h3 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-2">Resume</h3>
            <a href={staticAsset("/files/resume.pdf")} className="text-base text-primary hover:text-accent transition-colors">Download Resume</a>
          </div>
        </div>
      </section>
    </>
  );
}

