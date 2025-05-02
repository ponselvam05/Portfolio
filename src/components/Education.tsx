import React from 'react';
import { Book } from 'lucide-react';
const Education: React.FC = () => {
  return <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-mint mr-2">
            <Book className="inline-block" size={30} />
          </span>
          Education
        </h2>
        <div className="space-y-8">
          <div className="bg-navy-light p-6 rounded-lg hover:translate-x-2 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white">Computer Science</h3>
            <p className="text-slate-light">University of Technology</p>
            <p className="text-mint">2023 - 2026</p>
            <p className="text-slate mt-2">CCGPA - 7.8</p>
          </div>
          <div className="bg-navy-light p-6 rounded-lg hover:translate-x-2 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white">Diploma In Mechanical</h3>
            <p className="text-slate-light">IRT Polytechnic College - Tirunelveli</p>
            <p className="text-mint">2020 - 2023</p>
            <p className="text-slate mt-2">
              Focused on mathematics and computer science.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;