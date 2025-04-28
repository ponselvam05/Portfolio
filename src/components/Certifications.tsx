
import React from 'react';
import { Award } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const certifications = [
  {
    id: 'aws',
    title: 'AWS Certified Developer',
    org: 'Amazon Web Services',
    year: '2024'
  },
  {
    id: 'react',
    title: 'React Developer Certification',
    org: 'Meta',
    year: '2023'
  },
  {
    id: 'python',
    title: 'Python Professional',
    org: 'Python Institute',
    year: '2023'
  },
  {
    id: 'google',
    title: 'Google Cloud Associate',
    org: 'Google Cloud',
    year: '2022'
  }
];

const Certifications: React.FC = () => {
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
                <div id={cert.id} className="bg-navy p-6 rounded-lg h-full">
                  <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                  <p className="text-mint">{cert.org}</p>
                  <p className="text-slate">{cert.year}</p>
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
