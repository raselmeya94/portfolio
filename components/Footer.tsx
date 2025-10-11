
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6">
      <p className="text-slate text-sm">
        &copy; {new Date().getFullYear()} Rasel Meya. All rights reserved.
      </p>
      <p className="text-xs text-slate/70 mt-1">
        Designed & Built by Rasel Meya.
      </p>
    </footer>
  );
};

export default Footer;
