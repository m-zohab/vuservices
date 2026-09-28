import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, ShieldCheck, Star } from "lucide-react";
import Reveal from "./Reveal.jsx";
import CountUp from "./CountUp.jsx";
import WordRotator from "./WordRotator.jsx";
import { siteConfig } from "../data/siteData.js";

const STATS = [
  { end: 50, suffix: "+", label: "Projects delivered" },
  { end: 200, suffix: "+", label: "Assignments solved" },
  { text: "24/7", label: "Support on WhatsApp" },
];

const CHECKLIST = ["FYP documentation", "Database schema", "Quiz bank updated"];

const ROTATING_WORDS = [
  "Assignments",
  "GDBs",
  "Quizzes",
  "LMS work",
  "Final year projects",
];

export default function Hero() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-page pb-20 pt-14 lg:pb-28 lg:pt-20">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -right-24 -top-10 h-96 w-96 animate-drift rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 animate-drift-alt rounded-full bg-accent/20 blur-3xl" />

      <div className="section-container relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* ── Left: copy & CTAs ───────────────────────────────────────── */}
        <div>
          <Reveal direction="down">
            <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand">
              Virtual University project & academic partners
            </span>
          </Reveal>

          <Reveal direction="up" delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Your ultimate{" "}
              <span className="animate-gradient-x bg-gradient-to-r from-brand via-azure to-brand bg-[length:200%_auto] bg-clip-text text-transparent">
                academic & project partners
              </span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={160}>
            <p className="mt-5 text-xl font-semibold text-heading">
              We take care of your <WordRotator words={ROTATING_WORDS} />
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-body">
              We help VU students finish strong — final year project
              development, assignment & quiz solutions, and complete LMS
              handling, all delivered on time and explained clearly so you
              understand every part of the work.
            </p>
          </Reveal>

          <Reveal direction="up" delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ok"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <Link to="/projects" className="btn-outline !py-3.5">
                View our work
              </Link>
            </div>
          </Reveal>

          {/* Trust stats — numbers count up when scrolled into view */}
          <Reveal direction="up" delay={320}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-heading sm:text-3xl">
                    {stat.text ? (
                      stat.text
                    ) : (
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* ── Right: decorative "project tracker" mockup ─────────────── */}
        <Reveal direction="right" delay={160} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-card">
            <div className="flex items-center gap-1.5 border-b border-line pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-2 text-xs text-muted">project-tracker.vu</span>
            </div>

            <ul className="mt-4 space-y-3">
              {/* Checklist rows tick in one after another */}
              {CHECKLIST.map((label, i) => (
                <li
                  key={label}
                  className="flex animate-pop-in items-center gap-3 rounded-xl bg-page px-3.5 py-3"
                  style={{ animationDelay: `${700 + i * 250}ms` }}
                >
                  <CheckCircle2 size={18} className="shrink-0 text-ok" />
                  <span className="text-sm font-medium text-heading">{label}</span>
                </li>
              ))}

              {/* In-progress row with an animated fill bar */}
              <li
                className="animate-pop-in rounded-xl bg-brand-soft/60 px-3.5 py-3"
                style={{ animationDelay: `${700 + CHECKLIST.length * 250}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-heading">
                    LMS assignments
                  </span>
                  <span className="text-xs font-medium text-muted">In progress</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
                  <div className="h-full animate-fill-bar rounded-full bg-gradient-to-r from-brand to-azure" />
                </div>
              </li>
            </ul>
          </div>

          {/* Floating badge: top-right */}
          <div className="absolute -right-4 -top-6 hidden animate-float items-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 shadow-card sm:flex">
            <ShieldCheck size={20} className="text-brand" />
            <div className="text-xs">
              <p className="font-semibold text-heading">100% confidential</p>
              <p className="text-muted">Your work stays private</p>
            </div>
          </div>

          {/* Floating badge: bottom-left */}
          <div
            className="absolute -bottom-6 -left-4 hidden animate-float items-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 shadow-card sm:flex"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-xs font-semibold text-heading">
              Trusted by 50+ VU students
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
