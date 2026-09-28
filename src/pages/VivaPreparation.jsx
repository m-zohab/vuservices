import {
  Code2,
  ListChecks,
  MessageCircle,
  Mic,
  Presentation,
  Sparkles,
} from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import useInView from "../hooks/useInView.js";
import { siteConfig, vivaPrep } from "../data/siteData.js";

const ICONS = [Mic, ListChecks, Presentation, Code2, Sparkles];

export default function VivaPreparation() {
  // The timeline's connecting line draws itself top-to-bottom once visible.
  const [timelineRef, timelineInView] = useInView({ threshold: 0.15 });

  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like to book a Final Viva Preparation session."
  )}`;

  return (
    <>
      <SEO
        title="Final Viva Preparation"
        description="Mock viva sessions, an expected question bank, and presentation review to get you ready for your VU final year project defense."
      />
      <PageHero
        eyebrow="Final Viva Preparation"
        title="Walk into your defense having already done it once"
        description={vivaPrep.intro}
      />

      {/* What's included */}
      <section className="bg-page py-20 lg:py-28">
        <div className="section-container">
          <SectionHeading title="What's included" />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {vivaPrep.included.map((item, index) => {
              const Icon = ICONS[index % ICONS.length];
              return (
                <Reveal key={item.title} direction="zoom" delay={index * 90}>
                  <div className="group card-hover flex h-full flex-col rounded-2xl border border-line bg-surface p-7 shadow-soft">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <h3 className="mt-5 font-display text-base font-semibold text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process — a genuine sequence, so numbered steps earn their place */}
      <section className="bg-page-alt py-20 lg:py-28">
        <div className="section-container">
          <SectionHeading
            title="How it works"
            description="Four steps, usually spread across the week leading up to your defense."
          />

          <div ref={timelineRef} className="relative mt-14">
            <div
              aria-hidden="true"
              className={`absolute left-5 top-2 hidden h-[calc(100%-2rem)] w-0.5 origin-top rounded-full bg-gradient-to-b from-brand to-accent transition-transform duration-[1600ms] ease-out sm:block ${
                timelineInView ? "scale-y-100" : "scale-y-0"
              }`}
            />
            <div className="space-y-10">
              {vivaPrep.process.map((item, index) => (
                <Reveal key={item.step} direction="left" delay={index * 140}>
                  <div className="group relative flex gap-6">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white shadow-card transition-transform duration-300 group-hover:scale-110">
                      {index + 1}
                    </span>
                    <div className="pt-1">
                      <h3 className="font-display text-base font-semibold text-heading">
                        {item.step}
                      </h3>
                      <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-body">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-page py-16 lg:py-20">
        <div className="section-container">
          <Reveal direction="zoom">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-surface p-8 shadow-card sm:flex-row sm:items-center sm:p-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                  Book your mock viva
                </h2>
                <p className="mt-2 max-w-md text-body">
                  Tell us your defense date and we'll fit a session in before
                  it.
                </p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ok shrink-0"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
