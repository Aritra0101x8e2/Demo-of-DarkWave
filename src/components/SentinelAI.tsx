
import React, { useState } from 'react';
import SoftwareCard from './SoftwareCard';
import { Shield, ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const SentinelAI = () => {
  const [authState, setAuthState] = useState<'idle' | 'scanning' | 'success' | 'fail'>('idle');
  const [progress, setProgress] = useState(0);
  
  const handleAuthDemo = () => {
    setAuthState('scanning');
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 10;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          // 80% chance of success, 20% chance of failure for demo purposes
          const isSuccess = Math.random() > 0.2;
          setTimeout(() => {
            setAuthState(isSuccess ? 'success' : 'fail');
          }, 300);
          return 100;
        }
        
        return newProgress;
      });
    }, 200);
  };
  
  const resetDemo = () => {
    setAuthState('idle');
    setProgress(0);
  };
  
  return (
    <SoftwareCard 
      title="Sentinel.AI"
      description="Our advanced authentication software uses multi-factor verification and AI-powered risk assessment to protect digital identities and secure access points."
      icon={<Shield size={28} />}
      features={[
        "Adaptive Multi-Factor Authentication",
        "Behavioral Risk Assessment",
        "Real-time Threat Detection",
        "Zero Trust Architecture Integration"
      ]}
      gradient="from-blue-900/20 to-navy-accent/20"
    >
      <div className="bg-navy rounded-lg p-4 border border-gray-700">
        <h4 className="text-lg font-medium mb-4 text-center">Authentication Demo</h4>
        
        <div className="flex justify-center mb-6">
          {authState === 'idle' && <Shield size={64} className="text-navy-accent animate-pulse-soft" />}
          {authState === 'scanning' && <ShieldAlert size={64} className="text-yellow-500 animate-pulse" />}
          {authState === 'success' && <ShieldCheck size={64} className="text-green-500" />}
          {authState === 'fail' && <ShieldX size={64} className="text-red-500" />}
        </div>
        
        {authState === 'scanning' && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Verifying identity</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        
        {authState === 'success' && (
          <div className="text-center mb-4 text-green-500">
            Authentication successful!
          </div>
        )}
        
        {authState === 'fail' && (
          <div className="text-center mb-4 text-red-500">
            Authentication failed! Suspicious behavior detected.
          </div>
        )}
        
        <div className="flex justify-center">
          {authState === 'idle' ? (
            <Button onClick={handleAuthDemo} className="bg-navy-accent hover:bg-navy-accent/80">
              Authenticate
            </Button>
          ) : (
            <Button onClick={resetDemo} variant="outline" className="border-navy-accent text-navy-accent">
              Reset Demo
            </Button>
          )}
        </div>
      </div>
    </SoftwareCard>
  );
};

export default SentinelAI;
