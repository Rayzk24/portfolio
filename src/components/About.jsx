import { motion } from 'framer-motion';

const stats = [
  { value: 'Bientôt 5 ans', label: "d'expérience" },
  { value: '5', label: 'collaborations' },
  { value: 'Réponse', label: 'sous 24h' },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-forest tracking-widest uppercase mb-4">
            À propos
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest mb-16 max-w-3xl">
            La config Minecraft, ma seconde langue.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              Je touche à la configuration Minecraft depuis bientôt 5 ans. J'ai
              d'abord développé mes propres serveurs avant de me spécialiser
              sur des plugins complexes et de proposer mes services en
              freelance.
            </p>
            <p>
              Mon approche est simple : des configurations soignées, lisibles,
              et livrées dans les délais. Je ne fais pas du copier-coller de
              presets, chaque projet est pensé pour le serveur du client.
            </p>
            <p>
              Je travaille à la tâche ou à l'heure selon les besoins, et je
              reste disponible pour échanger à chaque étape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-white rounded-3xl p-8 shadow-md border border-gray-200 h-fit"
          >
            <div className="space-y-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-extrabold text-ink tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
