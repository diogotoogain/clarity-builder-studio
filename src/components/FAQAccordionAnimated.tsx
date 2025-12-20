import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { HelpCircle, ChevronDown, MessageCircle, Lightbulb, AlertCircle, Target } from 'lucide-react';

const faqIcons = [HelpCircle, MessageCircle, Lightbulb, AlertCircle];

const FAQAccordionAnimated = () => {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
  ];

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const Icon = faqIcons[index];
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <motion.div
              className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen 
                  ? 'border-primary/40 shadow-glow' 
                  : 'border-border/50 hover:border-primary/20'
              }`}
              layout
            >
              <motion.button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center gap-4 p-5 text-left"
                whileHover={{ backgroundColor: 'hsl(var(--secondary) / 0.3)' }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
                  }`}
                  animate={{ rotate: isOpen ? 360 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Icon size={18} />
                </motion.div>
                
                <span className="flex-1 font-medium text-foreground text-sm md:text-base">
                  {item.q}
                </span>
                
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="flex-shrink-0 text-muted-foreground"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.25, delay: 0.1 }
                    }}
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 pl-19"
                    >
                      <div className="ml-14 pt-0 border-l-2 border-primary/20 pl-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FAQAccordionAnimated;
