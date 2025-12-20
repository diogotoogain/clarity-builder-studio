import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import globalMap from '@/assets/global-map.webp';

const countriesData = [
  { pais: 'Brasil', iso2: 'BR', alunos: 11780 },
  { pais: 'Estados Unidos', iso2: 'US', alunos: 395 },
  { pais: 'Portugal', iso2: 'PT', alunos: 298 },
  { pais: 'Japão', iso2: 'JP', alunos: 168 },
  { pais: 'Reino Unido', iso2: 'GB', alunos: 102 },
  { pais: 'Itália', iso2: 'IT', alunos: 84 },
  { pais: 'Espanha', iso2: 'ES', alunos: 69 },
  { pais: 'Alemanha', iso2: 'DE', alunos: 65 },
  { pais: 'Suíça', iso2: 'CH', alunos: 48 },
  { pais: 'Canadá', iso2: 'CA', alunos: 47 },
  { pais: 'Irlanda', iso2: 'IE', alunos: 45 },
  { pais: 'Emirados Árabes', iso2: 'AE', alunos: 38 },
  { pais: 'França', iso2: 'FR', alunos: 36 },
  { pais: 'Austrália', iso2: 'AU', alunos: 32 },
  { pais: 'Países Baixos', iso2: 'NL', alunos: 22 },
  { pais: 'Bélgica', iso2: 'BE', alunos: 15 },
  { pais: 'Argentina', iso2: 'AR', alunos: 14 },
  { pais: 'Paraguai', iso2: 'PY', alunos: 12 },
  { pais: 'Angola', iso2: 'AO', alunos: 9 },
  { pais: 'Áustria', iso2: 'AT', alunos: 7 },
  { pais: 'México', iso2: 'MX', alunos: 6 },
  { pais: 'Chile', iso2: 'CL', alunos: 5 },
  { pais: 'Uruguai', iso2: 'UY', alunos: 5 },
  { pais: 'Israel', iso2: 'IL', alunos: 4 },
  { pais: 'Nova Zelândia', iso2: 'NZ', alunos: 4 },
  { pais: 'Noruega', iso2: 'NO', alunos: 3 },
  { pais: 'Suécia', iso2: 'SE', alunos: 3 },
  { pais: 'Luxemburgo', iso2: 'LU', alunos: 3 },
  { pais: 'Moçambique', iso2: 'MZ', alunos: 3 },
  { pais: 'Catar', iso2: 'QA', alunos: 3 },
  { pais: 'Dinamarca', iso2: 'DK', alunos: 2 },
  { pais: 'Polônia', iso2: 'PL', alunos: 2 },
  { pais: 'Malta', iso2: 'MT', alunos: 1 },
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

  const filteredCountries = countriesData.filter(country =>
    country.pais.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedCountries = showAll ? filteredCountries : filteredCountries.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background map */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={globalMap}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Uma comunidade global
          </h2>

          {/* Total counter */}
          <div className="inline-flex flex-col items-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-2">
              <AnimatedCounter value={totalStudents} isInView={isInView} />
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              alunos ativos em <span className="text-foreground font-medium">33 países</span>
            </p>
          </div>

          <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">
            Quando a educação encontra tecnologia, o impacto deixa de ser local.
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
                    placeholder="Buscar país..."
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
                    <span className="text-sm text-foreground">{country.pais}</span>
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
                  <span>Mostrar menos</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Ver todos (33)</span>
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
