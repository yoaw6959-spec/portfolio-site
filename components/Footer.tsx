import Link from "next/link";
 import { NAV_ITEMS } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="section-container py-12 border-t border-line mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="text-sm font-mono tracking-wider text-primary">YAO WEI</Link>
          <p className="mt-3 text-sm text-secondary">Product Designer</p>
        </div>
        <div>
          <h4 className="text-xs font-mono tracking-wider text-tertiary mb-4 uppercase">Navigation</h4>
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} href={item.path} className="text-sm text-secondary hover:text-primary transition-colors">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-mono tracking-wider text-tertiary mb-4 uppercase">Contact</h4>
          <div className="flex flex-col gap-2">
            <a href="https://github.com/yoaw6959-spec" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-primary transition-colors">GitHub</a>
            <a href="mailto:hello@yaowei.design" className="text-sm text-secondary hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-line text-xs text-tertiary font-mono">
        &copy; 2026 YAO WEI
      </div>
    </footer>
  );
}
