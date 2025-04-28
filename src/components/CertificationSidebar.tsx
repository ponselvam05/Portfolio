
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Badge, Award, BookOpen, GraduationCap } from 'lucide-react';

const certifications = [
  { id: 'aws', title: 'AWS Certified Developer', icon: Badge },
  { id: 'react', title: 'React Developer Certification', icon: Award },
  { id: 'python', title: 'Python Professional', icon: BookOpen },
  { id: 'google', title: 'Google Cloud Associate', icon: GraduationCap },
];

const CertificationSidebar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Professional Certifications</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {certifications.map((cert) => (
                <SidebarMenuItem key={cert.id}>
                  <SidebarMenuButton 
                    onClick={() => scrollToSection(cert.id)}
                    tooltip={cert.title}
                  >
                    <cert.icon className="size-4" />
                    <span>{cert.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default CertificationSidebar;
