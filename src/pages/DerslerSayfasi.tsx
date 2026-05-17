import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Video, 
  FileText, 
  Layout, 
  Award,
  Zap,
  ArrowRight,
  Trophy
} from 'lucide-react';
import { lessons } from '../data';
import KodBlok from '../components/KodBlok';

const AcademyPage: React.FC = () => {
  // Seçili olan dersin ID'sini tutar (Varsayılan olarak ilk ders)
  const [activeLessonId, setActiveLessonId] = useState(lessons[0].id);
  
  // Tamamlanan derslerin ID'lerini bir dizide tutar
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  
  // Tüm dersler bittiğinde kutlama mesajını göstermek için kullanılır
  const [showConfetti, setShowConfetti] = useState(false);

  // Aktif dersin dizideki sırasını ve verisini buluyoruz
  const activeIndex = lessons.findIndex(l => l.id === activeLessonId);
  const activeLesson = lessons[activeIndex];

  // Kursun yüzde kaçının tamamlandığını hesaplıyoruz
  const progress = Math.round((completedLessons.length / lessons.length) * 100);

  // Bir dersi tamamlandı/tamamlanmadı olarak işaretleyen fonksiyon
  const toggleComplete = (id: string) => {
    if (completedLessons.includes(id)) {
      setCompletedLessons(completedLessons.filter(l => l !== id));
    } else {
      setCompletedLessons([...completedLessons, id]);
      // Eğer bu son ders ise kutlama mesajını aktif et
      if (completedLessons.length + 1 === lessons.length) {
        setShowConfetti(true);
      }
    }
  };

  // Sonraki derse geçiş yapar
  const nextLesson = () => {
    if (activeIndex < lessons.length - 1) {
      setActiveLessonId(lessons[activeIndex + 1].id);
    }
  };

  // Önceki derse geçiş yapar
  const prevLesson = () => {
    if (activeIndex > 0) {
      setActiveLessonId(lessons[activeIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-20 flex flex-col md:flex-row">
      {/* Sidebar - Course Curriculum */}
      <aside className="w-full md:w-80 lg:w-96 border-r border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col h-[calc(100vh-80px)] sticky top-20">
        <div className="p-6 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[var(--accent-primary)] flex items-center justify-center text-white shadow-lg">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="font-black text-xl tracking-tight">React Akademi</h1>
              <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-widest">Master Class 2024</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-black uppercase mb-2">
              <span>İlerleme</span>
              <span>%{progress}</span>
            </div>
            <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
              />
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {lessons.map((lesson, idx) => (
            <button
              key={lesson.id}
              onClick={() => setActiveLessonId(lesson.id)}
              className={`w-full p-4 rounded-2xl text-left transition-all flex items-center gap-4 group ${
                activeLessonId === lesson.id
                  ? 'bg-[var(--accent-primary)] text-white shadow-xl shadow-[var(--accent-glow)]'
                  : 'hover:bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                activeLessonId === lesson.id ? 'bg-white/20' : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]'
              }`}>
                {completedLessons.includes(lesson.id) ? <CheckCircle2 size={16} className="text-white" /> : idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold truncate">{lesson.title}</div>
                <div className={`text-[10px] font-medium ${activeLessonId === lesson.id ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>
                  {lesson.level} • {lesson.duration}
                </div>
              </div>
              <ChevronRight size={14} className={activeLessonId === lesson.id ? 'opacity-40' : 'opacity-0 group-hover:opacity-100'} />
            </button>
          ))}
        </nav>

        <div className="p-6 bg-[var(--bg-tertiary)] m-4 rounded-3xl border border-[var(--border-color)]">
          <div className="flex items-center gap-3 mb-3">
            <Award size={20} className="text-[var(--accent-warm)]" />
            <span className="text-sm font-bold">Bitirme Sertifikası</span>
          </div>
          <p className="text-[10px] text-[var(--text-muted)] leading-relaxed mb-4">
            Tüm dersleri tamamladığınızda profesyonel başarı sertifikanız burada belirecek.
          </p>
          <button 
            disabled={progress < 100}
            className={`w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              progress === 100 ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:scale-105' : 'bg-[var(--bg-primary)] text-[var(--text-muted)] opacity-50 cursor-not-allowed'
            }`}
          >
            Sertifikayı Görüntüle
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-[var(--bg-primary)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLessonId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto px-6 py-12 md:py-20"
          >
            {/* Lesson UstBaslik */}
            <header className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-primary)] text-[10px] font-black uppercase tracking-widest border border-[var(--border-color)]">
                  Bölüm {activeIndex + 1}
                </span>
                <span className="text-[var(--text-muted)] text-[10px] font-black uppercase tracking-widest">•</span>
                <span className="text-[var(--text-muted)] text-[10px] font-black uppercase tracking-widest">
                  {activeLesson.duration} Tahmini Süre
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                {activeLesson.title}
              </h2>
              <div className="flex flex-wrap gap-4">
                {activeLesson.videoUrl && (
                  <a href={activeLesson.videoUrl} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 text-red-600 rounded-xl text-xs font-bold hover:bg-red-500 hover:text-white transition-all shadow-sm">
                    <Video size={16} /> Videoyu İzle
                  </a>
                )}
                {activeLesson.docUrl && (
                  <a href={activeLesson.docUrl} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                    <FileText size={16} /> Teknik Döküman
                  </a>
                )}
              </div>
            </header>

            {/* Lesson Body */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
              <div className="card-premium p-10 bg-[var(--bg-secondary)] border-2 border-transparent hover:border-[var(--accent-primary)]/20 transition-all">
                <div className="flex items-center gap-3 mb-6 text-[var(--accent-primary)]">
                  <Zap size={20} className="fill-current" />
                  <span className="text-sm font-black uppercase tracking-widest">Ders Özeti</span>
                </div>
                <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-10 font-medium">
                  {activeLesson.content}
                </p>
                
                {activeLesson.code && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-[var(--text-muted)]">Kod Uygulaması</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--border-color)]">App.tsx</span>
                    </div>
                    <KodBlok code={activeLesson.code} title="Örnek Kod" />
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-12 border-t border-[var(--border-color)]">
              <button
                onClick={prevLesson}
                disabled={activeIndex === 0}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${
                  activeIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'bg-[var(--bg-tertiary)] hover:bg-[var(--border-color)]'
                }`}
              >
                <ChevronLeft size={20} /> Önceki Ders
              </button>

              <button
                onClick={() => toggleComplete(activeLesson.id)}
                className={`flex items-center gap-3 px-10 py-4 rounded-2xl font-black transition-all shadow-xl ${
                  completedLessons.includes(activeLesson.id)
                    ? 'bg-green-500 text-white shadow-green-500/20'
                    : 'btn-primary'
                }`}
              >
                {completedLessons.includes(activeLesson.id) ? (
                  <>
                    <CheckCircle2 size={20} /> Tamamlandı
                  </>
                ) : (
                  'Dersi Tamamla'
                )}
              </button>

              <button
                onClick={nextLesson}
                disabled={activeIndex === lessons.length - 1}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${
                  activeIndex === lessons.length - 1 ? 'opacity-20 cursor-not-allowed' : 'bg-[var(--bg-tertiary)] hover:bg-[var(--border-color)]'
                }`}
              >
                Sıradaki Ders <ChevronRight size={20} />
              </button>
            </div>

            {/* Success Message */}
            <AnimatePresence>
              {showConfetti && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-primary)]/90 backdrop-blur-xl p-6"
                >
                  <div className="max-w-md w-full text-center space-y-8">
                    <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                      <Trophy size={48} />
                    </div>
                    <h2 className="text-4xl font-black">Mükemmel!</h2>
                    <p className="text-xl text-[var(--text-secondary)]">
                      React Akademi Master Class eğitimini başarıyla tamamladınız. Artık bir React uzmanısınız!
                    </p>
                    <div className="space-y-4">
                      <button className="btn-primary w-full py-4 text-lg">Sertifikayı Al</button>
                      <button 
                        onClick={() => setShowConfetti(false)}
                        className="w-full py-4 text-[var(--text-muted)] font-bold hover:text-[var(--text-primary)] transition-colors"
                      >
                        Kapat
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AcademyPage;
