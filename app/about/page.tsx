import { staticAsset } from "@/lib/paths";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/site";

export default function AboutPage() {
  const hasSignature = aboutData.signature && aboutData.signature.length > 0;

  return (
    <>
      {/* ─── Hero — Two-Column Layout ──────────────────────────── */}
      <section className="section-container pt-28 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-start">
          {/* Portrait */}
          <div className="md:col-span-5 max-w-[460px]">
            <div className="aspect-[4/5] overflow-hidden bg-bg rounded-[8px] ring-1 ring-black/5">
              <img
                loading="lazy"
                decoding="async"
                src={staticAsset("/images/profile/photo.webp")}
                alt={aboutData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Text */}
          <div className="md:col-span-7 md:pt-6">
            <p className="text-xs font-mono tracking-[0.18em] text-tertiary uppercase mb-5">
              {aboutData.position}
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tight text-primary leading-[1.06]">
              {aboutData.name}
            </h1>
            <div className="mt-7 space-y-5 max-w-xl">
              <p className="text-base md:text-lg leading-relaxed text-primary">
                {aboutData.bio}
              </p>
              <p className="text-sm leading-relaxed text-secondary">
                {aboutData.bioEn}
              </p>
            </div>
            <p className="mt-7 text-xs font-mono tracking-[0.15em] text-tertiary">
              {aboutData.direction}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Education ─────────────────────────────────────────── */}
      <section className="section-container py-12 md:py-14 border-t border-line">
        <p className="text-xs font-mono tracking-[0.18em] text-tertiary uppercase mb-8">
          Education
        </p>
        {aboutData.education.map(function(edu, i) {
          return (
            <div key={i} className="max-w-xl">
              <h2 className="text-lg font-medium text-primary">{edu.school}</h2>
              <p className="text-sm text-secondary mt-1.5">
                {edu.degree} · {edu.major} &mdash; {edu.period}
              </p>
              <p className="text-sm text-secondary mt-4 leading-relaxed">
                {edu.description}
              </p>
            </div>
          );
        })}
      </section>

      {/* ─── Experience ────────────────────────────────────────── */}
      <section className="section-container py-12 md:py-14 border-t border-line">
        <p className="text-xs font-mono tracking-[0.18em] text-tertiary uppercase mb-8">
          Experience
        </p>
        <div className="space-y-10">
          {aboutData.experience.map(function(exp, i) {
            return (
              <div key={i} className="relative pl-6 border-l border-line">
                <div className="absolute left-[-3px] top-1 w-[5px] h-[5px] rounded-full bg-accent"></div>
                <p className="text-xs font-mono text-tertiary">{exp.period}</p>
                <h2 className="text-base font-medium text-primary mt-1">{exp.role}</h2>
                <p className="text-sm text-secondary">{exp.company}</p>
                <p className="text-sm text-secondary mt-3 leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Awards ────────────────────────────────────────────── */}
      <section className="section-container py-12 md:py-14 border-t border-line">
        <p className="text-xs font-mono tracking-[0.18em] text-tertiary uppercase mb-8">
          Awards
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
          {aboutData.awards.map(function(award, i) {
            return (
              <div key={i} className="border-l-[3px] border-accent pl-4 md:pl-5">
                <h3 className="text-sm font-medium text-primary leading-snug">
                  {award.name}
                </h3>
                <p className="text-xs text-tertiary mt-1.5">{award.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Skills & Tools ────────────────────────────────────── */}
      <section className="section-container py-12 md:py-14 border-t border-line">
        <p className="text-xs font-mono tracking-[0.18em] text-tertiary uppercase mb-8">
          Skills &amp; Tools
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {aboutData.skills.map(function(skill, i) {
            return (
              <div key={i}>
                <h3 className="text-xs font-mono tracking-[0.15em] text-secondary uppercase mb-4">
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map(function(item) {
                    return (
                      <li key={item} className="text-sm text-primary leading-relaxed">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          {/* Signature */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.15em] text-secondary uppercase mb-4">
              Signature
            </h3>
            {hasSignature ? (
              <img
                loading="lazy"
                decoding="async"
                src={staticAsset(aboutData.signature)}
                alt="Signature"
                className="h-10 opacity-70"
              />
            ) : (
              <p className="text-xl font-light tracking-wide text-tertiary">
                YM
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ─── Contact ───────────────────────────────────────────── */}
      <section className="section-container py-12 md:py-14 border-t border-line">
        <p className="text-xs font-mono tracking-[0.18em] text-tertiary uppercase mb-8">
          Contact
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={"mailto:" + siteConfig.email}
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}
