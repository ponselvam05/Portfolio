
import React, { useEffect } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import CertificationSidebar from '@/components/CertificationSidebar';
import Internships from '@/components/Internships';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'John Doe | Web Developer';
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-navy flex w-full">
        <CertificationSidebar />
        <div className="flex-1">
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
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
