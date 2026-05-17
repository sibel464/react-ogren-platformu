import BolumBasligi from '../BolumBasligi';
import OzellikKarti from '../OzellikKarti';
import { featureCards } from '../../data';

const ReactBolumu: React.FC = () => {
  return (
    <section id="react-nedir">
      {/* Bölüm Başlığı */}
      <BolumBasligi
        badge="Temeller"
        title="React Nedir?"
        subtitle="Modern web uygulamaları geliştirmek için tasarlanmış, bileşen tabanlı en güçlü JavaScript kütüphanesi."
      />

      {/* React'in temel özelliklerini (Virtual DOM, Component vb.) kartlar halinde listeliyoruz */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureCards.map((card, index) => (
          <OzellikKarti key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ReactBolumu;
