import { motion } from 'framer-motion';
import Header from '@/components/Header';
import AnimatedSection from '@/components/AnimatedSection';
import FAQAccordionAnimated from '@/components/FAQAccordionAnimated';
import EcosystemCard from '@/components/EcosystemCard';
import AnimatedCard from '@/components/AnimatedCard';
import AnimatedCycleStep from '@/components/AnimatedCycleStep';
import JourneyTimelineNew from '@/components/about/JourneyTimelineNew';
import WhatIsToogain from '@/components/about/WhatIsToogain';
import GroupStructure from '@/components/about/GroupStructure';
import CIPDStats from '@/components/about/CIPDStats';
import FamilySectionNew from '@/components/about/FamilySectionNew';
import GlobalCommunity from '@/components/about/GlobalCommunity';
import GlobalVisionSection from '@/components/about/GlobalVisionSection';
import DreamSection from '@/components/about/DreamSection';
import TechnologySection from '@/components/TechnologySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Lightbulb, Settings, TrendingUp, Shield, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

import heroBg from '@/assets/hero-bg.webp';
import moneyAcademy from '@/assets/money-academy.webp';
import intelligence from '@/assets/intelligence.webp';

const Index = () => {
  const { t } = useI18n();
  const heroWords = [t('hero.clarity'), t('hero.method'), t('hero.execution'), t('hero.evolution')];
  const principles = [
    t('principles.item1'),
    t('principles.item2'),
    t('principles.item3'),
    t('principles.item4'),
    t('principles.item5'),
  ];
  const whatWeAreNot = [
    t('whatWeAreNot.item1'),
    t('whatWeAreNot.item2'),
    t('whatWeAreNot.item3'),
    t('whatWeAreNot.item4'),
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroBg}
            alt="Ilustração abstrata representando tecnologia e clareza"
            className="w-full h-full object-cover opacity-40"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
          <div className="absolute inset-0 bg-hero-glow" />
        </div>

        <div className="container mx-auto relative z-10 text-center px-4 py-20 md:py-32">
          <motion.h1 
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-6 md:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground/80 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.description')}
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {heroWords.map((item, index) => (
              <motion.span
                key={item}
                className="px-3 py-1.5 text-xs font-medium text-primary/90 bg-primary/10 border border-primary/20 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-glow"
              onClick={() => document.getElementById('ecossistema')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta.ecosystem')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-primary/30 text-primary hover:bg-primary/10 px-6 py-3 rounded-full font-medium transition-all duration-300"
              onClick={() => document.getElementById('transparencia-numeros')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta.transparency')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Manifesto */}
      <AnimatedSection id="manifesto">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 md:mb-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('manifesto.title')}
          </motion.h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t('manifesto.p1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t('manifesto.p2')}
              <br />
              {t('manifesto.p3')}
              <br />
              {t('manifesto.p4')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t('manifesto.p5')}
              <br />
              {t('manifesto.p6')}
              <br />
              {t('manifesto.p7')}
            </motion.p>
          </div>
          <motion.div 
            className="mt-10 md:mt-12 p-6 bg-card border border-primary/20 rounded-2xl text-center shadow-glow"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="font-heading font-semibold text-lg md:text-xl text-foreground">
              {t('manifesto.quote')}
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* O que fazemos */}
      <AnimatedSection id="o-que-fazemos" className="bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
            {t('whatWeDo.title')}
          </h2>
          <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto">
            {t('whatWeDo.description')}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            <AnimatedCard delay={0}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{t('whatWeDo.education.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('whatWeDo.education.description')}</p>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.1}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{t('whatWeDo.intelligence.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('whatWeDo.intelligence.description')}</p>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Settings size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{t('whatWeDo.processes.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('whatWeDo.processes.description')}</p>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{t('whatWeDo.evolution.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('whatWeDo.evolution.description')}</p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Ecossistema */}
      <AnimatedSection id="ecossistema">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
            {t('ecosystem.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-12">
            <EcosystemCard
              title={t('ecosystem.academy.title')}
              description={t('ecosystem.academy.description')}
              bullets={[
                t('ecosystem.academy.bullet1'),
                t('ecosystem.academy.bullet2'),
                t('ecosystem.academy.bullet3'),
                t('ecosystem.academy.bullet4'),
              ]}
              image={moneyAcademy}
              imageAlt="Ilustração abstrata representando formação e trilhas de aprendizado"
            />
            <EcosystemCard
              title={t('ecosystem.intelligence.title')}
              description={t('ecosystem.intelligence.description')}
              bullets={[
                t('ecosystem.intelligence.bullet1'),
                t('ecosystem.intelligence.bullet2'),
                t('ecosystem.intelligence.bullet3'),
                t('ecosystem.intelligence.bullet4'),
              ]}
              image={intelligence}
              imageAlt="Ilustração abstrata representando inteligência aplicada e automação"
            />
          </div>
          <p className="text-xs text-muted-foreground/70 text-center mt-8 max-w-2xl mx-auto">
            {t('ecosystem.disclaimer')}
          </p>
        </div>
      </AnimatedSection>

      {/* Como Atuamos */}
      <AnimatedSection id="como-atuamos" className="bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
            {t('howWeWork.title')}
          </h2>
          <p className="text-muted-foreground text-center mb-10 md:mb-12">
            {t('howWeWork.description')}
          </p>
          <motion.div 
            className="bg-card border border-border/50 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AnimatedCycleStep
              number={1}
              title={t('howWeWork.clarity')}
              description={t('howWeWork.clarity.description')}
              index={0}
            />
            <AnimatedCycleStep
              number={2}
              title={t('howWeWork.method')}
              description={t('howWeWork.method.description')}
              index={1}
            />
            <AnimatedCycleStep
              number={3}
              title={t('howWeWork.execution')}
              description={t('howWeWork.execution.description')}
              index={2}
            />
            <AnimatedCycleStep
              number={4}
              title={t('howWeWork.evolution')}
              description={t('howWeWork.evolution.description')}
              isLast
              index={3}
            />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Sobre - Jornada */}
      <JourneyTimelineNew />

      {/* Sobre - O que é Toogain */}
      <WhatIsToogain />

      {/* Sobre - Estrutura do Grupo */}
      <GroupStructure />

      {/* Tecnologia Aplicada */}
      <TechnologySection />

      {/* Sobre - CIPD Stats */}
      <CIPDStats />

      {/* Visão Global - CR7/Riad */}
      <GlobalVisionSection />

      {/* Depoimentos */}
      <TestimonialsSection />

      {/* Sobre - Família */}
      <FamilySectionNew />

      {/* Sobre - Comunidade Global */}
      <GlobalCommunity />

      {/* Diferenciais */}
      <AnimatedSection id="diferenciais" className="bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10 md:mb-12 text-center">
            {t('differentials.title')}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            <AnimatedCard delay={0}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{t('differentials.responsibility.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('differentials.responsibility.description')}</p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.1}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{t('differentials.simplicity.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('differentials.simplicity.description')}</p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{t('differentials.longTerm.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('differentials.longTerm.description')}</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Princípios */}
      <AnimatedSection id="principios">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10 md:mb-12">
            {t('principles.title')}
          </h2>
          <ul className="space-y-4 text-muted-foreground text-left max-w-md mx-auto mb-10">
            {principles.map((item, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.span 
                  className="w-2 h-2 rounded-full bg-primary flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('principles.footer')}
          </motion.p>
        </div>
      </AnimatedSection>

      {/* O que não somos */}
      <AnimatedSection id="o-que-nao-somos" className="bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10 md:mb-12">
            {t('whatWeAreNot.title')}
          </h2>
          <ul className="space-y-3 text-muted-foreground text-left max-w-sm mx-auto mb-10">
            {whatWeAreNot.map((item, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          <motion.div 
            className="p-6 bg-card border border-primary/20 rounded-2xl shadow-glow"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="font-heading font-semibold text-lg md:text-xl text-foreground">
              {t('whatWeAreNot.quote')}
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Transparência */}
      <AnimatedSection id="transparencia">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 md:mb-10">
            {t('transparency.title')}
          </h2>
          <motion.p 
            className="text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('transparency.description')}
          </motion.p>
          <motion.div 
            className="p-5 bg-card border border-border/50 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-muted-foreground/70">
              <strong className="text-muted-foreground">{t('transparency.disclaimer.title')}</strong> {t('transparency.disclaimer.text')}
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection id="faq" className="bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10 md:mb-12 text-center">
            {t('faq.title')}
          </h2>
          <FAQAccordionAnimated />
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Index;