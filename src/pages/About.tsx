import { Helmet } from 'react-helmet-async';
import AboutHero from '@/components/about/AboutHero';
import JourneyTimeline from '@/components/about/JourneyTimeline';
import WhatIsToogain from '@/components/about/WhatIsToogain';
import GroupStructure from '@/components/about/GroupStructure';
import CIPDStats from '@/components/about/CIPDStats';
import FamilySection from '@/components/about/FamilySection';
import GlobalCommunity from '@/components/about/GlobalCommunity';
import ManifestoSection from '@/components/about/ManifestoSection';
import AboutFooter from '@/components/about/AboutFooter';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Diogo Rosendo | Fundador da Toogain</title>
        <meta 
          name="description" 
          content="A história do fundador da Toogain: ciência aplicada, gestão de risco, educação e tecnologia — e uma comunidade global de 13.305 alunos em 33 países." 
        />
        <meta property="og:title" content="Diogo Rosendo | Fundador da Toogain" />
        <meta property="og:description" content="A história do fundador da Toogain: ciência aplicada, gestão de risco, educação e tecnologia." />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <AboutHero />
        <JourneyTimeline />
        <WhatIsToogain />
        <GroupStructure />
        <CIPDStats />
        <FamilySection />
        <GlobalCommunity />
        <ManifestoSection />
        <AboutFooter />
      </main>
    </>
  );
};

export default About;
