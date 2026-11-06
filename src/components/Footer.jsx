import React from 'react';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] text-[var(--muted)] transition-colors duration-500">
      <div className="mx-auto flex w-full max-w-[1690px] flex-col md:flex-row items-center justify-between gap-6 px-5 sm:px-8 lg:px-10 py-10 text-center md:text-left">
        <a href="#top" className="text-2xl font-bold tracking-tight text-[var(--text)] flex items-center justify-center md:justify-start">
          <span className="font-heading tracking-tight">{personalInfo.brand}</span>
          <span className="text-[var(--accent)]">.</span>
        </a>

        <p className="text-[13px] sm:text-[14px]">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex justify-center md:justify-end">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--accent)] hover:bg-[var(--dark)] hover:text-white transition-all shadow-sm"
            aria-label={`Email ${personalInfo.name}`}
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
