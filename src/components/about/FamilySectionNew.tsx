import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import fotoFamilia from '@/assets/foto-familia.jpeg';
import fotoOtto from '@/assets/foto-otto.jpeg';
import fotoChampagne from '@/assets/foto-champagne.jpeg';
import { useI18n } from '@/lib/i18n';

const FamilySectionNew = () => {
  const { t } = useI18n();
  const [currentSlide, setCurrentSlide] = useState(0);

  const familyPhotos = [
    {
      src: fotoFamilia,
      captionKey: 'family.caption1',
    },
    {
      src: fotoOtto,
      captionKey: 'family.caption2',
    },
    {
      src: fotoChampagne,
      captionKey: 'family.caption3',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % familyPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + familyPhotos.length) % familyPhotos.length);
  };

  return (
    <section id="fundadores" className="py-16 md:py-24 bg-background overflow-hidden">
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
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Família Rosendo</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
              {t('family.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('family.subtitle')}
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Text Content */}
            <motion.div
              className="space-y-4 order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                {t('family.text1')}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t('family.text2')}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t('family.text3')}
              </p>
              <p className="text-sm md:text-base text-foreground font-medium leading-relaxed">
                {t('family.text4')}
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed italic">
                {t('family.text5')}
              </p>

              {/* Founders Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-4">
                <motion.div 
                  className="bg-card rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-heading font-semibold text-foreground mb-1">Diogo Rosendo</h4>
                  <p className="text-xs text-muted-foreground">{t('family.diogo.role')}</p>
                </motion.div>
                <motion.div 
                  className="bg-card rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-heading font-semibold text-foreground mb-1">Nathalya Rosendo</h4>
                  <p className="text-xs text-muted-foreground">{t('family.nathalya.role')}</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Photo Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative order-1 md:order-2"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative group">
                {familyPhotos.map((photo, index) => (
                  <motion.img
                    key={index}
                    src={photo.src}
                    alt={t(photo.captionKey)}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                  />
                ))}
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors active:scale-95"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors active:scale-95"
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {familyPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-primary w-6' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Ir para foto ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Caption */}
              <p className="mt-3 text-xs text-muted-foreground text-center">
                {t(familyPhotos[currentSlide].captionKey)}
              </p>
              
              {/* Location caption */}
              <p className="mt-2 text-[10px] text-muted-foreground/60 text-center italic">
                {t('family.locationCaption')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySectionNew;
