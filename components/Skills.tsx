
import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';
import type { SkillCategory } from '../types';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category: SkillCategory, index) => (
          <div key={index} className="bg-light-navy p-6 rounded-lg">
            <h3 className="text-xl font-serif font-bold text-lightest-slate mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 bg-lightest-navy px-3 py-2 rounded-md text-light-slate">
                  <div className="text-accent">{React.cloneElement(skill.icon, { className: 'w-4 h-4' })}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
