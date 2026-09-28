import { useState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { siteConfig } from "../data/siteData.js";

const INITIAL_FORM = { name: "", email: "", message: "" };

const inputClass =
  "w-full rounded-xl border border-line bg-page/60 px-4 py-2.5 text-sm text-heading placeholder:text-muted/70 transition-all duration-300 focus:border-brand focus:bg-surface";

const infoCardClass =
  "group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 shadow-soft transition-all duration-300";

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // No backend is wired up yet, so submitting builds a pre-filled mailto:
  // link and opens the visitor's own email client — it works today with
  // zero configuration. To collect messages directly on a server instead,
  // swap this handler for a request to a form service like Formspree or
  // EmailJS (both have generous free tiers and a few lines of setup).
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New inquiry from ${form.name || "the website"}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with VU Services on WhatsApp or email to discuss your assignment, project or LMS course."
      />
      <PageHero
        eyebrow="Contact"
        title="Let's work together"
        description="Tell us about your project, assignment or LMS course — we usually reply within a few hours."
      />

      <section className="bg-page py-16 lg:py-24">
        <div className="section-container grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Direct contact info ─────────────────────────────────── */}
          <div className="space-y-5">
            <Reveal direction="left">
              <a
                href={`mailto:${siteConfig.email}`}
                className={`${infoCardClass} hover:translate-x-1 hover:border-brand/40 hover:shadow-card`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-heading">Email us</p>
                  <p className="text-sm text-body">{siteConfig.email}</p>
                </div>
              </a>
            </Reveal>

            <Reveal direction="left" delay={100}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${infoCardClass} hover:translate-x-1 hover:border-ok/40 hover:shadow-card`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ok-soft text-ok transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-heading">
                    Message us on WhatsApp
                  </p>
                  <p className="text-sm text-body">Fastest way to reach us</p>
                </div>
              </a>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <div className={infoCardClass}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-heading">
                    Virtual University of Pakistan
                  </p>
                  <p className="text-sm text-body">Remote — we work online</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Contact form ────────────────────────────────────────── */}
          <Reveal direction="right" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, course, or deadline..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send message
                </button>

                {submitted && (
                  <p className="flex animate-fade-scale items-center gap-2 text-sm text-ok">
                    <CheckCircle2 size={16} />
                    Your email app should now be open with the message ready
                    to send.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
