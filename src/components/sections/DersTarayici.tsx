import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, Clock, BarChart, ExternalLink, Video, BookOpen } from 'lucide-react';
import BolumBasligi from '../BolumBasligi';
import KodBlok from '../KodBlok';
import { lessons } from '../../data';

const DersTarayici: React.FC = () => {
  // Seçili olan dersin ID'sini state üzerinde tutuyoruz.
  // Varsayılan olarak dizideki ilk ders seçili gelir.
  const [selectedId, setSelectedId] = useState(lessons[0].id);

  // Seçili ID'ye sahip olan dersi veri setinden buluyoruz.
  // Eğer bulunamazsa güvenlik önlemi olarak ilk dersi gösteriyoruz.
  const activeLesson = lessons.find(l => l.id === selectedId) || lessons[0];

  return (
    <section id="dersler" className="py-24">
      <BolumBasligi
        badge="Ders Modülleri"
        title="Etkileşimli Dersler"
        subtitle="Konuları derinlemesine inceleyin, kod örneklerini keşfedin ve adım adım ilerleyin."
      />

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Sidebar - Lesson List */}
        <div className="lg:col-span-1 space-y-3">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setSelectedId(lesson.id)}
              className={`w-full p-4 rounded-2xl text-left transition-all border-2 flex items-center justify-between group ${
                selectedId === lesson.id
                  ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white shadow-xl shadow-[var(--accent-glow)]'
                  : 'bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--accent-primary)]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${selectedId === lesson.id ? 'bg-white/20' : 'bg-[var(--bg-tertiary)]'}`}>
                  <Play size={16} className={selectedId === lesson.id ? 'text-white' : 'text-[var(--accent-primary)]'} />
                </div>
                <div>
                  <div className="text-sm font-bold">{lesson.title}</div>
                  <div className={`text-[10px] ${selectedId === lesson.id ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>
                    {lesson.level} • {lesson.duration}
                  </div>
                </div>
              </div>
              <CheckCircle2 size={18} className={selectedId === lesson.id ? 'text-white/40' : 'text-[var(--border-color)]'} />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="card-premium h-full min-h-[500px] flex flex-col"
            >
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[var(--border-color)]">
                <h3 className="text-3xl font-black">{activeLesson.title}</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--text-muted)]">
                    <Clock size={14} /> {activeLesson.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--text-muted)]">
                    <BarChart size={14} /> {activeLesson.level}
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  {activeLesson.content}
                </p>

                {/* Video and Doc Links */}
                {(activeLesson.videoUrl || activeLesson.docUrl) && (
                  <div className="flex flex-wrap gap-4">
                    {activeLesson.videoUrl && (
                      <a
                        href={activeLesson.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 text-red-600 rounded-xl text-sm font-bold hover:bg-red-500 hover:text-white transition-all"
                      >
                        <Video size={18} />
                        Videoyu İzle
                      </a>
                    )}
                    {activeLesson.docUrl && (
                      <a
                        href={activeLesson.docUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-500 hover:text-white transition-all"
                      >
                        <BookOpen size={18} />
                        Resmi Döküman
                      </a>
                    )}
                  </div>
                )}

                {activeLesson.code && (
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Kod Uygulaması</div>
                    <KodBlok code={activeLesson.code} title="Snippet.tsx" />
                  </div>
                )}
              </div>

              <div className="mt-12 pt-6 border-t border-[var(--border-color)] flex justify-between items-center">
                <div className="text-sm font-medium text-[var(--text-muted)]">Ders Tamamlama: 0%</div>
                <button className="btn-primary py-3 px-8 text-sm">Dersi Bitir ve Devam Et</button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DersTarayici;
