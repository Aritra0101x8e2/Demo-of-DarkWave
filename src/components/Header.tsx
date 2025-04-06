
import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="py-4 px-6 fixed top-0 left-0 right-0 bg-navy-dark/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield size={24} className="text-navy-accent" />
          <span className="font-bold text-xl">DarkWave Solutions</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sentinel" className="text-sm hover:text-navy-accent transition-colors">Sentinel.AI</a>
          <a href="#ryvora" className="text-sm hover:text-navy-accent transition-colors">RYVORA</a>
          <a href="#trustvault" className="text-sm hover:text-navy-accent transition-colors">TrustVaultID</a>
          <a href="#ivyra" className="text-sm hover:text-navy-accent transition-colors">Ivyra.AI</a>
        </nav>
        
        <a 
  href="https://wa.me/qr/7DGKFLHEAXGOB1" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button className="bg-navy-accent hover:bg-navy-accent/80">
    Contact Us
  </Button>
</a>

      </div>
    </header>
  );
};

export default Header;
