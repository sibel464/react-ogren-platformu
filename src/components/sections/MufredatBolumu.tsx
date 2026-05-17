import { motion } from 'framer-motion';
import BolumBasligi from '../BolumBasligi';
import { curriculumSteps } from '../../data';

const MufredatBolumu: React.FC = () => {
  return (
    <section id="mufredat" className="py-24">
      <BolumBasligi
        badge="Adım Adım Başarı"
        title="Eğitim Yol Haritası"
        subtitle="Öğrenme sürecinizi yapılandırılmış bir müfredatla hızlandırın. Temelden uzmanlığa giden yol."
      />

      <div className="max-w-4xl mx-auto space-y-16">
        {curriculumSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex gap-10 relative group"
          >
            {/* Timeline Line (Vibrant Gradient) */}
            {index < curriculumSteps.length - 1 && (
              <div className="absolute left-[31px] top-16 bottom-[-64px] w-[2px] bg-gradient-to-b from-[var(--accent-primary)] to-[var(--border-color)] opacity-30" />
            )}

            {/* Step Number Badge */}
            <div className="w-16 h-16 rounded-3xl bg-white border-4 border-[var(--bg-tertiary)] flex items-center justify-center font-black text-2xl text-[var(--accent-primary)] shrink-0 z-10 shadow-xl group-hover:border-[var(--accent-primary)] group-hover:scale-110 transition-all">
              {step.id}
            </div>

            <div className="card-premium flex-1 group-hover:border-[var(--accent-primary)] transition-all">
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-[var(--text-secondary)] text-base mb-8 leading-relaxed">
                {step.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {step.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 bg-[var(--bg-tertiary)] text-[var(--text-primary)] text-xs font-bold rounded-xl border border-[var(--border-color)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors cursor-default"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MufredatBolumu;
