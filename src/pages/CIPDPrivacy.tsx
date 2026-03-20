import LegalPageTemplate, { type LegalSection } from '@/components/legal/LegalPageTemplate';

const sections: LegalSection[] = [
  { id: 'section1', key: 'cipdPrivacy.section1' },
  { id: 'section2', key: 'cipdPrivacy.section2' },
  { id: 'section3', key: 'cipdPrivacy.section3' },
  { id: 'section4', key: 'cipdPrivacy.section4' },
  { id: 'section5', key: 'cipdPrivacy.section5' },
  { id: 'section6', key: 'cipdPrivacy.section6' },
  { id: 'section7', key: 'cipdPrivacy.section7' },
  { id: 'section8', key: 'cipdPrivacy.section8' },
];

const CIPDPrivacy = () => (
  <LegalPageTemplate
    titleKey="cipdPrivacy.title"
    subtitleKey="cipdPrivacy.subtitle"
    sections={sections}
    prevPage={{ path: '/cipd/risco', titleKey: 'cipdRisk.title' }}
    nextPage={{ path: '/cipd/reembolso', titleKey: 'cipdRefund.title' }}
  />
);

export default CIPDPrivacy;
