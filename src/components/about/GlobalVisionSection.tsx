import { motion } from 'framer-motion';
import { Globe, Quote } from 'lucide-react';
import fotoRiad from '@/assets/foto-riad.jpeg';
import { useI18n } from '@/lib/i18n';

const GlobalVisionSection = () => {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-card/30 via-background to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">BTC Signature 2026</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
              {t('vision.title')}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {t('vision.subtitle')}
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <motion.div
              className="relative order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg relative group">
                <img
                  src={fotoRiad}
                  alt={t('vision.caption')}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-sm text-foreground/90 font-medium">
                    {t('vision.caption')}
                  </p>
                </div>
              </div>
              
              {/* Disclaimer */}
              <p className="mt-3 text-[10px] text-muted-foreground/60 text-center italic">
                {t('vision.disclaimer')}
              </p>
            </motion.div>

            {/* Text content */}
            <motion.div
              className="order-1 md:order-2 space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t('vision.text1')}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t('vision.text2')}
              </p>
              <p className="text-sm md:text-base text-foreground font-medium">
                {t('vision.text3')}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t('vision.text4')}
              </p>

              {/* Quote Box */}
              <motion.div
                className="my-6 p-5 bg-card border border-primary/20 rounded-xl shadow-glow relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Quote className="absolute top-3 left-3 w-5 h-5 text-primary/30" />
                <p className="text-foreground font-heading font-semibold text-sm md:text-base pl-6">
                  {t('vision.quote')}
                </p>
              </motion.div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t('vision.text5')}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t('vision.text6')}
              </p>
              <p className="text-sm md:text-base text-foreground font-medium">
                {t('vision.text7')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalVisionSection;
