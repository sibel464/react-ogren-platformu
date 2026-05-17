import BolumBasligi from '../BolumBasligi';
import KodBlok from '../KodBlok';
import { codeExamples } from '../../data';

const KodOrnekleriBolumu: React.FC = () => {
  return (
    <section id="kod-ornekleri">
      <BolumBasligi
        badge="Pratik"
        title="Uygulamalı Örnekler"
        subtitle="Gerçek hayat senaryoları üzerinden hazırlanmış, kopyalanabilir ve üzerinde çalışılabilir TSX örnekleri."
      />

      <div className="space-y-12">
        {/* Her bir kod örneğini döngü ile ekrana basıyoruz */}
        {codeExamples.map((example) => (
          <div key={example.title} className="card-premium grid lg:grid-cols-5 gap-8 items-start">
            {/* Sol taraf: Başlık ve açıklama metni */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">{example.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {example.description}
              </p>
            </div>
            {/* Sağ taraf: Sözdizimi vurgulamalı (Syntax highlighting) kod bloğu */}
            <div className="lg:col-span-3">
              <KodBlok code={example.code} title={`${example.title.replace(/\s+/g, '')}.tsx`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KodOrnekleriBolumu;
