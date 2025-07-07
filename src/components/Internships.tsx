
import React from 'react';
import { Briefcase } from 'lucide-react';

const internships = [
  {
    title: "Frontend Developer Intern",
    company: "Codesoft",
    period: "25 JUN - 25 JUL 2024",
    logo: "assests/codsoftlogo.jpg", // Using available image as placeholder
    description: "I built responsive and interactive web projects using modern technologies like HTML, CSS, JavaScript, and React. Gained hands-on experience in frontend design, component structuring, and real-world project workflows."
  },
  {
    title: "FullStack WebDevelopment in MERN Intern",
    company: "WSA Accademy",
    period: "12 FEB - 23 APR 2024",
    logo: "assests/wsalogo.jpeg", // Using available image as placeholder
    description: "Foundation programming in HTML,CSS,Javascript,React.SDLC Based project build using MERN Stack"
  }
];

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
          {internships.map((internship, index) => (
            <div key={index} className="bg-navy-light p-6 rounded-lg hover:translate-x-2 transition-transform duration-300">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 border-mint flex items-center justify-center bg-navy">
                    <img 
                      src={internship.logo} 
                      alt={`${internship.company} logo`} 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{internship.title}</h3>
                  <p className="text-slate-light">{internship.company}</p>
                  <p className="text-mint">{internship.period}</p>
                  <p className="text-slate mt-2">
                    {internship.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
