import React from 'react';
const About: React.FC = () => {
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Git', 'Docker'];
  return <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="text-mint mr-2">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 animate-slide-up">
            <p>Hello! My name is Ponselvam, and I’m a passionate web developer who loves building functional and engaging digital experiences. My journey into web development started with Java and gradually expanded into front-end and back-end technologies.</p>
            
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a large corporation, and a software consultancy. My main focus these days is building 
              accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            
            <p>I believe in writing clean, efficient code and building software that is not only functional but also meaningful to users. As a continuous learner, I’m always exploring new frameworks, tools, and development practices to enhance my skill set. Whether it’s designing intuitive interfaces or optimizing backend logic, I aim to create solutions that make a real impact. I'm particularly interested in full-stack development, database design, and the intersection of technology with everyday problems.</p>
            
            <p>Here are a few technologies I've been working with recently:</p>
            
            <div className="grid grid-cols-2 gap-2">
              {skills.map(skill => <div key={skill} className="flex items-center">
                  <span className="text-mint mr-2">▹</span> {skill}
                </div>)}
            </div>
          </div>
          
          <div className="relative group animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="relative rounded-md overflow-hidden border-2 border-mint z-10">
              <div className="bg-mint/10 absolute inset-0 z-20"></div>
              <img src="/lovable-uploads/85342940-3184-467c-94c2-42f1b0ed5bee.png" alt="Profile" className="w-full rounded-md grayscale hover:grayscale-0 transition-all object-cover object-center aspect-[3/4]" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-mint rounded-md -z-10 transition-all duration-300 group-hover:-bottom-5 group-hover:-right-5"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;