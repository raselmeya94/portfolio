import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[60vh] flex flex-col justify-center py-12">
    <p className="text-accent text-md font-mono mb-4">Hi, my name is</p>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-lightest-slate">
      Rasel Meya
    </h1>
    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-slate mt-2">
      AI&nbsp;Research&nbsp;Engineer&nbsp;·&nbsp;Machine&nbsp;Learning&nbsp;·&nbsp;NLP&nbsp;·&nbsp;LLMs
    </h2>
  
    <p className="max-w-2xl mt-6 text-light-slate leading-relaxed">
      AI Engineer and Researcher passionate about advancing 
      <span className="text-accent">Machine Learning</span>, 
      <span className="text-accent">Natural Language Processing</span>, and 
      <span className="text-accent">Large Language Models (LLMs)</span> for real-world and multilingual applications.
    </p>
  
    <div className="mt-8">
      <a
        href="#contact"
        className="text-accent border border-accent rounded-md px-8 py-4 hover:bg-accent/10 transition-colors text-lg"
      >
        Get In Touch
      </a>
  </div>
</section>

  );
};

export default Hero;
