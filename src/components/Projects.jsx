import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

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

const testimonials = [
  {
    client: 'Moovingz',
    service: 'Configuration 1.21',
    platform: 'EndMC',
    rating: 5,
    quote:
      'Super travail, rapide et qualitatif. Il a su se rendre disponible en vocal pour comprendre précisément ce que je voulais. Je recommande fortement.',
    url: 'https://discord.com/channels/951951353272471612/951978995187081267/1468549288949715128',
  },
  {
    client: 'Kazotaruu_',
    service: 'Conversion de pack Bedrock',
    platform: 'Olympe',
    rating: 5,
    quote:
      'Il a trouvé différentes solutions en cherchant pendant plusieurs jours pour rendre mon pack compatible Bedrock. Si vous avez besoin, il est excellent.',
    url: 'https://discord.com/channels/731912900670783561/1030131448713334904/1527016641886421143',
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

        <div className="mt-28 pt-20 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-14 max-w-3xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tightest text-white">
                  Ils en parlent mieux que moi.
                </h3>
                <p className="mt-4 text-base sm:text-lg text-gray-400">
                  Des retours vérifiés après livraison.
                </p>
              </div>
              <p className="shrink-0 w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-gray-300">
                <span className="text-emerald-400">5/5</span> sur 2 avis vérifiés
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.article
                key={testimonial.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.045] p-6 sm:p-8 transition-[transform,background-color,border-color] duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-white/[0.065]"
              >
                <div
                  className="flex items-center gap-1 text-emerald-400"
                  aria-label={`${testimonial.rating} étoiles sur 5`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={17}
                      strokeWidth={1.8}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-7 flex-1 text-lg sm:text-xl leading-relaxed text-gray-100">
                  « {testimonial.quote} »
                </blockquote>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-bold text-white">{testimonial.client}</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">
                    {testimonial.service}
                    <span className="mx-2 text-gray-600" aria-hidden="true">
                      ·
                    </span>
                    {testimonial.platform}
                  </p>
                  <a
                    href={testimonial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 -ml-2 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                    aria-label={`Voir l’avis original de ${testimonial.client} sur ${testimonial.platform} (nouvel onglet)`}
                  >
                    Voir l’avis original
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
