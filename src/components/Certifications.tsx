
import React from 'react';
import { Award, Download } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const certifications = [
  {
    id: 'aws',
    title: 'Oracle Apex',
    org: 'Vibathi Labs',
    year: '2024',
    filename: 'Oracle_apex_certificate.pdf'
  },
  {
    id: 'react',
    title: 'Introduction to Internet of Things',
    org: 'NPTEL',
    year: '2024',
    filename: 'Introduction To Internet Of Things.pdf'
  },
  {
    id: 'python',
    title: 'Cloud Computing',
    org: 'NPTEL',
    year: '2024',
    filename: 'Cloud Computing.pdf'
  },
  {
    id: 'google',
    title: 'ANGULAR',
    org: 'Infosys',
    year: '2025',
    filename: '2212405_angular_infosys_certificate.pdf'
  },
  {
    id: 'google',
    title: 'REACT',
    org: 'Infosys',
    year: '2025',
    filename: 'ReactJs_2212405_Ponselvam.pdf'
  }
];

const Certifications: React.FC = () => {
  const handleDownload = (cert: typeof certifications[0]) => {
    // In a real-world scenario, this would be the actual file path or API endpoint
    // For now, we'll just show a toast to simulate the download
    toast({
      title: `Downloading ${cert.title}`,
      description: `Certificate from ${cert.org} (${cert.year})`,
    });
    
    // This simulates a download - in a real app, you would use an actual file path
    const link = document.createElement('a');
    link.href = `/assests/${cert.filename}`;
    link.download = cert.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-navy-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading">
          <span className="text-mint mr-2">
            <Award className="inline-block" size={30} />
          </span>
          Certifications
        </h2>
        
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ align: "start" }}>
          <CarouselContent className="-ml-4">
            {certifications.map((cert) => (
              <CarouselItem key={cert.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div id={cert.id} className="bg-navy p-6 rounded-lg h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                  <p className="text-mint">{cert.org}</p>
                  <p className="text-slate">{cert.year}</p>
                  <div className="mt-auto pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full mt-2 text-mint border-mint hover:bg-mint hover:text-navy"
                      onClick={() => handleDownload(cert)}
                    >
                      <Download className="mr-2" size={16} />
                      Download Certificate
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Certifications;
