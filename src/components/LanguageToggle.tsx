import { motion } from 'framer-motion';
import { useI18n, Language } from '@/lib/i18n';
import { Globe } from 'lucide-react';

const languages: Language[] = ['pt', 'en', 'es'];

const LanguageToggle = () => {
  const { lang, setLang } = useI18n();

  const cycleLanguage = () => {
    const currentIndex = languages.indexOf(lang);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLang(languages[nextIndex]);
  };

  const getLabel = (lang: Language) => {
    switch (lang) {
      case 'pt': return 'PT';
      case 'en': return 'EN';
      case 'es': return 'ES';
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={cycleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary border border-border/50 rounded-full transition-colors"
      aria-label="Change language"
    >
      <Globe size={14} />
      <span className="uppercase tracking-wide text-xs font-semibold">{getLabel(lang)}</span>
    </motion.button>
  );
};

export default LanguageToggle;
