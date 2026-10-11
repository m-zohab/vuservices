import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function PartnerCard({ partner }) {
  const {
    name,
    semester,
    bio,
    image,
    initials,
    github,
    linkedin,
    email,
    whatsapp,
  } = partner;

  const socialClass =
    "flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:bg-brand hover:text-white";

  const whatsappLink = whatsapp
    ? `https://wa.me/${whatsapp.replace(/\D/g, "")}`
    : "";

  return (
    <div className="group card-hover relative overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-soft">
      <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-accent to-brand" />

      {/* Partner profile */}
      <div className="flex items-center gap-4 pl-2">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-brand-soft transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-azure text-xl font-bold text-white ring-4 ring-brand-soft">
            {initials}
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold text-heading">
            {name}
          </h3>

          <span className="mt-1 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong">
            {semester}
          </span>
        </div>
      </div>

      {/* Partner description */}
      <p className="mt-6 pl-2 text-sm leading-relaxed text-body">
        {bio}
      </p>

      {/* Email and WhatsApp */}
      {(email || whatsapp) && (
        <div className="partner-contact">
          {email && (
            <a
              href={`mailto:${email}`}
              aria-label={`Email ${name}`}
              className="partner-contact-btn email-btn"
            >
              <Mail size={18} />
              Email
            </a>
          )}

          {whatsapp && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${name}`}
              className="partner-contact-btn whatsapp-btn"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          )}
        </div>
      )}

      {/* Social media */}
      {(github || linkedin) && (
        <div className="mt-4 flex items-center gap-3 pl-2">
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
