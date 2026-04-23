import React from 'react';
import { motion } from 'framer-motion';
import { Quote, BookOpen, Layers, Zap } from 'lucide-react';

const Philosophy = () => {
  const bgImage = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d833f643-9980-4336-a662-00aa5aab9d78/methodology-background-new-675c07e6-1776910501383.webp";

  return (
    <section id="philosophy" className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Office Background" 
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-sm mb-6"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs">The Bedrock Methodology</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif text-primary leading-tight max-w-4xl mx-auto">
            Infrastructure is the Multiplier of <span className="italic">Inherent Quality</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[ 
            { 
              icon: <BookOpen className="text-accent" />, 
              title: "Literary Diagnosis", 
              text: "We begin by identifying the 'emotional truth' and 'differentiation' of your manuscript to ensure the heart of the book is protected." 
            },
            { 
              icon: <Layers className="text-accent" />, 
              title: "Infrastructure Alignment", 
              text: "Only after we understand the craft do we build the metadata infrastructure required to reach the readers who need your story." 
            },
            { 
              icon: <Zap className="text-accent" />, 
              title: "The Multiplier Effect", 
              text: "We believe that 'inherent quality is the multiplier'—a great book with bad metadata stays hidden, but a great book with an expert infrastructure becomes inevitable." 
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-border rounded-xl shadow-xl hover:border-accent/50 transition-all"
            >
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-lg mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute -top-12 -left-12 opacity-10 text-accent">
            <Quote size={120} />
          </div>
          <div className="bg-primary p-10 md:p-16 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <p className="text-2xl md:text-3xl font-serif text-white italic leading-snug mb-8 relative z-10">
              "Marketing is the consequence of infrastructure. If your foundation is cracked, 
              no amount of promotion will keep the building standing."
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-accent uppercase tracking-widest font-bold text-sm">The Authorial Bedrock Manifesto</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;