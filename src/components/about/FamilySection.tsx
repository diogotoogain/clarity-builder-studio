import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import fotoFamilia from '@/assets/foto-familia.jpeg';
import fotoOtto from '@/assets/foto-otto.jpeg';
import fotoChampagne from '@/assets/foto-champagne.jpeg';
import fotoRiad from '@/assets/foto-riad.jpeg';
import fotoCasal from '@/assets/foto-casal.jpeg';
import { useI18n } from '@/lib/i18n';

const FamilySection = () => {
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

  const visionPhotos = [
    {
      src: fotoRiad,
      captionKey: 'family.vision.caption',
    },
    {
      src: fotoCasal,
      captionKey: 'family.vision.caption2',
    },
  ];

  const [visionSlide, setVisionSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % familyPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + familyPhotos.length) % familyPhotos.length);
  };

  const nextVisionSlide = () => {
    setVisionSlide((prev) => (prev + 1) % visionPhotos.length);
  };

  const prevVisionSlide = () => {
    setVisionSlide((prev) => (prev - 1 + visionPhotos.length) % visionPhotos.length);
  };

  return (
    <section id="fundadores" className="py-16 md:py-24 bg-background">
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
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t('family.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative">
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
              
              <p className="mt-3 text-xs text-muted-foreground text-center">
                {t(familyPhotos[currentSlide].captionKey)}
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
              
              {/* Founders Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-card rounded-xl p-4 border border-border/50">
                  <h4 className="font-heading font-semibold text-foreground mb-1">Diogo Rosendo</h4>
                  <p className="text-xs text-muted-foreground">{t('family.diogo.role')}</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border/50">
                  <h4 className="font-heading font-semibold text-foreground mb-1">Nathalya Rosendo</h4>
                  <p className="text-xs text-muted-foreground">{t('family.nathalya.role')}</p>
                </div>
              </div>
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
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {t('family.vision.text2')}
                </p>
                <p className="text-[10px] text-muted-foreground/60 italic">
                  {t('family.vision.disclaimer')}
                </p>
              </div>

              {/* Photo Carousel */}
              <div className="order-1 md:order-2 relative">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md relative">
                  {visionPhotos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo.src}
                      alt={t(photo.captionKey)}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                        index === visionSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                    />
                  ))}
                  
                  {/* Navigation */}
                  <button
                    onClick={prevVisionSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors active:scale-95"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextVisionSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors active:scale-95"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
                
                {/* Dots */}
                <div className="flex justify-center gap-2 mt-3">
                  {visionPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setVisionSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === visionSlide 
                          ? 'bg-primary w-4' 
                          : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="mt-2 text-[10px] text-muted-foreground text-center">
                  {t(visionPhotos[visionSlide].captionKey)}
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
