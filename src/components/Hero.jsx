import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  ArrowRight,
  Lightbulb,
  BrainCircuit,
  Code2,
  ShieldCheck,
  Play,
  Pause,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const steps = [
  {
    label: "Discover",
    icon: Lightbulb,
    title: "Understand before you build",
    desc: "Understand business goals, challenges, user needs, and requirements to identify the right opportunities and define a clear direction.",
  },
  {
    label: "Architect",
    icon: BrainCircuit,
    title: "Blueprint for scalability.",
    desc: "Design scalable, secure, and future-ready architectures with the right technology stack and integration strategy.",
  },
  {
    label: "Engineer",
    icon: Code2,
    title: "Build with precision",
    desc: "Transform ideas into robust, enterprise-grade solutions through seamless development, integration, and deployment.",
  },
  {
    label: "Optimize",
    icon: ShieldCheck,
    title: "Evolve for excellence",
    desc: "Continuously enhance performance, security, reliability, and scalability to maximize business value and long-term impact.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;

    const id = setInterval(() => {
      setActive((a) => (a + 1) % steps.length);
    }, 3500);

    return () => clearInterval(id);
  }, [playing]);

  const next = () => {
    setActive((a) => (a + 1) % steps.length);
  };

  const current = steps[active];
  const CurrentIcon = current.icon;

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden border-b border-[var(--border)] pt-[100px] lg:pt-[105px] transition-colors duration-500"
      aria-labelledby="hero-title"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--surface-soft)]/50 blur-3xl" />

      {/* MAIN CONTENT */}
      <div className="mx-auto flex w-full max-w-[1690px] flex-1 items-start px-5 py-5 sm:px-8 lg:px-10 lg:py-3">
        <div className="grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_clamp(390px,34vw,570px)] lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="pt-1">
            {/* Availability */}
            {personalInfo.availableForWork && (
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[var(--surface-soft)]/80 py-1 pl-1 pr-3.5 shadow-sm">
                <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[var(--border)]">
                  <span className="pulse-dot h-[10px] w-[10px] rounded-full bg-[var(--accent)]" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--dark)] sm:text-[12px]">
                  AVAILABLE FOR STRATEGIC TECHNOLOGY & FREELANCE ENGAGEMENTS
                </span>
              </div>
            )}

            {/* Main Heading */}
            <h1
              id="hero-title"
              className="mt-5 text-[36px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[var(--text)] sm:text-[50px] lg:text-[clamp(50px,4.1vw,76px)]"
            >
              Engineering complex
              <br />
              ideas into
              <br />
              <span className="font-accent pr-2 font-normal italic text-[var(--accent)]">
                scalable digital solutions.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[650px] text-[15px] leading-[1.75] text-[var(--muted)] sm:text-[17px] sm:leading-[1.8]">
              I'm{" "}
              <strong className="font-semibold text-[var(--text)]">
                {personalInfo.name}
              </strong>
              , a technology professional with 12+ years of experience and a track record of successfully delivering 50+ enterprise projects. I specialize in transforming complex business requirements into scalable software solutions through strategic architecture, full-stack engineering, enterprise integrations, and AI-driven innovation.
              From defining technology strategy and designing robust architectures to leading end-to-end development and deployment, I bring together technical expertise and business understanding to deliver solutions that create measurable value.
            </p>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--dark)] sm:text-[12px]">
                  12+ Years Experience | 50+ Enterprise Projects | End-to-End Solution Delivery
                </span>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-3 rounded-full bg-[var(--dark)] px-6 py-3.5 text-[15px] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
              >
                <span>Start a project</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-[var(--text)] transition-colors hover:text-[var(--accent)]"
              >
                <span>Explore my work</span>
                <ArrowDownRight size={17} />
              </a>
            </div>
          </div>

          {/* RIGHT: ENGINEERING PROCESS CARD */}
          <div className="w-full rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] sm:p-6 lg:p-7 transition-colors duration-500">
            {/* Card Header */}
            <div className="flex items-center justify-between gap-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--dark)] sm:text-[12px]">
                My engineering process
              </p>

              <span className="font-mono text-[11px] text-[var(--muted)]">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(steps.length).padStart(2, "0")}
              </span>
            </div>

            {/* Step Tiles */}
            <div className="mt-5 grid grid-cols-4 gap-2">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const on = i === active;

                return (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`flex h-[72px] flex-col items-center justify-center gap-2 rounded-[12px] border text-[10px] font-semibold transition-all duration-200 sm:h-[82px] sm:text-[11px] ${on
                        ? "border-[var(--dark)] bg-[var(--dark)] text-white"
                        : "border-[var(--border)] bg-[var(--bg)] text-[var(--muted)] hover:bg-[var(--surface-soft)]"
                      }`}
                  >
                    <Icon size={21} strokeWidth={1.6} />
                    {s.label}
                  </button>
                );
              })}
            </div>

            {/* Progress Bars */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {steps.map((s, i) => (
                <span
                  key={s.label}
                  className={`h-[3px] rounded-full transition-colors duration-300 ${i <= active ? "bg-[var(--accent)]" : "bg-[var(--border)]"
                    }`}
                />
              ))}
            </div>

            {/* Step Details */}
            <div className="mt-6 min-h-[190px] rounded-[16px] bg-[var(--surface-soft)]/60 p-5 transition-colors duration-500">
              <div className="flex items-start justify-between">
                <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[var(--surface)] text-[var(--accent)] shadow-sm">
                  <CurrentIcon size={23} strokeWidth={1.6} />
                </span>

                <span className="font-mono text-[11px] tracking-wider text-[var(--muted)]">
                  STEP {String(active + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.01em] text-[var(--text)] sm:text-[22px]">
                {current.title}
              </h3>

              <p className="mt-2 text-[13px] leading-[1.8] text-[var(--muted)] sm:text-[14px]">
                {current.desc}
              </p>
            </div>

            {/* Card Footer */}
            <div className="mt-5 flex items-center justify-between gap-2">
              <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--muted)] sm:text-[10px]">
                From problem to solution
              </span>

              <div className="flex items-center gap-2">
                {/* Play / Pause */}
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  aria-label={playing ? "Pause autoplay" : "Play autoplay"}
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-colors hover:bg-[var(--surface-soft)]"
                >
                  {playing ? <Pause size={15} /> : <Play size={15} />}
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-[44px] items-center gap-2 rounded-full border border-[var(--border)] px-4 text-[14px] text-[var(--dark)] transition-colors hover:bg-[var(--surface-soft)]"
                >
                  Next
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-[1690px] flex-col items-center justify-between gap-3 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)] sm:flex-row sm:px-8 lg:px-10">
          <span>{personalInfo.shortRole}</span>

          <span className="text-center">
            Web / Mobile / Backend / Systems / AI
          </span>

          <a
            href="#about"
            aria-label="Scroll to about"
            className="text-[var(--dark)] transition-colors hover:text-[var(--accent)]"
          >
            <ArrowDownRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
