import React from 'react';
import Header from '@/components/Header';
import SentinelAI from '@/components/SentinelAI';
import Ryvora from '@/components/Ryvora';
import TrustVaultID from '@/components/TrustVaultID';
import IvyraAI from '@/components/IvyraAI';
import { Shield, Fingerprint, Link2, ShieldAlert, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const scrollToNextSection = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const nextSection = heroSection.nextElementSibling;
      nextSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-pattern opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Advanced Security Solutions for the Digital Age
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Our suite of cybersecurity software protects your digital identity, detects threats, and ensures secure authentication across all platforms.
            </p>

            {/* Clickable Feature Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <a
                href="https://sentinel-ai-dark-wave.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-lg bg-navy-light/30 border border-gray-700 hover:border-navy-accent transition-all duration-300"
              >
                <Shield size={32} className="text-navy-accent mb-3" />
                <h3 className="font-medium">Sentinel.AI</h3>
                <p className="text-sm text-gray-400">Authentication</p>
              </a>

              <a
                href="https://ryvora-darkwave-aritra.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-lg bg-navy-light/30 border border-gray-700 hover:border-navy-accent transition-all duration-300"
              >
                <Fingerprint size={32} className="text-navy-accent mb-3" />
                <h3 className="font-medium">RYVORA</h3>
                <p className="text-sm text-gray-400">Biometrics</p>
              </a>

              <a
                href="https://trust-vault-id-darkwave-aritra.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-lg bg-navy-light/30 border border-gray-700 hover:border-navy-accent transition-all duration-300"
              >
                <Link2 size={32} className="text-navy-accent mb-3" />
                <h3 className="font-medium">TrustVaultID</h3>
                <p className="text-sm text-gray-400">Blockchain ID</p>
              </a>

              <a
                href="https://ivyra-ai-darkwave-aritra.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-lg bg-navy-light/30 border border-gray-700 hover:border-navy-accent transition-all duration-300"
              >
                <ShieldAlert size={32} className="text-navy-accent mb-3" />
                <h3 className="font-medium">Ivyra.AI</h3>
                <p className="text-sm text-gray-400">Phishing Detection</p>
              </a>
            </div>

            <Button
              onClick={scrollToNextSection}
              variant="outline"
              className="border-navy-accent text-navy-accent animate-bounce"
            >
              Explore Our Solutions <ChevronDown size={16} className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent pointer-events-none"></div>
      </section>

      {/* Sentinel.AI Section */}
      <section id="sentinel" className="py-20 px-4">
        <div className="container mx-auto">
          <a
            href="https://sentinel-ai-dark-wave.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="section-title mb-12 max-w-4xl mx-auto block text-center hover:text-navy-accent transition-colors"
          >
            Sentinel.AI: Advanced Authentication
          </a>
          <div className="max-w-4xl mx-auto">
            <SentinelAI />
          </div>
        </div>
      </section>

      {/* RYVORA Section */}
      <section id="ryvora" className="py-20 px-4 bg-navy-light/10">
        <div className="container mx-auto">
          <a
            href="https://ryvora-darkwave-aritra.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="section-title mb-12 max-w-4xl mx-auto block text-center hover:text-navy-accent transition-colors"
          >
            RYVORA: Behavioral Biometric Analyzer
          </a>
          <div className="max-w-4xl mx-auto">
            <Ryvora />
          </div>
        </div>
      </section>

      {/* TrustVaultID Section */}
      <section id="trustvault" className="py-20 px-4">
        <div className="container mx-auto">
          <a
            href="https://trust-vault-id-darkwave-aritra.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="section-title mb-12 max-w-4xl mx-auto block text-center hover:text-navy-accent transition-colors"
          >
            TrustVaultID: Blockchain Identity
          </a>
          <div className="max-w-4xl mx-auto">
            <TrustVaultID />
          </div>
        </div>
      </section>

      {/* Ivyra.AI Section */}
      <section id="ivyra" className="py-20 px-4 bg-navy-light/10">
        <div className="container mx-auto">
          <a
            href="https://ivyra-ai-darkwave-aritra.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="section-title mb-12 max-w-4xl mx-auto block text-center hover:text-navy-accent transition-colors"
          >
            Ivyra.AI: Phishing Detector
          </a>
          <div className="max-w-4xl mx-auto">
            <IvyraAI />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Shield size={24} className="text-navy-accent" />
            <span className="font-bold text-xl">DarkWave Solutions</span>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="#sentinel" className="text-sm hover:text-navy-accent transition-colors">Sentinel.AI</a>
            <a href="#ryvora" className="text-sm hover:text-navy-accent transition-colors">RYVORA</a>
            <a href="#trustvault" className="text-sm hover:text-navy-accent transition-colors">TrustVaultID</a>
            <a href="#ivyra" className="text-sm hover:text-navy-accent transition-colors">Ivyra.AI</a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2025 DarkWave Solutions by Aritra Kundu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
