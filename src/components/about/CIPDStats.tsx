import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Activity, CheckCircle, XCircle, Target, Zap, Shield } from 'lucide-react';

const stats = [
  { label: 'Pontos', value: 25140, icon: TrendingUp, suffix: '' },
  { label: 'Operações', value: 447, icon: Activity, suffix: '' },
  { label: 'Gains', value: 323, icon: CheckCircle, suffix: '' },
  { label: 'Losses', value: 124, icon: XCircle, suffix: '' },
  { label: 'Assertividade', value: 72.26, icon: Target, suffix: '%', decimals: 2 },
  { label: 'Maior sequência vencedora', value: 16, icon: Zap, suffix: '' },
  { label: 'Maior sequência perdedora', value: 4, icon: Shield, suffix: '' },
];

const AnimatedCounter = ({ 
  value, 
  suffix = '', 
  decimals = 0,
  isInView 
}: { 
  value: number; 
  suffix?: string; 
  decimals?: number;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString('pt-BR');

  return (
    <span className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

const CIPDStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-5">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Transparência em números
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Processo importa. Gestão importa. Transparência importa. O relatório oficial 
            dos últimos 12 meses do CIPD registra:
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {stats.slice(0, 4).map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-card rounded-xl p-4 md:p-5 border border-border/50 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals}
                    isInView={isInView}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mb-10">
          {stats.slice(4).map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-card/50 rounded-lg p-3 border border-border/30 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Icon className="w-4 h-4 text-primary mx-auto mb-1" />
                <div className="text-lg md:text-xl font-heading font-bold text-foreground">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals}
                    isInView={isInView}
                  />
                </div>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-card rounded-xl p-5 border border-border/50">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              <span className="text-primary font-medium">Gerenciamento anti-quebra:</span>{' '}
              foco em preservar consistência no médio e longo prazo.
            </p>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-card rounded-2xl overflow-hidden border border-border/50">
            <div className="aspect-[9/16] md:aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1148297106?h=&title=0&byline=0&portrait=0"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Bastidores: registro do relatório em áudio para alunos"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-muted-foreground text-center">
                Bastidores: Diogo registrando o relatório com transparência para os alunos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CIPDStats;
