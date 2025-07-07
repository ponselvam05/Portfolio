import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Typing animation state
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'I craft meaningful web experiences.';

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayedText]);

  return (
    <section className="h-screen flex items-center relative px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-mint mb-5 animate-fade-in">Hi, my name is</p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Ponselvam S.
          </h1>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 h-[70px] md:h-auto animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            {displayedText}
            <span className="inline-block w-1 h-6 md:h-8 bg-mint ml-1 animate-pulse"></span>
          </h2>
          <p
            className="text-slate max-w-lg text-lg mb-8 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            I'm a web developer passionate about building user-friendly, accessible, and high-impact digital solutions. With a strong eye for detail and modern design, I transform ideas into fast, responsive, and engaging websites.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn inline-flex items-center">
              Check out my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
