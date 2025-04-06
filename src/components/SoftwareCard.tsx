
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface SoftwareCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  className?: string;
  children?: React.ReactNode;
  gradient?: string;
}

const SoftwareCard = ({
  title,
  description,
  icon,
  features,
  className,
  children,
  gradient = "from-navy-accent/20 to-navy-highlight/20"
}: SoftwareCardProps) => {
  return (
    <Card className={cn(
      "glass-card card-hover p-6 h-full flex flex-col bg-gradient-to-br",
      gradient,
      className
    )}>
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-navy p-3 rounded-lg text-navy-accent">
          {icon}
        </div>
        <h3 className="text-2xl font-bold glow-text">{title}</h3>
      </div>
      
      <p className="text-gray-300 mb-6">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-navy-highlight">Key Features</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-navy-accent mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto">
        {children}
      </div>
    </Card>
  );
};

export default SoftwareCard;
