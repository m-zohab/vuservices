import { Github, Linkedin } from "lucide-react";

export default function PartnerCard({ partner }) {
  const { name, semester, bio, image, initials, github, linkedin } = partner;

  const socialClass =
    "flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:bg-brand hover:text-white";

  return (
    <div className="group card-hover relative overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-soft">
      {/* Left accent stripe — the "ID card" motif */}
      <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-accent to-brand" />

      <div className="flex items-center gap-4 pl-2">
        {/* Shows a real photo if "image" is provided in siteData.js,
            otherwise falls back to initials. */}
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-20 w-20 rounded-full object-cover ring-4 ring-brand-soft transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-azure text-xl font-bold text-white ring-4 ring-brand-soft transition-transform duration-500 group-hover:scale-105">
            {initials}
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold text-heading">{name}</h3>
          <span className="mt-1 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong">
            {semester}
          </span>
        </div>
      </div>

      <p className="mt-6 pl-2 text-sm leading-relaxed text-body">{bio}</p>

      {/* Each icon only renders when its URL is a non-empty string. */}
      {(github || linkedin) && (
        <div className="mt-6 flex items-center gap-3 border-t border-line pl-2 pt-5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s GitHub profile`}
              className={socialClass}
            >
              <Github size={18} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s LinkedIn profile`}
              className={socialClass}
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
