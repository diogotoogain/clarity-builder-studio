import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

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
    
    // Journey Timeline
    'journey.title': 'A Jornada do Herói',
    'journey.subtitle': 'Da origem humilde à escala global — uma história construída com método, disciplina e propósito.',
    'journey.origin.title': 'Origem',
    'journey.origin.text': 'São Gonçalo (RJ). Classe C. Um começo comum — e uma disciplina incomum. Diogo e Nathalya aprenderam cedo a extrair valor do que tinham: estudo, consistência e visão de longo prazo.',
    'journey.discovery.title': 'A descoberta',
    'journey.discovery.text': 'Buscando alternativas, Diogo enxergou a bolsa de valores com olhos diferentes: matemática e estatística, antes usadas na teoria, agora viravam ferramenta prática.',
    'journey.difference.title': 'A diferença',
    'journey.difference.text': 'Ele não entrou como "palpiteiro" nem como analista tradicional. Entrou como cientista: padrões, hipóteses, risco medido, processo repetível.',
    'journey.purpose.title': 'O propósito',
    'journey.purpose.text': 'Por um tempo, viver só dos próprios rendimentos era possível. Mas não era suficiente. Diogo voltou ao que sempre o definiu: ensinar — agora com uma nova ferramenta.',
    'journey.birth.title': 'Nasce a Toogain (jun/2024)',
    'journey.birth.text': 'Toogain nasce do sonho de compartilhar ganhos com alunos. TOO = também. GAIN = lucro no mercado. "Nós ganhamos e você também."',
    'journey.scale.title': 'Escala (2024)',
    'journey.scale.text': 'Em poucos meses, a Toogain alcança 13.305 alunos ativos em 33 países. Quando método encontra propósito, o impacto atravessa fronteiras.',
    'journey.future.title': 'O futuro (2025+)',
    'journey.future.text': 'Grupo Toogain: Money Academy (educação), Intelligence (automação), BTC Signature (2026) — expansão global, com foco em excelência.',
    
    // What is Toogain
    'toogain.title': 'Toogain: nós ganhamos e você também',
    'toogain.description': 'Mais do que um nome, uma decisão. A Toogain nasceu para servir pessoas que querem uma nova fonte de renda além da tradicional — com educação, tecnologia e responsabilidade.',
    
    // Group Structure
    'group.title': 'Estrutura do Grupo Toogain',
    'group.subtitle': 'Três frentes complementares: educação, tecnologia e visão global.',
    'group.academy.title': 'Toogain Money Academy',
    'group.academy.description': 'Formação prática para quem quer iniciar no mundo dos investimentos. Da base ao processo.',
    'group.academy.feature1': 'Fábrica de Renda Imediata (FRI): começar pelo celular',
    'group.academy.feature2': 'Projeto 200 Títulos (Plano de 100K): educacional da estratégia que multiplicou R$ 600 em mais de R$ 100 mil em ~9 meses',
    'group.intelligence.title': 'Toogain Intelligence',
    'group.intelligence.description': 'Tecnologia para operar com processos automatizados. Menos ruído, mais método.',
    'group.intelligence.feature1': 'CIPD (Copy Invest do Professor Diogo): operações automatizadas, sem precisar ficar em frente ao computador',
    'group.btc.title': 'Toogain BTC Signature',
    'group.btc.description': 'Jornada global com automações inteligentes focadas em BTCUSDT. Foco total em excelência em um único ativo.',
    'group.btc.feature1': 'BTCUSDT é o par que expressa o valor do Bitcoin (BTC) em relação ao Tether (USDT), uma stablecoin pareada ao dólar',
    
    // CIPD Stats
    'cipd.title': 'Transparência em números',
    'cipd.subtitle': 'Processo importa. Gestão importa. Transparência importa. O relatório oficial dos últimos 12 meses do CIPD registra:',
    'cipd.points': 'Pontos',
    'cipd.operations': 'Operações',
    'cipd.gains': 'Gains',
    'cipd.losses': 'Losses',
    'cipd.accuracy': 'Assertividade',
    'cipd.winStreak': 'Maior sequência vencedora',
    'cipd.loseStreak': 'Maior sequência perdedora',
    'cipd.management': 'Gerenciamento anti-quebra:',
    'cipd.managementText': 'foco em preservar consistência no médio e longo prazo.',
    'cipd.videoCaption': 'Bastidores: Diogo registrando o relatório com transparência para os alunos.',
    
    // Family Section
    'family.title': 'A base é humana',
    'family.text1': 'A Toogain nasce em 2024, mas carrega uma década de construção: Diogo e Nathalya empreendem juntos desde 2014.',
    'family.text2': 'Família, responsabilidade e presença não são "detalhes" — são a régua do que vale a pena construir.',
    'family.caption': 'Diogo, Nathalya e Otto',
    'family.vision.title': 'Visão que atravessa fronteiras',
    'family.vision.text1': 'Em uma experiência de 21 dias em Riad (Arábia Saudita), Diogo reforçou uma crença simples: confiança se constrói com diligência — observar, estudar, validar, e só então decidir.',
    'family.vision.text2': 'Essa mentalidade guia a Toogain: método antes do ruído.',
    'family.vision.caption': 'Riad, Arábia Saudita — disciplina e visão global',
    
    // Global Community
    'global.title': 'Uma comunidade global',
    'global.students': 'alunos ativos em',
    'global.countries': 'países',
    'global.subtitle': 'Quando a educação encontra tecnologia, o impacto deixa de ser local.',
    'global.search': 'Buscar país...',
    'global.showLess': 'Mostrar menos',
    'global.showAll': 'Ver todos',
    
    // Countries
    'country.brazil': 'Brasil',
    'country.usa': 'Estados Unidos',
    'country.portugal': 'Portugal',
    'country.japan': 'Japão',
    'country.uk': 'Reino Unido',
    'country.italy': 'Itália',
    'country.spain': 'Espanha',
    'country.germany': 'Alemanha',
    'country.switzerland': 'Suíça',
    'country.canada': 'Canadá',
    'country.ireland': 'Irlanda',
    'country.uae': 'Emirados Árabes',
    'country.france': 'França',
    'country.australia': 'Austrália',
    'country.netherlands': 'Países Baixos',
    'country.belgium': 'Bélgica',
    'country.argentina': 'Argentina',
    'country.paraguay': 'Paraguai',
    'country.angola': 'Angola',
    'country.austria': 'Áustria',
    'country.mexico': 'México',
    'country.chile': 'Chile',
    'country.uruguay': 'Uruguai',
    'country.israel': 'Israel',
    'country.newZealand': 'Nova Zelândia',
    'country.norway': 'Noruega',
    'country.sweden': 'Suécia',
    'country.luxembourg': 'Luxemburgo',
    'country.mozambique': 'Moçambique',
    'country.qatar': 'Catar',
    'country.denmark': 'Dinamarca',
    'country.poland': 'Polônia',
    'country.malta': 'Malta',
    
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
    
    // Timeline (old - keeping for compatibility)
    'timeline.title': 'Nossa jornada',
    'timeline.subtitle': 'Uma história construída com propósito, método e evolução constante.',
    
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
    
    // Journey Timeline
    'journey.title': 'The Hero\'s Journey',
    'journey.subtitle': 'From humble origins to global scale — a story built with method, discipline, and purpose.',
    'journey.origin.title': 'Origin',
    'journey.origin.text': 'São Gonçalo (RJ), Brazil. Working class. A common beginning — and an uncommon discipline. Diogo and Nathalya learned early to extract value from what they had: study, consistency, and long-term vision.',
    'journey.discovery.title': 'The Discovery',
    'journey.discovery.text': 'Seeking alternatives, Diogo saw the stock market with different eyes: mathematics and statistics, once used in theory, now became practical tools.',
    'journey.difference.title': 'The Difference',
    'journey.difference.text': 'He didn\'t enter as a "tipster" or a traditional analyst. He entered as a scientist: patterns, hypotheses, measured risk, repeatable process.',
    'journey.purpose.title': 'The Purpose',
    'journey.purpose.text': 'For a while, living only from his own earnings was possible. But it wasn\'t enough. Diogo returned to what always defined him: teaching — now with a new tool.',
    'journey.birth.title': 'Toogain is Born (Jun/2024)',
    'journey.birth.text': 'Toogain was born from the dream of sharing gains with students. TOO = also. GAIN = market profit. "We win and you do too."',
    'journey.scale.title': 'Scale (2024)',
    'journey.scale.text': 'In just a few months, Toogain reached 13,305 active students in 33 countries. When method meets purpose, impact crosses borders.',
    'journey.future.title': 'The Future (2025+)',
    'journey.future.text': 'Toogain Group: Money Academy (education), Intelligence (automation), BTC Signature (2026) — global expansion, focused on excellence.',
    
    // What is Toogain
    'toogain.title': 'Toogain: we win and you do too',
    'toogain.description': 'More than a name, a decision. Toogain was born to serve people who want a new source of income beyond the traditional — with education, technology, and responsibility.',
    
    // Group Structure
    'group.title': 'Toogain Group Structure',
    'group.subtitle': 'Three complementary fronts: education, technology, and global vision.',
    'group.academy.title': 'Toogain Money Academy',
    'group.academy.description': 'Practical training for those who want to start in the investment world. From basics to process.',
    'group.academy.feature1': 'Immediate Income Factory (FRI): start from your phone',
    'group.academy.feature2': '200 Titles Project (100K Plan): educational strategy that turned R$ 600 into over R$ 100K in ~9 months',
    'group.intelligence.title': 'Toogain Intelligence',
    'group.intelligence.description': 'Technology to operate with automated processes. Less noise, more method.',
    'group.intelligence.feature1': 'CIPD (Professor Diogo\'s Copy Invest): automated operations, no need to sit in front of the computer',
    'group.btc.title': 'Toogain BTC Signature',
    'group.btc.description': 'Global journey with intelligent automations focused on BTCUSDT. Total focus on excellence in a single asset.',
    'group.btc.feature1': 'BTCUSDT is the pair that expresses Bitcoin (BTC) value relative to Tether (USDT), a dollar-pegged stablecoin',
    
    // CIPD Stats
    'cipd.title': 'Transparency in Numbers',
    'cipd.subtitle': 'Process matters. Management matters. Transparency matters. The official report from the last 12 months of CIPD shows:',
    'cipd.points': 'Points',
    'cipd.operations': 'Operations',
    'cipd.gains': 'Gains',
    'cipd.losses': 'Losses',
    'cipd.accuracy': 'Accuracy',
    'cipd.winStreak': 'Longest winning streak',
    'cipd.loseStreak': 'Longest losing streak',
    'cipd.management': 'Anti-break management:',
    'cipd.managementText': 'focus on preserving consistency in the medium and long term.',
    'cipd.videoCaption': 'Behind the scenes: Diogo recording the report with transparency for students.',
    
    // Family Section
    'family.title': 'The foundation is human',
    'family.text1': 'Toogain was born in 2024, but carries a decade of building: Diogo and Nathalya have been entrepreneurs together since 2014.',
    'family.text2': 'Family, responsibility, and presence are not "details" — they are the measure of what\'s worth building.',
    'family.caption': 'Diogo, Nathalya, and Otto',
    'family.vision.title': 'Vision that crosses borders',
    'family.vision.text1': 'In a 21-day experience in Riyadh (Saudi Arabia), Diogo reinforced a simple belief: trust is built with diligence — observe, study, validate, and only then decide.',
    'family.vision.text2': 'This mindset guides Toogain: method before noise.',
    'family.vision.caption': 'Riyadh, Saudi Arabia — discipline and global vision',
    
    // Global Community
    'global.title': 'A Global Community',
    'global.students': 'active students in',
    'global.countries': 'countries',
    'global.subtitle': 'When education meets technology, impact stops being local.',
    'global.search': 'Search country...',
    'global.showLess': 'Show less',
    'global.showAll': 'See all',
    
    // Countries
    'country.brazil': 'Brazil',
    'country.usa': 'United States',
    'country.portugal': 'Portugal',
    'country.japan': 'Japan',
    'country.uk': 'United Kingdom',
    'country.italy': 'Italy',
    'country.spain': 'Spain',
    'country.germany': 'Germany',
    'country.switzerland': 'Switzerland',
    'country.canada': 'Canada',
    'country.ireland': 'Ireland',
    'country.uae': 'United Arab Emirates',
    'country.france': 'France',
    'country.australia': 'Australia',
    'country.netherlands': 'Netherlands',
    'country.belgium': 'Belgium',
    'country.argentina': 'Argentina',
    'country.paraguay': 'Paraguay',
    'country.angola': 'Angola',
    'country.austria': 'Austria',
    'country.mexico': 'Mexico',
    'country.chile': 'Chile',
    'country.uruguay': 'Uruguay',
    'country.israel': 'Israel',
    'country.newZealand': 'New Zealand',
    'country.norway': 'Norway',
    'country.sweden': 'Sweden',
    'country.luxembourg': 'Luxembourg',
    'country.mozambique': 'Mozambique',
    'country.qatar': 'Qatar',
    'country.denmark': 'Denmark',
    'country.poland': 'Poland',
    'country.malta': 'Malta',
    
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
    
    // Timeline (old - keeping for compatibility)
    'timeline.title': 'Our Journey',
    'timeline.subtitle': 'A history built with purpose, method, and constant evolution.',
    
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
  es: {
    // Navigation
    'nav.manifesto': 'Manifiesto',
    'nav.ecosystem': 'Ecosistema',
    'nav.howWeWork': 'Cómo Actuamos',
    'nav.principles': 'Principios',
    'nav.transparency': 'Transparencia',
    'nav.timeline': 'Historia',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': 'TOOGAIN',
    'hero.subtitle': 'Educación, tecnología e inteligencia aplicadas a la toma de decisiones.',
    'hero.description': 'TOOGAIN es un ecosistema que une formación práctica e inteligencia aplicada para transformar conocimiento en ejecución con responsabilidad y visión a largo plazo.',
    'hero.clarity': 'Claridad',
    'hero.method': 'Método',
    'hero.execution': 'Ejecución',
    'hero.evolution': 'Evolución',
    
    // Manifesto
    'manifesto.title': 'Manifiesto',
    'manifesto.p1': 'Creemos que mejores decisiones construyen mejores resultados. Por eso, TOOGAIN existe para transformar información en claridad, claridad en método y método en ejecución.',
    'manifesto.p2': 'No seguimos modas.',
    'manifesto.p3': 'No vendemos ilusiones.',
    'manifesto.p4': 'Trabajamos con responsabilidad, consistencia y profundidad.',
    'manifesto.p5': 'La tecnología es un medio.',
    'manifesto.p6': 'La educación es la base.',
    'manifesto.p7': 'El carácter y la disciplina sostienen el largo plazo.',
    'manifesto.quote': '"La autoridad no es volumen. Es dirección."',
    
    // What we do
    'whatWeDo.title': 'Qué Hacemos',
    'whatWeDo.description': 'Nuestro trabajo es construir fundamentos sólidos y sistemas aplicables — para que las decisiones dejen de ser improvisación y pasen a ser proceso.',
    'whatWeDo.education.title': 'Educación Aplicada',
    'whatWeDo.education.description': 'Aprender con contexto y práctica',
    'whatWeDo.intelligence.title': 'Inteligencia Aplicada',
    'whatWeDo.intelligence.description': 'Usar tecnología e IA con propósito y criterio',
    'whatWeDo.processes.title': 'Procesos y Sistemas',
    'whatWeDo.processes.description': 'Transformar intención en rutina',
    'whatWeDo.evolution.title': 'Evolución Continua',
    'whatWeDo.evolution.description': 'Medir, ajustar y mantener consistencia',
    
    // Ecosystem
    'ecosystem.title': 'Un ecosistema. Dos frentes complementarios.',
    'ecosystem.academy.title': 'TOOGAIN Money Academy',
    'ecosystem.academy.description': 'Formación y desarrollo continuo. Rutas estructuradas, método y aprendizaje aplicable — de la comprensión a la práctica, con consistencia.',
    'ecosystem.academy.bullet1': 'Fundamentos y mentalidad',
    'ecosystem.academy.bullet2': 'Método y estructura',
    'ecosystem.academy.bullet3': 'Rutina y ejecución',
    'ecosystem.academy.bullet4': 'Evolución progresiva',
    'ecosystem.intelligence.title': 'TOOGAIN Intelligence',
    'ecosystem.intelligence.description': 'Tecnología e inteligencia aplicada. Automatización, sistemas y uso estratégico de IA para apoyar decisiones y reducir ruido.',
    'ecosystem.intelligence.bullet1': 'IA aplicada con responsabilidad',
    'ecosystem.intelligence.bullet2': 'Automatización y eficiencia',
    'ecosystem.intelligence.bullet3': 'Sistemas y dashboards',
    'ecosystem.intelligence.bullet4': 'Procesos replicables',
    'ecosystem.disclaimer': 'TOOGAIN prioriza responsabilidad y claridad. El contenido educativo no sustituye el análisis individual y no constituye recomendación personalizada.',
    
    // How we work
    'howWeWork.title': 'Cómo Actuamos',
    'howWeWork.description': 'Todo comienza con claridad y termina en consistencia. Nuestra actuación sigue un ciclo simple y profundo.',
    'howWeWork.clarity': 'Claridad',
    'howWeWork.clarity.description': 'Entender el contexto y eliminar ruido',
    'howWeWork.method': 'Método',
    'howWeWork.method.description': 'Estructurar camino y criterios',
    'howWeWork.execution': 'Ejecución',
    'howWeWork.execution.description': 'Práctica orientada y rutina sostenible',
    'howWeWork.evolution': 'Evolución',
    'howWeWork.evolution.description': 'Revisión, mejora y ajuste continuo',
    
    // Journey Timeline
    'journey.title': 'El Viaje del Héroe',
    'journey.subtitle': 'Del origen humilde a la escala global — una historia construida con método, disciplina y propósito.',
    'journey.origin.title': 'Origen',
    'journey.origin.text': 'São Gonçalo (RJ), Brasil. Clase trabajadora. Un comienzo común — y una disciplina poco común. Diogo y Nathalya aprendieron temprano a extraer valor de lo que tenían: estudio, consistencia y visión a largo plazo.',
    'journey.discovery.title': 'El Descubrimiento',
    'journey.discovery.text': 'Buscando alternativas, Diogo vio la bolsa de valores con ojos diferentes: matemáticas y estadísticas, antes usadas en la teoría, ahora se convertían en herramientas prácticas.',
    'journey.difference.title': 'La Diferencia',
    'journey.difference.text': 'No entró como "opinador" ni como analista tradicional. Entró como científico: patrones, hipótesis, riesgo medido, proceso repetible.',
    'journey.purpose.title': 'El Propósito',
    'journey.purpose.text': 'Por un tiempo, vivir solo de sus propios rendimientos era posible. Pero no era suficiente. Diogo volvió a lo que siempre lo definió: enseñar — ahora con una nueva herramienta.',
    'journey.birth.title': 'Nace Toogain (Jun/2024)',
    'journey.birth.text': 'Toogain nace del sueño de compartir ganancias con estudiantes. TOO = también. GAIN = ganancia en el mercado. "Nosotros ganamos y tú también."',
    'journey.scale.title': 'Escala (2024)',
    'journey.scale.text': 'En pocos meses, Toogain alcanza 13.305 estudiantes activos en 33 países. Cuando el método encuentra el propósito, el impacto cruza fronteras.',
    'journey.future.title': 'El Futuro (2025+)',
    'journey.future.text': 'Grupo Toogain: Money Academy (educación), Intelligence (automatización), BTC Signature (2026) — expansión global, con enfoque en excelencia.',
    
    // What is Toogain
    'toogain.title': 'Toogain: nosotros ganamos y tú también',
    'toogain.description': 'Más que un nombre, una decisión. Toogain nació para servir a personas que quieren una nueva fuente de ingresos más allá de la tradicional — con educación, tecnología y responsabilidad.',
    
    // Group Structure
    'group.title': 'Estructura del Grupo Toogain',
    'group.subtitle': 'Tres frentes complementarios: educación, tecnología y visión global.',
    'group.academy.title': 'Toogain Money Academy',
    'group.academy.description': 'Formación práctica para quienes quieren iniciarse en el mundo de las inversiones. De la base al proceso.',
    'group.academy.feature1': 'Fábrica de Ingresos Inmediatos (FRI): comenzar desde el celular',
    'group.academy.feature2': 'Proyecto 200 Títulos (Plan 100K): educativo de la estrategia que multiplicó R$ 600 en más de R$ 100 mil en ~9 meses',
    'group.intelligence.title': 'Toogain Intelligence',
    'group.intelligence.description': 'Tecnología para operar con procesos automatizados. Menos ruido, más método.',
    'group.intelligence.feature1': 'CIPD (Copy Invest del Profesor Diogo): operaciones automatizadas, sin necesidad de estar frente a la computadora',
    'group.btc.title': 'Toogain BTC Signature',
    'group.btc.description': 'Jornada global con automatizaciones inteligentes enfocadas en BTCUSDT. Enfoque total en excelencia en un único activo.',
    'group.btc.feature1': 'BTCUSDT es el par que expresa el valor del Bitcoin (BTC) en relación al Tether (USDT), una stablecoin vinculada al dólar',
    
    // CIPD Stats
    'cipd.title': 'Transparencia en Números',
    'cipd.subtitle': 'El proceso importa. La gestión importa. La transparencia importa. El informe oficial de los últimos 12 meses del CIPD registra:',
    'cipd.points': 'Puntos',
    'cipd.operations': 'Operaciones',
    'cipd.gains': 'Ganancias',
    'cipd.losses': 'Pérdidas',
    'cipd.accuracy': 'Precisión',
    'cipd.winStreak': 'Mayor racha ganadora',
    'cipd.loseStreak': 'Mayor racha perdedora',
    'cipd.management': 'Gestión anti-quiebra:',
    'cipd.managementText': 'enfoque en preservar consistencia a mediano y largo plazo.',
    'cipd.videoCaption': 'Detrás de escenas: Diogo registrando el informe con transparencia para los estudiantes.',
    
    // Family Section
    'family.title': 'La base es humana',
    'family.text1': 'Toogain nace en 2024, pero lleva una década de construcción: Diogo y Nathalya emprenden juntos desde 2014.',
    'family.text2': 'Familia, responsabilidad y presencia no son "detalles" — son la medida de lo que vale la pena construir.',
    'family.caption': 'Diogo, Nathalya y Otto',
    'family.vision.title': 'Visión que cruza fronteras',
    'family.vision.text1': 'En una experiencia de 21 días en Riad (Arabia Saudita), Diogo reforzó una creencia simple: la confianza se construye con diligencia — observar, estudiar, validar, y solo entonces decidir.',
    'family.vision.text2': 'Esta mentalidad guía a Toogain: método antes del ruido.',
    'family.vision.caption': 'Riad, Arabia Saudita — disciplina y visión global',
    
    // Global Community
    'global.title': 'Una Comunidad Global',
    'global.students': 'estudiantes activos en',
    'global.countries': 'países',
    'global.subtitle': 'Cuando la educación encuentra la tecnología, el impacto deja de ser local.',
    'global.search': 'Buscar país...',
    'global.showLess': 'Mostrar menos',
    'global.showAll': 'Ver todos',
    
    // Countries
    'country.brazil': 'Brasil',
    'country.usa': 'Estados Unidos',
    'country.portugal': 'Portugal',
    'country.japan': 'Japón',
    'country.uk': 'Reino Unido',
    'country.italy': 'Italia',
    'country.spain': 'España',
    'country.germany': 'Alemania',
    'country.switzerland': 'Suiza',
    'country.canada': 'Canadá',
    'country.ireland': 'Irlanda',
    'country.uae': 'Emiratos Árabes',
    'country.france': 'Francia',
    'country.australia': 'Australia',
    'country.netherlands': 'Países Bajos',
    'country.belgium': 'Bélgica',
    'country.argentina': 'Argentina',
    'country.paraguay': 'Paraguay',
    'country.angola': 'Angola',
    'country.austria': 'Austria',
    'country.mexico': 'México',
    'country.chile': 'Chile',
    'country.uruguay': 'Uruguay',
    'country.israel': 'Israel',
    'country.newZealand': 'Nueva Zelanda',
    'country.norway': 'Noruega',
    'country.sweden': 'Suecia',
    'country.luxembourg': 'Luxemburgo',
    'country.mozambique': 'Mozambique',
    'country.qatar': 'Catar',
    'country.denmark': 'Dinamarca',
    'country.poland': 'Polonia',
    'country.malta': 'Malta',
    
    // Differentials
    'differentials.title': 'Lo que Sostiene a TOOGAIN',
    'differentials.responsibility.title': 'Responsabilidad Sobre Narrativa',
    'differentials.responsibility.description': 'Preferimos lo verdadero a lo llamativo.',
    'differentials.simplicity.title': 'Simplicidad con Profundidad',
    'differentials.simplicity.description': 'Sin complicación innecesaria. Sin superficialidad.',
    'differentials.longTerm.title': 'Largo Plazo como Principio',
    'differentials.longTerm.description': 'La consistencia es más importante que la intensidad.',
    
    // Principles
    'principles.title': 'Principios Innegociables',
    'principles.item1': 'Verdad y responsabilidad',
    'principles.item2': 'Excelencia con simplicidad',
    'principles.item3': 'Transparencia y método',
    'principles.item4': 'Familia y propósito',
    'principles.item5': 'Servicio sobre vanidad',
    'principles.footer': 'TOOGAIN no fue construida para el ruido. Fue construida para la dirección.',
    
    // What we are not
    'whatWeAreNot.title': 'Lo que TOOGAIN No Es',
    'whatWeAreNot.item1': 'No es promesa de ganancias fáciles',
    'whatWeAreNot.item2': 'No es un atajo',
    'whatWeAreNot.item3': 'No es una moda pasajera',
    'whatWeAreNot.item4': 'No es ruido',
    'whatWeAreNot.quote': '"Preferimos crecer bien que crecer rápido."',
    
    // Transparency
    'transparency.title': 'Transparencia',
    'transparency.description': 'TOOGAIN produce educación y sistemas de apoyo a la toma de decisiones. No gestionamos recursos, y no ofrecemos recomendaciones individuales de inversión. Responsabilidad, contexto y criterio vienen antes de cualquier herramienta.',
    'transparency.disclaimer.title': 'Aviso de responsabilidad:',
    'transparency.disclaimer.text': 'Los contenidos y materiales tienen fines educativos. Las decisiones financieras implican riesgos y deben considerar el perfil y objetivos de cada persona.',
    
    // Timeline (old - keeping for compatibility)
    'timeline.title': 'Nuestra Trayectoria',
    'timeline.subtitle': 'Una historia construida con propósito, método y evolución constante.',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.q1': '¿TOOGAIN es para principiantes?',
    'faq.a1': 'Sí. La base está construida con claridad y método. La progresión ocurre por niveles de profundidad, siempre con enfoque en ejecución responsable.',
    'faq.q2': '¿Cuál es la diferencia entre Money Academy e Intelligence?',
    'faq.a2': 'Money Academy organiza aprendizaje y desarrollo. Intelligence aplica tecnología e IA para apoyar procesos y decisiones. Una forma fundamento; la otra construye eficiencia y consistencia.',
    'faq.q3': '¿TOOGAIN promete resultados?',
    'faq.a3': 'No. Las promesas vacías no son parte de nuestra cultura. El enfoque es proceso, responsabilidad y evolución continua.',
    'faq.q4': '¿TOOGAIN hace recomendaciones de inversión?',
    'faq.a4': 'No. Nuestro contenido es educativo y sistémico. Las decisiones individuales requieren análisis de contexto y perfil.',
    
    // Footer
    'footer.copyright': '© TOOGAIN. Educación e Inteligencia Aplicada.',
    'footer.disclaimer': 'Contenido educativo. Responsabilidad en primer lugar.',
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
