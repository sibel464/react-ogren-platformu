import AnaGorsel from '../components/AnaGorsel';
import ReactBolumu from '../components/sections/ReactBolumu';
import TSXBolumu from '../components/sections/TSXBolumu';
import OgrenmeKartlariBolumu from '../components/sections/OgrenmeKartlariBolumu';
import KodOrnekleriBolumu from '../components/sections/KodOrnekleriBolumu';
import BilesenBolumu from '../components/sections/BilesenBolumu';

const AnaSayfa: React.FC = () => {
  return (
    <div className="space-y-32 mb-32">
      {/* Karşılama alanı (Giriş başlığı ve animasyonlu butonlar) */}
      <AnaGorsel />

      {/* İçeriklerin hizalı durması için sınırlayıcı kapsayıcı (Container) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* React nedir ve temel avantajları bölümü */}
        <ReactBolumu />

        {/* TypeScript ve TSX kullanımı üzerine bilgilendirme bölümü */}
        <TSXBolumu />

        {/* Bileşen (Component) yapısı, Props ve State anlatım alanı */}
        <BilesenBolumu />

        {/* Hooks (useState, useEffect vb.) üzerine görsel kartlar */}
        <OgrenmeKartlariBolumu />

        {/* Gerçek kod örneklerinin sergilendiği bölüm */}
        <KodOrnekleriBolumu />
      </div>
    </div>
  );
};

export default AnaSayfa;
