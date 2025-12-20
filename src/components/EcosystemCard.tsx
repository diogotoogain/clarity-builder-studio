import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EcosystemCardProps {
  title: string;
  description: string;
  bullets: string[];
  image?: string;
  imageAlt?: string;
  className?: string;
}

const EcosystemCard = ({ title, description, bullets, image, imageAlt, className }: EcosystemCardProps) => {
  return (
    <div
      className={cn(
        'bg-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30',
        className
      )}
    >
      {image && (
        <div className="relative h-40 md:h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-heading font-bold text-lg text-foreground mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{description}</p>
        <ul className="space-y-2.5">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EcosystemCard;
