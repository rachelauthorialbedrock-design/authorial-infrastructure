import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Methodology', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
  ];

  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/65cdf180-79a3-4422-a60d-fee75daa727f/1776905346814_ChatGPT_Image_Apr_20__2026__05_09_03_AM.png";
  const instagramUrl = "https://www.instagram.com/rachel.authorialbedrock?igsh=cXc1bnZvdXVkOTly";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md py-3 shadow-md border-b border-border' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logoUrl} 
            alt="The Authorial Bedrock Logo" 
            className="h-20 md:h-24 w-auto object-contain transition-all duration-300"
          />
        </div>

        {/* Desktop Nav */}\
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors duration-200 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}\
          
          <div className="flex items-center gap-4 border-l border-accent/30 pl-8">
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors ${isScrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-accent'}`}
              title="Instagram"
            >\
              <Instagram size={20} />
            </a>
            <Button 
              className="bg-accent hover:bg-accent/90 text-primary font-bold px-6 py-5 h-auto rounded-none uppercase tracking-widest text-xs"
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Snapshot
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden shadow-xl"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium py-4 border-b border-border/50 text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-6 text-lg mt-2 rounded-none"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get My Snapshot
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;