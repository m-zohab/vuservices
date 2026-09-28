import { Clock, GraduationCap, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PartnerCard from "../components/PartnerCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { partners } from "../data/siteData.js";

const VALUES = [
  {
    icon: Clock,
    title: "On-time, every time",
    description:
      "Deadlines are non-negotiable at VU — we plan backwards from your due date, not the other way round.",
  },
  {
    icon: ShieldCheck,
    title: "100% confidential",
    description:
      "Your project, your name, your details — none of it is shared or reused elsewhere.",
  },
  {
    icon: GraduationCap,
    title: "VU-specific expertise",
    description:
      "We've been through the same LMS, the same GDB windows and the same viva format ourselves.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Meet the two Virtual University students behind VU Services — the people handling your assignments, GDBs, quizzes and final year projects."
      />
      <PageHero
        eyebrow="Who we are"
        title="Two VU students, built into a service"
        description="We turned four semesters of our own coursework into a service that helps other VU students finish theirs — on time, and properly understood."
      />

      <section className="bg-page py-20 lg:py-28">
        <div className="section-container">
          <SectionHeading
            title="Meet the team"
            description="No agency, no middlemen — just the two of us, directly handling your work."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {partners.map((partner, index) => (
              // Each card slides in moving left to right, staggered so the
              // second follows just after the first.
              <Reveal key={partner.id} direction="left" delay={index * 220}>
                <PartnerCard partner={partner} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-page-alt py-20 lg:py-28">
        <div className="section-container">
          <SectionHeading
            title="Why VU students choose us"
            description="We're not a faceless agency — we're accountable to you the same way a classmate would be."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} direction="zoom" delay={index * 120}>
                <div className="group card-hover h-full rounded-2xl border border-line bg-surface p-7 text-center shadow-soft">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                    <value.icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-heading">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
