'use client';

import { useCallback, useMemo, useState } from 'react';
import { PROJECTS_DATA } from '@/data/projects';
import type { Project, ProjectFilter } from '@/types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'web', label: 'Desplegados (Web)' },
  { id: 'systems', label: 'C++ / Java' },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      filter === 'all'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter((project) => project.category === filter),
    [filter]
  );

  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#BEB7A7]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-[#112250] tracking-tight mb-3">
            Sección Proyectos
          </h2>
          <p className="text-[#3B507D] max-w-xl">
            Explora las demostraciones estilizadas e interactivas de mis desarrollos
            web y lógica de software.
          </p>
        </div>

        <div
          className="flex bg-[#E7E2CE] p-1.5 rounded-xl border border-[#BEB7A7] w-fit"
          role="group"
          aria-label="Filtrar proyectos"
        >
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === id
                  ? 'bg-[#112250] text-[#F5F4F0]'
                  : 'text-[#3B507D] hover:text-[#112250]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <p className="text-center text-[#3B507D] py-12">
          No hay proyectos en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      )}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}