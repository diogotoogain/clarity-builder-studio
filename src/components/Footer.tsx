import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useI18n();
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-border/30 py-12 md:py-16"
    >
      <div className="container mx-auto text-center">
        <p className="font-heading font-bold text-xl text-foreground mb-4">TOOGAIN</p>
        <p className="text-sm text-muted-foreground mb-6">
          {t('footer.copyright')}
        </p>
        <p className="text-xs text-muted-foreground/70 max-w-md mx-auto">
          {t('footer.disclaimer')}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
