import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageSquare } from 'lucide-react';

const Strategist = () => {
  const headshotUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/65cdf180-79a3-4422-a60d-fee75daa727f/1776905446162_WhatsApp_Image_2026-04-22_at_16.46.52.jpeg";
  const instagramUrl = "https://www.instagram.com/rachel.authorialbedrock?igsh=cXc1bnZvdXVkOTly";

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image & Audio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 group">
              <div className="absolute inset-0 gold-border -m-4 rounded-sm transition-transform duration-500 group-hover:scale-105 gold-shadow"></div>
              <img 
                src={headshotUrl} 
                alt="Rachel Collins - Founder of The Authorial Bedrock" 
                className="w-full h-auto aspect-[4/5] object-cover rounded-sm shadow-2xl relative z-20 grayscale hover:grayscale-0 transition-all duration-700 border-2 border-accent"
              />
            </div>
            
            {/* Audio Player Component (Replaced with Reverb.chat Iframe Embed) */}
            <div className="mt-12 relative z-30">
              <div className="bg-primary p-4 rounded-sm shadow-xl border-l-4 border-accent relative overflow-hidden">
                <div className="mb-4">
                  <span className="block text-white font-serif text-lg leading-tight mb-1">Hear the Methodology</span>
                  <span className="block text-white/50 text-xs uppercase tracking-widest font-bold">A Strategic Introduction</span>
                </div>
                <iframe 
                  src="https://record.reverb.chat/embed/BrVoiqiF2JAKY3UM9VPq" 
                  style={{ border: '0px #ffffff none' }} 
                  name="myiFrame" 
                  scrolling="no" 
                  frameBorder="1" 
                  marginHeight={0} 
                  marginWidth={0} 
                  height="200px" 
                  width="100%" 
                  allowFullScreen
                  title="Rachel's Introduction"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight">
              Expertise Built on <span className="text-accent">Lived Experience and Data.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded by Rachel Collins, The Authorial Bedrock provides a frank, results-driven approach to the memoir and parenting market.
              </p>
              <p>
                We specialize in identifying "infrastructure failures"—the gaps in metadata and community reach that suppress even the most award-winning titles.
              </p>
              <p>
                Our methodology is rooted in the belief that for a book with literary recognition, low visibility is a symptom of a strategy failure, not a quality failure.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-6">
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-muted rounded-full hover:bg-accent hover:text-primary transition-all duration-300 text-primary group"
                title="Follow on Instagram"
              >
                <Instagram size={28} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://wa.me/19513739920" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary font-bold hover:text-accent transition-all bg-accent/10 hover:bg-accent/20 px-6 py-4 rounded-full border border-accent/20 hover:border-accent group"
              >
                <MessageSquare className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>Direct Professional WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Strategist;