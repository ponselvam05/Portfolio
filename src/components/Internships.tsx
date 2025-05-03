
import React from 'react';
import { Briefcase, Folder } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const internships = [
  {
    title: "Software Developer Intern",
    company: "Tech Corp Inc.",
    period: "Summer 2022",
    logo: "/lovable-uploads/85342940-3184-467c-94c2-42f1b0ed5bee.png", // Using available image as placeholder
    description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on various projects."
  },
  {
    title: "Frontend Developer Intern",
    company: "Web Solutions Ltd",
    period: "Summer 2021",
    logo: "/lovable-uploads/85342940-3184-467c-94c2-42f1b0ed5bee.png", // Using available image as placeholder
    description: "Built responsive user interfaces using modern web technologies. Participated in code reviews and team meetings."
  }
];

const projects = [
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

        <h2 className="section-heading mt-16">
          <span className="text-mint mr-2">
            <Folder className="inline-block" size={30} />
          </span>
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
};

export default Internships;
