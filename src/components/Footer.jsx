import { useState } from 'react';
import { MessageSquare, Copy, Check } from 'lucide-react';
import { copyText } from '../utils/clipboard.js';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const didCopy = await copyText('rayzk24');
      if (!didCopy) return;

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer className="bg-black text-gray-500 py-5 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div>
          © {new Date().getFullYear()} Rayzk · Configurateur Minecraft freelance
        </div>

        <div className="flex items-center gap-2">
          <MessageSquare size={14} className="text-gray-500" />
          <span className="text-gray-400">rayzk24</span>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copier le pseudo Discord"
            className="p-1.5 rounded-md text-gray-500 hover:text-white hover:bg-white/[0.06] transition-colors duration-200"
          >
            {copied ? (
              <Check size={14} className="text-emerald-400" />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
}
