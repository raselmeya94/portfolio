
import React from 'react';
import Section from './Section';
import { CONTACT_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-lg mx-auto">
        <p className="text-light-slate mb-8">
          I am actively exploring PhD opportunities starting Fall 2025 and am open to discussing potential research collaborations. Whether you have a question or just want to connect, feel free to reach out.
        </p>
        <a href="mailto:raselmeya2194@gmail.com" className="inline-block text-accent border border-accent rounded-md px-8 py-4 hover:bg-accent/10 transition-colors text-lg">
          Say Hello
        </a>
        <div className="flex justify-center gap-6 mt-10">
            {CONTACT_LINKS.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name} className="text-slate hover:text-accent transition-colors transform hover:-translate-y-1">
                    {link.icon}
                </a>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
