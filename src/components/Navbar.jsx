import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Expertises' },
  { href: '#projects', label: 'Références' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-white/70 border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="text-lg font-bold tracking-tight">
          Rayzk<span className="text-forest">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-ink transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm font-semibold px-4 py-2 rounded-full bg-ink text-white hover:bg-forest transition-colors duration-300"
        >
          Discuter
        </a>
      </nav>
    </motion.header>
  );
}
