import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';
import ThemePicker from './ThemePicker';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'expertise', 'projects', 'services', 'approach', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-sm py-3'
          : 'bg-[var(--bg)]/70 backdrop-blur-sm py-4 sm:py-5'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1690px] items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Brand Wordmark */}
        <a
          href="#top"
          className="text-2xl font-bold tracking-tight text-[var(--text)] hover:opacity-90 transition-opacity flex items-center gap-0.5 group"
          onClick={closeMenu}
        >
          <span className="font-heading tracking-tight">{personalInfo.brand}</span>
          <span className="text-[var(--accent)] text-2xl group-hover:scale-125 transition-transform">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[var(--muted)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-200 relative py-1 ${
                  isActive ? 'text-[var(--dark)] font-semibold' : 'hover:text-[var(--dark)]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Color Selector */}
        <div className="hidden md:flex items-center gap-3">
          <ThemePicker />

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--dark)] text-white hover:opacity-90 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemePicker />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[var(--dark)] hover:bg-[var(--surface-soft)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[var(--bg)] border-b border-[var(--border)] px-6 py-6 shadow-xl transition-all duration-200 max-h-[calc(100vh-65px)] overflow-y-auto">
          {personalInfo.availableForWork && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-soft)] text-[var(--dark)] text-xs font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-dot"></span>
              Available for freelance projects
            </div>
          )}

          <nav className="flex flex-col gap-3 text-base font-medium text-[var(--dark)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="py-2.5 px-3 rounded-lg hover:bg-[var(--surface-soft)] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[var(--accent)] text-xs">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 bg-[var(--dark)] text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-md active:opacity-90"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
