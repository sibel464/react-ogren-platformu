import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const navLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Dersler', href: '/lessons' },
  { label: 'Test', href: '/quiz' },
  { label: 'Kaynaklar', href: '/resources' },
];

const UstBaslik: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  // Sayfanın aşağı kaydırılıp kaydırılmadığını takip eder.
  // Kaydırıldıysa header'ın arka planını değiştiriyoruz.
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Mobil menünün (hamburger menü) açık olup olmadığını takip eder.
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Sayfa kaydırma (scroll) olayını dinleyen useEffect.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    
    // Component unmount olduğunda (sayfadan ayrılındığında) dinleyiciyi kaldırıyoruz.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-[var(--border-color)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)] to-[#4a7a5a] flex items-center justify-center text-white shadow-lg shadow-[var(--accent-glow)] relative overflow-hidden">
            {/* Yaprak + Kod sembollü özel logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6L4 12L8 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 6L20 12L16 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.5 4C13.5 4 12 8 12 12C12 16 14 20 14 20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="12" cy="5" r="1.5" fill="rgba(255,255,255,0.7)"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight leading-none">React<span className="text-[var(--accent-primary)]">Öğren</span></span>
            <span className="text-[9px] font-semibold text-[var(--text-muted)] uppercase tracking-[0.2em]">Eğitim Platformu</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-bold transition-all hover:text-[var(--accent-primary)] ${
                  isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--bg-tertiary)] transition-colors"
            aria-label="Tema değiştir"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <Link
            to="/lessons"
            className="hidden sm:block btn-primary py-2.5 px-6 text-sm"
          >
            Eğitime Başla
          </Link>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-[var(--bg-tertiary)]"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass border-b border-[var(--border-color)]"
          >
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `block text-2xl font-bold ${
                      isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/lessons"
                onClick={() => setIsMobileOpen(false)}
                className="btn-primary w-full block text-center"
              >
                Eğitime Başla
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default UstBaslik;
