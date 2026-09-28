// An endlessly scrolling strip of short labels. The list is rendered twice
// and the track slides by exactly half its width, so the loop is seamless.
// Pauses while hovered.
export default function Marquee({ items }) {
  const loop = [...items, ...items];

  return (
    <div className="border-y border-line bg-page-alt">
      <div className="group overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-10 pr-10 font-display text-sm font-semibold text-body"
            >
              {item}
              <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
