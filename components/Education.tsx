
import React from 'react';
import Section from './Section';
import { EDUCATION_INFO } from '../constants';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {EDUCATION_INFO.map((edu, index) => (
          <div
            key={index}
            className="bg-light-navy p-6 rounded-lg shadow-lg border-l-4 border-accent transition-transform hover:scale-[1.01]"
          >
            <h3 className="text-2xl font-serif font-bold text-lightest-slate">
              {edu.degree}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-4 text-light-slate">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-accent" />
                <span>{edu.university}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>{edu.location}</span>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 text-slate">
              <Calendar className="w-5 h-5 text-accent" />
              <span>{edu.duration}</span>
            </div>

            {/* {edu.cgpa && (
              <p className="mt-2 text-light-slate font-medium">
                <strong>CGPA:</strong> {edu.cgpa.replace('CGPA: ', '')}
              </p>
            )} */}

            {edu.thesis && (
              <div className="mt-3 flex items-start gap-2 text-slate">
                <BookOpen className="w-5 h-5 text-accent mt-0.5" />
                <p>
                  <strong>Thesis:</strong> {edu.thesis}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
