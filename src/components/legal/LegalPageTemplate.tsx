import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronUp, Menu, X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { Helmet } from 'react-helmet-async';

export interface LegalSection {
  id: string;
  key: string;
  isHighlight?: boolean;
}

interface LegalPageTemplateProps {
  titleKey: string;
  subtitleKey: string;
  sections: LegalSection[];
  lastUpdated?: string;
  nextPage?: { path: string; titleKey: string };
  prevPage?: { path: string; titleKey: string };
}

const LegalPageTemplate = ({
  titleKey,
  subtitleKey,
  sections,
  lastUpdated = '19/03/2026',
  nextPage,
  prevPage,
}: LegalPageTemplateProps) => {
  const { t, lang } = useI18n();
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>{t(titleKey)} | TOOGAIN</title>
        <meta name="description" content={t(subtitleKey)} />
        <html lang={lang} />
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={18} />
              <span className="text-sm">{t('legal.backToHome')}</span>
            </Link>
            <span className="font-heading font-bold text-lg text-foreground">TOOGAIN</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>

        {/* Mobile TOC */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[65px] left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border/30 z-40 max-h-[60vh] overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-4">
              <h3 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">
                {t('legal.tableOfContents')}
              </h3>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left w-full text-sm py-1.5 transition-colors ${
                        activeSection === section.id
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {t(`${section.key}.title`)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}

        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24">
                <h3 className="text-xs font-semibold text-primary mb-4 uppercase tracking-wider">
                  {t('legal.tableOfContents')}
                </h3>
                <nav className="space-y-1 max-h-[calc(100vh-150px)] overflow-y-auto pr-4">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block text-left w-full text-sm py-2 px-3 rounded-lg transition-all ${
                        activeSection === section.id
                          ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {t(`${section.key}.title`)}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-10">
                  <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {t(titleKey)}
                  </h1>
                  <p className="text-muted-foreground mb-4">{t(subtitleKey)}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{t('legal.lastUpdated')}: {lastUpdated}</span>
                    <span>•</span>
                    <span>{t('legal.cnpj')}: {t('legal.cnpjNumber')}</span>
                  </div>
                </div>

                <div className="space-y-10">
                  {sections.map((section, index) => (
                    <motion.section
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                      className={`scroll-mt-28 ${
                        section.isHighlight
                          ? 'bg-destructive/5 border border-destructive/20 rounded-xl p-6'
                          : ''
                      }`}
                    >
                      <h2 className={`font-heading text-xl font-semibold mb-4 ${
                        section.isHighlight ? 'text-destructive' : 'text-foreground'
                      }`}>
                        {t(`${section.key}.title`)}
                      </h2>
                      <div className="prose prose-sm prose-invert max-w-none">
                        <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                          {t(`${section.key}.content`)}
                        </p>
                      </div>
                    </motion.section>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-border/30">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                      {t('legal.company')} • {t('legal.cnpj')}: {t('legal.cnpjNumber')}
                    </p>
                    <div className="flex gap-4">
                      {prevPage && (
                        <Link to={prevPage.path} className="text-sm text-primary hover:text-primary/80 transition-colors">
                          ← {t(prevPage.titleKey)}
                        </Link>
                      )}
                      {nextPage && (
                        <Link to={nextPage.path} className="text-sm text-primary hover:text-primary/80 transition-colors">
                          {t(nextPage.titleKey)} →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </main>
          </div>
        </div>

        {/* Back to Top */}
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label={t('legal.backToTop')}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </div>
    </>
  );
};

export default LegalPageTemplate;
