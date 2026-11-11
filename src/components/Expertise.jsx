import React from 'react';
import {
  Code,
  Server,
  Database,
  Network,
  Bot,
  Cloud,
  Layers,
  Building2,
} from 'lucide-react';
import { expertiseData } from '../data/portfolioData';

const iconMap = {
  Code,
  Server,
  Database,
  Network,
  Bot,
  Cloud,
  Layers,
  Building2,
};

export default function Expertise() {
  const total = expertiseData.length;
  const totalNumber = String(total).padStart(2, "0");

  return (
    <section
      id="expertise"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-24 md:py-32 lg:py-40 transition-colors duration-500"
      aria-labelledby="expertise-title"
    >
      <div className="mx-auto w-full max-w-[1690px] px-5 sm:px-8 lg:px-10">
        {/* ───────── HEADING ───────── */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-[clamp(56px,5vw,96px)] lg:flex-row lg:items-start">
          <div>
            <div className="flex items-center gap-[22px] text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--dark)] lg:text-[clamp(13px,0.85vw,16px)]">
              <span className="h-px w-[46px] bg-[var(--accent)]" />
              <span>02 / Expertise</span>
            </div>

            <h2
              id="expertise-title"
              className="mt-8 text-[42px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--text)] sm:text-[58px] lg:mt-[clamp(32px,3.4vw,64px)] lg:text-[clamp(56px,4.6vw,90px)]"
            >
              What I work with<span className="text-[var(--accent)]">.</span>
            </h2>
          </div>

          <p className="max-w-[440px] text-[16px] leading-[1.8] text-[var(--muted)] lg:mt-1 lg:max-w-[clamp(300px,22vw,440px)] lg:text-[clamp(16px,1.1vw,21px)] lg:leading-[1.75]">
            Engineering expertise across frontend development, backend systems, database
            architecture, enterprise integrations, intelligent automation, cloud, and enterprise platforms.
          </p>
        </div>

        {/* ───────── CARDS ───────── */}
        <div className="grid grid-cols-1 gap-[clamp(20px,1.5vw,28px)] md:grid-cols-2 lg:grid-cols-3">
          {expertiseData.map((item) => {
            const Icon = iconMap[item.iconName] || Code;

            return (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)] hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.12)] sm:p-9 lg:p-[clamp(28px,2.4vw,46px)]"
              >
                <div>
                  {/* number + icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[13px] font-bold tracking-[0.14em] text-[var(--dark)] lg:text-[clamp(13px,0.85vw,16px)]">
                      {item.id} / {totalNumber}
                    </span>
                    <Icon
                      strokeWidth={1.4}
                      className="h-[30px] w-[30px] text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--accent)] lg:h-[clamp(30px,2vw,38px)] lg:w-[clamp(30px,2vw,38px)]"
                    />
                  </div>

                  {/* title */}
                  <h3 className="mt-10 text-[24px] font-bold leading-[1.25] tracking-[-0.02em] text-[var(--text)] lg:mt-[clamp(40px,3.5vw,64px)] lg:text-[clamp(24px,1.8vw,34px)]">
                    {item.title}
                  </h3>

                  {/* tagline */}
                  {item.tagline && (
                    <p className="mt-3 text-[14px] font-semibold leading-[1.5] text-[var(--dark)] opacity-90 sm:text-[15px]">
                      {item.tagline}
                    </p>
                  )}

                  {/* description */}
                  <p className="mt-4 text-[15px] leading-[1.8] text-[var(--muted)] lg:mt-[clamp(14px,1vw,20px)] lg:text-[clamp(15px,1vw,18px)]">
                    {item.description}
                  </p>
                </div>

                {/* technology & expertise tags */}
                <div className="mt-8 border-t border-[var(--border)] pt-6 lg:mt-[clamp(28px,2.4vw,44px)] lg:pt-6">
                  <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Technology & Expertise
                  </div>
                  <div className="flex flex-wrap gap-2 lg:gap-2.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-[12px] font-medium text-[var(--dark)] transition-colors group-hover:border-[var(--accent)] lg:px-[clamp(11px,0.8vw,15px)] lg:py-[clamp(5px,0.5vw,9px)] lg:text-[clamp(11.5px,0.75vw,14px)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
