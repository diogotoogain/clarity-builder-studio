import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
}

const AnimatedCard = ({ 
  children, 
  className, 
  delay = 0,
  hoverScale = 1.02 
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: hoverScale, y: -4 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn(
        'bg-card border border-border/50 rounded-2xl p-6 transition-shadow duration-300 hover:shadow-glow hover:border-primary/30',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
