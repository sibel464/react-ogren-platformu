import { ExternalLink, BookOpen, Video, Users, Globe, Monitor, Layout, Info } from 'lucide-react';
import BolumBasligi from '../BolumBasligi';

const resourceCategories = [
  {
    category: "Resmi Dökümantasyonlar",
    items: [
      {
        title: "React Beta Docs",
        desc: "Modern React (Hooks, Components) için en iyi başlangıç noktası.",
        url: "https://react.dev",
        icon: BookOpen,
        color: "text-blue-500"
      },
      {
        title: "TypeScript Handbook",
        desc: "TSX ve tip güvenliği için olmazsa olmaz kaynak.",
        url: "https://www.typescriptlang.org/docs/",
        icon: Monitor,
        color: "text-cyan-500"
      }
    ]
  },
  {
    category: "Video & Eğitim Serileri",
    items: [
      {
        title: "React Konferansları",
        desc: "En yeni özelliklerin ilk duyurulduğu resmi sunumlar.",
        url: "https://www.youtube.com/c/ReactConf",
        icon: Video,
        color: "text-red-500"
      },
      {
        title: "FreeCodeCamp React",
        desc: "Kapsamlı ve ücretsiz video eğitim serileri.",
        url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
        icon: Layout,
        color: "text-indigo-500"
      }
    ]
  },
  {
    category: "Araçlar & Uzantılar",
    items: [
      {
        title: "React DevTools",
        desc: "Bileşen ağacını ve state'i tarayıcıda inceleme aracı.",
        url: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbhfkeoomphohobi",
        icon: Globe,
        color: "text-emerald-500"
      },
      {
        title: "VS Code Snippets",
        desc: "VS Code için en popüler kod tamamlama eklentisi.",
        url: "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets",
        icon: Info,
        color: "text-gray-500"
      }
    ]
  },
  {
    category: "Topluluk & Forum",
    items: [
      {
        title: "React Reddit",
        desc: "En aktif React geliştirici topluluklarından biri.",
        url: "https://reddit.com/r/reactjs",
        icon: Users,
        color: "text-orange-500"
      },
      {
        title: "Discord Communities",
        desc: "Anlık yardım ve sohbet için devasa React sunucuları.",
        url: "https://discord.gg/reactif",
        icon: Users,
        color: "text-indigo-400"
      }
    ]
  }
];

const KaynaklarBolumu: React.FC = () => {
  return (
    <section id="kaynaklar" className="py-24">
      <BolumBasligi
        badge="Bilgi Kütüphanesi"
        title="Genişletilmiş Kaynaklar"
        subtitle="Sadece dökümanlar değil; araçlar, topluluklar ve video eğitimlerle öğrenme sürecinizi her yönden destekleyin."
      />

      <div className="space-y-16">
        {resourceCategories.map((category) => (
          <div key={category.category}>
            <h3 className="text-xl font-black mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[var(--accent-primary)] rounded-full" />
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium group hover:border-[var(--accent-primary)] p-8"
                >
                  <div className="flex gap-6 items-start">
                    <div className={`w-14 h-14 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 flex items-center gap-2 group-hover:text-[var(--accent-primary)] transition-colors">
                        {item.title}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KaynaklarBolumu;
