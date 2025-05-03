
import React from 'react';
import { Book, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const educationItems = [
  {
    degree: "Computer Science",
    institution: "University of Technology",
    period: "2023 - 2026",
    details: "CCGPA - 7.8",
    filename: "computer_science_transcript.pdf"
  },
  {
    degree: "Diploma In Mechanical",
    institution: "IRT Polytechnic College - Tirunelveli",
    period: "2020 - 2023",
    details: "Focused on mathematics and computer science.",
    filename: "mechanical_diploma.pdf"
  }
];

const Education: React.FC = () => {
  const handleDownload = (education: typeof educationItems[0]) => {
    toast({
      title: `Downloading ${education.degree} Records`,
      description: `From ${education.institution} (${education.period})`,
    });
    
    // This simulates a download - in a real app, you would use an actual file path
    const link = document.createElement('a');
    link.href = `/education/${education.filename}`;
    link.download = education.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-mint mr-2">
            <Book className="inline-block" size={30} />
          </span>
          Education
        </h2>
        <div className="space-y-8">
          {educationItems.map((education, index) => (
            <div key={index} className="bg-navy-light p-6 rounded-lg hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
              <p className="text-slate-light">{education.institution}</p>
              <p className="text-mint">{education.period}</p>
              <p className="text-slate mt-2">{education.details}</p>
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-mint border-mint hover:bg-mint hover:text-navy"
                  onClick={() => handleDownload(education)}
                >
                  <Download className="mr-2" size={16} />
                  Download Transcript
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
