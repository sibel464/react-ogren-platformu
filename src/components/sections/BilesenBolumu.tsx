import BolumBasligi from '../BolumBasligi';
import Sekmeler from '../Sekmeler';
import { tabItems } from '../../data';

const BilesenBolumu: React.FC = () => {
  return (
    <section id="component-yapisi">
      <BolumBasligi
        badge="Mimari"
        title="Bileşen Yapısı"
        subtitle="React uygulamaları bağımsız ve tekrar kullanılabilir parçalardan oluşur. Props ve State yönetimi ile veriyi kontrol edin."
      />

      <div className="space-y-24">
        <Sekmeler items={tabItems} />
      </div>
    </section>
  );
};

export default BilesenBolumu;
