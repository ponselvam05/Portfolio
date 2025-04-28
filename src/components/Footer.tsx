
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-slate-dark text-sm">
      <p>Designed & Built by John Doe</p>
      <p>© {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
