
import React, { useRef, useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import ChatBot from './ChatBot';

// EmailJS configuration with actual credentials
const EMAILJS_CONFIG = {
  serviceId: 'service_svj58di',
  templateId: 'template_6nbxe2o',
  publicKey: 'iiaRpSP9ODjugtTB9',
};

const Contact: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        e.currentTarget,
        EMAILJS_CONFIG.publicKey
      );

      console.log('Email sent successfully:', result.text);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset the form
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Message failed to send",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-mint text-sm mb-2">04. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
        
        <p className="mb-10 text-slate-light">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-left mb-10">
          <div>
            <label htmlFor="name" className="text-white block mb-2">Name</label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="text-white block mb-2">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="text-white block mb-2">Message</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              required
              className="w-full min-h-[150px]"
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Sending...
              </>
            ) : (
              <>
                <Mail size={18} className="mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
        
        <div className="flex justify-center space-x-8">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-mint transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-mint transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:hello@example.com"
            className="text-slate hover:text-mint transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      {/* ChatBot component */}
      <ChatBot />
    </section>
  );
};

export default Contact;
