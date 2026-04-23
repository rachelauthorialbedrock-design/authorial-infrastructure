import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden charcoal-bg">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#D4AF37,transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_100%_100%,#D4AF37,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-7xl font-serif text-white leading-tight mb-8">
              Your Work is <span className="text-accent italic">Essential</span>.<br />
              Your Visibility is an <span className="text-accent">Infrastructure Failure</span>.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/70 font-sans mb-12 max-w-2xl leading-relaxed"
          >
            We build the technical bedrock for authors who are done with marketing "hacks" 
            and ready for structural integrity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 py-8 h-auto gold-shadow"
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a Market Integrity Snapshot
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-primary font-bold text-lg px-8 py-8 h-auto"
              onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn the Methodology
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Vertical text for branding */}
      <div className="absolute right-6 bottom-12 hidden lg:block">
        <div className="flex flex-col items-center gap-12">
          <span className="[writing-mode:vertical-rl] text-accent/30 font-serif tracking-[0.3em] uppercase text-sm">
            Infrastructure & Strategy
          </span>
          <div className="w-px h-24 bg-accent/30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;