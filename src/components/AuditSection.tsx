import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Download, Table, Lock, Mail } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';

const AuditSection = () => {
  const [email, setEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    toast.success('Access Granted. Opening the CMRA Blueprint...');
    
    // Redirect to the PDF
    const pdfUrl = 'https://storage.googleapis.com/dala-prod-public-storage/attachments/65cdf180-79a3-4422-a60d-fee75daa727f/1776901751096_inheritolatry_bedrock_assessment.pdf';
    
    setTimeout(() => {
      window.open(pdfUrl, '_blank');
      setIsOpen(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
            The Bedrock Assessment: A Strategic Blueprint.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore a redacted version of our deep-dive analysis. This is the technical precision we bring to every literary project before we touch a single keyword.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto group"
        >
          <div className="absolute -inset-1 bg-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-white border border-border overflow-hidden rounded-xl shadow-2xl">
            <div className="bg-primary p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <Table className="text-accent h-5 w-5" />
                <span className="text-white/80 text-sm font-mono tracking-wider uppercase">BEDROCK_TECHNICAL_AUDIT_REDACTED.PDF</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
            </div>
            
            <div className="relative aspect-video overflow-hidden group/image">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d833f643-9980-4336-a662-00aa5aab9d78/technical-audit-preview-new-4251321b-1776910501955.webp" 
                alt="Technical Audit Preview" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-primary font-bold shadow-xl px-8"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      View Sample Bedrock Assessment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#1A1A1A] text-white border-accent/30 sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif text-accent flex items-center gap-2">
                        <Lock className="h-5 w-5" />
                        Technical Preview: Classified Brief
                      </DialogTitle>
                      <DialogDescription className="text-white/60">
                        This redacted document demonstrates our data-first infrastructure for authorial visibility.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="mt-4 mb-6 relative group/preview">
                      <div className="absolute inset-0 bg-accent/10 blur-xl group-hover/preview:bg-accent/20 transition-colors"></div>
                      <img 
                        src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d833f643-9980-4336-a662-00aa5aab9d78/technical-audit-preview-new-4251321b-1776910501955.webp" 
                        alt="Audit Preview" 
                        className="w-full aspect-[4/3] object-cover rounded-lg border border-white/10 blur-[2px]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-primary/80 px-4 py-2 rounded-full border border-accent/50 backdrop-blur-sm">
                          <span className="text-xs font-mono uppercase tracking-widest text-accent">Access Restricted</span>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleDownload} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="modal-email" className="text-white/80">Enter your email to download the Full CMRA Blueprint</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                          <Input 
                            id="modal-email"
                            type="email"
                            required
                            placeholder="architect@manuscript.com"
                            className="bg-white/5 border-white/10 text-white pl-10 h-12 focus:border-accent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <Button 
                        type="submit"
                        className="w-full bg-accent hover:bg-accent/90 text-primary font-bold h-12"
                      >
                        Request Instant Access
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditSection;