import { motion } from 'framer-motion';

const references = [
  {
    name: 'FishMC',
    logo: '/logos/fishmc.webp',
    width: 800,
    height: 447,
    floatDelay: 0,
    url: 'https://fishmc.fr',
  },
  {
    name: 'DemeryaMC',
    logo: '/logos/demeryamc.webp',
    width: 1187,
    height: 897,
    floatDelay: 0.8,
    url: 'https://demeryamc.fr',
  },
  {
    name: 'LootSMP',
    logo: '/logos/lootsmp.webp',
    width: 292,
    height: 226,
    floatDelay: 1.5,
    url: 'https://lootsmp.fr',
  },
  {
    name: 'OnySky',
    logo: '/logos/onysky.webp',
    width: 800,
    height: 450,
    floatDelay: 2.2,
    url: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-ink text-white overflow-hidden"
    >
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-forest/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-sm font-medium text-emerald-400 tracking-widest uppercase mb-4">
            Références
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest text-white">
            Ils m'ont fait confiance.
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Quelques serveurs avec qui j'ai bossé.
          </p>
        </motion.div>

        {/* Rangée des références : 4 colonnes desktop, 2x2 mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 items-center justify-items-center">
          {references.map((ref, i) => (
            // Wrapper extérieur : gère uniquement l'animation d'entrée (fade + slide)
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-center justify-center"
            >
              {/* Wrapper intérieur : flottement permanent + hover scale.
                  Devient un <a> si la référence a une URL, sinon un <div>. */}
              {(() => {
                const Tag = ref.url ? motion.a : motion.div;
                const linkProps = ref.url
                  ? {
                      href: ref.url,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      'aria-label': `Visiter ${ref.name}`,
                    }
                  : {};
                return (
                  <Tag
                    {...linkProps}
                    animate={{ y: [-6, 6] }}
                    whileHover={{ scale: 1.08 }}
                    transition={{
                      y: {
                        duration: 4,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: ref.floatDelay,
                      },
                      scale: { duration: 0.3, ease: 'easeOut' },
                    }}
                    className={`inline-block ${ref.url ? 'cursor-pointer' : ''}`}
                  >
                    {ref.logo ? (
                      <img
                        src={ref.logo}
                        alt={ref.name}
                        width={ref.width}
                        height={ref.height}
                        loading="lazy"
                        decoding="async"
                        className="max-h-24 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-center">
                        {ref.name}
                      </span>
                    )}
                  </Tag>
                );
              })()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
