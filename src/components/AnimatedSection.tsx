import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  delay?: number;
}

const AnimatedSection = ({ 
  id, 
  children, 
  className, 
  containerClassName,
  delay = 0 
}: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn('py-16 md:py-24 overflow-hidden', className)}
    >
      <div className={cn('container mx-auto px-4', containerClassName)}>
        {children}
      </div>
    </motion.section>
  );
};

export default AnimatedSection;
