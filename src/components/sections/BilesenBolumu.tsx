import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, ArrowDown, Sparkles } from 'lucide-react';
import BolumBasligi from '../BolumBasligi';
import Sekmeler from '../Sekmeler';
import KodBlok from '../KodBlok';
import { tabItems } from '../../data';

// ─── Props Demosu İçin Alt Bileşen ───
// Bu bileşen dışarıdan "isim", "renk" ve "emoji" props'ları alıyor.
// Props'ların nasıl çalıştığını canlı olarak göstermek için kullanıyoruz.
interface KarsilamaKartiProps {
  isim: string;   // Kullanıcının girdiği isim
  renk: string;   // Seçilen tema rengi
  emoji: string;  // Seçilen emoji
}

const KarsilamaKarti: React.FC<KarsilamaKartiProps> = ({ isim, renk, emoji }) => {
  return (
    <motion.div
      key={isim + renk + emoji}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`p-6 rounded-2xl border-2 border-[var(--border-color)] text-center ${renk}`}
    >
      <div className="text-4xl mb-3">{emoji}</div>
      <h4 className="text-lg font-bold">Merhaba, {isim || 'Dünya'}!</h4>
      <p className="text-sm text-[var(--text-secondary)] mt-1">Bu kart Props ile oluşturuldu</p>
    </motion.div>
  );
};

