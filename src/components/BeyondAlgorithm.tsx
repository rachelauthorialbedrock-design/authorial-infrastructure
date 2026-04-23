import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const BeyondAlgorithm = () => {
  const visualUrl = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d833f643-9980-4336-a662-00aa5aab9d78/beyond-algorithm-visual-new-21e779bf-1776910501963.webp";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-full opacity-50"></div>
            <img 
              src={visualUrl} 
              alt="Beyond the Algorithm Visual" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-accent/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <Heart className="text-accent h-4 w-4 fill-accent/20" />
              <span className="text-accent font-bold uppercase tracking-widest text-xs">The Human Core</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              Beyond the <span className="italic">Algorithm</span>.
            </h2>
            
            <p className="text-xl font-serif text-primary italic border-l-4 border-accent pl-6 leading-relaxed">
              "Marketing alone cannot save a book that lacks a pulse."
            </p>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At The Authorial Bedrock, we look for the <span className="text-primary font-bold">‘Rare Emotional Honesty’</span> that separates a product from a masterpiece. 
                Our audits don't just look at what readers are buying—we look at what they are feeling.
              </p>
              <p>
                AI isn't part of my tools; when it comes to all this, we found the soul of the book.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeyondAlgorithm;