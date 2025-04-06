
import React, { useState } from 'react';
import SoftwareCard from './SoftwareCard';
import { ShieldAlert, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const IvyraAI = () => {
  const [url, setUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<null | 'safe' | 'suspicious' | 'dangerous'>(null);
  const [threatDetails, setThreatDetails] = useState<string[]>([]);
  
  const handleScan = () => {
    // Make sure URL is not empty
    if (!url) return;
    
    setScanning(true);
    setResult(null);
    setThreatDetails([]);
    
    // Simulate scanning
    setTimeout(() => {
      setScanning(false);
      
      // For demo purposes, specific domains will show different results
      if (url.includes('bank') || url.includes('login') || url.includes('account')) {
        setResult('dangerous');
        setThreatDetails([
          'Domain registered in last 24 hours',
          'SSL certificate mismatch',
          'Suspicious redirect chain detected',
          'Known phishing patterns identified'
        ]);
      } else if (url.includes('download') || url.includes('free')) {
        setResult('suspicious');
        setThreatDetails([
          'Uncommon domain extension',
          'Mixed content warnings',
          'Redirects to different domain'
        ]);
      } else {
        setResult('safe');
        setThreatDetails([]);
      }
    }, 2000);
  };
  
  const resetDemo = () => {
    setUrl('');
    setScanning(false);
    setResult(null);
    setThreatDetails([]);
  };
  
  const getResultIcon = () => {
    switch (result) {
      case 'safe':
        return <CheckCircle size={40} className="text-green-500" />;
      case 'suspicious':
        return <AlertTriangle size={40} className="text-yellow-500" />;
      case 'dangerous':
        return <XCircle size={40} className="text-red-500" />;
      default:
        return null;
    }
  };
  
  const getResultClass = () => {
    switch (result) {
      case 'safe':
        return "bg-green-500/10 border-green-500/50 text-green-500";
      case 'suspicious':
        return "bg-yellow-500/10 border-yellow-500/50 text-yellow-500";
      case 'dangerous':
        return "bg-red-500/10 border-red-500/50 text-red-500";
      default:
        return "bg-navy border-gray-700";
    }
  };
  
  return (
    <SoftwareCard 
      title="Ivyra.AI"
      description="Our AI-powered phishing detection software identifies fraudulent websites and communications in real-time, protecting users from sophisticated social engineering attacks."
      icon={<ShieldAlert size={28} />}
      features={[
        "Real-time URL Analysis",
        "Visual Similarity Detection",
        "Natural Language Processing for Email Scanning",
        "Zero-hour Phishing Protection"
      ]}
      gradient="from-red-900/20 to-navy-accent/20"
    >
      <div className="bg-navy rounded-lg p-4 border border-gray-700">
        <h4 className="text-lg font-medium mb-4 text-center">Phishing Detection Demo</h4>
        
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter a URL to scan (try 'login' or 'bank')"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-navy-light/50 border-gray-700"
            />
          </div>
        </div>
        
        {result && (
          <div className={cn(
            "p-4 rounded-lg border mb-4 transition-all duration-300",
            getResultClass()
          )}>
            <div className="flex items-center gap-3 mb-2">
              {getResultIcon()}
              <div>
                <h5 className="font-medium">
                  {result === 'safe' && 'Website is safe'}
                  {result === 'suspicious' && 'Suspicious website detected'}
                  {result === 'dangerous' && 'Dangerous phishing site detected'}
                </h5>
                <p className="text-sm opacity-80">
                  {result === 'safe' && 'No phishing indicators found'}
                  {result === 'suspicious' && 'Exercise caution with this site'}
                  {result === 'dangerous' && 'Do not proceed to this website'}
                </p>
              </div>
            </div>
            
            {threatDetails.length > 0 && (
              <div className="mt-3 pl-2 border-l-2 border-current/30">
                <h6 className="text-sm font-medium mb-1">Detected threats:</h6>
                <ul className="text-xs space-y-1">
                  {threatDetails.map((threat, index) => (
                    <li key={index}>• {threat}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        <div className="flex justify-between">
          {!scanning && result !== null && (
            <Button 
              onClick={resetDemo} 
              variant="outline" 
              className="border-navy-accent text-navy-accent"
            >
              Reset
            </Button>
          )}
          <Button 
            onClick={handleScan} 
            className="bg-navy-accent hover:bg-navy-accent/80 ml-auto"
            disabled={scanning || !url}
          >
            {scanning ? "Scanning..." : "Scan URL"}
          </Button>
        </div>
      </div>
    </SoftwareCard>
  );
};

export default IvyraAI;
