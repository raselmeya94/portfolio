
import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';
import type { Experience } from '../types';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Research & Industry Experience">
      <div className="relative border-l-2 border-lightest-navy/20 pl-8 space-y-12">
        {EXPERIENCES.map((exp: Experience, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[42px] top-1.5 w-6 h-6 bg-accent rounded-full border-4 border-navy flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-navy" />
            </div>
            <p className="text-accent font-mono text-sm">{exp.date}</p>
            <h3 className="text-xl font-serif font-bold text-lightest-slate mt-1">{exp.title}</h3>
            <h4 className="text-md text-light-slate">{exp.company}, {exp.location}</h4>
            <ul className="mt-4 space-y-2 text-slate list-disc list-inside">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
