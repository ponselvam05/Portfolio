import React from 'react';

const About: React.FC = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'Tailwind CSS',
    'PostgreSQL',
    'MongoDB',
    'Git'
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
              Hello! I'm Ponselvam, an enthusiastic engineering student with a strong passion for web development. My journey began with Java and has grown to include both front-end and back-end technologies as I continue to explore the world of software development.
            </p>

            <p>
              I enjoy building clean and responsive web applications that prioritize user experience and performance. As a self-driven learner, I'm constantly experimenting with new tools and frameworks, working on personal projects, and honing my coding skills to better understand full-stack development.
            </p>

            <p>
              My areas of interest include building intuitive user interfaces, developing robust backend systems, and solving real-world problems through code. I’m especially interested in the intersection of software and user experience design, and I aim to build digital solutions that are both efficient and impactful.
            </p>

            <p>Here are some of the technologies I’ve been working with recently:</p>

            <div className="grid grid-cols-2 gap-2">
              {skills.map(skill => (
                <div key={skill} className="flex items-center">
                  <span className="text-mint mr-2">▹</span> {skill}
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative group animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative rounded-md overflow-hidden border-2 border-mint z-10">
              <div className="bg-mint/10 absolute inset-0 z-20"></div>
              <img
                src="/lovable-uploads/profile.png"
                alt="Profile"
                //className="w-full rounded-md grayscale hover:grayscale-0 transition-all object-cover object-center aspect-[3/4]"
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
