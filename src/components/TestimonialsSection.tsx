import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
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
      className="group relative cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg">
        {/* Thumbnail */}
        <img 
          src={testimonial.image} 
          alt={`Depoimento de ${testimonial.name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground shadow-glow"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Play size={24} className="ml-1" />
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-xs font-medium text-primary mb-1">{testimonial.name}</p>
          <h3 className="text-sm font-semibold text-foreground leading-tight line-clamp-3">
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
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0 gap-0 bg-card border-border/50 overflow-hidden">
        <DialogTitle className="sr-only">
          Depoimento de {testimonial.name}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Assista o depoimento e leia a transcrição completa
        </DialogDescription>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          {/* Video section */}
          <div className="w-full lg:w-1/2 bg-black">
            <div className="relative aspect-[9/16] lg:aspect-auto lg:h-full">
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
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="p-6 border-b border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Quote size={20} className="text-primary" />
                <span className="text-sm font-medium text-primary">{testimonial.name}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground leading-tight">
                {t(testimonial.headlineKey)}
              </h3>
            </div>
            
            <ScrollArea className="flex-1 p-6">
              <div className="prose prose-sm prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                  {t(testimonial.transcriptKey)}
                </p>
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TestimonialsSection = () => {
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
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
            <CarouselContent className="-ml-2">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 basis-[75%]">
                  <TestimonialCard
                    testimonial={testimonial}
                    onClick={() => handleOpenModal(testimonial)}
                    t={t}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0 bg-card border-border/50 hover:bg-card/80" />
              <CarouselNext className="static translate-y-0 bg-card border-border/50 hover:bg-card/80" />
            </div>
          </Carousel>
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-xs text-muted-foreground/70 text-center mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {t('testimonials.disclaimer')}
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

export default TestimonialsSection;
