
import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Selected Projects">
      <div className="space-y-8">
        {PROJECTS.map((project: Project, index) => (
          <div key={index} className="bg-light-navy p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-grow">
              <p className="text-sm text-accent font-mono">{project.date}</p>
              <h3 className="text-xl font-serif font-bold text-lightest-slate mt-1 hover:text-accent transition-colors">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              <p className="text-slate mt-3">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center gap-4 mt-4 md:mt-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-slate hover:text-accent transition-colors"
              >
                {project.githubUrl.includes('github.com') ? (
                  <Github className="w-6 h-6" />
                ) : (
                  <FontAwesomeIcon icon={faGlobe} className="w-6 h-6" />
                )}
              </a>
            </div>


          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
