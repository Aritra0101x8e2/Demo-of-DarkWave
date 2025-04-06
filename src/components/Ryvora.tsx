
import React, { useState } from 'react';
import SoftwareCard from './SoftwareCard';
import { Fingerprint, ChevronRight, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Ryvora = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [behaviorData, setBehaviorData] = useState<{
    typingSpeed: null | 'high' | 'medium' | 'low';
    mouseMovePattern: null | 'smooth' | 'erratic';
    deviceMatch: null | boolean;
    locationMatch: null | boolean;
  }>({
    typingSpeed: null,
    mouseMovePattern: null,
    deviceMatch: null,
    locationMatch: null,
  });
  
  const handleNextStep = () => {
    setDemoStep(prev => {
      const nextStep = prev + 1;
      
      // Simulate analysis results when moving to step 1
      if (nextStep === 1) {
        setTimeout(() => {
          setBehaviorData({
            typingSpeed: 'high',
            mouseMovePattern: 'smooth',
            deviceMatch: true,
            locationMatch: true,
          });
        }, 1000);
      }
      
      return nextStep;
    });
  };
  
  const resetDemo = () => {
    setDemoStep(0);
    setBehaviorData({
      typingSpeed: null,
      mouseMovePattern: null,
      deviceMatch: null,
      locationMatch: null,
    });
  };
  
  const getMatchIcon = (value: boolean | null) => {
    if (value === null) return null;
    return value ? 
      <Check size={16} className="text-green-500" /> : 
      <X size={16} className="text-red-500" />;
  };
  
  return (
    <SoftwareCard 
      title="RYVORA"
      description="Our behavioral biometric analyzer creates unique digital fingerprints based on how users interact with devices, detecting imposters even with stolen credentials."
      icon={<Fingerprint size={28} />}
      features={[
        "Keystroke Dynamics Analysis",
        "Mouse Movement Pattern Recognition",
        "Device Handling Signatures",
        "Continuous Authentication Monitoring"
      ]}
      gradient="from-purple-900/20 to-navy-accent/20"
    >
      <div className="bg-navy rounded-lg p-4 border border-gray-700">
        <h4 className="text-lg font-medium mb-4 text-center">Behavioral Analysis Demo</h4>
        
        {demoStep === 0 && (
          <div className="space-y-4">
            <p className="text-sm text-gray-300">
              RYVORA creates a unique behavioral fingerprint based on how you interact with your device.
            </p>
            <Button 
              onClick={handleNextStep} 
              className="w-full bg-navy-accent hover:bg-navy-accent/80"
            >
              Analyze Behavior
            </Button>
          </div>
        )}
        
        {demoStep === 1 && (
          <div>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Typing Speed</span>
                <div className="flex items-center gap-2">
                  {behaviorData.typingSpeed ? (
                    <span className="text-sm font-medium capitalize">
                      {behaviorData.typingSpeed}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-400">Analyzing...</span>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Mouse Movement</span>
                <div className="flex items-center gap-2">
                  {behaviorData.mouseMovePattern ? (
                    <span className="text-sm font-medium capitalize">
                      {behaviorData.mouseMovePattern}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-400">Analyzing...</span>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Device Match</span>
                <div className="flex items-center gap-2">
                  {behaviorData.deviceMatch !== null ? (
                    <>
                      <span className={cn(
                        "text-sm font-medium",
                        behaviorData.deviceMatch ? "text-green-500" : "text-red-500"
                      )}>
                        {behaviorData.deviceMatch ? "Match" : "No match"}
                      </span>
                      {getMatchIcon(behaviorData.deviceMatch)}
                    </>
                  ) : (
                    <span className="text-sm text-gray-400">Analyzing...</span>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Location Match</span>
                <div className="flex items-center gap-2">
                  {behaviorData.locationMatch !== null ? (
                    <>
                      <span className={cn(
                        "text-sm font-medium",
                        behaviorData.locationMatch ? "text-green-500" : "text-red-500"
                      )}>
                        {behaviorData.locationMatch ? "Match" : "No match"}
                      </span>
                      {getMatchIcon(behaviorData.locationMatch)}
                    </>
                  ) : (
                    <span className="text-sm text-gray-400">Analyzing...</span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button 
                onClick={resetDemo} 
                variant="outline" 
                className="border-navy-accent text-navy-accent"
              >
                Reset
              </Button>
              <Button 
                onClick={handleNextStep} 
                className="bg-navy-accent hover:bg-navy-accent/80"
              >
                Next <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        )}
        
        {demoStep === 2 && (
          <div className="text-center space-y-4">
            <div className="py-3">
              <Fingerprint size={48} className="mx-auto text-green-500 mb-2" />
              <h5 className="text-lg font-medium">User Verified</h5>
              <p className="text-sm text-gray-300">
                Behavioral patterns match your unique profile.
              </p>
            </div>
            
            <Button 
              onClick={resetDemo} 
              variant="outline" 
              className="border-navy-accent text-navy-accent"
            >
              Reset Demo
            </Button>
          </div>
        )}
      </div>
    </SoftwareCard>
  );
};

export default Ryvora;
