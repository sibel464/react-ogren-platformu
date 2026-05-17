import { motion } from 'framer-motion';
import type { LearningCardData } from '../types';

interface LearningCardProps {
  card: LearningCardData;
  index: number;
}

const OgrenmeKarti: React.FC<LearningCardProps> = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="card-premium group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-glow)] rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg text-white`}>
          {card.icon}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent-primary)] transition-colors">{card.title}</h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};

export default OgrenmeKarti;
