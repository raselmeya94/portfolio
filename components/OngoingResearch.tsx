import React from 'react';
import Section from './Section';
import { ONGOING_RESEARCH } from '../constants';
import type { Research } from '../types';

const OngoingResearch: React.FC = () => {
  return (
    <Section id="research" title="Ongoing Research"> {/* Ensure the ID here is 'research' */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {ONGOING_RESEARCH.map((research: Research, index) => (
            <div
              key={index}
              className="relative bg-light-navy rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300 max-w-xs w-full"
            >
              {/* Status in Top Right Corner with No Background */}
              <div className="absolute top-2 right-2 text-gray-500 text-xs font-semibold px-2 py-1 rounded-full">
                {research.status}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-serif font-bold text-lightest-slate group-hover:text-accent transition-colors">
                  {research.title}
                </h3>
                <p className="text-slate mt-3 flex-grow">{research.description}</p>
                
                {/* Tags Section */}
                <div className="mt-4">
                  <p className="font-semibold text-accent">Tags:</p>
                  <ul className="list-disc pl-6">
                    {research.tags.map((tag, idx) => (
                      <li key={idx} className="text-sm font-mono text-accent">{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OngoingResearch;
