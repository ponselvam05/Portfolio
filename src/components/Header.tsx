
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Nav links
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-navy/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold gradient-text">
          <span className="text-2xl">{'<Dev />'}</span>
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link"
            >
              <span className="text-mint mr-1">{index + 1}.</span> {link.name}
            </a>
          ))}
          <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-mint"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 bg-navy-dark/95 z-40 flex flex-col items-center justify-center transition-transform duration-300 md:hidden',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <nav className="flex flex-col items-center space-y-6 text-lg">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-mint mr-1">{index + 1}.</span> {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            className="btn mt-4" 
            onClick={() => setMobileMenuOpen(false)}
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
