import { motion } from 'framer-motion';
import aboutHeroBg from '@/assets/about-hero-bg.webp';
import fotoCasal from '@/assets/foto-casal.jpeg';
import { ChevronDown } from 'lucide-react';

const chips = ['Matemático', 'Estatístico', 'Professor', 'Fundador'];

const AboutHero = () => {
  const scrollToJourney = () => {
    document.getElementById('jornada')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutHeroBg}
          alt="Fundo abstrato representando tecnologia e clareza"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center md:text-left md:max-w-none md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Diogo Rosendo
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-primary font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ciência aplicada. Gestão de risco. Propósito em escala.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Diogo Rosendo é matemático e estatístico, professor por paixão e fundador da Toogain. 
              Depois de transformar uma crise real em ponto de virada, ele decidiu colocar método 
              onde muita gente coloca opinião — e compartilhar o que aprendeu com quem quer construir 
              uma nova fonte de renda com responsabilidade.
            </motion.p>

            {/* Chips */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {chips.map((chip, index) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary/80 text-foreground border border-border/50"
                >
                  {chip}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              onClick={scrollToJourney}
              className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-sm font-medium">Ver a jornada</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative max-w-sm mx-auto md:max-w-none">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={fotoCasal}
                  alt="Diogo Rosendo e Nathalya comemorando conquistas juntos"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground text-center md:text-left">
                Diogo e Nathalya — parceria desde 2014
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
