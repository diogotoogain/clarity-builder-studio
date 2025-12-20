import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Lightbulb, Target, Heart, Rocket, Globe, TrendingUp } from 'lucide-react';

const journeySteps = [
  {
    id: 1,
    title: 'Origem',
    icon: MapPin,
    text: 'São Gonçalo (RJ). Classe C. Um começo comum — e uma disciplina incomum. Diogo e Nathalya aprenderam cedo a extrair valor do que tinham: estudo, consistência e visão de longo prazo.',
  },
  {
    id: 2,
    title: 'A descoberta',
    icon: Lightbulb,
    text: 'Buscando alternativas, Diogo enxergou a bolsa de valores com olhos diferentes: matemática e estatística, antes usadas na teoria, agora viravam ferramenta prática.',
  },
  {
    id: 3,
    title: 'A diferença',
    icon: Target,
    text: 'Ele não entrou como "palpiteiro" nem como analista tradicional. Entrou como cientista: padrões, hipóteses, risco medido, processo repetível.',
  },
  {
    id: 4,
    title: 'O propósito',
    icon: Heart,
    text: 'Por um tempo, viver só dos próprios rendimentos era possível. Mas não era suficiente. Diogo voltou ao que sempre o definiu: ensinar — agora com uma nova ferramenta.',
  },
  {
    id: 5,
    title: 'Nasce a Toogain (jun/2024)',
    icon: Rocket,
    text: 'Toogain nasce do sonho de compartilhar ganhos com alunos. TOO = também. GAIN = lucro no mercado. "Nós ganhamos e você também."',
  },
  {
    id: 6,
    title: 'Escala (2024)',
    icon: Globe,
    text: 'Em poucos meses, a Toogain alcança 13.305 alunos ativos em 33 países. Quando método encontra propósito, o impacto atravessa fronteiras.',
  },
  {
    id: 7,
    title: 'O futuro (2025+)',
    icon: TrendingUp,
    text: 'Grupo Toogain: Money Academy (educação), Intelligence (automação), BTC Signature (2026) — expansão global, com foco em excelência.',
  },
];

const TimelineItem = ({ step, index }: { step: typeof journeySteps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-4 md:gap-6 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline line */}
      <div className="relative flex flex-col items-center">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0 z-10">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </div>
        {index < journeySteps.length - 1 && (
          <motion.div
            className="absolute top-12 w-0.5 bg-gradient-to-b from-primary/50 to-border"
            style={{ height: 'calc(100% - 3rem)' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
          {step.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {step.text}
        </p>
      </div>
    </motion.div>
  );
};

const JourneyTimeline = () => {
  return (
    <section id="jornada" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            A Jornada do Herói
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Da origem humilde à escala global — uma história construída com método, disciplina e propósito.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {journeySteps.map((step, index) => (
            <TimelineItem key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
