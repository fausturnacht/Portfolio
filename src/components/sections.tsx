import { Section } from "./section";
import { certifications, experience, skills, siteConfig } from "@/data/site";

export function Education() {
  return (
    <Section id="experience" title="Education">
      <ol className="flex flex-col gap-10">
        {experience.map((role) => (
          <li key={`${role.company}-${role.period}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold tracking-[-0.96px]">
                {role.title}
              </h3>
              <span className="font-mono text-xs text-subtle">
                {role.period}
                {role.location ? ` · ${role.location}` : ""}
              </span>
            </div>
            <p className="mt-1 text-sm text-subtle">{role.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {role.summary}
            </p>
            {role.highlights?.length ? (
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted">
                {role.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span aria-hidden className="text-subtle">
                      —
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>

      <h3 className="mt-12 mb-6 font-mono text-xs tracking-[0.08em] text-subtle uppercase">
        Certifications
      </h3>
      <ul className="flex flex-col gap-2">
        {certifications.map((cert) => (
          <li
            key={cert.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 rounded-md bg-surface px-4 py-3 ring-card"
          >
            <div>
              <p className="text-sm font-medium">
                {cert.href ? (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-colors hover:underline"
                  >
                    {cert.name}
                  </a>
                ) : (
                  cert.name
                )}
              </p>
              <p className="mt-0.5 text-xs text-subtle">{cert.issuer}</p>
            </div>
            <span className="font-mono text-xs whitespace-nowrap text-subtle">
              {cert.date}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted">
        <p className="max-w-2xl text-base">
          I&apos;m a Computer Science student at New Era University in Quezon
          City, working mostly on full-stack web applications — React and Tailwind
          on the front, Supabase and REST APIs underneath. My coursework leans into
          data analytics and machine learning, and most of my projects ship as
          working products rather than class exercises: role-based access control,
          OCR pipelines, prerequisite mapping, and the unglamorous CRUD that holds
          it all together. I&apos;m currently open to internships and entry-level
          engineering roles.
        </p>
        <dl className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="mb-2 font-mono text-xs tracking-[0.08em] text-subtle uppercase">
                {group.label}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-surface px-2.5 py-0.5 text-xs ring-card"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-lg bg-surface p-8 ring-card">
        <p className="text-base text-muted">
          Open to internships, collaborations, and interesting problems. Email is
          the fastest way to reach me.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-4 inline-block text-lg font-medium tracking-tight underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
        >
          {siteConfig.email}
        </a>
        <p className="mt-3 text-sm text-subtle">
          {siteConfig.phone} · {siteConfig.location}
        </p>
      </div>
    </Section>
  );
}
