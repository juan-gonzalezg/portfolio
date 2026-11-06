'use client';

import { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { PROFILE } from '@/data/profile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F4F0]/95 backdrop-blur-md border-b border-[#BEB7A7] py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-bold text-lg tracking-tight text-[#112250] group-hover:text-[#3B507D] transition-colors">
            {PROFILE.displayName}
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#3B507D]">
          <a href="#projects" className="hover:text-[#112250] transition-colors">
            Proyectos
          </a>
          <a href="#about" className="hover:text-[#112250] transition-colors">
            Sobre Mí
          </a>
          <a href="#certifications" className="hover:text-[#112250] transition-colors">
            Certificaciones
          </a>
          <a href="#contact" className="hover:text-[#112250] transition-colors">
            Contacto
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-[#3B507D] hover:text-[#112250] hover:bg-[#E7E2CE] rounded-lg transition-colors"
            title="GitHub"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-[#3B507D] hover:text-[#112250] hover:bg-[#E7E2CE] rounded-lg transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="#projects"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#112250] hover:bg-[#3B507D] text-[#F5F4F0] rounded-lg text-sm font-semibold shadow-md transition-all hover:scale-[1.02]"
          >
            <FileText className="w-4 h-4" />
            <span>Ver Proyectos</span>
          </a>
        </div>
      </div>
    </nav>
  );
}