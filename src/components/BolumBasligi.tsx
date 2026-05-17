import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
}

const BolumBasligi: React.FC<SectionHeadingProps> = ({ badge, title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="inline-block text-[var(--accent-primary)] font-bold text-xs uppercase tracking-widest mb-4"
      >
        {badge}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default BolumBasligi;
