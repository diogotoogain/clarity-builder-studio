import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Quote } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

// Import testimonial images
import rogerio from '@/assets/testimonials/rogerio.webp';
import roseIvan from '@/assets/testimonials/rose-ivan.webp';
import eliseu from '@/assets/testimonials/eliseu.webp';
import andre from '@/assets/testimonials/andre.webp';
import rodrigo from '@/assets/testimonials/rodrigo.webp';
import fatima from '@/assets/testimonials/fatima.webp';
import ailton from '@/assets/testimonials/ailton.webp';
import toninho from '@/assets/testimonials/toninho.webp';
import david from '@/assets/testimonials/david.webp';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  vimeoUrl: string;
  headlineKey: string;
  transcriptKey: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rogério',
    image: rogerio,
    vimeoUrl: 'https://player.vimeo.com/video/1118535828?autoplay=1&controls=1&playsinline=1&showinfo=0&rel=0',
    headlineKey: 'testimonials.1.headline',
    transcriptKey: 'testimonials.1.transcript',
  },
  {
    id: 2,
    name: 'Rose e Ivan',
    image: roseIvan,
    vimeoUrl: 'https://player.vimeo.com/video/1118535884?autoplay=1&controls=1&playsinline=1&showinfo=0&rel=0',
    headlineKey: 'testimonials.2.headline',
    transcriptKey: 'testimonials.2.transcript',
  },
  {
    id: 3,
    name: 'Eliseu',
    image: eliseu,
    vimeoUrl: 'https://player.vimeo.com/video/1118535776?autoplay=1&controls=1&playsinline=1&showinfo=0&rel=0',
    headlineKey: 'testimonials.3.headline',
    transcriptKey: 'testimonials.3.transcript',
  },
  {
    id: 4,
    name: 'André',
    image: andre,
    vimeoUrl: 'https://player.vimeo.com/video/1118535952?autoplay=1&controls=1&playsinline=1&showinfo=0&rel=0',
    headlineKey: 'testimonials.4.headline',
    transcriptKey: 'testimonials.4.transcript',
  },
  {
    id: 5,
    name: 'Rodrigo',
    image: rodrigo,
    vimeoUrl: 'https://player.vimeo.com/video/1118740391?autoplay=1&controls=1&playsinline=1&showinfo=0&rel=0',
    headlineKey: 'testimonials.5.headline',
    transcriptKey: 'testimonials.5.transcript',
  },
  {
    id: 6,
    name: 'Fátima',
    image: fatima,
    vimeoUrl: 'https://player.vimeo.com/video/1118536045?autoplay=1&controls=1&playsinline=1&showinfo=0&rel=0',
    headlineKey: 'testimonials.6.headline',
    transcriptKey: 'testimonials.6.transcript',
  },
  {
    id: 7,
    name: 'Ailton',
    image: ailton,
    vimeoUrl: 'https://player.vimeo.com/video/1118535728?autoplay=1&controls=1&playsinline=1&showinfo=0&rel=0',
    headlineKey: 'testimonials.7.headline',
    transcriptKey: 'testimonials.7.transcript',
  },
  {
    id: 8,
    name: 'Toninho',
    image: toninho,
    vimeoUrl: 'https://player.vimeo.com/video/1118535156?autoplay=1&controls=1&playsinline=1&showinfo=0&rel=0',
    headlineKey: 'testimonials.8.headline',
    transcriptKey: 'testimonials.8.transcript',
  },
  {
    id: 9,
    name: 'David',
    image: david,
    vimeoUrl: 'https://player.vimeo.com/video/1118841070?autoplay=1&controls=1&playsinline=1&showinfo=0&rel=0',
    headlineKey: 'testimonials.9.headline',
    transcriptKey: 'testimonials.9.transcript',
  },
];

const TestimonialCard = ({ 
  testimonial, 
  onClick,
  t 
}: { 
  testimonial: Testimonial; 
  onClick: () => void;
  t: (key: string) => string;
}) => {
  return (
    <motion.div
      className="group relative cursor-pointer h-full"
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg h-full">
        {/* Thumbnail */}
        <img 
          src={testimonial.image} 
          alt={`Depoimento de ${testimonial.name}`}
          className="w-full h-full object-contain bg-black/50 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-glow"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.2 }}
          >
            <Play size={28} className="ml-1" />
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-sm font-semibold text-primary mb-2">{testimonial.name}</p>
          <h3 className="text-sm md:text-base font-bold text-foreground leading-tight line-clamp-3">
            {t(testimonial.headlineKey)}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialModal = ({ 
  testimonial, 
  isOpen, 
  onClose,
  t 
}: { 
  testimonial: Testimonial | null; 
  isOpen: boolean; 
  onClose: () => void;
  t: (key: string) => string;
}) => {
  if (!testimonial) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] md:h-auto md:max-h-[90vh] p-0 gap-0 bg-card border-border/50 overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">
          Depoimento de {testimonial.name}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Assista o depoimento e leia a transcrição completa
        </DialogDescription>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors border border-border/50"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Video section */}
          <div className="w-full lg:w-3/5 bg-black shrink-0">
            <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[300px]">
              <iframe
                src={testimonial.vimeoUrl}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={`Depoimento de ${testimonial.name}`}
              />
            </div>
          </div>

          {/* Transcript section */}
          <div className="w-full lg:w-2/5 flex flex-col min-h-0 flex-1 overflow-hidden">
            <div className="p-5 md:p-6 border-b border-border/50 shrink-0 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <Quote size={20} className="text-primary shrink-0" />
                <span className="text-base font-semibold text-primary">{testimonial.name}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                {t(testimonial.headlineKey)}
              </h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 md:p-6 bg-background/50">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base">
                {t(testimonial.transcriptKey)}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CIPDTestimonials = () => {
  const { t } = useI18n();
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTestimonial(null), 300);
  };

  return (
    <section id="depoimentos-cipd" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {t('cipd.testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('cipd.testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Desktop Grid - 3x3 */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <TestimonialCard
                testimonial={testimonial}
                onClick={() => handleOpenModal(testimonial)}
                t={t}
              />
            </motion.div>
          ))}
        </div>

        {/* Tablet Grid - 2 columns */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-5 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <TestimonialCard
                testimonial={testimonial}
                onClick={() => handleOpenModal(testimonial)}
                t={t}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-3 basis-[80%]">
                  <TestimonialCard
                    testimonial={testimonial}
                    onClick={() => handleOpenModal(testimonial)}
                    t={t}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-card border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
              <CarouselNext className="static translate-y-0 bg-card border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            </div>
          </Carousel>
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-xs text-muted-foreground/70 text-center mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {t('cipd.testimonials.disclaimer')}
        </motion.p>
      </div>

      {/* Modal */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        t={t}
      />
    </section>
  );
};

export default CIPDTestimonials;
