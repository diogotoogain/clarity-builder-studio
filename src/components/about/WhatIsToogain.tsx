import { motion } from 'framer-motion';

const WhatIsToogain = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-5">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo/Name breakdown */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              <span className="text-primary">TOO</span>
              <span className="text-foreground">+</span>
              <span className="text-primary">GAIN</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
            Toogain: nós ganhamos e você também
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Mais do que um nome, uma decisão. A Toogain nasceu para servir pessoas que querem 
            uma nova fonte de renda além da tradicional — com educação, tecnologia e responsabilidade.
          </p>

          {/* Decorative element */}
          <motion.div
            className="mt-10 w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsToogain;
