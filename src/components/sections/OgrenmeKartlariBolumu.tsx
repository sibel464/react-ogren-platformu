import BolumBasligi from '../BolumBasligi';
import OgrenmeKarti from '../OgrenmeKarti';
import { learningCards } from '../../data';

const OgrenmeKartlariBolumu: React.FC = () => {
  return (
    <section id="ogrenme-kartlari">
      {/* Bölüm başlığı ve alt başlığı */}
      <BolumBasligi
        badge="Kavramlar"
        title="Hooks ve Fazlası"
        subtitle="Modern React geliştirmenin olmazsa olmaz kavramlarını keşfedin."
      />

      {/* Kartları ızgara (Grid) yapısında listeliyoruz */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Veri dosyasındaki her bir kart verisi için bir 'OgrenmeKarti' bileşeni oluşturuyoruz */}
        {learningCards.map((card, index) => (
          <OgrenmeKarti key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default OgrenmeKartlariBolumu;
