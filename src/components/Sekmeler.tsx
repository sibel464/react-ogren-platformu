import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TabItem } from '../types';
import KodBlok from './KodBlok';

interface TabsProps {
  items: TabItem[];
}

const Sekmeler: React.FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<string>(items[0].id);

  const activeItem = items.find((item) => item.id === activeTab);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex justify-center mb-10">
        <div className="tabs-container">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`tab-btn ${activeTab === item.id ? 'active' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeItem && (
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{activeItem.label}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                  {activeItem.content}
                </p>
              </div>
              <div className="shadow-2xl">
                {activeItem.code && (
                  <KodBlok
                    code={activeItem.code}
                    title={`${activeItem.label}.tsx`}
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sekmeler;
