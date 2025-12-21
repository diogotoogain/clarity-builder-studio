import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useI18n();
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-border/30 py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-heading font-bold text-xl text-foreground mb-2">TOOGAIN</p>
          <p className="text-sm text-muted-foreground mb-6">
            {t('footer.tagline')}
          </p>
          
          {/* Legal Links */}
          <div className="flex justify-center gap-6 mb-6">
            <Link 
              to="/termos" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.terms')}
            </Link>
            <Link 
              to="/privacidade" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.privacy')}
            </Link>
          </div>
          
          {/* CNPJ */}
          <p className="text-xs text-muted-foreground/60 mb-4">
            CNPJ: 55.560.597/0001-10
          </p>
          
          <p className="text-sm text-muted-foreground mb-4">
            {t('footer.copyright')}
          </p>
          
          <p className="text-xs text-muted-foreground/70 max-w-md mx-auto">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
