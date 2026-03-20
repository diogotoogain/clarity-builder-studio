import LegalPageTemplate, { type LegalSection } from '@/components/legal/LegalPageTemplate';

const sections: LegalSection[] = [
  { id: 'section1', key: 'cipdTerms.section1' },
  { id: 'section2', key: 'cipdTerms.section2' },
  { id: 'section3', key: 'cipdTerms.section3' },
  { id: 'section4', key: 'cipdTerms.section4' },
  { id: 'section5', key: 'cipdTerms.section5' },
  { id: 'section6', key: 'cipdTerms.section6', isHighlight: true },
  { id: 'section7', key: 'cipdTerms.section7' },
  { id: 'section8', key: 'cipdTerms.section8' },
  { id: 'section9', key: 'cipdTerms.section9' },
  { id: 'section10', key: 'cipdTerms.section10' },
  { id: 'section11', key: 'cipdTerms.section11' },
  { id: 'section12', key: 'cipdTerms.section12' },
];

const CIPDTerms = () => (
  <LegalPageTemplate
    titleKey="cipdTerms.title"
    subtitleKey="cipdTerms.subtitle"
    sections={sections}
    nextPage={{ path: '/cipd/risco', titleKey: 'cipdRisk.title' }}
  />
);

export default CIPDTerms;
