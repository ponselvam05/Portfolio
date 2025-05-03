
import React from 'react';
import { Github, ArrowRight, Folder } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    title: "E-Commerce Platform",
    description: "A fully-functional e-commerce platform with payment integration, product filtering, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
  },
  {
    title: "Task Management App",
    description: "A productivity app that helps users manage tasks with features like drag-and-drop, notifications, and team collaboration.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Real-time Chat Application",
    description: "A chat platform with real-time messaging, user profiles, and file sharing capabilities.",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "AWS S3"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

// Personal projects
const personalProjects = [
  {
    title: "Faculty Profile Management System",
    technology: "Java Server Pages (JSP), Derby Database, JDBC",
    description: "A web-based application designed to simplify the management of academic and professional records for faculty members. The system allows faculty to securely add, update, and maintain their personal information, educational qualifications, published journals, conference papers, and profile pictures.",
    features: [
      "Faculty Registration and Login",
      "Add / Edit / Delete Personal and Professional Details",
      "Upload Profile Pictures",
      "Store and Manage Journals, Conference Papers, and Achievements",
      "Dynamic and User-Friendly Interface using JSP",
      "Secure Data Handling with Derby Database and JDBC"
    ]
  },
  {
    title: "Student Profile Management System",
    technology: "Java Swing, Derby Database, JDBC",
    description: "A desktop-based application designed to manage and organize student information efficiently. It provides a centralized platform where administrators can add, update, and maintain student records, including personal details, academic history, and club or extracurricular participation.",
    features: [
      "Add, Update, Delete, and Search Student Profiles",
      "Store Personal Information and Academic Records",
      "Maintain Extracurricular and Club Participation Data",
      "Simple and Intuitive Java Swing GUI",
      "Database Connectivity via JDBC and Derby DB",
      "Error Handling and Input Validation for Clean Data Management"
    ]
  },
  {
    title: "StreamSphere — Video Streaming Platform",
    technology: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    description: "A full-stack video streaming platform designed to offer users a Netflix-like experience, allowing them to watch, organize, and share their favorite movies and shows. The system supports user subscriptions, personalized playlists, and secure content delivery.",
    features: [
      "User Registration, Login, and Subscription Management",
      "Create and Manage Personal Playlists",
      "Share Playlists with Friends (Subscription-based Access)",
      "Search & Filter Movies and TV Shows",
      "Dynamic User Interface with React",
      "Backend API using Express & Node.js",
      "Data Storage and Retrieval using MongoDB",
      "Secure User Authentication (JWT) and Session Handling"
    ]
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
        
        {/* Personal Projects Section */}
        <h2 className="section-heading mt-20">
          <span className="text-mint mr-2">
            <Folder className="inline-block" size={30} />
          </span>
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-8">
          {personalProjects.map((project, index) => (
            <Card key={index} className="bg-navy-light border-navy">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
                <CardDescription className="text-mint">{project.technology}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate mb-4">{project.description}</p>
                <div className="mt-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="list-none space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate flex items-start gap-2">
                        <span className="text-mint flex-shrink-0">✅</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://github.com" 
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
