import { Section } from "./section";
import { experience, skills, siteConfig } from "@/data/site";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
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
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted">
        <p className="max-w-2xl text-base">
          Write two or three sentences here. What you work on, what you care about,
          what you are looking for next. This is the paragraph people actually read
          — keep it specific and skip the adjective soup.
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
          Open to work, collaborations, and interesting problems. Email is the
          fastest way to reach me.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-4 inline-block text-lg font-medium tracking-tight underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
        >
          {siteConfig.email}
        </a>
      </div>
    </Section>
  );
}
