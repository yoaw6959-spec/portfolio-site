import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="section-container py-16">
      <div className="border-t border-line pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-sm font-mono tracking-wider text-primary">YAO WEI</p>
            <p className="text-xs text-tertiary mt-1">Product Designer</p>
          </div>
          <div className="flex items-center gap-6">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-secondary hover:text-primary transition-colors">
              GitHub
            </a>
            <a href={"mailto:" + siteConfig.email} className="text-xs font-mono text-secondary hover:text-primary transition-colors">
              Email
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-tertiary font-mono">&copy; 2026 YAO WEI</p>
      </div>
    </footer>
  );
}