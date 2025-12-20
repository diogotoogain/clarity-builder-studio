import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Bitcoin } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const GroupStructure = () => {
  const { t } = useI18n();

  const branches = [
    {
      id: 'money-academy',
      titleKey: 'group.academy.title',
      descriptionKey: 'group.academy.description',
      icon: GraduationCap,
      featureKeys: [
        'group.academy.feature1',
        'group.academy.feature2',
      ],
      available: true,
    },
    {
      id: 'intelligence',
      titleKey: 'group.intelligence.title',
      descriptionKey: 'group.intelligence.description',
      icon: Cpu,
      featureKeys: [
        'group.intelligence.feature1',
      ],
      available: true,
    },
    {
      id: 'btc-signature',
      titleKey: 'group.btc.title',
      descriptionKey: 'group.btc.description',
      icon: Bitcoin,
      featureKeys: [
        'group.btc.feature1',
      ],
      available: false,
      launchYear: '2026',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            {t('group.title')}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('group.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {branches.map((branch, index) => {
            const Icon = branch.icon;
            return (
              <motion.div
                key={branch.id}
                className="relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Coming soon badge */}
                {!branch.available && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      {branch.launchYear}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {t(branch.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {t(branch.descriptionKey)}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {branch.featureKeys.map((featureKey, i) => (
                    <li key={i} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GroupStructure;
