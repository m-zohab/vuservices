import { Link } from "react-router-dom";
import { GraduationCap, Mail, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "../data/siteData.js";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  const linkClass =
    "inline-flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1 hover:text-brand";

  return (
    <footer className="border-t border-line bg-page-alt">
      <div className="section-container flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Link to="/" className="group flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white transition-transform duration-300 group-hover:rotate-12">
              <GraduationCap size={16} strokeWidth={2.25} />
            </span>
            <span className="font-display text-base font-bold text-heading">
              {siteConfig.brandName}
            </span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-body">
            {siteConfig.tagline} — helping Virtual University students with
            FYPs, assignments, quizzes and LMS handling.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div>
            <p className="text-sm font-semibold text-heading">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-body">
              {navLinks
                .filter((link) => link.to !== "/")
                .map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-heading">Get in touch</p>
            <ul className="mt-3 space-y-2 text-sm text-body">
              <li>
                <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                  <Mail size={14} /> Email
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <p className="section-container text-center text-xs text-muted">
          © {year} {siteConfig.brandName}. Built by two VU students, for VU
          students.
        </p>
      </div>
    </footer>
  );
}
