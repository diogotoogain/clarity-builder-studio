import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const AnimatedNumber = ({ value, isInView }: { value: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span className="tabular-nums">{count.toLocaleString('pt-BR')}</span>;
};

const DreamSection = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center" ref={ref}>
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">{t('dream.subtitle')}</span>
          </motion.div>

          {/* Big Number */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-heading font-bold text-primary leading-none">
              <AnimatedNumber value={1001} isInView={isInView} />
            </h2>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('dream.title')}
          </motion.h3>

          {/* Text content */}
          <motion.div
            className="space-y-4 text-muted-foreground leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-base md:text-lg text-foreground font-medium">
              {t('dream.text1')}
            </p>
            <p className="text-base md:text-lg">
              {t('dream.text2')}
            </p>
            <p className="text-sm md:text-base">
              {t('dream.text3')}
            </p>
            <p className="text-sm md:text-base">
              {t('dream.text4')}
            </p>
            <p className="text-sm md:text-base">
              {t('dream.text5')}
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="p-6 md:p-8 bg-card border border-primary/20 rounded-2xl shadow-glow mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg md:text-xl font-heading font-semibold text-foreground italic">
              {t('dream.quote')}
            </p>
          </motion.div>

          {/* Final text */}
          <motion.div
            className="space-y-3 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-sm md:text-base">
              {t('dream.text6')}
            </p>
            <p className="text-base md:text-lg text-foreground font-heading font-semibold">
              {t('dream.text7')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DreamSection;