// ─── Ana Bileşen ───
const BilesenBolumu: React.FC = () => {
  // ══════════════════════════════════════
  // PROPS DEMOSU STATE'LERİ
  // Kullanıcının Props değerlerini canlı olarak değiştirmesini sağlıyoruz
  // ══════════════════════════════════════
  const [propsIsim, setPropsIsim] = useState('React Öğrenci');
  const [propsEmoji, setPropsEmoji] = useState('🚀');
  const [propsRenk, setPropsRenk] = useState('bg-[var(--bg-secondary)]');

  const emojiSecenekleri = ['🚀', '💻', '🎯', '🌟', '🧠', '🎨'];
  const renkSecenekleri = [
    { label: 'Varsayılan', value: 'bg-[var(--bg-secondary)]' },
    { label: 'Yeşil', value: 'bg-green-50 dark:bg-green-900/20' },
    { label: 'Mavi', value: 'bg-blue-50 dark:bg-blue-900/20' },
    { label: 'Turuncu', value: 'bg-orange-50 dark:bg-orange-900/20' },
  ];

  // ══════════════════════════════════════
  // STATE DEMOSU: SAYAÇ
  // useState hook'unun en temel kullanımı
  // ══════════════════════════════════════
  const [sayac, setSayac] = useState(0);

  // ══════════════════════════════════════
  // STATE DEMOSU: YAPILACAKLAR LİSTESİ
  // Dizi state'i üzerinde ekleme ve silme işlemleri
  // ══════════════════════════════════════
  const [yeniGorev, setYeniGorev] = useState('');
  const [gorevler, setGorevler] = useState<string[]>(['React öğren', 'Props kavramını anla']);

  const gorevEkle = () => {
    if (yeniGorev.trim()) {
      setGorevler([...gorevler, yeniGorev.trim()]); // Mevcut listeye yeni eleman ekle
      setYeniGorev(''); // Input'u temizle
    }
  };

  const gorevSil = (index: number) => {
    setGorevler(gorevler.filter((_, i) => i !== index)); // Seçilen elemanı listeden çıkar
  };

  // Props demo'su için gösterilecek kod örneği
  const propsKodOrnegi = `// Props ile veri aktarımı
interface KarsilamaKartiProps {
  isim: string;
  renk: string;
  emoji: string;
}

const KarsilamaKarti: React.FC<KarsilamaKartiProps> = ({ isim, renk, emoji }) => {
  return (
    <div className={renk}>
      <span>{emoji}</span>
      <h4>Merhaba, {isim}!</h4>
    </div>
  );
};

// Kullanımı:
<KarsilamaKarti isim="${propsIsim}" emoji="${propsEmoji}" renk="..." />`;

  // State demo'su için gösterilecek kod örneği
  const stateKodOrnegi = `// useState ile State yönetimi
const [sayac, setSayac] = useState(0);
const [gorevler, setGorevler] = useState<string[]>([]);

// Sayacı artır
<button onClick={() => setSayac(sayac + 1)}>
  Sayaç: {sayac}
</button>

// Listeye eleman ekle
const gorevEkle = () => {
  setGorevler([...gorevler, yeniGorev]);
};

// Listeden eleman sil
const gorevSil = (index: number) => {
  setGorevler(gorevler.filter((_, i) => i !== index));
};`;

  return (
    <section id="component-yapisi">
      <BolumBasligi
        badge="Mimari"
        title="Bileşen Yapısı"
        subtitle="React uygulamaları bağımsız ve tekrar kullanılabilir parçalardan oluşur. Props ve State yönetimi ile veriyi kontrol edin."
      />

      <div className="space-y-24">
        {/* Sekmeler (Props, State, Components açıklamaları) */}
        <Sekmeler items={tabItems} />

        {/* ═══════════════════════════════════════════
            CANLI PROPS DEMOSU
            Kullanıcı input'ları değiştirdikçe kart güncellenir
            ═══════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center">
              <ArrowDown size={20} className="text-[var(--accent-primary)]" />
            </div>
            <div>
              <h3 className="text-xl font-black">🔧 Canlı Props Demosu</h3>
              <p className="text-sm text-[var(--text-muted)]">Aşağıdaki değerleri değiştirin ve kartın nasıl güncellendiğini izleyin</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sol: Kontroller */}
            <div className="card-premium space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-widest text-[var(--accent-primary)]">Props Değerleri</h4>

              {/* İsim Input'u */}
              <div>
                <label className="block text-sm font-semibold mb-2">isim (string)</label>
                <input
                  type="text"
                  value={propsIsim}
                  onChange={(e) => setPropsIsim(e.target.value)}
                  placeholder="Bir isim yazın..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none transition-colors"
                />
              </div>

              {/* Emoji Seçici */}
              <div>
                <label className="block text-sm font-semibold mb-2">emoji (string)</label>
                <div className="flex gap-2 flex-wrap">
                  {emojiSecenekleri.map((e) => (
                    <button
                      key={e}
                      onClick={() => setPropsEmoji(e)}
                      className={`w-12 h-12 rounded-xl text-xl flex items-center justify-center border-2 transition-all ${
                        propsEmoji === e
                          ? 'border-[var(--accent-primary)] bg-[var(--accent-glow)] scale-110'
                          : 'border-[var(--border-color)] hover:border-[var(--text-muted)]'
                      }`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              {/* Renk Seçici */}
              <div>
                <label className="block text-sm font-semibold mb-2">renk (string)</label>
                <div className="flex gap-2 flex-wrap">
                  {renkSecenekleri.map((r) => (
                    <button
                      key={r.label}
                      onClick={() => setPropsRenk(r.value)}
                      className={`px-4 py-2 rounded-full text-xs font-bold border-2 transition-all ${
                        propsRenk === r.value
                          ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]'
                          : 'border-[var(--border-color)] text-[var(--text-secondary)]'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sağ: Sonuç ve Kod */}
            <div className="space-y-6">
              <KarsilamaKarti isim={propsIsim} renk={propsRenk} emoji={propsEmoji} />
              <KodBlok code={propsKodOrnegi} title="Props Örneği" />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            CANLI STATE DEMOSU
            Sayaç ve Yapılacaklar Listesi
            ═══════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-secondary)]/10 flex items-center justify-center">
              <Sparkles size={20} className="text-[var(--accent-secondary)]" />
            </div>
            <div>
              <h3 className="text-xl font-black">⚡ Canlı State Demosu</h3>
              <p className="text-sm text-[var(--text-muted)]">Butonlara tıklayarak State'in nasıl çalıştığını görün</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sol: İnteraktif Demolar */}
            <div className="space-y-6">
              {/* Sayaç Demo */}
              <div className="card-premium">
                <h4 className="font-bold text-sm uppercase tracking-widest text-[var(--accent-secondary)] mb-6">useState — Sayaç</h4>
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => setSayac(sayac - 1)}
                    className="w-14 h-14 rounded-2xl border-2 border-[var(--border-color)] text-2xl font-bold hover:bg-[var(--bg-tertiary)] transition-all active:scale-90"
                  >
                    −
                  </button>
                  <motion.div
                    key={sayac}
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl font-black text-[var(--accent-primary)] w-20 text-center"
                  >
                    {sayac}
                  </motion.div>
                  <button
                    onClick={() => setSayac(sayac + 1)}
                    className="w-14 h-14 rounded-2xl border-2 border-[var(--border-color)] text-2xl font-bold hover:bg-[var(--bg-tertiary)] transition-all active:scale-90"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => setSayac(0)}
                  className="mt-4 text-xs text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors mx-auto block"
                >
                  Sıfırla
                </button>
              </div>

              {/* Yapılacaklar Listesi Demo */}
              <div className="card-premium">
                <h4 className="font-bold text-sm uppercase tracking-widest text-[var(--accent-secondary)] mb-6">useState — Yapılacaklar Listesi</h4>

                {/* Yeni görev ekleme input'u */}
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={yeniGorev}
                    onChange={(e) => setYeniGorev(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && gorevEkle()}
                    placeholder="Yeni görev ekle..."
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none text-sm transition-colors"
                  />
                  <button
                    onClick={gorevEkle}
                    className="w-12 h-12 rounded-xl bg-[var(--accent-primary)] text-white flex items-center justify-center hover:opacity-90 transition-opacity active:scale-90"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                {/* Görev listesi */}
                <div className="space-y-2">
                  {gorevler.length === 0 && (
                    <p className="text-sm text-[var(--text-muted)] text-center py-4">Liste boş — bir görev ekleyin!</p>
                  )}
                  {gorevler.map((gorev, index) => (
                    <motion.div
                      key={gorev + index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] group"
                    >
                      <span className="text-sm font-medium">{gorev}</span>
                      <button
                        onClick={() => gorevSil(index)}
                        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
                  Toplam: <span className="font-bold text-[var(--accent-primary)]">{gorevler.length}</span> görev
                </p>
              </div>
            </div>

            {/* Sağ: Kod */}
            <div>
              <KodBlok code={stateKodOrnegi} title="State Örneği" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BilesenBolumu;
