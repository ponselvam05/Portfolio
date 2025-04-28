
import React from 'react';

const About: React.FC = () => {
  const skills = [
    'JavaScript (ES6+)', 
    'TypeScript', 
    'React', 
    'Next.js', 
    'Node.js',
    'Express',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'Git',
    'Docker'
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="text-mint mr-2">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 animate-slide-up">
            <p>
              Hello! My name is John, and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2015 when I decided to try building 
              a custom website — turns out hacking together a custom blog taught me a lot about HTML & CSS!
            </p>
            
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a large corporation, and a software consultancy. My main focus these days is building 
              accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            
            <p>
              I also recently launched a web development course that covers everything you need to build a modern 
              full-stack web application using React and Node.js.
            </p>
            
            <p>Here are a few technologies I've been working with recently:</p>
            
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center">
                  <span className="text-mint mr-2">▹</span> {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-md overflow-hidden border-2 border-mint z-10">
              <div className="bg-mint/10 absolute inset-0 z-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Profile" 
                className="w-full rounded-md grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-mint rounded-md -z-10 transition-all duration-300 group-hover:-bottom-5 group-hover:-right-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
