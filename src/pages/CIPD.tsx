import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowDown, Clock, Cpu, Power, Check, X, TrendingUp, Target, Award, Flame, BarChart3, Zap } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CIPDTestimonials from '@/components/cipd/CIPDTestimonials';
import CIPDApplicationForm from '@/components/cipd/CIPDApplicationForm';
import CIPDFAQ from '@/components/cipd/CIPDFAQ';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Metrics data
const metrics = [
  { value: '25.140', labelKey: 'cipd.metrics.points', icon: TrendingUp },
  { value: '447', labelKey: 'cipd.metrics.operations', icon: Target },
  { value: '323', labelKey: 'cipd.metrics.gains', icon: Award },
  { value: '124', labelKey: 'cipd.metrics.losses', icon: Flame },
  { value: '72,26%', labelKey: 'cipd.metrics.assertiveness', icon: BarChart3 },
  { value: '15', labelKey: 'cipd.metrics.maxSequence', icon: Zap },
];

// Steps data
const steps = [
  { icon: Clock, titleKey: 'cipd.whatIs.step1.title', descKey: 'cipd.whatIs.step1.desc' },
  { icon: Cpu, titleKey: 'cipd.whatIs.step2.title', descKey: 'cipd.whatIs.step2.desc' },
  { icon: Power, titleKey: 'cipd.whatIs.step3.title', descKey: 'cipd.whatIs.step3.desc' },
];

// For who / not for who
const forWhoItems = [
  'cipd.forWho.yes.1',
  'cipd.forWho.yes.2',
  'cipd.forWho.yes.3',
  'cipd.forWho.yes.4',
  'cipd.forWho.yes.5',
];

const notForWhoItems = [
  'cipd.forWho.no.1',
  'cipd.forWho.no.2',
  'cipd.forWho.no.3',
  'cipd.forWho.no.4',
  'cipd.forWho.no.5',
];

const CIPD = () => {
  const { t, lang } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('cipd.meta.title')}</title>
        <meta name="description" content={t('cipd.meta.description')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://toogain.com/cipd" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* BLOCK 1: Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h1 
                className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {t('cipd.hero.title1')}
                <br />
                <span className="text-primary">{t('cipd.hero.title2')}</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {t('cipd.hero.subtitle')}
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="text-base px-8 py-6 shadow-glow"
                  onClick={() => scrollToSection('o-que-e')}
                >
                  {t('cipd.hero.cta1')}
                  <ArrowDown size={18} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8 py-6 border-border/50 hover:bg-card"
                  onClick={() => scrollToSection('depoimentos-cipd')}
                >
                  {t('cipd.hero.cta2')}
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={24} className="text-muted-foreground" />
            </motion.div>
          </motion.div>
        </section>

        {/* BLOCK 2: What is CIPD */}
        <section id="o-que-e" className="py-20 md:py-28 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                {t('cipd.whatIs.title')}
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground text-lg">
                <p>{t('cipd.whatIs.p1')}</p>
                <p className="text-foreground font-medium">{t('cipd.whatIs.p2')}</p>
                <p>{t('cipd.whatIs.p3')}</p>
              </div>
            </motion.div>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border/50 text-center hover:border-primary/30 hover:shadow-glow transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <step.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(step.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {t('cipd.whatIs.conclusion')}
            </motion.p>
          </div>
        </section>

        {/* BLOCK 3: Metrics */}
        <section className="py-20 md:py-28 relative bg-gradient-to-b from-background via-card/20 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {t('cipd.metrics.title')}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t('cipd.metrics.subtitle')}
              </p>
            </motion.div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 text-center hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  <metric.icon size={24} className="text-primary mx-auto mb-3 opacity-70" />
                  <p className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">
                    {metric.value}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {t(metric.labelKey)}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12 max-w-2xl mx-auto space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-foreground font-medium">
                {t('cipd.metrics.managementNote')}
              </p>
              <p className="text-xs text-muted-foreground/70">
                {t('cipd.metrics.disclaimer')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* BLOCK 4: Testimonials */}
        <CIPDTestimonials />

        {/* BLOCK 5: For Who / Not For Who */}
        <section className="py-20 md:py-28 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
                {t('cipd.forWho.title')}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* For Who */}
              <motion.div
                className="p-6 md:p-8 rounded-2xl bg-card border border-primary/30 shadow-glow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-heading font-bold text-xl md:text-2xl text-primary mb-6">
                  {t('cipd.forWho.yesTitle')}
                </h3>
                <ul className="space-y-4">
                  {forWhoItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <Check size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{t(item)}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Not For Who */}
              <motion.div
                className="p-6 md:p-8 rounded-2xl bg-card border border-border/50"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-heading font-bold text-xl md:text-2xl text-muted-foreground mb-6">
                  {t('cipd.forWho.noTitle')}
                </h3>
                <ul className="space-y-4">
                  {notForWhoItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <X size={20} className="text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{t(item)}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Quote */}
            <motion.div
              className="mt-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-primary/20 shadow-glow text-center">
                <p className="text-xl md:text-2xl font-heading font-bold text-foreground italic">
                  "{t('cipd.forWho.quote')}"
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BLOCK 6: Application Form */}
        <CIPDApplicationForm />

        {/* BLOCK 7: FAQ */}
        <CIPDFAQ />

        {/* Final CTA */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
                {t('cipd.finalCta.title')}
              </h2>
              <Button 
                size="lg" 
                className="text-base px-10 py-6 shadow-glow"
                onClick={() => scrollToSection('aplicar')}
              >
                {t('cipd.finalCta.button')}
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CIPD;
