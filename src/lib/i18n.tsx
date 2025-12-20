import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.manifesto': 'Manifesto',
    'nav.ecosystem': 'Ecossistema',
    'nav.howWeWork': 'Como Atuamos',
    'nav.principles': 'Princípios',
    'nav.transparency': 'Transparência',
    'nav.timeline': 'História',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': 'TOOGAIN',
    'hero.subtitle': 'Educação, tecnologia e inteligência aplicadas à tomada de decisão.',
    'hero.description': 'A TOOGAIN é um ecossistema que une formação prática e inteligência aplicada para transformar conhecimento em execução com responsabilidade e visão de longo prazo.',
    'hero.clarity': 'Clareza',
    'hero.method': 'Método',
    'hero.execution': 'Execução',
    'hero.evolution': 'Evolução',
    
    // Manifesto
    'manifesto.title': 'Manifesto',
    'manifesto.p1': 'Acreditamos que decisões melhores constroem resultados melhores. Por isso, a TOOGAIN existe para transformar informação em clareza, clareza em método e método em execução.',
    'manifesto.p2': 'Não seguimos modismos.',
    'manifesto.p3': 'Não vendemos ilusões.',
    'manifesto.p4': 'Trabalhamos com responsabilidade, consistência e profundidade.',
    'manifesto.p5': 'Tecnologia é meio.',
    'manifesto.p6': 'Educação é base.',
    'manifesto.p7': 'Caráter e disciplina sustentam o longo prazo.',
    'manifesto.quote': '"Autoridade não é volume. É direção."',
    
    // What we do
    'whatWeDo.title': 'O que fazemos',
    'whatWeDo.description': 'Nosso trabalho é construir fundamentos sólidos e sistemas aplicáveis — para que decisões deixem de ser improviso e passem a ser processo.',
    'whatWeDo.education.title': 'Educação aplicada',
    'whatWeDo.education.description': 'Aprender com contexto e prática',
    'whatWeDo.intelligence.title': 'Inteligência aplicada',
    'whatWeDo.intelligence.description': 'Usar tecnologia e IA com propósito e critério',
    'whatWeDo.processes.title': 'Processos e sistemas',
    'whatWeDo.processes.description': 'Transformar intenção em rotina',
    'whatWeDo.evolution.title': 'Evolução contínua',
    'whatWeDo.evolution.description': 'Medir, ajustar e manter consistência',
    
    // Ecosystem
    'ecosystem.title': 'Um ecossistema. Duas frentes complementares.',
    'ecosystem.academy.title': 'TOOGAIN Money Academy',
    'ecosystem.academy.description': 'Formação e desenvolvimento contínuo. Trilhas estruturadas, método e aprendizado aplicável — do entendimento à prática, com consistência.',
    'ecosystem.academy.bullet1': 'Fundamentos e mentalidade',
    'ecosystem.academy.bullet2': 'Método e estrutura',
    'ecosystem.academy.bullet3': 'Rotina e execução',
    'ecosystem.academy.bullet4': 'Evolução progressiva',
    'ecosystem.intelligence.title': 'TOOGAIN Intelligence',
    'ecosystem.intelligence.description': 'Tecnologia e inteligência aplicada. Automação, sistemas e uso estratégico de IA para apoiar decisões e reduzir ruído.',
    'ecosystem.intelligence.bullet1': 'IA aplicada com responsabilidade',
    'ecosystem.intelligence.bullet2': 'Automação e eficiência',
    'ecosystem.intelligence.bullet3': 'Sistemas e dashboards',
    'ecosystem.intelligence.bullet4': 'Processos replicáveis',
    'ecosystem.disclaimer': 'A TOOGAIN prioriza responsabilidade e clareza. Conteúdo educacional não substitui análise individual e não constitui recomendação personalizada.',
    
    // How we work
    'howWeWork.title': 'Como atuamos',
    'howWeWork.description': 'Tudo começa com clareza e termina em consistência. Nossa atuação segue um ciclo simples e profundo.',
    'howWeWork.clarity': 'Clareza',
    'howWeWork.clarity.description': 'Entender o contexto e eliminar ruído',
    'howWeWork.method': 'Método',
    'howWeWork.method.description': 'Estruturar caminho e critérios',
    'howWeWork.execution': 'Execução',
    'howWeWork.execution.description': 'Prática orientada e rotina sustentável',
    'howWeWork.evolution': 'Evolução',
    'howWeWork.evolution.description': 'Revisão, melhoria e ajuste contínuo',
    
    // Differentials
    'differentials.title': 'O que sustenta a TOOGAIN',
    'differentials.responsibility.title': 'Responsabilidade acima de narrativa',
    'differentials.responsibility.description': 'Preferimos o que é verdadeiro ao que é chamativo.',
    'differentials.simplicity.title': 'Simplicidade com profundidade',
    'differentials.simplicity.description': 'Sem complicação desnecessária. Sem superficialidade.',
    'differentials.longTerm.title': 'Longo prazo como princípio',
    'differentials.longTerm.description': 'Consistência é mais importante do que intensidade.',
    
    // Principles
    'principles.title': 'Princípios inegociáveis',
    'principles.item1': 'Verdade e responsabilidade',
    'principles.item2': 'Excelência com simplicidade',
    'principles.item3': 'Transparência e método',
    'principles.item4': 'Família e propósito',
    'principles.item5': 'Serviço acima de vaidade',
    'principles.footer': 'A TOOGAIN não foi construída para ruído. Foi construída para direção.',
    
    // What we are not
    'whatWeAreNot.title': 'O que a TOOGAIN não é',
    'whatWeAreNot.item1': 'Não é promessa de ganho fácil',
    'whatWeAreNot.item2': 'Não é atalho',
    'whatWeAreNot.item3': 'Não é moda passageira',
    'whatWeAreNot.item4': 'Não é barulho',
    'whatWeAreNot.quote': '"Preferimos crescer certo do que crescer rápido."',
    
    // Transparency
    'transparency.title': 'Transparência',
    'transparency.description': 'A TOOGAIN produz educação e sistemas de apoio à tomada de decisão. Não realizamos gestão de recursos, e não oferecemos recomendação individual de investimento. Responsabilidade, contexto e critério vêm antes de qualquer ferramenta.',
    'transparency.disclaimer.title': 'Aviso de responsabilidade:',
    'transparency.disclaimer.text': 'Conteúdos e materiais têm finalidade educacional. Decisões financeiras envolvem riscos e devem considerar o perfil e objetivos de cada pessoa.',
    
    // Timeline
    'timeline.title': 'Nossa jornada',
    'timeline.subtitle': 'Uma história construída com propósito, método e evolução constante.',
    'timeline.2021.title': 'A Semente',
    'timeline.2021.description': 'Nasce a visão de unir educação e tecnologia para transformar decisões em processos claros e responsáveis.',
    'timeline.2022.title': 'Fundação',
    'timeline.2022.description': 'Estruturação dos primeiros pilares: método, clareza e compromisso com o longo prazo.',
    'timeline.2023.title': 'Expansão',
    'timeline.2023.description': 'Lançamento da Money Academy e início da integração de inteligência aplicada.',
    'timeline.2024.title': 'Consolidação',
    'timeline.2024.description': 'Maturação do ecossistema completo com a TOOGAIN Intelligence em plena operação.',
    'timeline.2025.title': 'Evolução',
    'timeline.2025.description': 'Aprimoramento contínuo e expansão do impacto com responsabilidade.',
    
    // FAQ
    'faq.title': 'Perguntas frequentes',
    'faq.q1': 'A TOOGAIN é para iniciantes?',
    'faq.a1': 'Sim. A base é construída com clareza e método. A progressão acontece por níveis de profundidade, sempre com foco em execução responsável.',
    'faq.q2': 'Qual a diferença entre Money Academy e Intelligence?',
    'faq.a2': 'A Money Academy organiza aprendizado e desenvolvimento. A Intelligence aplica tecnologia e IA para apoiar processos e decisões. Uma forma fundamento; a outra constrói eficiência e consistência.',
    'faq.q3': 'A TOOGAIN promete resultados?',
    'faq.a3': 'Não. Promessas vazias não fazem parte da nossa cultura. O foco é processo, responsabilidade e evolução contínua.',
    'faq.q4': 'A TOOGAIN faz recomendação de investimento?',
    'faq.a4': 'Não. Nosso conteúdo é educacional e sistêmico. Decisões individuais exigem análise de contexto e perfil.',
    
    // Footer
    'footer.copyright': '© TOOGAIN. Educação e Inteligência Aplicada.',
    'footer.disclaimer': 'Conteúdo educacional. Responsabilidade em primeiro lugar.',
  },
  en: {
    // Navigation
    'nav.manifesto': 'Manifesto',
    'nav.ecosystem': 'Ecosystem',
    'nav.howWeWork': 'How We Work',
    'nav.principles': 'Principles',
    'nav.transparency': 'Transparency',
    'nav.timeline': 'History',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': 'TOOGAIN',
    'hero.subtitle': 'Education, technology, and intelligence applied to decision-making.',
    'hero.description': 'TOOGAIN is an ecosystem that combines practical training and applied intelligence to transform knowledge into execution with responsibility and long-term vision.',
    'hero.clarity': 'Clarity',
    'hero.method': 'Method',
    'hero.execution': 'Execution',
    'hero.evolution': 'Evolution',
    
    // Manifesto
    'manifesto.title': 'Manifesto',
    'manifesto.p1': 'We believe that better decisions build better results. That\'s why TOOGAIN exists to transform information into clarity, clarity into method, and method into execution.',
    'manifesto.p2': 'We don\'t follow trends.',
    'manifesto.p3': 'We don\'t sell illusions.',
    'manifesto.p4': 'We work with responsibility, consistency, and depth.',
    'manifesto.p5': 'Technology is a means.',
    'manifesto.p6': 'Education is the foundation.',
    'manifesto.p7': 'Character and discipline sustain the long term.',
    'manifesto.quote': '"Authority is not volume. It is direction."',
    
    // What we do
    'whatWeDo.title': 'What We Do',
    'whatWeDo.description': 'Our work is to build solid foundations and applicable systems — so that decisions stop being improvisation and become process.',
    'whatWeDo.education.title': 'Applied Education',
    'whatWeDo.education.description': 'Learning with context and practice',
    'whatWeDo.intelligence.title': 'Applied Intelligence',
    'whatWeDo.intelligence.description': 'Using technology and AI with purpose and criteria',
    'whatWeDo.processes.title': 'Processes and Systems',
    'whatWeDo.processes.description': 'Transforming intention into routine',
    'whatWeDo.evolution.title': 'Continuous Evolution',
    'whatWeDo.evolution.description': 'Measure, adjust, and maintain consistency',
    
    // Ecosystem
    'ecosystem.title': 'One ecosystem. Two complementary fronts.',
    'ecosystem.academy.title': 'TOOGAIN Money Academy',
    'ecosystem.academy.description': 'Continuous training and development. Structured tracks, method, and applicable learning — from understanding to practice, with consistency.',
    'ecosystem.academy.bullet1': 'Fundamentals and mindset',
    'ecosystem.academy.bullet2': 'Method and structure',
    'ecosystem.academy.bullet3': 'Routine and execution',
    'ecosystem.academy.bullet4': 'Progressive evolution',
    'ecosystem.intelligence.title': 'TOOGAIN Intelligence',
    'ecosystem.intelligence.description': 'Technology and applied intelligence. Automation, systems, and strategic use of AI to support decisions and reduce noise.',
    'ecosystem.intelligence.bullet1': 'Responsible applied AI',
    'ecosystem.intelligence.bullet2': 'Automation and efficiency',
    'ecosystem.intelligence.bullet3': 'Systems and dashboards',
    'ecosystem.intelligence.bullet4': 'Replicable processes',
    'ecosystem.disclaimer': 'TOOGAIN prioritizes responsibility and clarity. Educational content does not replace individual analysis and does not constitute personalized recommendation.',
    
    // How we work
    'howWeWork.title': 'How We Work',
    'howWeWork.description': 'Everything starts with clarity and ends with consistency. Our approach follows a simple and profound cycle.',
    'howWeWork.clarity': 'Clarity',
    'howWeWork.clarity.description': 'Understanding the context and eliminating noise',
    'howWeWork.method': 'Method',
    'howWeWork.method.description': 'Structuring path and criteria',
    'howWeWork.execution': 'Execution',
    'howWeWork.execution.description': 'Guided practice and sustainable routine',
    'howWeWork.evolution': 'Evolution',
    'howWeWork.evolution.description': 'Review, improvement, and continuous adjustment',
    
    // Differentials
    'differentials.title': 'What Sustains TOOGAIN',
    'differentials.responsibility.title': 'Responsibility Over Narrative',
    'differentials.responsibility.description': 'We prefer what is true to what is flashy.',
    'differentials.simplicity.title': 'Simplicity with Depth',
    'differentials.simplicity.description': 'No unnecessary complication. No superficiality.',
    'differentials.longTerm.title': 'Long-Term as Principle',
    'differentials.longTerm.description': 'Consistency is more important than intensity.',
    
    // Principles
    'principles.title': 'Non-Negotiable Principles',
    'principles.item1': 'Truth and responsibility',
    'principles.item2': 'Excellence with simplicity',
    'principles.item3': 'Transparency and method',
    'principles.item4': 'Family and purpose',
    'principles.item5': 'Service above vanity',
    'principles.footer': 'TOOGAIN was not built for noise. It was built for direction.',
    
    // What we are not
    'whatWeAreNot.title': 'What TOOGAIN Is Not',
    'whatWeAreNot.item1': 'Not a promise of easy gains',
    'whatWeAreNot.item2': 'Not a shortcut',
    'whatWeAreNot.item3': 'Not a passing trend',
    'whatWeAreNot.item4': 'Not noise',
    'whatWeAreNot.quote': '"We prefer to grow right than to grow fast."',
    
    // Transparency
    'transparency.title': 'Transparency',
    'transparency.description': 'TOOGAIN produces education and decision support systems. We do not manage resources, and we do not offer individual investment recommendations. Responsibility, context, and criteria come before any tool.',
    'transparency.disclaimer.title': 'Responsibility disclaimer:',
    'transparency.disclaimer.text': 'Content and materials are for educational purposes. Financial decisions involve risks and should consider each person\'s profile and objectives.',
    
    // Timeline
    'timeline.title': 'Our Journey',
    'timeline.subtitle': 'A history built with purpose, method, and constant evolution.',
    'timeline.2021.title': 'The Seed',
    'timeline.2021.description': 'The vision is born to unite education and technology to transform decisions into clear and responsible processes.',
    'timeline.2022.title': 'Foundation',
    'timeline.2022.description': 'Structuring of the first pillars: method, clarity, and commitment to the long term.',
    'timeline.2023.title': 'Expansion',
    'timeline.2023.description': 'Launch of Money Academy and beginning of applied intelligence integration.',
    'timeline.2024.title': 'Consolidation',
    'timeline.2024.description': 'Maturation of the complete ecosystem with TOOGAIN Intelligence in full operation.',
    'timeline.2025.title': 'Evolution',
    'timeline.2025.description': 'Continuous improvement and expansion of impact with responsibility.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Is TOOGAIN for beginners?',
    'faq.a1': 'Yes. The foundation is built with clarity and method. Progression happens through levels of depth, always focused on responsible execution.',
    'faq.q2': 'What is the difference between Money Academy and Intelligence?',
    'faq.a2': 'Money Academy organizes learning and development. Intelligence applies technology and AI to support processes and decisions. One forms foundation; the other builds efficiency and consistency.',
    'faq.q3': 'Does TOOGAIN promise results?',
    'faq.a3': 'No. Empty promises are not part of our culture. The focus is on process, responsibility, and continuous evolution.',
    'faq.q4': 'Does TOOGAIN make investment recommendations?',
    'faq.a4': 'No. Our content is educational and systemic. Individual decisions require context and profile analysis.',
    
    // Footer
    'footer.copyright': '© TOOGAIN. Education and Applied Intelligence.',
    'footer.disclaimer': 'Educational content. Responsibility first.',
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('toogain-lang');
      return (saved as Language) || 'pt';
    }
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem('toogain-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    return translations[lang][key as keyof typeof translations['pt']] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

export type { Language };
