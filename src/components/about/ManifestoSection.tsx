import { motion } from 'framer-motion';

const ManifestoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main quote */}
          <motion.blockquote
            className="mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-foreground leading-relaxed">
              "A Toogain não é minha. Eu criei a Toogain já sabendo disso."
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              — Diogo Rosendo
            </footer>
          </motion.blockquote>

          {/* Description */}
          <motion.div
            className="space-y-6 text-left md:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Toogain existe para servir pessoas: educação (Money Academy), tecnologia (Intelligence) 
              e visão global (BTC Signature, a partir de 2026).
            </p>

            {/* Philosophy quote */}
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <p className="text-sm md:text-base text-foreground leading-relaxed italic">
                "Prefiro ser nota 10 de 10 em um único ativo do que nota 7 em vários. 
                No mercado financeiro, não há espaço para nota 7."
              </p>
            </div>
          </motion.div>

          {/* Final statement */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl font-heading font-semibold text-primary">
              Toogain: nós ganhamos e você também.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;
