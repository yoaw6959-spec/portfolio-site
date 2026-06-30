import { staticAsset } from "@/lib/paths";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/site";

export default function AboutPage() {
  const hasSignature = aboutData.signature && aboutData.signature.length > 0;

  return (
    <>
      {/* ───── Hero — Two-Column Layout ─────────────────────────────── */}
      <section className="section-container pt-28 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Portrait */}
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm">
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
          <div className="md:col-span-7 md:pt-8">
            <p className="text-xs font-mono tracking-widest text-tertiary uppercase mb-4">
              {aboutData.position}
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-primary leading-[1.05]">
              {aboutData.name}
            </h1>
            <div className="mt-6 space-y-4 max-w-xl">
              <p className="text-base leading-relaxed text-primary">
                {aboutData.bio}
              </p>
              <p className="text-sm leading-relaxed text-secondary">
                {aboutData.bioEn}
              </p>
            </div>
            <p className="mt-6 text-xs font-mono tracking-wider text-tertiary">
              {aboutData.direction}
            </p>
          </div>
        </div>
      </section>

      {/* ───── Education ──────────────────────────────────────────── */}
      <section className="section-container py-10 border-t border-line">
        <p className="text-xs font-mono tracking-widest text-tertiary uppercase mb-6">
          Education
        </p>
        {aboutData.education.map((edu, i) => (
          <div key={i} className="max-w-xl">
            <h2 className="text-base font-medium text-primary">{edu.school}</h2>
            <p className="text-sm text-secondary mt-1">
              {edu.degree} · {edu.major} &mdash; {edu.period}
            </p>
            <p className="text-sm text-secondary mt-3 leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </section>

      {/* ───── Experience ─────────────────────────────────────────── */}
      <section className="section-container py-10 border-t border-line">
        <p className="text-xs font-mono tracking-widest text-tertiary uppercase mb-6">
          Experience
        </p>
        {aboutData.experience.map((exp, i) => (
          <div key={i} className="max-w-xl">
            <p className="text-xs font-mono text-tertiary">{exp.period}</p>
            <h2 className="text-base font-medium text-primary mt-1">{exp.role}</h2>
            <p className="text-sm text-secondary">{exp.company}</p>
            <p className="text-sm text-secondary mt-3 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </section>

      {/* ───── Awards ─────────────────────────────────────────────── */}
      <section className="section-container py-10 border-t border-line">
        <p className="text-xs font-mono tracking-widest text-tertiary uppercase mb-6">
          Awards
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {aboutData.awards.map((award, i) => (
            <div key={i} className="border-l-[3px] border-accent pl-4">
              <h3 className="text-sm font-medium text-primary leading-snug">
                {award.name}
              </h3>
              <p className="text-xs text-tertiary mt-1.5">{award.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Skills & Tools ─────────────────────────────────────── */}
      <section className="section-container py-10 border-t border-line">
        <p className="text-xs font-mono tracking-widest text-tertiary uppercase mb-6">
          Skills &amp; Tools
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {aboutData.skills.map((skill, i) => (
            <div key={i}>
              <h3 className="text-xs font-mono tracking-wider text-secondary uppercase mb-3">
                {skill.category}
              </h3>
              <ul className="space-y-1.5">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-primary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Signature column */}
          <div>
            <h3 className="text-xs font-mono tracking-wider text-secondary uppercase mb-3">
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
              <p className="text-lg font-light tracking-wide text-tertiary">
                YM
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ───── Contact ────────────────────────────────────────────── */}
      <section className="section-container py-10 border-t border-line">
        <p className="text-xs font-mono tracking-widest text-tertiary uppercase mb-6">
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
