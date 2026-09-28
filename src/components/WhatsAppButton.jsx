import { MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteData.js";

export default function WhatsAppButton() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      {/* Expanding attention ring — respects prefers-reduced-motion via index.css */}
      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-ok" />

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-ok text-white shadow-lift transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
        <MessageCircle size={26} fill="white" strokeWidth={0} />
      </span>

      {/* Tooltip on hover (desktop only) */}
      <span className="pointer-events-none absolute right-16 hidden translate-x-2 whitespace-nowrap rounded-lg border border-line bg-surface px-3 py-2 text-xs font-medium text-heading opacity-0 shadow-card transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </a>
  );
}
