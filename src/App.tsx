import React from 'react';
import { Toaster } from 'sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import BeyondAlgorithm from './components/BeyondAlgorithm';
import AuditSection from './components/AuditSection';
import ServiceTiers from './components/ServiceTiers';
import DeepWorkProtocol from './components/DeepWorkProtocol';
import Strategist from './components/Strategist';
import Footer from './components/Footer';
import './theme.css';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-foreground">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <BeyondAlgorithm />
        <AuditSection />
        <ServiceTiers />
        <DeepWorkProtocol />
        <Strategist />
      </main>
      <Footer />
      <Toaster position="top-center" expand={true} richColors />
    </div>
  );
}

export default App;