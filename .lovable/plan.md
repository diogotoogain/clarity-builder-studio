

## Plano: Criar 4 Páginas Legais CIPD

### O que será feito

Criar 4 novas páginas no site, todas seguindo o mesmo padrão visual da página `/termos` existente (sidebar com índice, animações, back-to-top, responsive):

1. **`/cipd/termos`** - Termos de Uso CIPD (12 seções)
2. **`/cipd/risco`** - Termo de Ciência de Risco (10 seções)
3. **`/cipd/privacidade`** - Política de Privacidade LGPD (8 seções)
4. **`/cipd/reembolso`** - Política de Reembolso (4 seções)

### Arquivos a criar/modificar

**1. `src/lib/cipd-legal-i18n.ts`** (novo)
- Traduções PT completas com todo o conteúdo dos 4 documentos DOCX
- Traduções EN e ES (traduzidas do PT)
- Seções destacadas (highlight) para cláusulas de risco e isenção de responsabilidade

**2. `src/components/legal/LegalPageTemplate.tsx`** (novo)
- Componente reutilizável que extrai o padrão comum da página Terms.tsx
- Props: título, subtítulo, seções, link para próximo documento
- Sidebar com índice, scroll tracking, mobile menu, back-to-top
- Evita duplicação de código entre as 5 páginas legais

**3. 4 novas páginas:**
- `src/pages/CIPDTerms.tsx`
- `src/pages/CIPDRisk.tsx`
- `src/pages/CIPDPrivacy.tsx`
- `src/pages/CIPDRefund.tsx`

Cada uma usa o LegalPageTemplate com suas seções específicas.

**4. `src/App.tsx`** - Adicionar 4 novas rotas

**5. `src/lib/i18n.tsx`** - Importar e integrar as novas traduções

### Conteúdo de cada página

| Página | Seções | Highlights |
|--------|--------|------------|
| Termos de Uso CIPD | 12 (Definições → Disposições Gerais) | Seção 6 (Não Responsabilidade) |
| Termo de Risco | 10 (Ciência Renda Variável → Perfil Investidor) | Seções 1, 2, 8 |
| Política Privacidade | 8 (Controlador → Alterações) | Nenhuma |
| Política Reembolso | 4 (Direito Arrependimento → Chargebacks) | Seção 4 |

### Tradução

Conteúdo original em PT será mantido exatamente como nos documentos. Traduções EN e ES serão criadas para todas as seções. Data de última atualização: 19/03/2026.

### Navegação

Cada página terá link para a próxima no rodapé, criando um fluxo entre os 4 documentos legais do CIPD.

