import { ChevronRight, Mail } from 'lucide-react';
import { PROFILE, TECHNOLOGIES } from '@/data/profile';

export default function Hero() {
  return (
    <section
      id="about"
      className="pt-36 pb-20 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[85vh]"
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F0D4BF] mb-6 leading-[1.1]">
        Juan Alfonzo <br className="hidden sm:inline" />
        <span className="text-[#864C2C]">González Guzmán</span>
      </h1>

      <p className="text-lg sm:text-xl text-[#A4B5C4] max-w-3xl mb-8 leading-relaxed font-normal">
        <strong className="text-[#F0D4BF]">{PROFILE.headline}</strong>. Especializado
        en la construcción de sistemas web robustos, eficientes y orientados a la
        seguridad utilizando{' '}
        <span className="text-[#F0D4BF]">React, TypeScript, Express, Python y C++</span>.
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {TECHNOLOGIES.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-[#4F210D] text-[#F0D4BF] border border-[#6E3115] rounded-full text-xs font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <a
          href="#projects"
          className="px-6 py-3.5 bg-[#864C2C] hover:bg-[#9c5833] text-[#F0D4BF] rounded-xl font-semibold shadow-lg shadow-[#864C2C]/20 transition-all flex items-center gap-2 hover:translate-y-[-2px]"
        >
          <span>Explorar Proyectos</span>
          <ChevronRight className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="px-6 py-3.5 bg-[#1E3653] hover:bg-[#254469] text-[#F0D4BF] border border-[#305B7E] rounded-xl font-semibold transition-all flex items-center gap-2 hover:translate-y-[-2px]"
        >
          <Mail className="w-4 h-4" />
          <span>Contactar</span>
        </a>
      </div>
    </section>
  );
}