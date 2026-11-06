import React from "react";
import { ArrowUpRight, ExternalLink, Globe } from "lucide-react";
import { projectsData } from "../data/portfolioData";
import ProjectMockup from "./ProjectMockup";

export default function Projects() {
  const total = projectsData.length;
  const totalNumber = String(total).padStart(2, "0");

  /* 2 columns, masonry style matching reference site:
     pehle 3 projects left me (Background Verification, Corrugation, Anjali Infra), 
     baaki 2 right me (Plant Machine ERP, Referral & Coupon Platform) */
  const half = Math.ceil(total / 2);
  const columns = [projectsData.slice(0, half), projectsData.slice(half)];

  return (
    <section
      id="projects"
      className="border-b border-[var(--border)] bg-[var(--surface)] py-24 md:py-32 lg:py-40 transition-colors duration-500"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto w-full max-w-[1690px] px-5 sm:px-8 lg:px-10">
        {/* ───────── HEADING ───────── */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-[clamp(56px,5vw,96px)] lg:flex-row lg:items-start">
          <div>
            <div className="flex items-center gap-[22px] text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--dark)] lg:text-[clamp(13px,0.85vw,16px)]">
              <span className="h-px w-[46px] bg-[var(--accent)]" />
              <span>03 / Selected Work</span>
            </div>

            <h2
              id="projects-title"
              className="mt-8 text-[42px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--text)] sm:text-[58px] lg:mt-[clamp(32px,3.4vw,64px)] lg:text-[clamp(56px,4.6vw,90px)]"
            >
              Things I've built<span className="text-[var(--accent)]">.</span>
            </h2>
          </div>

          <p className="max-w-[420px] text-[16px] leading-[1.8] text-[var(--muted)] lg:mt-1 lg:max-w-[clamp(300px,21vw,410px)] lg:text-[clamp(16px,1.1vw,21px)] lg:leading-[1.75]">
            Engineering work across enterprise verification platforms, industrial
            packaging ERP, regional infrastructure, factory machine IoT telemetry,
            and growth engines.
          </p>
        </div>

        {/* ───────── PROJECT COLUMNS (2-COL MASONRY) ───────── */}
        <div className="grid grid-cols-1 items-start gap-y-[clamp(24px,2vw,38px)] lg:grid-cols-2 lg:gap-x-[clamp(24px,2vw,38px)]">
          {columns.map((col, c) => (
            <div key={c} className="flex flex-col gap-[clamp(24px,2vw,38px)]">
              {col.map((project) => (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.12)]"
                >
                  {/* ── Mockup area ── */}
                  <div className="relative flex w-full items-center justify-center bg-[var(--surface-soft)] px-5 pb-10 pt-24 sm:px-8 lg:px-[clamp(24px,2vw,40px)] lg:pb-[clamp(40px,2.5vw,48px)] lg:pt-[clamp(96px,6.1vw,116px)] transition-colors duration-500">
                    {/* Platform pill (top-left) */}
                    <span className="absolute left-5 top-5 z-20 inline-flex items-center rounded-full bg-[var(--surface)] px-5 py-3 text-[14px] font-semibold text-[var(--dark)] shadow-sm sm:left-7 sm:top-6 lg:left-[clamp(24px,1.5vw,29px)] lg:top-[clamp(22px,1.4vw,26px)] lg:px-[clamp(18px,1.2vw,23px)] lg:py-[clamp(10px,0.8vw,14px)] lg:text-[clamp(13px,0.85vw,16px)] border border-[var(--border)]">
                      {project.platformLabel || project.category}
                    </span>

                    {/* Live site indicator pill (top-right) if liveUrl exists */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link absolute right-5 top-5 z-20 inline-flex items-center gap-2 rounded-full bg-[var(--surface)]/95 backdrop-blur-sm px-4 py-2 text-[12px] font-bold text-[var(--dark)] border border-[var(--border)] shadow-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                        title={`Open ${project.title} live in new tab`}
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Live Site</span>
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>
                    )}

                    <div className="relative z-10 flex w-full items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer"
                          title={`Open live site: ${project.title}`}
                        >
                          <ProjectMockup variant={project.visualVariant} />
                        </a>
                      ) : (
                        <ProjectMockup variant={project.visualVariant} />
                      )}
                    </div>
                  </div>

                  {/* ── Content ── */}
                  <div className="p-6 sm:p-8 lg:p-[clamp(28px,2.4vw,46px)]">
                    {/* title + number */}
                    <div className="flex items-start justify-between gap-4">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/title inline-flex items-center gap-2 text-[26px] font-bold leading-[1.2] tracking-[-0.03em] text-[var(--text)] hover:text-[var(--accent)] transition-colors lg:text-[clamp(26px,1.9vw,36px)]"
                        >
                          <span>{project.title}</span>
                          <ArrowUpRight
                            size={22}
                            className="shrink-0 text-[var(--accent)] opacity-60 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all"
                          />
                        </a>
                      ) : (
                        <h3 className="text-[26px] font-bold leading-[1.2] tracking-[-0.03em] text-[var(--text)] lg:text-[clamp(26px,1.9vw,36px)]">
                          {project.title}
                        </h3>
                      )}
                      <span className="shrink-0 pt-2 font-mono text-[13px] font-bold tracking-[0.14em] text-[var(--muted)] lg:text-[clamp(13px,0.85vw,16px)]">
                        {project.id} / {totalNumber}
                      </span>
                    </div>

                    {/* Live URL Pill if liveUrl exists */}
                    {project.liveUrl && (
                      <div className="mt-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                        >
                          <Globe size={14} className="text-[var(--accent)]" />
                          <span className="underline decoration-dotted underline-offset-4">
                            {project.displayUrl || project.liveUrl}
                          </span>
                        </a>
                      </div>
                    )}

                    {/* description */}
                    <p className="mt-6 text-[16px] leading-[1.9] text-[var(--muted)] lg:mt-[clamp(24px,1.8vw,34px)] lg:text-[clamp(16px,1.1vw,21px)]">
                      {project.description}
                    </p>

                    {/* bullets */}
                    {project.features && project.features.length > 0 && (
                      <ul className="mt-8 space-y-[14px] lg:mt-[clamp(32px,2.8vw,54px)]">
                        {project.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <span className="mt-[0.65em] h-[9px] w-[9px] shrink-0 rounded-full bg-[var(--accent)]" />
                            <span className="text-[15px] leading-[1.6] text-[var(--text)] lg:text-[clamp(15px,1vw,19px)]">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* tags */}
                    <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--border)] pt-7 lg:mt-[clamp(32px,2.6vw,50px)] lg:pt-[clamp(26px,1.7vw,32px)]">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-lg bg-[var(--surface-soft)] px-3.5 py-2 text-[13px] font-medium text-[var(--dark)] lg:px-[clamp(13px,0.9vw,17px)] lg:py-[clamp(7px,0.6vw,11px)] lg:text-[clamp(13px,0.9vw,17px)] border border-[var(--border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Live Link Button (if liveUrl exists) */}
                    {project.liveUrl && (
                      <div className="mt-8 pt-6 border-t border-[var(--border)]/70 flex items-center justify-between">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[var(--dark)] px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm hover:bg-[var(--accent)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <span>Open Live Website</span>
                          <ArrowUpRight size={15} />
                        </a>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                        >
                          <span>Visit site</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
