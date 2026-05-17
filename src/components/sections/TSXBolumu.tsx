import BolumBasligi from '../BolumBasligi';
import KodBlok from '../KodBlok';

const tsxCode = `// TSX Örneği
interface UserProps {
  name: string;
  age: number;
}

const User: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Merhaba {name}</h1>
      <p>Yaşınız: {age}</p>
    </div>
  );
};`;

const TSXBolumu: React.FC = () => {
  return (
    <section id="tsx-nedir">
      <BolumBasligi
        badge="Tip Güvenliği"
        title="TSX Nedir?"
        subtitle="TypeScript ve JSX'in birleşimi olan TSX, hataları henüz kod yazarken yakalamanızı ve daha güvenli uygulamalar geliştirmenizi sağlar."
      />

      {/* TSX'in nasıl yazıldığını gösteren örnek kod bloğu */}
      <div className="max-w-3xl mx-auto shadow-2xl">
        <KodBlok code={tsxCode} title="Example.tsx" />
      </div>
    </section>
  );
};

export default TSXBolumu;
