import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Bitcoin } from 'lucide-react';

const branches = [
  {
    id: 'money-academy',
    title: 'Toogain Money Academy',
    icon: GraduationCap,
    description: 'Formação prática para quem quer iniciar no mundo dos investimentos. Da base ao processo.',
    features: [
      'Fábrica de Renda Imediata (FRI): começar pelo celular',
      'Projeto 200 Títulos (Plano de 100K): educacional da estratégia que multiplicou R$ 600 em mais de R$ 100 mil em ~9 meses',
    ],
    available: true,
  },
  {
    id: 'intelligence',
    title: 'Toogain Intelligence',
    icon: Cpu,
    description: 'Tecnologia para operar com processos automatizados. Menos ruído, mais método.',
    features: [
      'CIPD (Copy Invest do Professor Diogo): operações automatizadas, sem precisar ficar em frente ao computador',
    ],
    available: true,
  },
  {
    id: 'btc-signature',
    title: 'Toogain BTC Signature',
    icon: Bitcoin,
    description: 'Jornada global com automações inteligentes focadas em BTCUSDT. Foco total em excelência em um único ativo.',
    features: [
      'BTCUSDT é o par que expressa o valor do Bitcoin (BTC) em relação ao Tether (USDT), uma stablecoin pareada ao dólar',
    ],
    available: false,
    launchYear: '2026',
  },
];

const GroupStructure = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Estrutura do Grupo Toogain
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Três frentes complementares: educação, tecnologia e visão global.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {branches.map((branch, index) => {
            const Icon = branch.icon;
            return (
              <motion.div
                key={branch.id}
                className="relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Coming soon badge */}
                {!branch.available && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      {branch.launchYear}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {branch.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {branch.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {branch.features.map((feature, i) => (
                    <li key={i} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GroupStructure;
