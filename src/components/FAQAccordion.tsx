import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'A TOOGAIN é para iniciantes?',
    answer:
      'Sim. A base é construída com clareza e método. A progressão acontece por níveis de profundidade, sempre com foco em execução responsável.',
  },
  {
    question: 'Qual a diferença entre Money Academy e Intelligence?',
    answer:
      'A Money Academy organiza aprendizado e desenvolvimento. A Intelligence aplica tecnologia e IA para apoiar processos e decisões. Uma forma fundamento; a outra constrói eficiência e consistência.',
  },
  {
    question: 'A TOOGAIN promete resultados?',
    answer:
      'Não. Promessas vazias não fazem parte da nossa cultura. O foco é processo, responsabilidade e evolução contínua.',
  },
  {
    question: 'A TOOGAIN faz recomendação de investimento?',
    answer:
      'Não. Nosso conteúdo é educacional e sistêmico. Decisões individuais exigem análise de contexto e perfil.',
  },
];

const FAQAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-card border border-border/50 rounded-xl px-5 overflow-hidden"
        >
          <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 text-base font-medium hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
