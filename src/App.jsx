import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Services from './components/Services';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-500 selection:bg-[var(--surface-soft)] selection:text-[var(--dark)]">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
