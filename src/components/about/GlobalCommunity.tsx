import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import globalMap from '@/assets/global-map.webp';
import { useI18n } from '@/lib/i18n';

const countriesData = [
  { key: 'country.brazil', iso2: 'BR', alunos: 11780 },
  { key: 'country.usa', iso2: 'US', alunos: 395 },
  { key: 'country.portugal', iso2: 'PT', alunos: 298 },
  { key: 'country.japan', iso2: 'JP', alunos: 168 },
  { key: 'country.uk', iso2: 'GB', alunos: 102 },
  { key: 'country.italy', iso2: 'IT', alunos: 84 },
  { key: 'country.spain', iso2: 'ES', alunos: 69 },
  { key: 'country.germany', iso2: 'DE', alunos: 65 },
  { key: 'country.switzerland', iso2: 'CH', alunos: 48 },
  { key: 'country.canada', iso2: 'CA', alunos: 47 },
  { key: 'country.ireland', iso2: 'IE', alunos: 45 },
  { key: 'country.uae', iso2: 'AE', alunos: 38 },
  { key: 'country.france', iso2: 'FR', alunos: 36 },
  { key: 'country.australia', iso2: 'AU', alunos: 32 },
  { key: 'country.netherlands', iso2: 'NL', alunos: 22 },
  { key: 'country.belgium', iso2: 'BE', alunos: 15 },
  { key: 'country.argentina', iso2: 'AR', alunos: 14 },
  { key: 'country.paraguay', iso2: 'PY', alunos: 12 },
  { key: 'country.angola', iso2: 'AO', alunos: 9 },
  { key: 'country.austria', iso2: 'AT', alunos: 7 },
  { key: 'country.mexico', iso2: 'MX', alunos: 6 },
  { key: 'country.chile', iso2: 'CL', alunos: 5 },
  { key: 'country.uruguay', iso2: 'UY', alunos: 5 },
  { key: 'country.israel', iso2: 'IL', alunos: 4 },
  { key: 'country.newZealand', iso2: 'NZ', alunos: 4 },
  { key: 'country.norway', iso2: 'NO', alunos: 3 },
  { key: 'country.sweden', iso2: 'SE', alunos: 3 },
  { key: 'country.luxembourg', iso2: 'LU', alunos: 3 },
  { key: 'country.mozambique', iso2: 'MZ', alunos: 3 },
  { key: 'country.qatar', iso2: 'QA', alunos: 3 },
  { key: 'country.denmark', iso2: 'DK', alunos: 2 },
  { key: 'country.poland', iso2: 'PL', alunos: 2 },
  { key: 'country.malta', iso2: 'MT', alunos: 1 },
];

const totalStudents = 13305;

const AnimatedCounter = ({ value, isInView }: { value: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500;
    const steps = 80;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span className="tabular-nums">{count.toLocaleString('pt-BR')}</span>;
};

const getFlagEmoji = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

const GlobalCommunity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useI18n();

  const filteredCountries = countriesData.filter(country =>
    t(country.key).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedCountries = showAll ? filteredCountries : filteredCountries.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden w-full">
      {/* Background map */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={globalMap}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            {t('global.title')}
          </h2>

          {/* Total counter */}
          <div className="inline-flex flex-col items-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-2">
              <AnimatedCounter value={totalStudents} isInView={isInView} />
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              {t('global.students')} <span className="text-foreground font-medium">33 {t('global.countries')}</span>
            </p>
          </div>

          <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">
            {t('global.subtitle')}
          </p>
        </motion.div>

        {/* Countries list */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden">
            {/* Search */}
            {showAll && (
              <div className="p-4 border-b border-border/50">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={t('global.search')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                </div>
              </div>
            )}

            {/* List */}
            <div className={`divide-y divide-border/30 ${showAll ? 'max-h-80 overflow-y-auto' : ''}`}>
              {displayedCountries.map((country, index) => (
                <motion.div
                  key={country.iso2}
                  className="flex items-center justify-between px-4 py-3 hover:bg-secondary/30 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{getFlagEmoji(country.iso2)}</span>
                    <span className="text-sm text-foreground">{t(country.key)}</span>
                  </div>
                  <span className="text-sm font-medium text-primary tabular-nums">
                    {country.alunos.toLocaleString('pt-BR')}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Toggle button */}
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 text-sm text-primary hover:bg-secondary/30 transition-colors border-t border-border/50"
            >
              {showAll ? (
                <>
                  <span>{t('global.showLess')}</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>{t('global.showAll')} (33)</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCommunity;
