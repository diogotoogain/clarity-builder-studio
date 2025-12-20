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
    'nav.journey': 'Jornada',
    'nav.founders': 'Fundadores',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': 'TOOGAIN',
    'hero.subtitle': 'Educação e inteligência aplicada à tomada de decisão.',
    'hero.description': 'A TOOGAIN é um ecossistema que une formação prática e tecnologia para transformar conhecimento em execução com responsabilidade e visão de longo prazo.',
    'hero.clarity': 'Clareza',
    'hero.method': 'Método',
    'hero.execution': 'Execução',
    'hero.evolution': 'Evolução',
    'hero.cta.ecosystem': 'Explorar Ecossistema',
    'hero.cta.transparency': 'Ver Transparência',
    
    // Manifesto
    'manifesto.title': 'Manifesto',
    'manifesto.p1': 'Acreditamos que decisões melhores constroem resultados melhores.',
    'manifesto.p2': 'Não seguimos modismos.',
    'manifesto.p3': 'Não vendemos ilusões.',
    'manifesto.p4': 'Preferimos o que é verdadeiro ao que é chamativo: clareza, método, disciplina e responsabilidade.',
    'manifesto.p5': 'Tecnologia é meio.',
    'manifesto.p6': 'Educação é base.',
    'manifesto.p7': 'Caráter e disciplina sustentam o longo prazo.',
    'manifesto.quote': '"Autoridade não é volume. É direção."',
    
    // What we do
    'whatWeDo.title': 'O que fazemos',
    'whatWeDo.description': 'Nosso trabalho é construir fundamentos sólidos e sistemas aplicáveis.',
    'whatWeDo.education.title': 'Educação aplicada',
    'whatWeDo.education.description': 'Formação prática para quem quer aprender com profundidade e executar com responsabilidade.',
    'whatWeDo.intelligence.title': 'Método e processo',
    'whatWeDo.intelligence.description': 'Estratégia sem disciplina vira ruído. Aqui, processo vem antes do impulso.',
    'whatWeDo.processes.title': 'Tecnologia e automação',
    'whatWeDo.processes.description': 'Ferramentas e inteligência aplicada para reduzir fricção e apoiar decisões.',
    'whatWeDo.evolution.title': 'Evolução contínua',
    'whatWeDo.evolution.description': 'Aprender, ajustar, medir e repetir — com visão de longo prazo.',
    
    // Ecosystem
    'ecosystem.title': 'Um ecossistema. Duas frentes complementares.',
    'ecosystem.academy.title': 'TOOGAIN Money Academy',
    'ecosystem.academy.description': 'Educação, fundamentos e execução prática.',
    'ecosystem.academy.bullet1': 'Fábrica de Renda Imediata (FRI)',
    'ecosystem.academy.bullet2': 'Projeto 200 Títulos (Plano 100K)',
    'ecosystem.academy.bullet3': 'Trilhas estruturadas',
    'ecosystem.academy.bullet4': 'Método e consistência',
    'ecosystem.intelligence.title': 'TOOGAIN Intelligence',
    'ecosystem.intelligence.description': 'Tecnologia e automação para execução com consistência.',
    'ecosystem.intelligence.bullet1': 'CIPD (Copy Invest do Professor Diogo)',
    'ecosystem.intelligence.bullet2': 'Operações automatizadas',
    'ecosystem.intelligence.bullet3': 'Dashboards e governança',
    'ecosystem.intelligence.bullet4': 'Processos replicáveis',
    'ecosystem.disclaimer': 'Conteúdo educacional. Não constitui recomendação individual de investimento.',
    
    // How we work
    'howWeWork.title': 'Como atuamos',
    'howWeWork.description': 'Tudo começa com clareza e termina em consistência.',
    'howWeWork.clarity': 'Clareza',
    'howWeWork.clarity.description': 'Entender cenário, regras e risco.',
    'howWeWork.method': 'Método',
    'howWeWork.method.description': 'Processo replicável acima de opinião.',
    'howWeWork.execution': 'Execução',
    'howWeWork.execution.description': 'Disciplina e consistência no dia a dia.',
    'howWeWork.evolution': 'Evolução',
    'howWeWork.evolution.description': 'Analisar, ajustar e manter o foco no longo prazo.',
    
    // Journey Timeline
    'journey.title': 'A Jornada',
    'journey.subtitle': 'Da origem humilde à escala global — uma história construída com método, disciplina e propósito.',
    'journey.origin.title': 'Origem',
    'journey.origin.text': 'São Gonçalo (RJ). Um começo simples. Uma disciplina incomum.',
    'journey.discovery.title': 'A descoberta',
    'journey.discovery.text': 'Matemática e estatística viram ferramenta prática.',
    'journey.difference.title': 'A diferença',
    'journey.difference.text': 'Processo acima de emoção.',
    'journey.purpose.title': 'O propósito',
    'journey.purpose.text': 'Voltar a ensinar — agora com método aplicado.',
    'journey.birth.title': 'Nasce a TOOGAIN (jun/2024)',
    'journey.birth.text': 'TOO (também) + GAIN (lucro): "nós ganhamos e você também".',
    'journey.scale.title': 'Escala',
    'journey.scale.text': '13.305 alunos ativos em 33 países.',
    'journey.future.title': 'O futuro',
    'journey.future.text': 'Money Academy + Intelligence + BTC Signature (2026).',
    
    // What is Toogain
    'toogain.title': 'TOO + GAIN',
    'toogain.description': 'TOO significa "também". GAIN é lucro no mercado financeiro. TOOGAIN é mais do que um nome: é um compromisso com clareza, método e responsabilidade.',
    
    // Group Structure
    'group.title': 'Estrutura do Grupo TOOGAIN',
    'group.subtitle': 'Três frentes complementares: educação, tecnologia e visão global.',
    'group.academy.title': 'Money Academy',
    'group.academy.description': 'Educação: FRI + Plano 100K',
    'group.academy.feature1': 'Fábrica de Renda Imediata (FRI)',
    'group.academy.feature2': 'Projeto 200 Títulos (Plano 100K)',
    'group.intelligence.title': 'Intelligence',
    'group.intelligence.description': 'Tecnologia: CIPD (automação)',
    'group.intelligence.feature1': 'Operações automatizadas',
    'group.btc.title': 'BTC Signature',
    'group.btc.description': 'Próxima etapa (2026): automações inteligentes focadas em BTCUSDT.',
    'group.btc.feature1': 'Foco em excelência em um único ativo',
    
    // Technology Applied
    'tech.title': 'Tecnologia aplicada (sem atalhos)',
    'tech.subtitle': 'Ferramentas e sistemas para apoiar decisões com consistência.',
    'tech.automation.title': 'Automação com governança',
    'tech.automation.description': 'Integrações e rotinas automatizadas para reduzir ruído e aumentar consistência.',
    'tech.data.title': 'Dados e dashboards',
    'tech.data.description': 'Monitoramento interno e visão operacional para decisões melhores.',
    'tech.ai.title': 'IA como apoio',
    'tech.ai.description': 'Inteligência aplicada para melhorar processo, não para substituir responsabilidade.',
    
    // CIPD Stats
    'cipd.title': 'Transparência em números',
    'cipd.subtitle': 'Relatório oficial do CIPD — últimos 12 meses.',
    'cipd.points': 'Pontos',
    'cipd.operations': 'Operações',
    'cipd.gains': 'Gains',
    'cipd.losses': 'Losses',
    'cipd.accuracy': 'Assertividade',
    'cipd.winStreak': 'Sequência vencedora',
    'cipd.loseStreak': 'Sequência perdedora',
    'cipd.management': 'Gestão anti-quebra:',
    'cipd.managementText': 'foco em consistência e preservação no médio e longo prazo.',
    'cipd.disclaimer': 'Resultados passados não garantem resultados futuros. Conteúdo educacional.',
    'cipd.videoCaption': 'Bastidores: transparência em prática',
    'cipd.videoDescription': 'Diogo registrando o relatório para os alunos com transparência e rotina.',
    'cipd.videoLocation': 'Gravado em um ambiente reservado no Palácio Tangará, em São Paulo.',
    
    // Family Section
    'family.title': 'A base é humana',
    'family.subtitle': 'A TOOGAIN nasce em 2024, mas carrega uma década de construção: Diogo e Nathalya empreendem juntos desde 2014.',
    'family.text1': 'Diogo e Nathalya empreendem juntos desde 2014. A TOOGAIN nasceu em 2024, mas carrega uma década de aprendizados, desafios e crescimento.',
    'family.text2': 'Família, responsabilidade e presença não são "detalhes" — são a régua do que vale a pena construir.',
    'family.caption': 'Diogo, Nathalya e Otto',
    'family.caption1': 'Família Rosendo: presença e propósito.',
    'family.caption2': 'Construção em parceria.',
    'family.caption3': 'Celebrar fases sem perder a direção.',
    'family.diogo.role': 'Fundador e Professor',
    'family.nathalya.role': 'Cofundadora e Eng. de Produção',
    'family.vision.title': 'Visão que atravessa fronteiras',
    'family.vision.text1': 'Em uma experiência de 21 dias em Riad (Arábia Saudita), Diogo reforçou uma crença simples: confiança se constrói com diligência — observar, estudar, validar, e só então decidir.',
    'family.vision.text2': 'Essa mentalidade guia a TOOGAIN: método antes do ruído.',
    'family.vision.caption': 'Riad, Arábia Saudita — disciplina e visão global.',
    'family.vision.caption2': 'Experiência global: foco e conexões.',
    'family.vision.disclaimer': 'Registro pessoal. Não representa parceria comercial ou recomendação.',
    
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
    'transparency.description': 'A TOOGAIN produz educação e sistemas de apoio à tomada de decisão. Não realizamos gestão de recursos e não oferecemos recomendação individual de investimento. Responsabilidade, contexto e critério vêm antes de qualquer ferramenta.',
    'transparency.disclaimer.title': 'Aviso de responsabilidade:',
    'transparency.disclaimer.text': 'Conteúdos educacionais. Decisões financeiras envolvem risco e devem considerar perfil e objetivos individuais.',
    
    // FAQ
    'faq.title': 'Perguntas frequentes',
    'faq.q1': 'A TOOGAIN é para iniciantes?',
    'faq.a1': 'Sim. A base é construída com clareza e método. A progressão acontece por níveis de profundidade, sempre com trilhas estruturadas e foco em execução responsável.',
    'faq.q2': 'Qual a diferença entre Money Academy e Intelligence?',
    'faq.a2': 'A Money Academy organiza aprendizado e desenvolvimento (educação). A Intelligence aplica tecnologia e automação para apoiar processos e decisões. Uma forma fundamento; a outra constrói eficiência e consistência.',
    'faq.q3': 'A TOOGAIN promete resultados?',
    'faq.a3': 'Não. Promessas vazias não fazem parte da nossa cultura. O foco é processo, responsabilidade e evolução contínua. Resultados dependem de inúmeros fatores individuais.',
    'faq.q4': 'A TOOGAIN faz recomendação individual de investimento?',
    'faq.a4': 'Não. Nosso conteúdo é educacional e sistêmico. Decisões individuais exigem análise de contexto, perfil e objetivos pessoais.',
    'faq.q5': 'Por que o foco em um único ativo/abordagem?',
    'faq.a5': 'Acreditamos em excelência e consistência. Dominar profundamente uma abordagem gera mais resultado do que dispersar atenção em múltiplas frentes superficiais.',
    
    // Footer
    'footer.tagline': 'Educação e inteligência aplicada.',
    'footer.copyright': '© TOOGAIN. Todos os direitos reservados.',
    'footer.disclaimer': 'Conteúdo educacional. Responsabilidade em primeiro lugar.',
    'footer.terms': 'Termos',
    'footer.privacy': 'Privacidade',
  },
  en: {
    // Navigation
    'nav.manifesto': 'Manifesto',
    'nav.ecosystem': 'Ecosystem',
    'nav.howWeWork': 'How We Work',
    'nav.principles': 'Principles',
    'nav.transparency': 'Transparency',
    'nav.timeline': 'History',
    'nav.journey': 'Journey',
    'nav.founders': 'Founders',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': 'TOOGAIN',
    'hero.subtitle': 'Education and intelligence applied to decision-making.',
    'hero.description': 'TOOGAIN is an ecosystem that combines practical training and technology to transform knowledge into execution with responsibility and long-term vision.',
    'hero.clarity': 'Clarity',
    'hero.method': 'Method',
    'hero.execution': 'Execution',
    'hero.evolution': 'Evolution',
    'hero.cta.ecosystem': 'Explore Ecosystem',
    'hero.cta.transparency': 'See Transparency',
    
    // Manifesto
    'manifesto.title': 'Manifesto',
    'manifesto.p1': 'We believe that better decisions build better results.',
    'manifesto.p2': "We don't follow trends.",
    'manifesto.p3': "We don't sell illusions.",
    'manifesto.p4': 'We prefer what is true to what is flashy: clarity, method, discipline, and responsibility.',
    'manifesto.p5': 'Technology is a means.',
    'manifesto.p6': 'Education is the foundation.',
    'manifesto.p7': 'Character and discipline sustain the long term.',
    'manifesto.quote': '"Authority is not volume. It is direction."',
    
    // What we do
    'whatWeDo.title': 'What We Do',
    'whatWeDo.description': 'Our work is to build solid foundations and applicable systems.',
    'whatWeDo.education.title': 'Applied Education',
    'whatWeDo.education.description': 'Practical training for those who want to learn deeply and execute responsibly.',
    'whatWeDo.intelligence.title': 'Method and Process',
    'whatWeDo.intelligence.description': 'Strategy without discipline becomes noise. Here, process comes before impulse.',
    'whatWeDo.processes.title': 'Technology and Automation',
    'whatWeDo.processes.description': 'Tools and applied intelligence to reduce friction and support decisions.',
    'whatWeDo.evolution.title': 'Continuous Evolution',
    'whatWeDo.evolution.description': 'Learn, adjust, measure, and repeat — with long-term vision.',
    
    // Ecosystem
    'ecosystem.title': 'One ecosystem. Two complementary fronts.',
    'ecosystem.academy.title': 'TOOGAIN Money Academy',
    'ecosystem.academy.description': 'Education, fundamentals, and practical execution.',
    'ecosystem.academy.bullet1': 'Immediate Income Factory (FRI)',
    'ecosystem.academy.bullet2': '200 Titles Project (100K Plan)',
    'ecosystem.academy.bullet3': 'Structured learning tracks',
    'ecosystem.academy.bullet4': 'Method and consistency',
    'ecosystem.intelligence.title': 'TOOGAIN Intelligence',
    'ecosystem.intelligence.description': 'Technology and automation for consistent execution.',
    'ecosystem.intelligence.bullet1': 'CIPD (Professor Diogo Copy Invest)',
    'ecosystem.intelligence.bullet2': 'Automated operations',
    'ecosystem.intelligence.bullet3': 'Dashboards and governance',
    'ecosystem.intelligence.bullet4': 'Replicable processes',
    'ecosystem.disclaimer': 'Educational content. Does not constitute individual investment recommendation.',
    
    // How we work
    'howWeWork.title': 'How We Work',
    'howWeWork.description': 'Everything starts with clarity and ends with consistency.',
    'howWeWork.clarity': 'Clarity',
    'howWeWork.clarity.description': 'Understand scenario, rules, and risk.',
    'howWeWork.method': 'Method',
    'howWeWork.method.description': 'Replicable process over opinion.',
    'howWeWork.execution': 'Execution',
    'howWeWork.execution.description': 'Discipline and consistency day by day.',
    'howWeWork.evolution': 'Evolution',
    'howWeWork.evolution.description': 'Analyze, adjust, and keep long-term focus.',
    
    // Journey Timeline
    'journey.title': 'The Journey',
    'journey.subtitle': 'From humble origins to global scale — a story built with method, discipline, and purpose.',
    'journey.origin.title': 'Origin',
    'journey.origin.text': 'São Gonçalo (RJ), Brazil. A simple beginning. An uncommon discipline.',
    'journey.discovery.title': 'The Discovery',
    'journey.discovery.text': 'Mathematics and statistics become practical tools.',
    'journey.difference.title': 'The Difference',
    'journey.difference.text': 'Process over emotion.',
    'journey.purpose.title': 'The Purpose',
    'journey.purpose.text': 'Return to teaching — now with applied method.',
    'journey.birth.title': 'TOOGAIN is Born (Jun/2024)',
    'journey.birth.text': 'TOO (also) + GAIN (profit): "we win and you do too."',
    'journey.scale.title': 'Scale',
    'journey.scale.text': '13,305 active students in 33 countries.',
    'journey.future.title': 'The Future',
    'journey.future.text': 'Money Academy + Intelligence + BTC Signature (2026).',
    
    // What is Toogain
    'toogain.title': 'TOO + GAIN',
    'toogain.description': 'TOO means "also." GAIN is market profit. TOOGAIN is more than a name: it is a commitment to clarity, method, and responsibility.',
    
    // Group Structure
    'group.title': 'TOOGAIN Group Structure',
    'group.subtitle': 'Three complementary fronts: education, technology, and global vision.',
    'group.academy.title': 'Money Academy',
    'group.academy.description': 'Education: FRI + 100K Plan',
    'group.academy.feature1': 'Immediate Income Factory (FRI)',
    'group.academy.feature2': '200 Titles Project (100K Plan)',
    'group.intelligence.title': 'Intelligence',
    'group.intelligence.description': 'Technology: CIPD (automation)',
    'group.intelligence.feature1': 'Automated operations',
    'group.btc.title': 'BTC Signature',
    'group.btc.description': 'Next phase (2026): intelligent automations focused on BTCUSDT.',
    'group.btc.feature1': 'Focus on excellence in a single asset',
    
    // Technology Applied
    'tech.title': 'Applied Technology (no shortcuts)',
    'tech.subtitle': 'Tools and systems to support consistent decisions.',
    'tech.automation.title': 'Automation with Governance',
    'tech.automation.description': 'Integrations and automated routines to reduce noise and increase consistency.',
    'tech.data.title': 'Data and Dashboards',
    'tech.data.description': 'Internal monitoring and operational view for better decisions.',
    'tech.ai.title': 'AI as Support',
    'tech.ai.description': 'Applied intelligence to improve process, not to replace responsibility.',
    
    // CIPD Stats
    'cipd.title': 'Transparency in Numbers',
    'cipd.subtitle': 'Official CIPD report — last 12 months.',
    'cipd.points': 'Points',
    'cipd.operations': 'Operations',
    'cipd.gains': 'Gains',
    'cipd.losses': 'Losses',
    'cipd.accuracy': 'Accuracy',
    'cipd.winStreak': 'Winning streak',
    'cipd.loseStreak': 'Losing streak',
    'cipd.management': 'Anti-break management:',
    'cipd.managementText': 'focus on consistency and preservation in medium and long term.',
    'cipd.disclaimer': 'Past results do not guarantee future results. Educational content.',
    'cipd.videoCaption': 'Behind the scenes: transparency in practice',
    'cipd.videoDescription': 'Diogo recording the report for students with transparency and routine.',
    'cipd.videoLocation': 'Recorded in a reserved environment at Palácio Tangará, São Paulo.',
    
    // Family Section
    'family.title': 'The Foundation is Human',
    'family.subtitle': 'TOOGAIN was born in 2024, but carries a decade of building: Diogo and Nathalya have been entrepreneurs together since 2014.',
    'family.text1': 'Diogo and Nathalya have been entrepreneurs together since 2014. TOOGAIN was born in 2024, but carries a decade of lessons, challenges, and growth.',
    'family.text2': 'Family, responsibility, and presence are not "details" — they are the measure of what is worth building.',
    'family.caption': 'Diogo, Nathalya, and Otto',
    'family.caption1': 'Rosendo Family: presence and purpose.',
    'family.caption2': 'Building together.',
    'family.caption3': 'Celebrating phases without losing direction.',
    'family.diogo.role': 'Founder and Professor',
    'family.nathalya.role': 'Co-founder and Production Eng.',
    'family.vision.title': 'Vision That Crosses Borders',
    'family.vision.text1': 'In a 21-day experience in Riyadh (Saudi Arabia), Diogo reinforced a simple belief: trust is built with diligence — observe, study, validate, and only then decide.',
    'family.vision.text2': 'This mindset guides TOOGAIN: method before noise.',
    'family.vision.caption': 'Riyadh, Saudi Arabia — discipline and global vision.',
    'family.vision.caption2': 'Global experience: focus and connections.',
    'family.vision.disclaimer': 'Personal record. Does not represent commercial partnership or recommendation.',
    
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
    'transparency.description': 'TOOGAIN produces education and decision support systems. We do not manage resources and do not offer individual investment recommendations. Responsibility, context, and criteria come before any tool.',
    'transparency.disclaimer.title': 'Responsibility disclaimer:',
    'transparency.disclaimer.text': 'Educational content. Financial decisions involve risk and should consider individual profile and objectives.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Is TOOGAIN for beginners?',
    'faq.a1': 'Yes. The foundation is built with clarity and method. Progression happens through levels of depth, always with structured tracks and focus on responsible execution.',
    'faq.q2': 'What is the difference between Money Academy and Intelligence?',
    'faq.a2': 'Money Academy organizes learning and development (education). Intelligence applies technology and automation to support processes and decisions. One forms foundation; the other builds efficiency and consistency.',
    'faq.q3': 'Does TOOGAIN promise results?',
    'faq.a3': 'No. Empty promises are not part of our culture. The focus is on process, responsibility, and continuous evolution. Results depend on numerous individual factors.',
    'faq.q4': 'Does TOOGAIN make individual investment recommendations?',
    'faq.a4': 'No. Our content is educational and systemic. Individual decisions require analysis of context, profile, and personal objectives.',
    'faq.q5': 'Why the focus on a single asset/approach?',
    'faq.a5': 'We believe in excellence and consistency. Deeply mastering one approach generates more results than dispersing attention across multiple superficial fronts.',
    
    // Footer
    'footer.tagline': 'Education and applied intelligence.',
    'footer.copyright': '© TOOGAIN. All rights reserved.',
    'footer.disclaimer': 'Educational content. Responsibility first.',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
  },
  es: {
    // Navigation
    'nav.manifesto': 'Manifiesto',
    'nav.ecosystem': 'Ecosistema',
    'nav.howWeWork': 'Cómo Actuamos',
    'nav.principles': 'Principios',
    'nav.transparency': 'Transparencia',
    'nav.timeline': 'Historia',
    'nav.journey': 'Trayectoria',
    'nav.founders': 'Fundadores',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': 'TOOGAIN',
    'hero.subtitle': 'Educación e inteligencia aplicada a la toma de decisiones.',
    'hero.description': 'TOOGAIN es un ecosistema que une formación práctica y tecnología para transformar conocimiento en ejecución con responsabilidad y visión a largo plazo.',
    'hero.clarity': 'Claridad',
    'hero.method': 'Método',
    'hero.execution': 'Ejecución',
    'hero.evolution': 'Evolución',
    'hero.cta.ecosystem': 'Explorar Ecosistema',
    'hero.cta.transparency': 'Ver Transparencia',
    
    // Manifesto
    'manifesto.title': 'Manifiesto',
    'manifesto.p1': 'Creemos que mejores decisiones construyen mejores resultados.',
    'manifesto.p2': 'No seguimos modas.',
    'manifesto.p3': 'No vendemos ilusiones.',
    'manifesto.p4': 'Preferimos lo verdadero a lo llamativo: claridad, método, disciplina y responsabilidad.',
    'manifesto.p5': 'La tecnología es un medio.',
    'manifesto.p6': 'La educación es la base.',
    'manifesto.p7': 'El carácter y la disciplina sostienen el largo plazo.',
    'manifesto.quote': '"La autoridad no es volumen. Es dirección."',
    
    // What we do
    'whatWeDo.title': 'Qué Hacemos',
    'whatWeDo.description': 'Nuestro trabajo es construir fundamentos sólidos y sistemas aplicables.',
    'whatWeDo.education.title': 'Educación Aplicada',
    'whatWeDo.education.description': 'Formación práctica para quienes quieren aprender con profundidad y ejecutar con responsabilidad.',
    'whatWeDo.intelligence.title': 'Método y Proceso',
    'whatWeDo.intelligence.description': 'Estrategia sin disciplina se vuelve ruido. Aquí, el proceso viene antes del impulso.',
    'whatWeDo.processes.title': 'Tecnología y Automatización',
    'whatWeDo.processes.description': 'Herramientas e inteligencia aplicada para reducir fricción y apoyar decisiones.',
    'whatWeDo.evolution.title': 'Evolución Continua',
    'whatWeDo.evolution.description': 'Aprender, ajustar, medir y repetir — con visión a largo plazo.',
    
    // Ecosystem
    'ecosystem.title': 'Un ecosistema. Dos frentes complementarios.',
    'ecosystem.academy.title': 'TOOGAIN Money Academy',
    'ecosystem.academy.description': 'Educación, fundamentos y ejecución práctica.',
    'ecosystem.academy.bullet1': 'Fábrica de Ingresos Inmediatos (FRI)',
    'ecosystem.academy.bullet2': 'Proyecto 200 Títulos (Plan 100K)',
    'ecosystem.academy.bullet3': 'Rutas de aprendizaje estructuradas',
    'ecosystem.academy.bullet4': 'Método y consistencia',
    'ecosystem.intelligence.title': 'TOOGAIN Intelligence',
    'ecosystem.intelligence.description': 'Tecnología y automatización para ejecución consistente.',
    'ecosystem.intelligence.bullet1': 'CIPD (Copy Invest del Profesor Diogo)',
    'ecosystem.intelligence.bullet2': 'Operaciones automatizadas',
    'ecosystem.intelligence.bullet3': 'Dashboards y gobernanza',
    'ecosystem.intelligence.bullet4': 'Procesos replicables',
    'ecosystem.disclaimer': 'Contenido educativo. No constituye recomendación individual de inversión.',
    
    // How we work
    'howWeWork.title': 'Cómo Actuamos',
    'howWeWork.description': 'Todo comienza con claridad y termina en consistencia.',
    'howWeWork.clarity': 'Claridad',
    'howWeWork.clarity.description': 'Entender escenario, reglas y riesgo.',
    'howWeWork.method': 'Método',
    'howWeWork.method.description': 'Proceso replicable sobre opinión.',
    'howWeWork.execution': 'Ejecución',
    'howWeWork.execution.description': 'Disciplina y consistencia día a día.',
    'howWeWork.evolution': 'Evolución',
    'howWeWork.evolution.description': 'Analizar, ajustar y mantener el enfoque a largo plazo.',
    
    // Journey Timeline
    'journey.title': 'La Trayectoria',
    'journey.subtitle': 'Del origen humilde a la escala global — una historia construida con método, disciplina y propósito.',
    'journey.origin.title': 'Origen',
    'journey.origin.text': 'São Gonçalo (RJ), Brasil. Un comienzo simple. Una disciplina poco común.',
    'journey.discovery.title': 'El Descubrimiento',
    'journey.discovery.text': 'Matemáticas y estadísticas se convierten en herramientas prácticas.',
    'journey.difference.title': 'La Diferencia',
    'journey.difference.text': 'Proceso sobre emoción.',
    'journey.purpose.title': 'El Propósito',
    'journey.purpose.text': 'Volver a enseñar — ahora con método aplicado.',
    'journey.birth.title': 'Nace TOOGAIN (Jun/2024)',
    'journey.birth.text': 'TOO (también) + GAIN (ganancia): "nosotros ganamos y tú también."',
    'journey.scale.title': 'Escala',
    'journey.scale.text': '13.305 estudiantes activos en 33 países.',
    'journey.future.title': 'El Futuro',
    'journey.future.text': 'Money Academy + Intelligence + BTC Signature (2026).',
    
    // What is Toogain
    'toogain.title': 'TOO + GAIN',
    'toogain.description': 'TOO significa "también". GAIN es ganancia en el mercado. TOOGAIN es más que un nombre: es un compromiso con claridad, método y responsabilidad.',
    
    // Group Structure
    'group.title': 'Estructura del Grupo TOOGAIN',
    'group.subtitle': 'Tres frentes complementarios: educación, tecnología y visión global.',
    'group.academy.title': 'Money Academy',
    'group.academy.description': 'Educación: FRI + Plan 100K',
    'group.academy.feature1': 'Fábrica de Ingresos Inmediatos (FRI)',
    'group.academy.feature2': 'Proyecto 200 Títulos (Plan 100K)',
    'group.intelligence.title': 'Intelligence',
    'group.intelligence.description': 'Tecnología: CIPD (automatización)',
    'group.intelligence.feature1': 'Operaciones automatizadas',
    'group.btc.title': 'BTC Signature',
    'group.btc.description': 'Próxima fase (2026): automatizaciones inteligentes enfocadas en BTCUSDT.',
    'group.btc.feature1': 'Enfoque en excelencia en un único activo',
    
    // Technology Applied
    'tech.title': 'Tecnología Aplicada (sin atajos)',
    'tech.subtitle': 'Herramientas y sistemas para apoyar decisiones consistentes.',
    'tech.automation.title': 'Automatización con Gobernanza',
    'tech.automation.description': 'Integraciones y rutinas automatizadas para reducir ruido y aumentar consistencia.',
    'tech.data.title': 'Datos y Dashboards',
    'tech.data.description': 'Monitoreo interno y visión operacional para mejores decisiones.',
    'tech.ai.title': 'IA como Apoyo',
    'tech.ai.description': 'Inteligencia aplicada para mejorar proceso, no para reemplazar responsabilidad.',
    
    // CIPD Stats
    'cipd.title': 'Transparencia en Números',
    'cipd.subtitle': 'Informe oficial del CIPD — últimos 12 meses.',
    'cipd.points': 'Puntos',
    'cipd.operations': 'Operaciones',
    'cipd.gains': 'Ganancias',
    'cipd.losses': 'Pérdidas',
    'cipd.accuracy': 'Precisión',
    'cipd.winStreak': 'Racha ganadora',
    'cipd.loseStreak': 'Racha perdedora',
    'cipd.management': 'Gestión anti-quiebra:',
    'cipd.managementText': 'enfoque en consistencia y preservación a mediano y largo plazo.',
    'cipd.disclaimer': 'Resultados pasados no garantizan resultados futuros. Contenido educativo.',
    'cipd.videoCaption': 'Detrás de escenas: transparencia en práctica',
    'cipd.videoDescription': 'Diogo registrando el informe para estudiantes con transparencia y rutina.',
    'cipd.videoLocation': 'Grabado en un ambiente reservado en Palácio Tangará, São Paulo.',
    
    // Family Section
    'family.title': 'La Base es Humana',
    'family.subtitle': 'TOOGAIN nace en 2024, pero lleva una década de construcción: Diogo y Nathalya emprenden juntos desde 2014.',
    'family.text1': 'Diogo y Nathalya emprenden juntos desde 2014. TOOGAIN nació en 2024, pero lleva una década de aprendizajes, desafíos y crecimiento.',
    'family.text2': 'Familia, responsabilidad y presencia no son "detalles" — son la medida de lo que vale la pena construir.',
    'family.caption': 'Diogo, Nathalya y Otto',
    'family.caption1': 'Familia Rosendo: presencia y propósito.',
    'family.caption2': 'Construyendo juntos.',
    'family.caption3': 'Celebrar fases sin perder la dirección.',
    'family.diogo.role': 'Fundador y Profesor',
    'family.nathalya.role': 'Cofundadora e Ing. de Producción',
    'family.vision.title': 'Visión que Cruza Fronteras',
    'family.vision.text1': 'En una experiencia de 21 días en Riad (Arabia Saudita), Diogo reforzó una creencia simple: la confianza se construye con diligencia — observar, estudiar, validar, y solo entonces decidir.',
    'family.vision.text2': 'Esta mentalidad guía a TOOGAIN: método antes del ruido.',
    'family.vision.caption': 'Riad, Arabia Saudita — disciplina y visión global.',
    'family.vision.caption2': 'Experiencia global: enfoque y conexiones.',
    'family.vision.disclaimer': 'Registro personal. No representa asociación comercial o recomendación.',
    
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
    'transparency.description': 'TOOGAIN produce educación y sistemas de apoyo a la toma de decisiones. No gestionamos recursos y no ofrecemos recomendaciones individuales de inversión. Responsabilidad, contexto y criterio vienen antes de cualquier herramienta.',
    'transparency.disclaimer.title': 'Aviso de responsabilidad:',
    'transparency.disclaimer.text': 'Contenido educativo. Las decisiones financieras implican riesgo y deben considerar perfil y objetivos individuales.',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.q1': '¿TOOGAIN es para principiantes?',
    'faq.a1': 'Sí. La base está construida con claridad y método. La progresión ocurre por niveles de profundidad, siempre con rutas estructuradas y enfoque en ejecución responsable.',
    'faq.q2': '¿Cuál es la diferencia entre Money Academy e Intelligence?',
    'faq.a2': 'Money Academy organiza aprendizaje y desarrollo (educación). Intelligence aplica tecnología y automatización para apoyar procesos y decisiones. Una forma fundamento; la otra construye eficiencia y consistencia.',
    'faq.q3': '¿TOOGAIN promete resultados?',
    'faq.a3': 'No. Las promesas vacías no son parte de nuestra cultura. El enfoque es proceso, responsabilidad y evolución continua. Los resultados dependen de numerosos factores individuales.',
    'faq.q4': '¿TOOGAIN hace recomendaciones individuales de inversión?',
    'faq.a4': 'No. Nuestro contenido es educativo y sistémico. Las decisiones individuales requieren análisis de contexto, perfil y objetivos personales.',
    'faq.q5': '¿Por qué el enfoque en un único activo/enfoque?',
    'faq.a5': 'Creemos en la excelencia y la consistencia. Dominar profundamente un enfoque genera más resultados que dispersar la atención en múltiples frentes superficiales.',
    
    // Footer
    'footer.tagline': 'Educación e inteligencia aplicada.',
    'footer.copyright': '© TOOGAIN. Todos los derechos reservados.',
    'footer.disclaimer': 'Contenido educativo. Responsabilidad en primer lugar.',
    'footer.terms': 'Términos',
    'footer.privacy': 'Privacidad',
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
