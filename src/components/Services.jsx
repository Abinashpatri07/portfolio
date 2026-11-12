import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 lg:py-36 bg-[var(--dark)] text-white transition-colors duration-500"
      aria-labelledby="services-title"
    >
      <div className="mx-auto w-full max-w-[1690px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-[22px] text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--accent-light)] mb-5">
              <span className="h-px w-[46px] bg-[var(--accent-light)]" />
              <span>04 / SERVICES</span>
            </div>

            <h2
              id="services-title"
              className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-[50px] lg:text-[clamp(50px,4.1vw,76px)]"
            >
              What I can{' '}
              <span className="font-accent pr-2 font-normal italic text-[var(--accent-light)]">
                build
              </span>{' '}
              for you.
            </h2>

            <p className="mt-6 text-[15px] sm:text-[17px] leading-[1.8] text-white/80 max-w-[480px]">
              From focused applications to integrated platforms, I build software around real operational needs—combining thoughtful interfaces, reliable backend systems, and the right integrations for each project.
            </p>

            <div className="mt-8">
              {/* <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[var(--bg)] text-[var(--dark)] hover:opacity-90 px-6 py-3.5 rounded-full font-semibold text-[15px] shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Discuss your project</span>
                <ArrowUpRight size={17} />
              </a> */}
            </div>
          </div>

          {/* Right Column: Service Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {servicesData.map((service, index) => {
              const num = String(index + 1).padStart(2, '0');
              return (
                <article
                  key={service.title}
                  className="group py-6 sm:py-7 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-6 transition-all duration-200"
                >
                  <span className="font-mono text-[12px] font-bold tracking-[0.14em] text-[var(--accent-light)] shrink-0 pt-1">
                    {num}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-white group-hover:text-[var(--accent-light)] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] leading-[1.8] text-white/70">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 pt-1">
                    <ArrowUpRight size={18} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
