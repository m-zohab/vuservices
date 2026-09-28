import useInView from "../hooks/useInView.js";

// Reusable heading block: a title, an accent bar that draws itself in when
// scrolled into view, and a supporting sentence. Centered by default; pass
// align="left" for list-style sections.
export default function SectionHeading({ title, description, align = "center" }) {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  const isLeft = align === "left";

  return (
    <div ref={ref} className={isLeft ? "max-w-2xl" : "mx-auto max-w-2xl text-center"}>
      <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-4 block h-1 w-16 rounded-full bg-accent transition-transform duration-700 delay-300 ease-out ${
          isLeft ? "origin-left" : "mx-auto origin-center"
        } ${isInView ? "scale-x-100" : "scale-x-0"}`}
      />
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-body">{description}</p>
      )}
    </div>
  );
}
