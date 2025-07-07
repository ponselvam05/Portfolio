
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Internships from '@/components/Internships';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'Ponselvam | Web Developer';
  }, []);

  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Internships />
        <Projects />
        <Contact />
      </main>
      
    </div>
  );
};

export default Index;
