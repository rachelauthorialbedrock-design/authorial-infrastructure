import React, { useState } from 'react';
import { toast } from 'sonner';
import { MessageSquare, Send, Instagram, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookTitle: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Blueprint Request Received. We'll be in touch within 24 hours.");
    setFormData({ name: '', email: '', bookTitle: '' });
  };

  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/65cdf180-79a3-4422-a60d-fee75daa727f/1776905346814_ChatGPT_Image_Apr_20__2026__05_09_03_AM.png";
  const instagramUrl = "https://www.instagram.com/rachel.authorialbedrock?igsh=cXc1bnZvdXVkOTly";

  return (
    <footer id="footer" className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8">
              Secure Your <span className="text-accent">Market Integrity</span> Snapshot.
            </h2>
            <p className="text-lg text-white/60 mb-12 max-w-lg leading-relaxed">
              Stop guessing. Get a structural report on where your visibility is failing and 
              exactly what is required to fix the bedrock.
            </p>
            
            <div className="space-y-8">
              <p className="text-white/80 font-serif italic text-lg border-l-2 border-accent pl-6">
                "Initial strategy is conducted via written brief. For technical inquiries, contact via Gmail or WhatsApp."
              </p>

              <div className="flex flex-wrap gap-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <MessageSquare className="text-accent" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest font-bold text-white/40 mb-1">WhatsApp</span>
                    <a href="https://wa.me/19513739920" className="text-white hover:text-accent transition-colors font-serif text-xl">
                      +1 (951) 373-9920
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Mail className="text-accent" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest font-bold text-white/40 mb-1">Email</span>
                    <a 
                      href="mailto:rachel.authorialbedrock@gmail.com?subject=Strategic Inquiry" 
                      className="text-white hover:text-accent transition-colors font-serif text-xl"
                    >
                      rachel.authorialbedrock
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm relative shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/80">Full Name</Label>
                <Input 
                  id="name" 
                  required
                  placeholder="Rachel Architect" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-accent rounded-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">Professional Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required
                  placeholder="rachel@author.com" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-accent rounded-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="book" className="text-white/80">Book Title or Amazon Link</Label>
                <Input 
                  id="book" 
                  required
                  placeholder="https://amazon.com/dp/..." 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-accent rounded-none"
                  value={formData.bookTitle}
                  onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-6 h-auto text-lg rounded-none uppercase tracking-widest"
              >
                Request My Snapshot
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center">
            <img 
              src={logoUrl} 
              alt="Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
          
          <div className="text-white/40 text-xs uppercase tracking-widest text-center md:text-left">
            The Authorial Bedrock © 2026. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-4 bg-white/5 p-2 rounded-full border border-white/10 px-4">
            <a 
              href="https://tiktok.com/@collins_rachel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-accent transition-all"
              title="TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31 0 2.57.35 3.66 1.01 1.09.65 1.95 1.58 2.49 2.7.54 1.12.72 2.37.52 3.58-.2 1.21-.86 2.31-1.89 3.12.43.06.85.17 1.25.33V7.24c.73.43 1.55.66 2.39.66.27 0 .54-.02.8-.07V4.54c-.58.11-1.18.16-1.78.16-1.15 0-2.26-.33-3.21-.95V0h-3.32v15.35c0 1.22-.44 2.39-1.23 3.3-.79.91-1.89 1.5-3.09 1.66-1.2.16-2.42-.11-3.42-.77-1-.66-1.73-1.67-2.04-2.83-.31-1.16-.14-2.4.48-3.46.62-1.06 1.61-1.84 2.78-2.2 1.17-.36 2.43-.24 3.53.33v-3.4c-.5-.13-1.01-.2-1.53-.2-1.46 0-2.88.42-4.1 1.21-1.22.79-2.18 1.92-2.74 3.25-.56 1.33-.71 2.8-.42 4.23.29 1.43 1 2.73 2.03 3.75 1.03 1.02 2.34 1.73 3.78 2.03s2.92.14 4.26-.41c1.34-.55 2.48-1.5 3.28-2.71.8-1.21 1.23-2.63 1.23-4.08V.02h-3.32z"/>
              </svg>
            </a>
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-accent transition-all"
              title="Instagram"
            >
              <Instagram size="20" />
            </a>
            <a 
              href="https://wa.me/19513739920" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-accent transition-all"
              title="WhatsApp"
            >
              <MessageSquare size="20" />
            </a>
            <a 
              href="mailto:rachel.authorialbedrock@gmail.com?subject=Strategic Inquiry" 
              className="p-2 text-white/60 hover:text-accent transition-all"
              title="Gmail"
            >
              <Mail size="20" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;