import useInView from "../hooks/useInView.js";

// Wraps any block of content and animates it into place the first time it
// scrolls into the viewport. "direction" controls how it arrives:
//   up    → a gentle rise (default)
//   down  → drops in from above
//   left  → slides in moving left-to-right (used on the About page)
//   right → slides in moving right-to-left
//   zoom  → grows in from slightly smaller
//   fade  → opacity only
const HIDDEN = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "-translate-x-12",
  right: "translate-x-12",
  zoom: "scale-95",
  fade: "",
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const [ref, isInView] = useInView();
  const hidden = HIDDEN[direction] ?? HIDDEN.up;

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        isInView
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `opacity-0 ${hidden}`
      } ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
