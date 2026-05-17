import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ArrowRight, RotateCcw, Check, X, AlertCircle } from 'lucide-react';
import BolumBasligi from '../BolumBasligi';
import { quizzes } from '../../data';

const BilgiKontrolu: React.FC = () => {
  // TestSayfasi durumlarını yönetiyoruz
  const [currentStep, setCurrentStep] = useState(0); // Kaçıncı sorudayız?
  const [selectedOption, setSelectedOption] = useState<number | null>(null); // Kullanıcı hangi şıkkı seçti?
  const [isAnswered, setIsAnswered] = useState(false); // Soru cevaplandı mı? (Cevaplandıysa seçim yapılamaz)
  const [isFinished, setIsFinished] = useState(false); // Tüm sorular bitti mi?
  const [score, setScore] = useState(0); // Toplam doğru cevap sayısı

  // Şık seçildiğinde çalışan fonksiyon
  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return; // Eğer zaten cevaplanmışsa tekrar seçime izin verme
    
    setSelectedOption(idx);
    setIsAnswered(true);

    // Seçilen şık doğru mu kontrol et
    if (idx === quizzes[currentStep].correctAnswer) {
      setScore(score + 1);
    }
  };

  // Sonraki soruya geçiş yapan fonksiyon
  const handleNext = () => {
    if (currentStep < quizzes.length - 1) {
      setCurrentStep(currentStep + 1); // Bir sonraki soruya geç
      setSelectedOption(null); // Seçimi temizle
      setIsAnswered(false); // Cevap durumunu sıfırla
    } else {
      setIsFinished(true); // Eğer son sorudaysak quizi bitir
    }
  };

  // Quizi en baştan başlatan fonksiyon
  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsFinished(false);
    setScore(0);
  };

  return (
    <section id="quiz" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <BolumBasligi
          badge="Bilgi Kontrolü"
          title="Neler Öğrendik?"
          subtitle="Seçeneği işaretlediğinizde doğru cevabı anında görebilirsiniz."
        />

        <div className="card-premium min-h-[450px] flex flex-col justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="space-y-8"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black uppercase text-[var(--accent-primary)] tracking-widest">Soru {currentStep + 1} / {quizzes.length}</span>
                  <div className="w-32 h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[var(--accent-primary)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / quizzes.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-10">{quizzes[currentStep].question}</h3>

                <div className="grid gap-4">
                  {quizzes[currentStep].options.map((option, idx) => {
                    const isCorrect = idx === quizzes[currentStep].correctAnswer;
                    const isSelected = selectedOption === idx;
                    
                    let variantClass = 'bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--text-muted)]';
                    if (isAnswered) {
                      if (isCorrect) variantClass = 'bg-green-600/10 border-green-600 text-green-800 dark:bg-green-500/15 dark:border-green-500 dark:text-green-300';
                      else if (isSelected) variantClass = 'bg-red-600/10 border-red-600 text-red-800 dark:bg-red-500/15 dark:border-red-500 dark:text-red-300 opacity-80';
                      else variantClass = 'opacity-40 border-[var(--border-color)]';
                    } else if (isSelected) {
                      variantClass = 'bg-[var(--accent-glow)] border-[var(--accent-primary)] text-[var(--accent-primary)]';
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleOptionSelect(idx)}
                        className={`p-5 rounded-2xl text-left border-2 font-medium transition-all flex items-center justify-between w-full ${variantClass}`}
                      >
                        <div className="flex items-center gap-4 flex-1 pr-4">
                          <div className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center font-bold text-sm ${
                            isSelected || (isAnswered && isCorrect) ? 'bg-current text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </div>
                          <span className="flex-1 text-[var(--text-primary)] leading-relaxed whitespace-normal break-words">
                            {option}
                          </span>
                        </div>
                        <div className="shrink-0 flex items-center justify-center">
                          {isAnswered && isCorrect && <Check size={20} className="text-green-600 dark:text-green-500" />}
                          {isAnswered && isSelected && !isCorrect && <X size={20} className="text-red-600 dark:text-red-500" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-4 pt-6"
                  >
                    <div className={`text-sm font-bold ${selectedOption === quizzes[currentStep].correctAnswer ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                      {selectedOption === quizzes[currentStep].correctAnswer ? 'Harika! Doğru cevap.' : 'Maalesef yanlış. Doğru cevap: ' + quizzes[currentStep].options[quizzes[currentStep].correctAnswer]}
                    </div>
                    <button
                      onClick={handleNext}
                      className="btn-primary flex items-center gap-2 px-12"
                    >
                      {currentStep === quizzes.length - 1 ? 'Sonucu Gör' : 'Sıradaki Soru'}
                      <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-8"
              >
                <div className="w-24 h-24 bg-[var(--accent-warm)]/20 text-[var(--accent-warm)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy size={48} />
                </div>
                <h3 className="text-4xl font-black">Tebrikler!</h3>
                <p className="text-xl text-[var(--text-secondary)]">
                  Test tamamlandı. Skorunuz: <span className="font-black text-[var(--accent-primary)]">{score} / {quizzes.length}</span>
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  <button onClick={resetQuiz} className="px-8 py-3 rounded-full border-2 border-[var(--border-color)] font-bold flex items-center gap-2 hover:bg-[var(--bg-tertiary)] transition-colors">
                    <RotateCcw size={18} /> Tekrar Dene
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BilgiKontrolu;
