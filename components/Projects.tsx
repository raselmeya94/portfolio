import React, { useMemo, useState } from 'react';
import Section from './Section';
import { PROJECTS, PROJECT_CATEGORIES } from '../constants';
import type { Project } from '../types';
import { Github, ExternalLink, Star } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const CATEGORY_STYLES: Record<string, string> = {
  Personal: 'bg-accent/10 text-accent border-accent/40',
  Company: 'bg-[#ffb454]/10 text-[#ffb454] border-[#ffb454]/40',
  'Open Source': 'bg-[#c792ea]/10 text-[#c792ea] border-[#c792ea]/40',
  Research: 'bg-[#ff6b8b]/10 text-[#ff6b8b] border-[#ff6b8b]/40',
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const catClass = CATEGORY_STYLES[project.category || 'Personal'] || CATEGORY_STYLES.Personal;

  return (
    <div className="group bg-light-navy rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-lightest-navy/60">
      {/* Cover image / fallback */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-lightest-navy">
        {!imgError && project.imageUrl ? (
          <img
            src={`/portfolio${project.imageUrl}`}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy to-lightest-navy">
            <span className="text-4xl font-serif font-bold text-light-slate/30">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-navy/80 backdrop-blur-sm text-accent text-xs font-mono px-2 py-1 rounded-full border border-accent/30">
            <Star className="w-3 h-3 fill-accent" /> Featured
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />

        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          {project.category && (
            <span className={`text-[11px] font-mono font-semibold px-2 py-1 rounded-full border ${catClass}`}>
              {project.category}
            </span>
          )}
          <span className="text-[11px] font-mono text-light-slate bg-navy/70 px-2 py-1 rounded-full">
            {project.date}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-serif font-bold text-lightest-slate group-hover:text-accent transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-slate text-sm mt-2 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-[11px] text-accent bg-accent/10 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-lightest-navy flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-light-slate hover:text-accent transition-colors text-sm font-mono"
          >
            {project.githubUrl.includes('github.com') ? (
              <Github className="w-4 h-4" />
            ) : (
              <FontAwesomeIcon icon={faGlobe} className="w-4 h-4" />
            )}
            Code
          </a>
          {project.secondaryUrl && (
            <a
              href={project.secondaryUrl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-light-slate hover:text-accent transition-colors text-sm font-mono"
            >
              <ExternalLink className="w-4 h-4" />
              {project.secondaryUrl.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section id="projects" title="Selected Projects">
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-sm font-mono px-4 py-1.5 rounded-full border transition-colors ${
              activeCategory === cat
                ? 'bg-accent/10 text-accent border-accent'
                : 'text-light-slate border-lightest-navy hover:border-accent/50 hover:text-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
