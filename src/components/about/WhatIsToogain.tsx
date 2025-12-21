import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const WhatIsToogain = () => {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo/Name breakdown */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              <span className="text-primary">TOO</span>
              <span className="text-foreground">+</span>
              <span className="text-primary">GAIN</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
            {t('toogain.title')}
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {t('toogain.description')}
          </p>

          {/* Decorative element */}
          <motion.div
            className="mt-10 w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsToogain;
