import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="pt-20 pb-8 sm:pt-28">
      <div className="container-page">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs tracking-[0.08em] text-subtle uppercase">
              {siteConfig.role} · {siteConfig.location}
            </p>
            <h1 className="text-4xl font-semibold tracking-[-2.4px] text-balance sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted sm:text-xl">
              {siteConfig.tagline} {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Get in touch
              </a>
              <a
                href={siteConfig.resumeUrl}
                className="rounded-md px-4 py-2 text-sm font-medium ring-card transition-shadow hover:ring-card-hover"
              >
                Résumé
              </a>
            </div>
          </div>
          <Image
            src={siteConfig.avatar}
            alt={siteConfig.name}
            width={160}
            height={160}
            priority
            className="h-32 w-32 rounded-full object-cover ring-card sm:h-40 sm:w-40"
          />
        </div>
      </div>
    </section>
  );
}
