import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-light-navy/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-5xl">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-serif font-bold text-lightest-slate hover:text-accent transition-colors">
            Rasel Meya
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link: NavLink, index) => (
              <a key={index} href={link.href} className="text-sm text-light-slate hover:text-accent transition-colors">
                {link.name}
              </a>
            ))}
            <a href="/resume/rasel_meya_resume.pdf" download="rasel_meya_resume.pdf" className="text-sm text-accent border border-accent rounded-md px-4 py-2 hover:bg-accent/10 transition-colors">
              Download CV
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-lightest-slate focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-light-navy`}>
        <nav className="flex flex-col items-center space-y-4 py-4">
          {NAV_LINKS.map((link: NavLink, index) => (
            <a key={index} href={link.href} onClick={() => setMenuOpen(false)} className="text-light-slate hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <a href="/resume/rasel_meya_resume.pdf" download="rasel_meya_resume.pdf" className="text-accent border border-accent rounded-md px-4 py-2 hover:bg-accent/10 transition-colors">
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;