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
          ? 'bg-[#071524]/95 backdrop-blur-md border-b border-[#1E3653] py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-bold text-lg tracking-tight text-[#F0D4BF] group-hover:text-white transition-colors">
            {PROFILE.displayName}
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#A4B5C4]">
          <a href="#projects" className="hover:text-[#F0D4BF] transition-colors">
            Proyectos
          </a>
          <a href="#about" className="hover:text-[#F0D4BF] transition-colors">
            Sobre Mí
          </a>
          <a href="#certifications" className="hover:text-[#F0D4BF] transition-colors">
            Certificaciones
          </a>
          <a href="#contact" className="hover:text-[#F0D4BF] transition-colors">
            Contacto
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-[#A4B5C4] hover:text-[#F0D4BF] hover:bg-[#1E3653] rounded-lg transition-colors"
            title="GitHub"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-[#A4B5C4] hover:text-[#F0D4BF] hover:bg-[#1E3653] rounded-lg transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="#projects"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#864C2C] hover:bg-[#9c5833] text-[#F0D4BF] rounded-lg text-sm font-semibold shadow-md transition-all hover:scale-[1.02]"
          >
            <FileText className="w-4 h-4" />
            <span>Ver Proyectos</span>
          </a>
        </div>
      </div>
    </nav>
  );
}