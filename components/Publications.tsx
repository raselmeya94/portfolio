import React from 'react';
import Section from './Section';
import { PUBLICATIONS } from '../constants';
import type { Publication } from '../types';

const Publications: React.FC = () => {
  return (
    <Section id="publications" title="Publications">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {PUBLICATIONS.map((pub: Publication, index) => (
            <div
              key={index}
              className="bg-light-navy rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300 max-w-xs w-full"
            >
              <img
                src={pub.imageUrl}
                alt={pub.title}
                className="w-full h-48 object-contain"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-serif font-bold text-lightest-slate group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm font-mono text-accent mt-1">{pub.venue}</p>
                <p className="text-slate mt-3 flex-grow">{pub.description}</p>

                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center border-2 border-accent text-accent font-semibold px-4 py-2 rounded hover:bg-accent/10 transition-colors"
                  >
                    View Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Publications;
