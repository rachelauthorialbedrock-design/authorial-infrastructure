import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const tiers = [
  {
    name: "The Bedrock Audit & Repair",
    price: "$297",
    description: "Ideal for established authors sensing hidden friction in their systems.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d833f643-9980-4336-a662-00aa5aab9d78/service-tier-mockup-1-381380f7-1776910501945.webp",
    features: [
      "Full Infrastructure Integrity Audit",
      "Leak Identification Report",
      "Critical System Repairs",
      "Full advice on what to do and how to go about it"
    ],
    highlight: false
  },
  {
    name: "The Structural Re-Launch",
    price: "$1,497",
    description: "A complete overhaul for your next major release or backlist revitalization.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d833f643-9980-4336-a662-00aa5aab9d78/service-tier-mockup-3-9253e5db-1776910500357.webp",
    features: [
      "Everything in Bedrock Audit",
      "Dynamic Visibility Pipeline",
      "Automated Market Response System",
      "Pre-Launch Technical Prep",
      "90-Day Strategy Roadmap"
    ],
    highlight: true
  },
  {
    name: "The Complete Infrastructure Build",
    price: "$3,997",
    description: "The ultimate bespoke technical foundation for elite career authors.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d833f643-9980-4336-a662-00aa5aab9d78/service-tier-mockup-2-b46dc1bf-1776910501335.webp",
    features: [
      "Custom Author Ecosystem Build",
      "Proprietary Analytics Dashboard",
      "Direct Emergency Infrastructure Access",
      "Full White-Glove Implementation",
      "Priority Strategy Consultation"
    ],
    highlight: false
  }
];

const ServiceTiers = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
            From Editing to Marketing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical strategy is not a commodity. We provide full-spectrum support from editing the book to marketing and reaching its global audience.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col rounded-xl border transition-all duration-300 overflow-hidden ${
              tier.highlight 
                ? 'border-accent bg-primary text-white shadow-2xl scale-105 z-10' 
                : 'border-border bg-white text-primary hover:border-accent/50 shadow-sm'
            }`}
          >
            {tier.highlight && (
              <div className="absolute top-4 right-4 z-20 bg-accent text-primary text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                Most Requested
              </div>
            )}
            
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={tier.image} 
                alt={tier.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className={`text-2xl font-serif mb-4 ${tier.highlight ? 'text-accent' : 'text-primary'}`}>
                {tier.name}
              </h3>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl font-bold ${tier.highlight ? 'text-white' : 'text-primary'}`}>
                  {tier.price}
                </span>
              </div>
              
              <p className={`mb-8 text-sm ${tier.highlight ? 'text-white/70' : 'text-muted-foreground'}`}>
                {tier.description}
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-accent" />
                    <span className={`text-sm ${tier.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 font-bold text-lg h-auto ${
                  tier.highlight 
                    ? 'bg-accent hover:bg-accent/90 text-primary' 
                    : 'bg-primary hover:bg-primary/90 text-white'
                }`}
                onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Secure This Tier
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceTiers;