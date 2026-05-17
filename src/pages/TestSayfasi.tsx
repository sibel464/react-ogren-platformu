import BilgiKontrolu from '../components/sections/BilgiKontrolu';
import KodOrnekleriBolumu from '../components/sections/KodOrnekleriBolumu';

const TestSayfasi: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32 mb-32">
      <BilgiKontrolu />
      <KodOrnekleriBolumu />
    </div>
  );
};

export default TestSayfasi;
