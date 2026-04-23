import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, FileText, Phone, MapPin } from 'lucide-react';

const DeepWorkProtocol = () => {
  return (
    <section className="py-24 charcoal-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
          >
            <ShieldAlert className="text-accent h-5 w-5" />
            <span className="text-accent font-bold uppercase tracking-widest text-xs">The 'Deep Work' Protocol</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-white mb-8"
          >
            Structural Integrity requires Focus.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-lg text-white/70 leading-relaxed"
          >
            <p>
              Metadata strategy is highly technical and data-heavy. I’ve found that discussing it over the phone often leads to confusion. 
              I prefer to deliver my final <span className="text-accent font-bold">Infrastructure Map</span> in writing so you have the exact phrases and categories to copy-paste directly into your KDP dashboard.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
              <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                <FileText className="text-accent h-8 w-8 mb-4" />
                <h3 className="text-xl font-serif text-white mb-2 shadow-sm">Standard Strategy</h3>
                <p className="text-sm text-white/60">
                  All strategy is delivered via high-fidelity PDF and recorded audio. 
                  This ensures every decision is permanent, searchable, and accurate.
                </p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                <Phone className="text-accent h-8 w-8 mb-4" />
                <h3 className="text-xl font-serif text-white mb-2 shadow-sm">Crisis Protocol</h3>
                <p className="text-sm text-white/60">
                  Live calls can <span className="text-white font-bold">only take place if it is really important and needed.</span> 
                  For urgent project updates, clients reach out via my dedicated professional WhatsApp.
                </p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center justify-center gap-2 text-accent/60"
            >
              <MapPin size={18} />
              <span className="text-sm uppercase tracking-widest font-bold">Located in UK / South Africa — Working Globally</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeepWorkProtocol;