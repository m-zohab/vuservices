import Reveal from "./Reveal.jsx";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="section-anchor relative overflow-hidden border-b border-line bg-page-alt py-16 lg:py-20">
      {/* Slowly drifting colour washes — movement without distraction */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-drift rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 animate-drift-alt rounded-full bg-brand/20 blur-3xl" />
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" />

      <div className="section-container relative">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-heading sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          <span
            aria-hidden="true"
            className="mt-5 block h-1 w-20 origin-left animate-fade-scale rounded-full bg-accent"
          />
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
