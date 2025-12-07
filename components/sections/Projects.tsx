'use client';

import React, { useState } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  github?: string | null;
  demo?: string | null;
  featured: boolean;
  year: number;
  features?: string[];
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  // Filter projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section id="projects" title="Projetos" subtitle="Meu Portfólio" background="white">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === category
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category === 'all' ? 'Todos' : category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} hover>
            <div className="space-y-4">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg overflow-hidden flex items-center justify-center">
                <span className="text-6xl">{project.featured ? '⭐' : '📁'}</span>
                {project.featured && (
                  <div className="absolute top-2 right-2">
                    <Badge variant="warning">Destaque</Badge>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="secondary">+{project.tags.length - 3}</Badge>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4">
                {project.github && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    href={project.github}
                    className="flex-1"
                  >
                    GitHub
                  </Button>
                )}
                {project.demo && (
                  <Button 
                    variant="primary" 
                    size="sm" 
                    href={project.demo}
                    className="flex-1"
                  >
                    Demo
                  </Button>
                )}
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => setSelectedProject(project)}
                  className="flex-1"
                >
                  Detalhes
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <Badge variant="primary">{selectedProject.category}</Badge>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {selectedProject.longDescription}
              </p>

              {/* Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Funcionalidades
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Tecnologias
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4">
                {selectedProject.github && (
                  <Button variant="outline" href={selectedProject.github} className="flex-1">
                    Ver no GitHub
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button variant="primary" href={selectedProject.demo} className="flex-1">
                    Ver Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
