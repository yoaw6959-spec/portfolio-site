import { aboutData } from "@/data/about";

export default function AboutPage() {
  return (
    <>
      <section className="section-container pt-28 pb-12">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-primary">{aboutData.name}</h1>
        <p className="text-sm font-mono tracking-wider text-secondary mt-2 uppercase">{aboutData.nameCn} / {aboutData.position}</p>
      </section>

      <section className="section-container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[3/4] max-w-sm bg-gray-200 rounded-lg overflow-hidden">
            <img loading="lazy" decoding="async" src="/images/profile/photo.webp" alt={aboutData.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base leading-relaxed text-primary">{aboutData.bio}</p>
            <p className="text-sm text-secondary mt-4 leading-relaxed">{aboutData.bioEn}</p>
            <p className="text-xs text-tertiary mt-4 font-mono">{aboutData.direction}</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-container py-8 border-t border-line">
        <h2 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-6">Education</h2>
        {aboutData.education.map((edu, i) => (
          <div key={i}>
            <h3 className="text-base font-medium text-primary">{edu.school}</h3>
            <p className="text-sm text-secondary">{edu.degree} · {edu.major}</p>
            <p className="text-xs text-tertiary mt-1">{edu.period}</p>
            <p className="text-sm text-secondary mt-2 leading-relaxed max-w-xl">{edu.description}</p>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="section-container py-8 border-t border-line">
        <h2 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-6">Experience</h2>
        {aboutData.experience.map((exp, i) => (
          <div key={i} className="border-l-2 border-line pl-4">
            <p className="text-xs font-mono text-tertiary">{exp.period}</p>
            <h3 className="text-base font-medium text-primary mt-1">{exp.role}</h3>
            <p className="text-sm text-secondary">{exp.company}</p>
            <p className="text-sm text-secondary mt-2 leading-relaxed max-w-xl">{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Awards */}
      <section className="section-container py-8 border-t border-line">
        <h2 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-6">Awards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutData.awards.map((award, i) => (
            <div key={i} className="border-l-2 border-accent pl-4">
              <h3 className="text-sm font-medium text-primary">{award.name}</h3>
              <p className="text-xs text-tertiary mt-1">{award.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section-container py-8 border-t border-line">
        <h2 className="text-xs font-mono tracking-wider text-tertiary uppercase mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {aboutData.skills.map((skill, i) => (
            <div key={i}>
              <h3 className="text-xs font-mono tracking-wider text-secondary uppercase mb-3">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="text-xs bg-gray-100 text-primary px-3 py-1.5 rounded-full">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
