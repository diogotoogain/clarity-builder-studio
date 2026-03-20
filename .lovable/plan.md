

## Correção: chave `journey.phase5.disclaimer` faltando nas traduções

### Problema
O componente `JourneyTimelineNew.tsx` renderiza `t('journey.phase5.disclaimer')` na fase 5, mas a chave nunca foi adicionada ao arquivo `src/lib/institutional-i18n.ts`. O `t()` retorna a própria chave quando não encontra tradução.

### Solução
Adicionar a chave `journey.phase5.disclaimer` nos 3 idiomas em `src/lib/institutional-i18n.ts`, logo após `journey.phase5.text5` em cada bloco.

### Textos

**PT:**
```
'journey.phase5.disclaimer': 'Resultados pessoais do fundador. Rentabilidade passada não é garantia de resultados futuros. Operações em renda variável envolvem riscos de perda.'
```

**EN:**
```
'journey.phase5.disclaimer': 'Founder\'s personal results. Past performance is not a guarantee of future results. Variable income operations involve risk of loss.'
```

**ES:**
```
'journey.phase5.disclaimer': 'Resultados personales del fundador. La rentabilidad pasada no garantiza resultados futuros. Las operaciones en renta variable implican riesgos de pérdida.'
```

### Arquivo alterado
- `src/lib/institutional-i18n.ts` — adicionar 1 linha em cada bloco de idioma (3 linhas total)

