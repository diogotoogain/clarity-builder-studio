import { motion } from 'framer-motion';

const AboutFooter = () => {
  return (
    <footer className="py-10 md:py-12 bg-card border-t border-border/50">
      <div className="container mx-auto px-5">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Wordmark */}
          <h2 className="text-xl font-heading font-bold text-foreground mb-6">
            TOOGAIN
          </h2>

          {/* Institutional links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6">
            <a 
              href="#termos" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a 
              href="#politica" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Política
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a 
              href="#riscos" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Riscos e responsabilidade
            </a>
          </div>

          {/* Disclaimer */}
          <div className="bg-secondary/50 rounded-lg p-4 mb-6">
            <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
              Conteúdo educacional. Operações no mercado financeiro envolvem riscos. 
              Resultados passados não garantem resultados futuros.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TOOGAIN. Educação e Inteligência Aplicada.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default AboutFooter;
