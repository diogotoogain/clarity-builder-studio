import Header from '@/components/Header';
import Section from '@/components/Section';
import FAQAccordion from '@/components/FAQAccordion';
import EcosystemCard from '@/components/EcosystemCard';
import FeatureCard from '@/components/FeatureCard';
import CycleStep from '@/components/CycleStep';
import Footer from '@/components/Footer';
import { BookOpen, Lightbulb, Settings, TrendingUp, Shield, Sparkles, Clock } from 'lucide-react';

import heroBg from '@/assets/hero-bg.webp';
import moneyAcademy from '@/assets/money-academy.webp';
import intelligence from '@/assets/intelligence.webp';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Ilustração abstrata representando tecnologia e clareza"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
          <div className="absolute inset-0 bg-hero-glow" />
        </div>

        <div className="container mx-auto relative z-10 text-center px-4 py-20 md:py-32">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 md:mb-6 animate-fade-up">
            TOOGAIN
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-up delay-100">
            Educação, tecnologia e inteligência aplicadas à tomada de decisão.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-up delay-200">
            A TOOGAIN é um ecossistema que une formação prática e inteligência aplicada para transformar conhecimento em execução com responsabilidade e visão de longo prazo.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 animate-fade-up delay-300">
            {['Clareza', 'Método', 'Execução', 'Evolução'].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-xs font-medium text-primary/90 bg-primary/10 border border-primary/20 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <Section id="manifesto">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 md:mb-10 text-center">
            Manifesto
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Acreditamos que decisões melhores constroem resultados melhores.
              Por isso, a TOOGAIN existe para transformar informação em clareza, clareza em método e método em execução.
            </p>
            <p>
              Não seguimos modismos.
              <br />
              Não vendemos ilusões.
              <br />
              Trabalhamos com responsabilidade, consistência e profundidade.
            </p>
            <p>
              Tecnologia é meio.
              <br />
              Educação é base.
              <br />
              Caráter e disciplina sustentam o longo prazo.
            </p>
          </div>
          <div className="mt-10 md:mt-12 p-6 bg-card border border-primary/20 rounded-2xl text-center shadow-glow">
            <p className="font-heading font-semibold text-lg md:text-xl text-foreground">
              "Autoridade não é volume. É direção."
            </p>
          </div>
        </div>
      </Section>

      {/* O que fazemos */}
      <Section id="o-que-fazemos" className="bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
            O que fazemos
          </h2>
          <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto">
            Nosso trabalho é construir fundamentos sólidos e sistemas aplicáveis — para que decisões deixem de ser improviso e passem a ser processo.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            <FeatureCard
              icon={<BookOpen size={20} />}
              title="Educação aplicada"
              description="Aprender com contexto e prática"
            />
            <FeatureCard
              icon={<Lightbulb size={20} />}
              title="Inteligência aplicada"
              description="Usar tecnologia e IA com propósito e critério"
            />
            <FeatureCard
              icon={<Settings size={20} />}
              title="Processos e sistemas"
              description="Transformar intenção em rotina"
            />
            <FeatureCard
              icon={<TrendingUp size={20} />}
              title="Evolução contínua"
              description="Medir, ajustar e manter consistência"
            />
          </div>
        </div>
      </Section>

      {/* Ecossistema */}
      <Section id="ecossistema">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
            Um ecossistema. Duas frentes complementares.
          </h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-12">
            <EcosystemCard
              title="TOOGAIN Money Academy"
              description="Formação e desenvolvimento contínuo. Trilhas estruturadas, método e aprendizado aplicável — do entendimento à prática, com consistência."
              bullets={[
                'Fundamentos e mentalidade',
                'Método e estrutura',
                'Rotina e execução',
                'Evolução progressiva',
              ]}
              image={moneyAcademy}
              imageAlt="Ilustração abstrata representando formação e trilhas de aprendizado"
            />
            <EcosystemCard
              title="TOOGAIN Intelligence"
              description="Tecnologia e inteligência aplicada. Automação, sistemas e uso estratégico de IA para apoiar decisões e reduzir ruído."
              bullets={[
                'IA aplicada com responsabilidade',
                'Automação e eficiência',
                'Sistemas e dashboards',
                'Processos replicáveis',
              ]}
              image={intelligence}
              imageAlt="Ilustração abstrata representando inteligência aplicada e automação"
            />
          </div>
          <p className="text-xs text-muted-foreground/70 text-center mt-8 max-w-2xl mx-auto">
            A TOOGAIN prioriza responsabilidade e clareza. Conteúdo educacional não substitui análise individual e não constitui recomendação personalizada.
          </p>
        </div>
      </Section>

      {/* Como Atuamos */}
      <Section id="como-atuamos" className="bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
            Como atuamos
          </h2>
          <p className="text-muted-foreground text-center mb-10 md:mb-12">
            Tudo começa com clareza e termina em consistência. Nossa atuação segue um ciclo simples e profundo.
          </p>
          <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
            <CycleStep
              number={1}
              title="Clareza"
              description="Entender o contexto e eliminar ruído"
            />
            <CycleStep
              number={2}
              title="Método"
              description="Estruturar caminho e critérios"
            />
            <CycleStep
              number={3}
              title="Execução"
              description="Prática orientada e rotina sustentável"
            />
            <CycleStep
              number={4}
              title="Evolução"
              description="Revisão, melhoria e ajuste contínuo"
              isLast
            />
          </div>
        </div>
      </Section>

      {/* Diferenciais */}
      <Section id="diferenciais">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10 md:mb-12 text-center">
            O que sustenta a TOOGAIN
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            <FeatureCard
              icon={<Shield size={20} />}
              title="Responsabilidade acima de narrativa"
              description="Preferimos o que é verdadeiro ao que é chamativo."
            />
            <FeatureCard
              icon={<Sparkles size={20} />}
              title="Simplicidade com profundidade"
              description="Sem complicação desnecessária. Sem superficialidade."
            />
            <FeatureCard
              icon={<Clock size={20} />}
              title="Longo prazo como princípio"
              description="Consistência é mais importante do que intensidade."
            />
          </div>
        </div>
      </Section>

      {/* Princípios */}
      <Section id="principios" className="bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10 md:mb-12">
            Princípios inegociáveis
          </h2>
          <ul className="space-y-4 text-muted-foreground text-left max-w-md mx-auto mb-10">
            {[
              'Verdade e responsabilidade',
              'Excelência com simplicidade',
              'Transparência e método',
              'Família e propósito',
              'Serviço acima de vaidade',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            A TOOGAIN não foi construída para ruído. Foi construída para direção.
          </p>
        </div>
      </Section>

      {/* O que não somos */}
      <Section id="o-que-nao-somos">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10 md:mb-12">
            O que a TOOGAIN não é
          </h2>
          <ul className="space-y-3 text-muted-foreground text-left max-w-sm mx-auto mb-10">
            {[
              'Não é promessa de ganho fácil',
              'Não é atalho',
              'Não é moda passageira',
              'Não é barulho',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="p-6 bg-card border border-primary/20 rounded-2xl shadow-glow">
            <p className="font-heading font-semibold text-lg md:text-xl text-foreground">
              "Preferimos crescer certo do que crescer rápido."
            </p>
          </div>
        </div>
      </Section>

      {/* Transparência */}
      <Section id="transparencia" className="bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 md:mb-10">
            Transparência
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A TOOGAIN produz educação e sistemas de apoio à tomada de decisão. Não realizamos gestão de recursos, e não oferecemos recomendação individual de investimento. Responsabilidade, contexto e critério vêm antes de qualquer ferramenta.
          </p>
          <div className="p-5 bg-card border border-border/50 rounded-xl">
            <p className="text-xs text-muted-foreground/70">
              <strong className="text-muted-foreground">Aviso de responsabilidade:</strong> Conteúdos e materiais têm finalidade educacional. Decisões financeiras envolvem riscos e devem considerar o perfil e objetivos de cada pessoa.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10 md:mb-12 text-center">
            Perguntas frequentes
          </h2>
          <FAQAccordion />
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
