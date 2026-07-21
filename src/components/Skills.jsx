import { motion } from 'framer-motion';
import {
  Sword,
  Package,
  Fish,
  MonitorPlay,
  LayoutGrid,
  Trophy,
  Map,
  Users,
} from 'lucide-react';

const skills = [
  {
    icon: Sword,
    name: 'MythicMobs',
    desc: 'Boss et mobs custom avec mécaniques avancées.',
    url: 'https://www.spigotmc.org/resources/mythicmobs.5702/',
  },
  {
    icon: Package,
    name: 'ItemsAdder',
    desc: 'Items, blocs et ressources entièrement custom.',
    url: 'https://www.spigotmc.org/resources/itemsadder.73355/',
  },
  {
    icon: Fish,
    name: 'EvenMoreFish',
    desc: 'Systèmes de pêche avec raretés et récompenses.',
    url: 'https://www.spigotmc.org/resources/evenmorefish.91310/',
  },
  {
    icon: MonitorPlay,
    name: 'CustomNameplates',
    desc: 'HUD, bossbars et interfaces dynamiques.',
    url: 'https://voxel.shop/product/2543/customnameplates',
  },
  {
    icon: LayoutGrid,
    name: 'DeluxeMenus',
    desc: 'Interfaces et menus entièrement custom.',
    url: 'https://www.spigotmc.org/resources/deluxemenus.11734/',
  },
  {
    icon: Trophy,
    name: 'BattlePass',
    desc: 'Systèmes de battle pass et récompenses progressives.',
    url: 'https://www.spigotmc.org/resources/1-17-26-2-%E2%AD%90-battlepass-%E2%AD%90-50-quests-with-unlimited-customisable-quests-%E2%9A%94%EF%B8%8F-gui-editor-%E2%AD%90.63076/',
  },
  {
    icon: Map,
    name: 'WorldGuard',
    desc: 'Régions, flags et protections sur mesure.',
    url: 'https://dev.bukkit.org/projects/worldguard',
  },
  {
    icon: Users,
    name: 'Citizens',
    desc: 'PNJ interactifs avec dialogues et quêtes.',
    url: 'https://www.spigotmc.org/resources/citizens.13811/',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-sm font-medium text-forest tracking-widest uppercase mb-4">
            Expertises
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest">
            Plugins & expertises.
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Les outils que je maîtrise, et que je combine pour donner sa
            personnalité à chaque serveur.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Documentation ${skill.name}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: (i % 4) * 0.08,
                  ease: 'easeOut',
                }}
                className="group block p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-paper group-hover:bg-forest/10 flex items-center justify-center mb-4 transition-colors">
                  <Icon
                    size={22}
                    className="text-ink group-hover:text-forest transition-colors"
                  />
                </div>
                <h3 className="font-bold text-base mb-1.5 tracking-tight">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {skill.desc}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          Et bien d'autres selon les besoins du projet.
        </motion.p>
      </div>
    </section>
  );
}
