
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, FileText, Download } from 'lucide-react';
import { toast } from "@/hooks/use-toast";



const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Internships', href: '#internships' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleResumeDownload = () => {
    toast({
      title: "Downloading Resume",
      description: "Your resume is being downloaded",
    });
    
    // This simulates a download - in a real app, you would use an actual file path
    const link = document.createElement('a');
    link.href = "assests/ponselvam_resume2025.pdf" ;  // Path to your resume file
    link.download = "ponselvam_resume2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-navy/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold gradient-text">
          <span className="text-2xl" >{'<BuildMyByte />'}</span>
        </a>
        
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
          <button 
            className="btn inline-flex items-center gap-2"
            onClick={handleResumeDownload}
          >
            <FileText size={16} />
            Resume
          </button>
        </nav>
        
        <button 
          className="md:hidden text-mint"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
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
          <button 
            className="btn mt-4 inline-flex items-center gap-2" 
            onClick={() => {
              handleResumeDownload();
              setMobileMenuOpen(false);
            }}
          >
            <FileText size={1000} />
            Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
