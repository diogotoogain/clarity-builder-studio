

## Plano Atualizado: Adequações Jurídicas (com feedback da IA jurídica)

O plano anterior foi validado pela IA jurídica com 3 observações. Incorporo as 3 abaixo. As 9 alterações originais permanecem, com o ajuste do ponto 2 (nota editorial em TODOS os 9 transcripts, não só Rogério). As rotas do footer já existem.

---

### Arquivos e mudanças

**1. `src/lib/testimonials-i18n.ts`** (PT/EN/ES)
- Reescrever 9 títulos (headlines) conforme lista aprovada
- Adicionar nota editorial no final de TODOS os 9 transcripts (não só Rogério): `"\n\n[Nota da TOOGAIN: O CIPD é uma ferramenta automatizada configurada pelo próprio usuário. O Prof. Diogo não opera a conta de nenhum cliente. Cada usuário é responsável pela sua própria operação.]"`
- Adicionar chave `testimonials.cardDisclaimer` com disclaimer individual (⚠️ texto completo)
- Reescrever `testimonials.disclaimer` com texto jurídico completo

**2. `src/lib/i18n.tsx`** (PT/EN/ES — 3 blocos)
- `family.nathalya.role`: tirar "Cofundadora", deixar só "Eng. de Produção" / "Production Eng." / "Ing. de Producción"
- `toogain.description`: suavizar — remover "lucro", colocar "resultado" e frase de alinhamento
- `journey.birth.text`: trocar "nós ganhamos e você também" por versão suavizada
- `family.vision.disclaimer`: manter texto, será estilizado no componente
- Adicionar chaves `footer.risk` e `footer.refund` nos 3 idiomas

**3. `src/lib/institutional-i18n.ts`** (PT/EN/ES — 3 blocos)
- `family.nathalya.role`: tirar "Cofundadora"
- `family.text2`: tirar "cofundadora" do texto (manter "engenheira de produção, parceira desde 2014")
- Adicionar `journey.phase5.disclaimer` nos 3 idiomas

**4. `src/components/TestimonialsSection.tsx`**
- Adicionar disclaimer individual (`testimonials.cardDisclaimer`) abaixo de cada card com `text-xs text-muted-foreground` (fonte legível, não invisível)
- No modal, após o transcript, adicionar o mesmo disclaimer

**5. `src/components/Footer.tsx`**
- Trocar 2 links por 4: Termos (`/termos`), Termo de Risco (`/cipd/risco`), Privacidade (`/privacidade`), Reembolso (`/cipd/reembolso`)

**6. `src/components/about/JourneyTimelineNew.tsx`**
- Renderizar `journey.phase5.disclaimer` abaixo dos textos da fase 5 (em itálico, `text-xs text-muted-foreground`)

**7. `src/components/about/GlobalVisionSection.tsx`**
- Aumentar fonte do disclaimer CR7 de `text-[10px] text-muted-foreground/60` para `text-xs text-muted-foreground`

---

### Resumo das 9+1 alterações

| # | Alteração | Arquivo(s) |
|---|-----------|------------|
| 1 | Nathalya: tirar "Cofundadora" | i18n.tsx, institutional-i18n.ts |
| 2 | 9 títulos de depoimentos | testimonials-i18n.ts |
| 3 | Disclaimer individual em cada card | TestimonialsSection.tsx, testimonials-i18n.ts |
| 4 | Nota editorial em TODOS os 9 transcripts | testimonials-i18n.ts |
| 5 | Disclaimer geral reescrito | testimonials-i18n.ts |
| 6 | Disclaimer fase 5 da jornada | institutional-i18n.ts, JourneyTimelineNew.tsx |
| 7 | Suavizar "TOO + GAIN" | i18n.tsx |
| 8 | Footer com 4 links | Footer.tsx, i18n.tsx |
| 9 | CR7 disclaimer mais visível | GlobalVisionSection.tsx |

