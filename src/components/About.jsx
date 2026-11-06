import React from "react";
import { Check } from "lucide-react";
import { principles } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-[var(--border)] bg-[var(--surface)] py-20 md:py-28 lg:py-36 transition-colors duration-500"
      aria-labelledby="about-title"
    >
      <div className="mx-auto w-full max-w-[1690px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-12">
          {/* ───────── LEFT: kicker (vertically centered) ───────── */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-[22px] text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--dark)] lg:text-[15px]">
              <span className="h-px w-[46px] bg-[var(--accent)]" />
              <span>01 / About</span>
            </div>
          </div>

          {/* ───────── RIGHT: content ───────── */}
          <div className="lg:col-span-7">
            <h2
              id="about-title"
              className="text-[40px] font-extrabold leading-[1.2] tracking-[-0.04em] text-[var(--text)] sm:text-[56px] lg:text-[clamp(56px,4.6vw,88px)]"
            >
              Good software is more than{" "}
              <span className="text-[var(--muted)]">just code.</span>
            </h2>

            <p className="mt-9 max-w-[960px] text-[20px] font-medium leading-[1.75] text-[var(--text)] sm:text-[24px] lg:text-[clamp(22px,1.55vw,29px)]">
              I enjoy turning complex requirements into clear, reliable systems
              that connect people, processes, data, and technology.
            </p>

            <p className="mt-7 max-w-[940px] text-[17px] leading-[1.95] text-[var(--muted)] lg:text-[clamp(18px,1.2vw,22px)]">
              My work spans full-stack applications, automation-driven business
              platforms, backend services, real-time operations, communication
              systems, and AI-enabled workflows. I approach each project with
              attention to architecture, security, maintainability, and the
              practical problems the software needs to solve.
            </p>

            {/* Tick points */}
            <ul className="mt-12 flex max-w-[720px] flex-wrap gap-x-12 gap-y-6">
              {principles.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-[16px] font-semibold text-[var(--text)] lg:text-[clamp(15px,0.95vw,18px)]"
                >
                  <Check size={22} strokeWidth={1.8} className="shrink-0 text-[var(--accent)]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
