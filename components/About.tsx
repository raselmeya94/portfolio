import React from 'react';
import Section from './Section';
import { RESEARCH_INTERESTS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Text Section */}
        <div className="md:col-span-3 text-light-slate space-y-4">
          <p>
            I'm <span className="text-accent font-semibold">Rasel Meya</span>, an AI Engineer and Researcher with a passion for advancing <span className="text-lightest-slate">Machine Learning, NLP, and Large Language Models (LLMs)</span>. I hold an <strong>M.Sc.</strong> in Computer Science & Telecommunication Engineering from <strong>Noakhali Science and Technology University</strong>.
          </p>
          <p>
            At <strong>Tappware Solution Limited</strong>, I work on R&D initiatives, focusing on <span className="text-lightest-slate">Bengali NLP</span>, <span className="text-lightest-slate">LLM fine-tuning</span>, and deploying AI systems for real-world applications like OCR pipelines and multilingual RAG systems.
          </p>
          <p>
            My goal is to drive innovation in <span className="text-lightest-slate">multilingual AI</span> and <span className="text-lightest-slate">low-resource language processing</span>, with applications in education and healthcare, while pursuing a PhD in AI/NLP.
          </p>
          <h3 className="text-xl font-serif font-bold text-lightest-slate pt-4">
            Research Interests
          </h3>
          <div className="flex flex-wrap gap-3 pt-2">
            {RESEARCH_INTERESTS.map((interest, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-light-navy px-3 py-2 rounded-lg hover:scale-[1.03] transition-transform"
              >
                {interest.icon}
                <span className="text-light-slate text-sm">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:col-span-2 flex justify-center items-start order-first md:order-last">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-80 lg:h-80 group">
            <div className="absolute inset-0 bg-accent rounded-lg transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img
              src="/portfolio/images/profile.jpg"
              alt="Rasel Meya"
              className="relative w-full h-full object-cover rounded-lg filter grayscale hover:filter-none transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
