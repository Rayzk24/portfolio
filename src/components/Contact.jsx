import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('rayzk24').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-ink text-white overflow-hidden"
    >
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-forest/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-emerald-400 tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tightest mb-6">
            On en discute ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Décris-moi ton projet et je te réponds rapidement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Card Discord — avec bouton copier */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-emerald-400/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-forest/30 flex items-center justify-center text-emerald-400">
                <MessageSquare size={22} />
              </div>
              <button
                type="button"
                onClick={handleCopyDiscord}
                aria-label="Copier le pseudo Discord"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/5 text-xs font-medium text-gray-300 hover:text-white transition-all duration-200"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>Copié</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copier</span>
                  </>
                )}
              </button>
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Discord
            </div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              rayzk24
            </div>
            <div className="text-sm text-gray-500">
              Réponse en quelques heures.
            </div>
          </motion.div>

          {/* Card Email — entièrement cliquable */}
          <motion.a
            href="mailto:contact@rayzk.fr"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative p-8 rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-emerald-400/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-forest/30 flex items-center justify-center text-emerald-400">
                <Mail size={22} />
              </div>
              <ArrowUpRight
                size={22}
                className="text-white/40 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Email
            </div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              contact@rayzk.fr
            </div>
            <div className="text-sm text-gray-500">
              Pour les échanges plus formels.
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
