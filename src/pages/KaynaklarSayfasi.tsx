import KaynaklarBolumu from '../components/sections/KaynaklarBolumu';
import SSSBolumu from '../components/sections/SSSBolumu';

const KaynaklarSayfasi: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32 mb-32">
      <KaynaklarBolumu />
      <SSSBolumu />
    </div>
  );
};

export default KaynaklarSayfasi;
