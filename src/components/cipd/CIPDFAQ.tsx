import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  { questionKey: 'cipd.faq.q1', answerKey: 'cipd.faq.a1' },
  { questionKey: 'cipd.faq.q2', answerKey: 'cipd.faq.a2' },
  { questionKey: 'cipd.faq.q3', answerKey: 'cipd.faq.a3' },
  { questionKey: 'cipd.faq.q4', answerKey: 'cipd.faq.a4' },
  { questionKey: 'cipd.faq.q5', answerKey: 'cipd.faq.a5' },
  { questionKey: 'cipd.faq.q6', answerKey: 'cipd.faq.a6' },
  { questionKey: 'cipd.faq.q7', answerKey: 'cipd.faq.a7' },
];

const CIPDFAQ = () => {
  const { t } = useI18n();

  return (
    <section id="faq-cipd" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {t('cipd.faq.title')}
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-glow data-[state=open]:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                    {t(item.questionKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {t(item.answerKey)}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default CIPDFAQ;
