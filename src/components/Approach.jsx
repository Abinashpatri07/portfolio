import React from "react";
import { approachSteps } from "../data/portfolioData";

export default function Approach() {
  return (
    <section
      id="approach"
      className="border-b border-[var(--border)] bg-[var(--surface)] py-24 md:py-32 lg:py-40 transition-colors duration-500"
      aria-labelledby="approach-title"
    >
      <div className="mx-auto w-full max-w-[1690px] px-5 sm:px-8 lg:px-10">
        {/* ───────── HEADING ───────── */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:mb-[clamp(72px,7vw,136px)] lg:flex-row lg:items-start">
          <div>
            <div className="flex items-center gap-[22px] text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--dark)] lg:text-[clamp(13px,0.85vw,16px)]">
              <span className="h-px w-[46px] bg-[var(--accent)]" />
              <span>05 / Approach</span>
            </div>

            <h2
              id="approach-title"
              className="mt-8 text-[42px] font-extrabold leading-[1.15] tracking-[-0.045em] text-[var(--text)] sm:text-[58px] lg:mt-[clamp(28px,2.4vw,46px)] lg:text-[clamp(56px,4.6vw,90px)] lg:leading-[1.14]"
            >
              Simple process.
              <br />
              <span className="text-[var(--muted)]">Strong foundations.</span>
            </h2>
          </div>

          <p className="max-w-[420px] text-[16px] leading-[1.8] text-[var(--muted)] lg:mt-[clamp(24px,2vw,40px)] lg:max-w-[clamp(300px,21vw,410px)] lg:text-[clamp(16px,1.1vw,21px)] lg:leading-[1.75]">
            A practical engineering process that keeps requirements,
            architecture, implementation, and reliability connected.
          </p>
        </div>

        {/* ───────── 4 STEPS (open columns, original clean layout) ───────── */}
        <div className="grid grid-cols-1 gap-x-[clamp(24px,2.2vw,42px)] gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {approachSteps.map((step, index) => (
            <article
              key={step.title}
              className="group border-t border-[var(--border)] pt-9 lg:pt-[clamp(36px,2.8vw,54px)]"
            >
              <span className="block font-mono text-[14px] font-bold tracking-[0.12em] text-[var(--accent)] lg:text-[clamp(14px,0.9vw,17px)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-14 text-[28px] font-bold leading-[1.2] tracking-[-0.03em] text-[var(--text)] lg:mt-[clamp(56px,4.6vw,88px)] lg:text-[clamp(28px,2vw,38px)]">
                {step.title}
              </h3>

              <p className="mt-5 text-[16px] leading-[1.95] text-[var(--muted)] lg:mt-[clamp(16px,1.2vw,23px)] lg:text-[clamp(16px,1.1vw,21px)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
