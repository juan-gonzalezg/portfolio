import type { KeyboardEvent } from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(project);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${project.title}`}
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
      className="group bg-[#E7E2CE] border border-[#BEB7A7] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#112250] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#112250] flex flex-col justify-between"
    >
      <div>
        <div className="bg-[#112250] border-b border-[#3B507D] overflow-hidden">
          <div className="bg-[#112250] px-4 py-2.5 flex items-center justify-between border-b border-[#3B507D]/60">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <span className="text-[11px] font-mono text-[#E7E2CE] truncate max-w-[200px] bg-[#3B507D]/30 px-3 py-0.5 rounded border border-[#3B507D]">
              https://{project.browserTitle}
            </span>
            <Maximize2 className="w-3.5 h-3.5 text-[#BEB7A7] opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="relative h-44 overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={`Captura de ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#112250] to-[#3B507D]"></div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#112250]/90 via-[#112250]/25 to-[#112250]/40"></div>

            <div className="relative z-10 h-full p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="px-2.5 py-1 bg-[#112250]/80 text-[#F5F4F0] rounded text-xs font-mono border border-[#BEB7A7]/40 backdrop-blur-sm">
                  {project.type}
                </span>
                {project.isDeployed ? (
                  <span className="flex items-center gap-1.5 text-xs text-[#E7E2CE] bg-[#112250]/70 px-2.5 py-1 rounded-full border border-[#E7E2CE]/30 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-[#BEB7A7] animate-pulse"></span>
                    Live Preview
                  </span>
                ) : (
                  <span className="text-xs text-[#BEB7A7] bg-[#112250]/70 px-2.5 py-1 rounded-full border border-[#3B507D] backdrop-blur-sm">
                    Repo Local
                  </span>
                )}
              </div>

              <div>
                <p className="text-xs font-mono text-[#BEB7A7]">
                  Click para abrir modal de inspección
                </p>
                <h4 className="text-lg font-bold text-[#F5F4F0] truncate">
                  {project.title}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-[#112250] mb-2 group-hover:text-[#3B507D] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#3B507D] text-sm leading-relaxed mb-4">
            {project.shortDescription}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <div className="flex flex-wrap gap-2 border-t border-[#BEB7A7] pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-[#F5F4F0] text-[#112250] border border-[#BEB7A7]/60 rounded text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}