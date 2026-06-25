// import React from 'react';

// interface SectionProps {
//   id: string;
//   title: string;
//   children: React.ReactNode;
// }

// const Section: React.FC<SectionProps> = ({ id, title, children }) => {
//   return (
//     <section id={id} className="py-24">
//       <h2 className="text-3xl font-serif font-bold text-lightest-slate mb-12 w-full border-b-4 border-accent/20 pb-2">
//         {title}
//       </h2>
//       {children}
//     </section>
//   );
// };

// export default Section;


import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-12">
      <div className="flex items-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-lightest-slate mr-4">
          {title}
        </h2>
        <div className="flex-1 h-1 bg-accent/20"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;
