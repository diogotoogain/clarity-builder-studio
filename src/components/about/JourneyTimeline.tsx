import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Lightbulb, Target, Heart, Rocket, Globe, TrendingUp } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const TimelineItem = ({ 
  step, 
  index,
  totalSteps
}: { 
  step: { id: number; titleKey: string; textKey: string; icon: React.ElementType }; 
  index: number;
  totalSteps: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = step.icon;
  const { t } = useI18n();

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-4 md:gap-6 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline line */}
      <div className="relative flex flex-col items-center">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0 z-10">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </div>
        {index < totalSteps - 1 && (
          <motion.div
            className="absolute top-12 w-0.5 bg-gradient-to-b from-primary/50 to-border"
            style={{ height: 'calc(100% - 3rem)' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
          {t(step.titleKey)}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {t(step.textKey)}
        </p>
      </div>
    </motion.div>
  );
};

const JourneyTimeline = () => {
  const { t } = useI18n();

  const journeySteps = [
    {
      id: 1,
      titleKey: 'journey.origin.title',
      textKey: 'journey.origin.text',
      icon: MapPin,
    },
    {
      id: 2,
      titleKey: 'journey.discovery.title',
      textKey: 'journey.discovery.text',
      icon: Lightbulb,
    },
    {
      id: 3,
      titleKey: 'journey.difference.title',
      textKey: 'journey.difference.text',
      icon: Target,
    },
    {
      id: 4,
      titleKey: 'journey.purpose.title',
      textKey: 'journey.purpose.text',
      icon: Heart,
    },
    {
      id: 5,
      titleKey: 'journey.birth.title',
      textKey: 'journey.birth.text',
      icon: Rocket,
    },
    {
      id: 6,
      titleKey: 'journey.scale.title',
      textKey: 'journey.scale.text',
      icon: Globe,
    },
    {
      id: 7,
      titleKey: 'journey.future.title',
      textKey: 'journey.future.text',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="jornada" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            {t('journey.title')}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('journey.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {journeySteps.map((step, index) => (
            <TimelineItem 
              key={step.id} 
              step={step} 
              index={index} 
              totalSteps={journeySteps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
