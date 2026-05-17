import { Heart, Globe, Info, Code2 } from 'lucide-react';

const AltBilgi: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-tertiary)] border-t border-[var(--border-color)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[#4a7a5a] flex items-center justify-center text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6L4 12L8 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 6L20 12L16 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.5 4C13.5 4 12 8 12 12C12 16 14 20 14 20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="5" r="1.5" fill="rgba(255,255,255,0.7)"/>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight">React<span className="text-[var(--accent-primary)]">Öğren</span></span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Modern web geliştirme dünyasına atılan en sağlam adım. 
              Türkçe içerik ve profesyonel örneklerle React ve TypeScript öğrenin.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Öğren</h4>
              <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
                <li><a href="#react-nedir" className="hover:text-[var(--text-primary)] transition-colors">React Temelleri</a></li>
                <li><a href="#tsx-nedir" className="hover:text-[var(--text-primary)] transition-colors">TSX ve Tipler</a></li>
                <li><a href="#component-yapisi" className="hover:text-[var(--text-primary)] transition-colors">Bileşen Yapısı</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Bağlantılar</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--bg-primary)] transition-all">
                  <Globe size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--bg-primary)] transition-all">
                  <Info size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)] font-medium">
          <div className="flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500 fill-red-500" /> using React & TypeScript
          </div>
          <p>© {new Date().getFullYear()} ReactÖğren. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default AltBilgi;
