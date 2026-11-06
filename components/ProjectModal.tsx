'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  ExternalLink,
  Globe,
  Terminal,
  X,
} from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#112250]/60 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative bg-[#F5F4F0] border border-[#BEB7A7] rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl z-10 my-8 animate-modal-in"
      >
        <div className="bg-[#112250] px-4 py-3 border-b border-[#3B507D] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]"></div>
            <span className="text-xs font-mono text-[#E7E2CE] ml-3 hidden sm:inline">
              https://{project.browserTitle}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1 rounded-lg text-[#E7E2CE] hover:text-[#F5F4F0] hover:bg-[#3B507D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          <div className="mb-6 rounded-xl border border-[#BEB7A7] overflow-hidden bg-[#112250]">
            {project.image ? (
              <div className="w-full">
                <div className="bg-[#112250] px-4 py-2 border-b border-[#3B507D] flex justify-between items-center text-xs text-[#E7E2CE]">
                  <span>Captura del proyecto</span>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:text-[#F5F4F0]"
                    >
                      Abrir en pestaña nueva <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <div className="relative w-full aspect-video bg-[#112250]">
                  <Image
                    src={project.image}
                    alt={`Captura de ${project.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ) : project.isDeployed && project.demoUrl ? (
              <div className="w-full">
                <div className="bg-[#112250] px-4 py-2 border-b border-[#3B507D] flex justify-between items-center text-xs text-[#E7E2CE]">
                  <span>Iframe en vivo (App interactiva)</span>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-[#F5F4F0]"
                  >
                    Abrir en pestaña nueva <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="relative w-full h-[320px] bg-white">
                  <iframe
                    src={project.demoUrl}
                    title={project.title}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              <div className="p-8 text-center bg-[#E7E2CE] text-[#3B507D]">
                <Terminal className="w-12 h-12 text-[#3B507D] mx-auto mb-3" />
                <h4 className="text-lg font-bold text-[#112250] mb-1">
                  Proyecto de Consola / Repositorio Backend
                </h4>
                <p className="text-sm max-w-md mx-auto mb-4">
                  Este proyecto no requiere interfaz gráfica web. Puedes inspeccionar
                  la arquitectura del código fuente directamente en GitHub.
                </p>
              </div>
            )}
          </div>

          <h2
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-bold text-[#112250] mb-3"
          >
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#E7E2CE] text-[#112250] border border-[#BEB7A7] rounded-md text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-6 text-[#3B507D] text-sm leading-relaxed mb-8">
            <div>
              <h4 className="text-xs font-mono uppercase text-[#112250] tracking-wider mb-2">
                Descripción del Proyecto
              </h4>
              <p className="text-[#112250]/90 text-base">{project.fullDescription}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-[#112250] tracking-wider mb-2">
                Arquitectura & Detalles Técnicos
              </h4>
              <ul className="space-y-2">
                {project.architecture.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#112250]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#3B507D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#BEB7A7]">
            {project.isDeployed && project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-[#112250] hover:bg-[#3B507D] text-[#F5F4F0] rounded-xl font-semibold text-sm flex items-center gap-2 shadow-md transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Ver Proyecto en Vivo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-[#E7E2CE] hover:bg-[#BEB7A7] text-[#112250] border border-[#BEB7A7] rounded-xl font-semibold text-sm flex items-center gap-2 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Repositorio GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}