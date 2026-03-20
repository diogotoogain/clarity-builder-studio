import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, CloudRain, Music, TrendingUp, Share2, Rocket } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

interface PhaseProps {
  phase: number;
  icon: React.ElementType;
  titleKey: string;
  subtitleKey?: string;
  textKeys: string[];
  quoteKey?: string;
  armKeys?: string[];
  isLast?: boolean;
}

const JourneyPhase = ({ phase, icon: Icon, titleKey, subtitleKey, textKeys, quoteKey, armKeys, isLast }: PhaseProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { t } = useI18n();

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Phase Card */}
      <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Phase Number Badge */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <span className="text-6xl md:text-8xl font-heading font-bold text-primary/10">
            {phase}
          </span>
        </div>

        {/* Icon */}
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 relative z-10">
          <Icon className="w-6 h-6 md:w-7 md:h-7" />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2 relative z-10">
          {t(titleKey)}
        </h3>

        {/* Subtitle */}
        {subtitleKey && (
          <p className="text-sm text-primary/80 mb-4">
            {t(subtitleKey)}
          </p>
        )}

        {/* Text paragraphs */}
        <div className="space-y-4 text-muted-foreground leading-relaxed relative z-10">
          {textKeys.map((key, index) => (
            <p key={index} className="text-sm md:text-base">
              {t(key)}
            </p>
          ))}
        </div>

        {/* Quote if present */}
        {quoteKey && (
          <motion.div
            className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-foreground font-heading font-semibold italic text-sm md:text-base">
              {t(quoteKey)}
            </p>
          </motion.div>
        )}

        {/* Arms/branches if present (Phase 7) */}
        {armKeys && (
          <div className="mt-6 space-y-2">
            {armKeys.map((key, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <span className="text-primary">→</span>
                <span>{t(key)}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Connector line */}
      {!isLast && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 md:h-12 bg-gradient-to-b from-primary/50 to-transparent mt-2"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
      )}
    </motion.div>
  );
};

const JourneyTimelineNew = () => {
  const { t } = useI18n();

  const phases: PhaseProps[] = [
    {
      phase: 1,
      icon: MapPin,
      titleKey: 'journey.phase1.title',
      subtitleKey: 'journey.phase1.subtitle',
      textKeys: ['journey.phase1.text1', 'journey.phase1.text2', 'journey.phase1.text3'],
    },
    {
      phase: 2,
      icon: GraduationCap,
      titleKey: 'journey.phase2.title',
      textKeys: ['journey.phase2.text1', 'journey.phase2.text2', 'journey.phase2.text3', 'journey.phase2.text4'],
    },
    {
      phase: 3,
      icon: CloudRain,
      titleKey: 'journey.phase3.title',
      textKeys: ['journey.phase3.text1', 'journey.phase3.text2', 'journey.phase3.text3', 'journey.phase3.text4', 'journey.phase3.text5', 'journey.phase3.text6'],
    },
    {
      phase: 4,
      icon: Music,
      titleKey: 'journey.phase4.title',
      textKeys: ['journey.phase4.text1', 'journey.phase4.text2', 'journey.phase4.text3'],
      quoteKey: 'journey.phase4.quote',
    },
    {
      phase: 5,
      icon: TrendingUp,
      titleKey: 'journey.phase5.title',
      textKeys: ['journey.phase5.text1', 'journey.phase5.text2', 'journey.phase5.text3', 'journey.phase5.text4', 'journey.phase5.text5'],
      disclaimerKey: 'journey.phase5.disclaimer',
    },
    {
      phase: 6,
      icon: Share2,
      titleKey: 'journey.phase6.title',
      textKeys: ['journey.phase6.text1', 'journey.phase6.text2', 'journey.phase6.text3', 'journey.phase6.text4', 'journey.phase6.text5', 'journey.phase6.text6'],
      quoteKey: 'journey.phase6.quote',
    },
    {
      phase: 7,
      icon: Rocket,
      titleKey: 'journey.phase7.title',
      textKeys: ['journey.phase7.text1', 'journey.phase7.text2', 'journey.phase7.text3', 'journey.phase7.text4', 'journey.phase7.text5'],
      armKeys: ['journey.phase7.arm1', 'journey.phase7.arm2', 'journey.phase7.arm3'],
      isLast: true,
    },
  ];

  // Add text after phase 4 quote
  const phase4Extra = ['journey.phase4.text4', 'journey.phase4.text5', 'journey.phase4.text6'];

  return (
    <section id="jornada" className="py-16 md:py-24 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
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

        {/* Phases */}
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          {phases.map((phase, index) => {
            // Special handling for phase 4 to add extra text after quote
            if (phase.phase === 4) {
              return (
                <JourneyPhaseWithExtra
                  key={phase.phase}
                  {...phase}
                  extraTextKeys={phase4Extra}
                />
              );
            }
            return (
              <JourneyPhase
                key={phase.phase}
                {...phase}
              />
            );
          })}

          {/* Final stats */}
          <motion.div
            className="text-center py-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-foreground font-heading font-semibold">
              {t('journey.phase7.text6')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Special component for phase 4 with extra text after quote
const JourneyPhaseWithExtra = ({ phase, icon: Icon, titleKey, subtitleKey, textKeys, quoteKey, extraTextKeys, isLast }: PhaseProps & { extraTextKeys: string[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { t } = useI18n();

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <span className="text-6xl md:text-8xl font-heading font-bold text-primary/10">
            {phase}
          </span>
        </div>

        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 relative z-10">
          <Icon className="w-6 h-6 md:w-7 md:h-7" />
        </div>

        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2 relative z-10">
          {t(titleKey)}
        </h3>

        {subtitleKey && (
          <p className="text-sm text-primary/80 mb-4">
            {t(subtitleKey)}
          </p>
        )}

        <div className="space-y-4 text-muted-foreground leading-relaxed relative z-10">
          {textKeys.map((key, index) => (
            <p key={index} className="text-sm md:text-base">
              {t(key)}
            </p>
          ))}
        </div>

        {quoteKey && (
          <motion.div
            className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-foreground font-heading font-semibold italic text-sm md:text-base">
              {t(quoteKey)}
            </p>
          </motion.div>
        )}

        {/* Extra text after quote */}
        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed relative z-10">
          {extraTextKeys.map((key, index) => (
            <p key={index} className="text-sm md:text-base">
              {t(key)}
            </p>
          ))}
        </div>
      </div>

      {!isLast && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 md:h-12 bg-gradient-to-b from-primary/50 to-transparent mt-2"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
      )}
    </motion.div>
  );
};

export default JourneyTimelineNew;
