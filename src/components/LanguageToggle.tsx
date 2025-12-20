import { motion } from 'framer-motion';
import { useI18n, Language } from '@/lib/i18n';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { lang, setLang } = useI18n();

  const toggleLanguage = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary border border-border/50 rounded-full transition-colors"
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <Globe size={14} />
      <span className="uppercase tracking-wide text-xs">{lang}</span>
    </motion.button>
  );
};

export default LanguageToggle;
