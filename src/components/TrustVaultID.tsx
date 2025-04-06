
import React, { useState } from 'react';
import SoftwareCard from './SoftwareCard';
import { Link2, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const TrustVaultID = () => {
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState<boolean | null>(null);
  const [blocks, setBlocks] = useState<{ id: number; verified: boolean }[]>([]);
  
  const handleVerify = () => {
    setVerifying(true);
    setVerified(null);
    setBlocks([]);
    
    // Simulate blockchain verification
    const totalBlocks = 5;
    let currentBlock = 0;
    
    const verifyInterval = setInterval(() => {
      currentBlock++;
      
      setBlocks(prev => [
        ...prev,
        { id: currentBlock, verified: Math.random() > 0.1 } // 90% success rate for demo
      ]);
      
      if (currentBlock >= totalBlocks) {
        clearInterval(verifyInterval);
        
        setTimeout(() => {
          setVerifying(false);
          // All blocks must be verified for success
          const allVerified = blocks.every(block => block.verified);
          setVerified(allVerified);
        }, 1000);
      }
    }, 800);
  };
  
  const resetDemo = () => {
    setVerifying(false);
    setVerified(null);
    setBlocks([]);
  };
  
  return (
    <SoftwareCard 
      title="TrustVaultID"
      description="Our blockchain identity solution creates immutable digital identities stored on distributed ledgers, ensuring authenticity while giving users control over their personal data."
      icon={<Link2 size={28} />}
      features={[
        "Self-Sovereign Identity Framework",
        "Immutable Identity Verification",
        "Decentralized Credential Validation",
        "Privacy-Preserving Data Sharing"
      ]}
      gradient="from-teal-900/20 to-navy-accent/20"
    >
      <div className="bg-navy rounded-lg p-4 border border-gray-700">
        <h4 className="text-lg font-medium mb-4 text-center">Blockchain Identity Demo</h4>
        
        <div className="mb-6">
          {blocks.length > 0 && (
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm">Block Verification</span>
              <span className="text-sm font-medium">
                {blocks.filter(b => b.verified).length}/{blocks.length} Verified
              </span>
            </div>
          )}
          
          <div className="flex justify-center gap-2 h-12">
            {verifying && blocks.length === 0 && (
              <div className="flex items-center">
                <RefreshCw size={24} className="text-navy-accent animate-spin" />
                <span className="ml-2">Connecting to blockchain...</span>
              </div>
            )}
            
            {blocks.map((block) => (
              <div 
                key={block.id}
                className={cn(
                  "w-8 h-8 flex items-center justify-center rounded border",
                  block.verified 
                    ? "border-green-500 bg-green-500/10 text-green-500" 
                    : "border-red-500 bg-red-500/10 text-red-500"
                )}
              >
                {block.verified ? <CheckCircle size={16} /> : <XCircle size={16} />}
              </div>
            ))}
            
            {verified === true && (
              <div className="flex items-center text-green-500">
                <CheckCircle size={24} />
                <span className="ml-2">Identity verified on blockchain</span>
              </div>
            )}
            
            {verified === false && (
              <div className="flex items-center text-red-500">
                <XCircle size={24} />
                <span className="ml-2">Verification failed</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-center">
          {(!verifying && verified === null) ? (
            <Button 
              onClick={handleVerify} 
              className="bg-navy-accent hover:bg-navy-accent/80"
            >
              Verify Identity
            </Button>
          ) : (
            <Button 
              onClick={resetDemo} 
              variant="outline" 
              className="border-navy-accent text-navy-accent"
              disabled={verifying}
            >
              {verifying ? "Verifying..." : "Reset Demo"}
            </Button>
          )}
        </div>
      </div>
    </SoftwareCard>
  );
};

export default TrustVaultID;
