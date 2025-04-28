
import React from 'react';
import { Briefcase } from 'lucide-react';

const Internships: React.FC = () => {
  return (
    <section id="internships" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-mint mr-2">
            <Briefcase className="inline-block" size={30} />
          </span>
          Internships
        </h2>
        <div className="space-y-8">
          <div className="bg-navy-light p-6 rounded-lg hover:translate-x-2 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white">Software Developer Intern</h3>
            <p className="text-slate-light">Tech Corp Inc.</p>
            <p className="text-mint">Summer 2022</p>
            <p className="text-slate mt-2">
              Developed and maintained web applications using React and Node.js.
              Collaborated with senior developers on various projects.
            </p>
          </div>
          <div className="bg-navy-light p-6 rounded-lg hover:translate-x-2 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white">Frontend Developer Intern</h3>
            <p className="text-slate-light">Web Solutions Ltd</p>
            <p className="text-mint">Summer 2021</p>
            <p className="text-slate mt-2">
              Built responsive user interfaces using modern web technologies.
              Participated in code reviews and team meetings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
