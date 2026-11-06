import { ChevronRight, Mail } from 'lucide-react';
import { PROFILE, TECHNOLOGIES } from '@/data/profile';

export default function Hero() {
  return (
    <section
      id="about"
      className="pt-36 pb-20 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[85vh]"
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#112250] mb-6 leading-[1.1]">
        Juan Alfonzo <br className="hidden sm:inline" />
        <span className="text-[#3B507D]">González Guzmán</span>
      </h1>

      <p className="text-lg sm:text-xl text-[#3B507D] max-w-3xl mb-8 leading-relaxed font-normal">
        <strong className="text-[#112250]">{PROFILE.headline}</strong>. Especializado
        en la construcción de sistemas web robustos, eficientes y orientados a la
        seguridad utilizando{' '}
        <span className="text-[#112250]">React, TypeScript, Express, Python y C++</span>.
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {TECHNOLOGIES.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-[#E7E2CE] text-[#112250] border border-[#BEB7A7] rounded-full text-xs font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <a
          href="#projects"
          className="px-6 py-3.5 bg-[#112250] hover:bg-[#3B507D] text-[#F5F4F0] rounded-xl font-semibold shadow-lg shadow-[#112250]/20 transition-all flex items-center gap-2 hover:translate-y-[-2px]"
        >
          <span>Explorar Proyectos</span>
          <ChevronRight className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="px-6 py-3.5 bg-[#E7E2CE] hover:bg-[#BEB7A7] text-[#112250] border border-[#BEB7A7] rounded-xl font-semibold transition-all flex items-center gap-2 hover:translate-y-[-2px]"
        >
          <Mail className="w-4 h-4" />
          <span>Contactar</span>
        </a>
      </div>
    </section>
  );
}