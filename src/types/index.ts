// Bu dosya, projede kullanılan tüm veri tiplerini barındıran merkezi kütüphanedir.
// TypeScript (TSX) kullanmanın en büyük faydası, burada tanımladığımız kalıplara
// uymayan bir veri gelirse kodun hata vermesi ve bizi erkenden uyarmasıdır.

// Üst menüdeki (Navbar) bağlantıların yapısı
export interface NavLink {
  label: string; // Ekranda görünen isim (Örn: "Ana Sayfa")
  href: string;  // Tıklandığında gidilecek URL (Örn: "/lessons")
}

// React ve TSX avantajlarının listelendiği özellik kartları
export interface FeatureCardData {
  icon: string;        // Lucide-react ikon ismi
  title: string;       // Kart başlığı
  description: string; // Kart açıklaması
  color: string;       // Kartın vurgu rengi
}

// Kod gösterim alanlarında (CodeBlock) kullanılacak veri yapısı
export interface CodeExample {
  title: string;       // Kod bloğunun üzerindeki sekme başlığı
  language: string;    // Kodun dili (tsx, css vb.)
  code: string;        // Ekrana basılacak gerçek kod
  description: string; // Kodun ne işe yaradığını anlatan metin
}

// Hooks (useState vb.) gibi temel yapıları anlatan öğrenme kartları
export interface LearningCardData {
  title: string;
  description: string;
  icon: string;
  gradient: string; // Kartın arka planına verilecek renk geçişi (gradient)
}

// Tıklanabilir sekmelerin (Tabs) her birini temsil eder
export interface TabItem {
  id: string;      // Sekmenin benzersiz kimliği
  label: string;   // Sekmenin başlığı
  content: string; // Sekme içeriği
  code?: string;   // İsteğe bağlı (optional) kod bloğu kısmı
}

// TSX ile JSX arasındaki farkların kıyaslandığı veri yapısı
export interface ComparisonItem {
  feature: string; // Karşılaştırılan özellik
  jsx: string;     // JavaScript versiyonundaki karşılığı
  tsx: string;     // TypeScript versiyonundaki karşılığı
}

// Müfredat bölümündeki öğrenim adımları
export interface CurriculumStep {
  id: number;
  title: string;
  description: string;
  topics: string[]; // Adımın alt konuları (dizi şeklinde)
}

// Sıkça Sorulan Sorular (SSS) bölümü
export interface FAQItem {
  question: string; // Soru
  answer: string;   // Yanıt
}

// Dersler sayfasındaki eğitim derslerinin yapısı
export interface Lesson {
  id: string;
  title: string;
  level: 'Başlangıç' | 'Orta' | 'İleri'; // Zorluk seviyesi (Sadece bu 3'ünden biri olabilir)
  duration: string; // Süre
  content: string;  // Metin içeriği
  code?: string;    // Varsa kod örneği
  videoUrl?: string; // Varsa video linki
  docUrl?: string;   // Varsa döküman linki
}

// Bilgi kontrolü (Quiz) bölümündeki test soruları
export interface QuizItem {
  question: string; // Sorulan soru
  options: string[]; // 4 farklı şık
  correctAnswer: number; // Doğru cevabın options dizisindeki indeks (sıra) numarası
}
