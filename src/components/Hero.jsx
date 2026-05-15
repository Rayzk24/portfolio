import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper"
    >
      {/* Pattern Minecraft en background */}
      <div className="absolute inset-0 minecraft-pattern pointer-events-none" />

      {/* Gradient subtil de bas en haut */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-paper to-white pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          variants={fade}
          custom={0}
          initial="hidden"
          animate="show"
          className="text-sm font-medium text-forest tracking-widest uppercase mb-6"
        >
          Configurateur Minecraft · Freelance
        </motion.p>

        <motion.h1
          variants={fade}
          custom={1}
          initial="hidden"
          animate="show"
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tightest leading-none"
        >
          Rayzk<span className="text-forest">.</span>
        </motion.h1>

        <motion.p
          variants={fade}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light"
        >
          Bientôt 5 ans à donner vie à vos serveurs.
        </motion.p>

        <motion.div
          variants={fade}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-white font-semibold hover:bg-forest transition-all duration-300 hover:scale-[1.02]"
          >
            Voir mes projets
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ink/10 bg-white text-ink font-semibold hover:border-ink/30 transition-all duration-300"
          >
            <MessageCircle size={18} />
            Me contacter
          </a>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-gray-400 tracking-widest uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
