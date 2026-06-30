"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
 import { NAV_ITEMS } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/projects") return pathname.startsWith("/projects");
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line">
      <nav className="section-container flex items-center justify-between h-16">
        <Link href="/" className="text-sm font-mono tracking-wider text-primary">YAO WEI</Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm ${isActive(item.path) ? "text-primary font-medium" : "text-secondary hover:text-primary"} transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
          <div className={`w-5 h-0.5 bg-primary transition-all mb-1 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-primary transition-all mb-1 ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-primary transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-bg border-t border-line">
          <div className="section-container py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}
                className={`text-sm ${isActive(item.path) ? "text-primary font-medium" : "text-secondary"}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
