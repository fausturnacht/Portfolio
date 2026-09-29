export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <h2 className="mb-8 font-mono text-xs tracking-[0.08em] text-subtle uppercase">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
