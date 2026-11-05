import type { KeyboardEvent } from 'react';
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
      className="group bg-[#1E3653] border border-[#305B7E] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#864C2C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#864C2C] flex flex-col justify-between"
    >
      <div>
        <div className="bg-[#071524] border-b border-[#305B7E] overflow-hidden">
          <div className="bg-[#0B1E32] px-4 py-2.5 flex items-center justify-between border-b border-[#1E3653]">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <span className="text-[11px] font-mono text-[#A4B5C4] truncate max-w-[200px] bg-[#071524] px-3 py-0.5 rounded border border-[#1E3653]">
              https://{project.browserTitle}
            </span>
            <Maximize2 className="w-3.5 h-3.5 text-[#A4B5C4] opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="p-6 h-44 bg-gradient-to-br from-[#071524] to-[#1E3653] flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex justify-between items-start z-10">
              <span className="px-2.5 py-1 bg-[#6E3115] text-[#F0D4BF] rounded text-xs font-mono border border-[#864C2C]">
                {project.type}
              </span>
              {project.isDeployed ? (
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Preview
                </span>
              ) : (
                <span className="text-xs text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/30">
                  Repo Local
                </span>
              )}
            </div>

            <div className="z-10">
              <p className="text-xs font-mono text-[#A4B5C4]">
                Click para abrir modal de inspección
              </p>
              <h4 className="text-lg font-bold text-[#F0D4BF] truncate">
                {project.title}
              </h4>
            </div>

            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F0D4BF_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-[#F0D4BF] mb-2 group-hover:text-[#864C2C] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#A4B5C4] text-sm leading-relaxed mb-4">
            {project.shortDescription}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <div className="flex flex-wrap gap-2 border-t border-[#305B7E]/50 pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-[#4F210D] text-[#F0D4BF] rounded text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}