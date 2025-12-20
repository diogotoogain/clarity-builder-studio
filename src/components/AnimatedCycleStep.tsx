import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCycleStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  index: number;
}

const AnimatedCycleStep = ({ number, title, description, isLast, index }: AnimatedCycleStepProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn(
        'relative flex gap-4 pb-8',
        !isLast && 'border-l-2 border-primary/30 ml-5'
      )}
    >
      {/* Number circle */}
      <motion.div 
        className={cn(
          'flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center font-heading font-bold text-sm text-primary',
          !isLast && 'relative -left-5'
        )}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          delay: index * 0.15 + 0.2 
        }}
        whileHover={{ scale: 1.1, rotate: 360 }}
      >
        {number}
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="flex-1 pt-1"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <h4 className="font-heading font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCycleStep;
