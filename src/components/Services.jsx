import { motion } from 'framer-motion';
import { Zap, Package } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Tâche ponctuelle',
    desc: "Une config spécifique à faire ? Je m'occupe d'une tâche précise, livraison rapide.",
    price: 'À partir de 12€/h',
  },
  {
    icon: Package,
    title: 'Pack configuration',
    desc: "Plusieurs tâches groupées sur une période définie. Devis personnalisé selon la charge.",
    price: 'Sur devis',
    featured: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-sm font-medium text-forest tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest">
            Deux façons de bosser ensemble.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-paper text-ink">
                  <Icon size={22} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">{s.desc}</p>
                <div className="text-sm font-semibold pt-6 border-t border-black/5">
                  {s.price}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          Tous les tarifs sont indicatifs et ajustables selon les spécificités
          du projet.
        </motion.p>
      </div>
    </section>
  );
}
