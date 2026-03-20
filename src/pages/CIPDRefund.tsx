import LegalPageTemplate, { type LegalSection } from '@/components/legal/LegalPageTemplate';

const sections: LegalSection[] = [
  { id: 'section1', key: 'cipdRefund.section1' },
  { id: 'section2', key: 'cipdRefund.section2' },
  { id: 'section3', key: 'cipdRefund.section3' },
  { id: 'section4', key: 'cipdRefund.section4', isHighlight: true },
];

const CIPDRefund = () => (
  <LegalPageTemplate
    titleKey="cipdRefund.title"
    subtitleKey="cipdRefund.subtitle"
    sections={sections}
    prevPage={{ path: '/cipd/privacidade', titleKey: 'cipdPrivacy.title' }}
  />
);

export default CIPDRefund;
