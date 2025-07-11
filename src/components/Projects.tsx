
import React from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

// Original showcase projects
const showcaseProjects: Project[] = [
  {
    title: "PlayHaven",
    description: "Developed a Netflix-style video streaming app with user authentication and playlist sharing.",
    technologies: ["MongoDB", "Express", "React", "Node", "Redux"],
    githubLink: "https://github.com/ponselvam05/PlayHaven",
    demoLink: "https://demo.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
  },
  {
    title: "ProFileX",
    description: "Designed a system for Faculty enrollments, conferences, and event updates. Dynamic JSP-based web pages with Derby DB, admin and faculty login modules.",
    technologies: ["JSP", "Derby"],
    githubLink: "https://github.com/ponselvam05/Faculty-Profile-Management-System",
    demoLink: "https://demo.com",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Finance-Expense Tracker",
    description: "A simple web application that helps users track their income and expenses. Built using Angular and TypeScript, it allows users to add, edit, and delete transactions and see their balance in real time.",
    technologies: ["Angular", "Typescript"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="text-mint mr-2">02.</span> My Projects
        </h2>
        
        <div className="space-y-32">
          {showcaseProjects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                'relative md:grid md:grid-cols-12 gap-4 items-center',
                index % 2 === 0 ? '' : 'md:text-right'
              )}
            >
              {/* Project Image (visible on desktop only) */}
              <div 
                className={cn(
                  'hidden md:block col-span-7 relative group z-10',
                  index % 2 === 0 ? '' : 'col-start-1 row-start-1'
                )}
              >
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-navy/80 group-hover:bg-navy/40 transition-all duration-300 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                      style={{ height: '350px' }}
                    />
                  </div>
                </a>
              </div>
              
              {/* Project Info */}
              <div 
                className={cn(
                  'col-span-7 md:col-span-7 relative z-20',
                  index % 2 === 0 ? 'md:col-start-6 md:row-start-1' : 'md:col-start-1 md:row-start-1'
                )}
              >
                <div className={cn(
                  'bg-navy-light p-6 md:p-8 rounded-lg shadow-xl',
                  'transform transition-transform duration-300 hover:-translate-y-2'
                )}>
                  <p className="text-mint mb-2">Featured Project</p>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h3>
                  
                  {/* Project description */}
                  <p className="mb-6 text-slate-light">{project.description}</p>
                  
                  {/* Mobile image (shows only on mobile) */}
                  <div className="block md:hidden mb-6">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="rounded-md w-full"
                    />
                  </div>
                  
                  {/* Tech stack */}
                  <div className={cn(
                    'flex flex-wrap gap-2 mb-6',
                    index % 2 === 0 ? '' : 'md:justify-end'
                  )}>
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="text-xs text-slate-light bg-navy px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className={cn(
                    'flex gap-4',
                    index % 2 === 0 ? '' : 'md:justify-end'
                  )}>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-mint transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-mint transition-colors"
                    >
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://github.com/ponselvam05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn inline-flex items-center"
          >
            View More Projects
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
