import { cn } from '@/lib/utils';

interface CycleStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const CycleStep = ({ number, title, description, isLast }: CycleStepProps) => {
  return (
    <div className="relative flex items-start gap-4 pb-8">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent" />
      )}
      
      {/* Number circle */}
      <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
        <span className="text-sm font-semibold text-primary">{number}</span>
      </div>
      
      {/* Content */}
      <div className="flex-1 pt-1.5">
        <h4 className="font-heading font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default CycleStep;
