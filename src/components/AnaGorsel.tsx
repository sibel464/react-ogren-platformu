import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';

const heroCode = `import { useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState('Merhaba!');

  return (
    <div className="app">
      <h1>{message}</h1>
      <button onClick={() => setMessage('React harika! 🚀')}>
        Tıkla
      </button>
    </div>
  );
};`;

const AnaGorsel: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      {/* Decorative Blobs (Soft & Harmonious) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-glow)] rounded-full blur-[120px] -z-10 opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-secondary)] opacity-[0.03] rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-primary)] text-xs font-bold mb-8 border border-[var(--border-color)]"
          >
            <Sparkles size={14} className="text-[var(--accent-warm)]" />
            Yeni Nesil Eğitim Deneyimi
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Geleceği <span className="gradient-text">React ve TypeScript</span>
            <br />
            ile İnşa Edin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Karmaşık teorileri basitleştirdik. En modern teknolojileri 
            en estetik ve anlaşılır şekilde öğrenmeniz için buradayız.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/lessons" className="btn-primary flex items-center gap-3 group">
              Hemen Başla
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/quiz"
              className="px-8 py-4 border-2 border-[var(--border-color)] rounded-full font-bold text-lg hover:bg-[var(--bg-tertiary)] transition-all flex items-center gap-2"
            >
              <Code2 size={20} />
              Örnekleri İncele
            </Link>
          </motion.div>
        </div>

        {/* AnaGorsel Code Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative code-block">
            <div className="code-block-header justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c841]" />
              </div>
              <div className="text-[10px] font-bold text-[var(--text-muted)] tracking-widest uppercase">Editor Preview</div>
            </div>
            <pre className="p-8 text-sm font-mono overflow-x-auto text-zinc-100 leading-relaxed bg-[#0d0d0f]">
              <code>{heroCode}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnaGorsel;
