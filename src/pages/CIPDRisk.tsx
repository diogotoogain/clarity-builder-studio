import LegalPageTemplate, { type LegalSection } from '@/components/legal/LegalPageTemplate';

const sections: LegalSection[] = [
  { id: 'section1', key: 'cipdRisk.section1', isHighlight: true },
  { id: 'section2', key: 'cipdRisk.section2', isHighlight: true },
  { id: 'section3', key: 'cipdRisk.section3' },
  { id: 'section4', key: 'cipdRisk.section4' },
  { id: 'section5', key: 'cipdRisk.section5' },
  { id: 'section6', key: 'cipdRisk.section6' },
  { id: 'section7', key: 'cipdRisk.section7' },
  { id: 'section8', key: 'cipdRisk.section8', isHighlight: true },
  { id: 'section9', key: 'cipdRisk.section9' },
  { id: 'section10', key: 'cipdRisk.section10' },
];

const CIPDRisk = () => (
  <LegalPageTemplate
    titleKey="cipdRisk.title"
    subtitleKey="cipdRisk.subtitle"
    sections={sections}
    prevPage={{ path: '/cipd/termos', titleKey: 'cipdTerms.title' }}
    nextPage={{ path: '/cipd/privacidade', titleKey: 'cipdPrivacy.title' }}
  />
);

export default CIPDRisk;
