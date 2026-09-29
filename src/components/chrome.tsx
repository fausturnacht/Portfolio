import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between">
        <a href="#top" className="font-medium tracking-tight">
          {siteConfig.name}
        </a>
        <nav aria-label="Main">
          <ul className="-my-2 flex items-center gap-2 text-sm text-muted sm:gap-6">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  className="block px-1 py-2 transition-colors hover:text-foreground sm:px-0"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line py-10">
      <div className="container-page flex flex-col gap-4 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <ul className="flex gap-4">
          {siteConfig.socials.map((s) => (
            <li key={s.href}>
              <a
                className="transition-colors hover:text-foreground"
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
