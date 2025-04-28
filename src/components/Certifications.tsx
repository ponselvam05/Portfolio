
import React from 'react';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-navy-light">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-mint mr-2">
            <Award className="inline-block" size={30} />
          </span>
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-navy p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white">AWS Certified Developer</h3>
            <p className="text-mint">Amazon Web Services</p>
            <p className="text-slate">2023</p>
          </div>
          <div className="bg-navy p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white">React Developer Certification</h3>
            <p className="text-mint">Meta</p>
            <p className="text-slate">2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
