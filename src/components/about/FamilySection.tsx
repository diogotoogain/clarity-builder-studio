import { motion } from 'framer-motion';
import fotoFamilia from '@/assets/foto-familia.jpeg';
import fotoRiad from '@/assets/foto-riad.jpeg';

const FamilySection = () => {
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
              A base é humana
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
                  alt="Diogo, Nathalya e Otto — família unida"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground text-center">
                Diogo, Nathalya e Otto
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
                A Toogain nasce em 2024, mas carrega uma década de construção: Diogo e Nathalya 
                empreendem juntos desde 2014.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Família, responsabilidade e presença não são "detalhes" — são a régua do que 
                vale a pena construir.
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
                  Visão que atravessa fronteiras
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  Em uma experiência de 21 dias em Riad (Arábia Saudita), Diogo reforçou uma crença 
                  simples: confiança se constrói com diligência — observar, estudar, validar, e só 
                  então decidir.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Essa mentalidade guia a Toogain: método antes do ruído.
                </p>
              </div>

              {/* Photo */}
              <div className="order-1 md:order-2">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                  <img
                    src={fotoRiad}
                    alt="Diogo em encontro internacional em Riad, demonstrando visão global"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-[10px] text-muted-foreground text-center">
                  Riad, Arábia Saudita — disciplina e visão global
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
