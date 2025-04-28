
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-mint text-sm mb-2">03. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
        
        <p className="mb-10 text-slate-light">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        
        <div className="mb-10">
          <a href="mailto:hello@example.com" className="btn inline-flex items-center">
            <Mail size={18} className="mr-2" /> Say Hello
          </a>
        </div>
        
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
    </section>
  );
};

export default Contact;
