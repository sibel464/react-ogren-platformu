import { motion } from 'framer-motion';
import type { FeatureCardData } from '../types';

interface FeatureCardProps {
  card: FeatureCardData;
  index: number;
}

const OzellikKarti: React.FC<FeatureCardProps> = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-premium flex flex-col items-center text-center group border-2 border-transparent hover:border-[var(--accent-primary)]"
    >
      <div className="w-16 h-16 rounded-3xl bg-[var(--bg-tertiary)] flex items-center justify-center text-3xl mb-8 shadow-inner transform group-hover:rotate-6 transition-transform">
        {card.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
        {card.description}
      </p>
    </motion.div>
  );
};

export default OzellikKarti;
