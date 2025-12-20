import { motion } from 'framer-motion';
import { Cog, BarChart3, Brain } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import AnimatedCard from '@/components/AnimatedCard';
import AnimatedSection from '@/components/AnimatedSection';

const TechnologySection = () => {
  const { t } = useI18n();

  const techCards = [
    {
      icon: Cog,
      title: t('tech.automation.title'),
      description: t('tech.automation.description'),
    },
    {
      icon: BarChart3,
      title: t('tech.data.title'),
      description: t('tech.data.description'),
    },
    {
      icon: Brain,
      title: t('tech.ai.title'),
      description: t('tech.ai.description'),
    },
  ];

  return (
    <AnimatedSection id="tecnologia" className="bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('tech.title')}
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t('tech.subtitle')}
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
          {techCards.map((card, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="text-center h-full flex flex-col">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <card.icon size={26} />
                </motion.div>
                <h3 className="font-heading font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TechnologySection;
