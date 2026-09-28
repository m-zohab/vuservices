import { ImageIcon, PlayCircle } from "lucide-react";

// Soft gradient backgrounds for the thumbnail placeholders, so the grid
// doesn't look flat before real screenshots are added.
const GRADIENTS = [
  "from-brand-soft to-accent-soft",
  "from-accent-soft to-brand-soft",
  "from-brand-soft to-page-alt",
];

export default function ProjectCard({ project, index }) {
  const { title, description, tags, type, category } = project;
  const gradient = GRADIENTS[index % GRADIENTS.length];
  const Icon = type === "video" ? PlayCircle : ImageIcon;

  return (
    <div className="group card-hover overflow-hidden rounded-2xl border border-line bg-surface shadow-soft">
      {/* Thumbnail placeholder — swap for a real <img> or <video> poster. */}
      <div
        className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        {/* Light sweep across the thumbnail on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]"
        />
        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-surface/80 px-3 py-1 text-xs font-medium text-brand backdrop-blur">
            {category}
          </span>
        )}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface/80 text-brand shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon size={type === "video" ? 28 : 24} strokeWidth={1.75} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-heading">{title}</h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-body">{description}</p>
      </div>
    </div>
  );
}
