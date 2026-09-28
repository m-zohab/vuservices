import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  ClipboardCheck,
  Code2,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessagesSquare,
  MessageCircle,
  Mic,
} from "lucide-react";
import Hero from "../components/Hero.jsx";
import Marquee from "../components/Marquee.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { services, projects, siteConfig } from "../data/siteData.js";

const ICONS = {
  FileText,
  MessagesSquare,
  ClipboardCheck,
  LayoutDashboard,
  GraduationCap,
  Code2,
  BrainCircuit,
};

const MARQUEE_ITEMS = [...services.map((s) => s.title), "Final Viva Prep"];

export default function Home() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <SEO title="Home" description={siteConfig.defaultDescription} />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-page py-20 lg:py-28">
        <div className="section-container">
          <SectionHeading
            title="What we offer"
            description="Seven ways we help you stay on top of Virtual University coursework — pick one, or let us handle all of it."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = ICONS[service.icon] ?? FileText;
              return (
                <Reveal key={service.id} direction="zoom" delay={index * 70}>
                  <div className="group card-hover flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-6 shadow-soft">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <h3 className="font-display text-base font-semibold text-heading">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-body">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200} className="mt-10 flex justify-center">
            <Link to="/services" className="btn-outline group">
              See all services
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Projects preview ─────────────────────────────────────────── */}
      <section className="bg-page-alt py-20 lg:py-28">
        <div className="section-container">
          <SectionHeading
            title="Work we're proud of"
            description="A sample of final year projects and freelance builds we've delivered across web, mobile, AI/ML and more."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 100}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10 flex justify-center">
            <Link to="/projects" className="btn-outline group">
              See all projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Final Viva Prep highlight ────────────────────────────────── */}
      <section className="bg-page py-20 lg:py-28">
        <div className="section-container grid items-center gap-10 lg:grid-cols-2">
          <Reveal direction="left">
            <span className="inline-flex items-center rounded-full bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent-strong">
              For your FYP defense
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              Final Viva Preparation
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-body">
              A live mock viva on your own project, an expected question
              bank, and honest feedback — so you walk into your real defense
              having already done it once.
            </p>
            <Link to="/viva-preparation" className="btn-primary group mt-6">
              How viva prep works
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="card-hover rounded-2xl border border-line bg-surface p-8 shadow-soft">
              <div className="flex h-12 w-12 animate-float items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                <Mic size={22} />
              </div>
              <p className="mt-5 text-lg font-semibold text-heading">
                "The mock viva caught three questions my actual committee
                asked."
              </p>
              <p className="mt-2 text-sm text-muted">
                What most VU students tell us after their real defense.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="bg-page-alt py-16 lg:py-20">
        <div className="section-container">
          <Reveal direction="zoom">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 shadow-card sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 animate-drift rounded-full bg-accent/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 animate-drift-alt rounded-full bg-brand/15 blur-3xl" />

              <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                    Tell us about your deadline
                  </h2>
                  <p className="mt-2 max-w-md text-body">
                    Most conversations start on WhatsApp and get a reply
                    within a few hours.
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
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
