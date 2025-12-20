import { motion } from 'framer-motion';
import fotoFamilia from '@/assets/foto-familia.jpeg';
import fotoRiad from '@/assets/foto-riad.jpeg';
import { useI18n } from '@/lib/i18n';

const FamilySection = () => {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5">
        {/* Main Family Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              {t('family.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={fotoFamilia}
                  alt={t('family.caption')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground text-center">
                {t('family.caption')}
              </p>
            </motion.div>

            {/* Text */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('family.text1')}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('family.text2')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Global Vision - Riad */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Text */}
              <div className="order-2 md:order-1">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
                  {t('family.vision.title')}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {t('family.vision.text1')}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t('family.vision.text2')}
                </p>
              </div>

              {/* Photo */}
              <div className="order-1 md:order-2">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                  <img
                    src={fotoRiad}
                    alt={t('family.vision.caption')}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-[10px] text-muted-foreground text-center">
                  {t('family.vision.caption')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilySection;
