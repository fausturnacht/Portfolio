import Image from "next/image";
import { Section } from "./section";
import { projects, type Project } from "@/data/site";

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="flex flex-col rounded-lg ring-card transition-shadow hover:ring-card-hover">
      {project.image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg border-b border-line">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold tracking-[-0.96px]">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:underline"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          {project.period ? (
            <span className="font-mono text-xs whitespace-nowrap text-subtle">
              {project.period}
            </span>
          ) : project.year ? (
            <span className="font-mono text-xs text-subtle">{project.year}</span>
          ) : null}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-surface px-2.5 py-0.5 text-xs text-muted ring-card"
            >
              {tag}
            </li>
          ))}
        </ul>
        {project.href || project.repo ? (
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 pt-1 font-mono text-xs">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted transition-colors hover:text-foreground"
              >
                Live site ↗
              </a>
            ) : null}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted transition-colors hover:text-foreground"
              >
                Source ↗
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </li>
  );
}

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="work" title="Selected work">
      {featured.length > 0 ? (
        <ul className="mb-4 grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </ul>
      ) : null}
      <ul className="grid gap-4 sm:grid-cols-2">
        {rest.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </ul>
    </Section>
  );
}
