import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { Sprout, Building2, Rocket, Crown, Sparkles } from 'lucide-react';

const timelineData = [
  { year: '2021', icon: Sprout, key: '2021' },
  { year: '2022', icon: Building2, key: '2022' },
  { year: '2023', icon: Rocket, key: '2023' },
  { year: '2024', icon: Crown, key: '2024' },
  { year: '2025', icon: Sparkles, key: '2025' },
];

const Timeline = () => {
  const { t } = useI18n();

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Central line */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50" />
      
      <div className="space-y-12 md:space-y-16">
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={`relative flex items-start gap-4 md:gap-8 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ml-12 md:ml-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border/50 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-glow transition-all duration-300"
                >
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {t(`timeline.${item.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`timeline.${item.key}.description`)}
                  </p>
                </motion.div>
              </div>
              
              {/* Icon node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.15 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary shadow-glow"
              >
                <Icon className="w-5 h-5 text-primary" />
              </motion.div>
              
              {/* Spacer for desktop alignment */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
