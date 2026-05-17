import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import BolumBasligi from '../BolumBasligi';

const faqItems = [
  {
    question: "React'i öğrenmek için JavaScript bilmek zorunda mıyım?",
    answer: "Evet, React bir JavaScript kütüphanesidir. Özellikle ES6+ özelliklerini (arrow functions, destructuring, map/filter, async/await) iyi kavramak React öğrenme sürecinizi hızlandıracaktır."
  },
  {
    question: "TypeScript'i ne zaman dahil etmeliyim?",
    answer: "React temellerini (State, Props, Effects) öğrendikten hemen sonra TypeScript'e geçmenizi öneririz. Günümüzde profesyonel projelerin %90'ı TypeScript ile yazılmaktadır."
  },
  {
    question: "Virtual DOM tam olarak nedir?",
    answer: "React'in bellek üzerindeki hafif bir kopyasıdır. Bir değişiklik olduğunda React önce Virtual DOM'u günceller, ardından gerçek DOM ile farkı karşılaştırarak sadece değişen kısımları ekrana yansıtır."
  },
  {
    question: "React ile mobil uygulama geliştirebilir miyim?",
    answer: "Evet! React Native kullanarak, buradaki bilgilerinizin %80'ini kullanarak hem iOS hem de Android için yerel (native) mobil uygulamalar geliştirebilirsiniz."
  },
  {
    question: "Hangi State yönetim aracını seçmeliyim?",
    answer: "Küçük projeler için useState ve Context API yeterlidir. Daha büyük ve karmaşık uygulamalar için Zustand veya Redux Toolkit güncel ve popüler çözümlerdir."
  },
  {
    question: "Öğrenme sürecinde en çok neye odaklanmalıyım?",
    answer: "Bileşen mantığını (Component Thinking) ve State yönetimini çok iyi anlamaya çalışın. Küçük projeler yaparak öğrendiklerinizi pekiştirmek en iyi yöntemdir."
  }
];

const SSSBolumu: React.FC = () => {
  // Hangi sorunun açık olduğunu takip etmek için index tutuyoruz.
  // Eğer hiçbir soru açık değilse null değerini alır.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <BolumBasligi
        badge="Destek & Bilgi"
        title="Merak Edilenler"
        subtitle="Eğitim sürecinizde aklınıza takılabilecek teknik ve genel soruların yanıtları."
      />

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          {faqItems.slice(0, 3).map((item, index) => (
            <div key={index} className="card-premium p-0 overflow-hidden bg-[var(--bg-secondary)]">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                <div className="flex gap-4 items-center">
                  <HelpCircle size={18} className="text-[var(--accent-primary)] shrink-0" />
                  <span className="font-bold text-base">{item.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} className="text-[var(--text-muted)]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-[var(--text-secondary)] leading-relaxed text-sm border-t border-[var(--border-color)]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {faqItems.slice(3).map((item, index) => {
            const realIndex = index + 3;
            return (
              <div key={realIndex} className="card-premium p-0 overflow-hidden bg-[var(--bg-secondary)]">
                <button
                  onClick={() => setActiveIndex(activeIndex === realIndex ? null : realIndex)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--bg-tertiary)] transition-colors"
                >
                  <div className="flex gap-4 items-center">
                    <HelpCircle size={18} className="text-[var(--accent-primary)] shrink-0" />
                    <span className="font-bold text-base">{item.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === realIndex ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} className="text-[var(--text-muted)]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeIndex === realIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-[var(--text-secondary)] leading-relaxed text-sm border-t border-[var(--border-color)]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SSSBolumu;
