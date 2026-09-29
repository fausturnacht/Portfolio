import Image from "next/image";
import { Section } from "./section";
import { projects, type Project } from "@/data/site";

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group rounded-lg ring-card transition-shadow hover:ring-card-hover">
      <a
        href={project.href ?? project.repo ?? "#"}
        target={project.href || project.repo ? "_blank" : undefined}
        rel="noreferrer noopener"
        className="block h-full"
      >
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
        <div className="p-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-[-0.96px]">
              {project.title}
            </h3>
            {project.year ? (
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
          {project.repo ? (
            <p className="mt-4 font-mono text-xs text-subtle">
              View source →
            </p>
          ) : null}
        </div>
      </a>
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
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </ul>
    </Section>
  );
}
