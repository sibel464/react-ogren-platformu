import type { FeatureCardData, CodeExample, LearningCardData, TabItem, CurriculumStep, FAQItem, Lesson, QuizItem } from '../types';

/**
 * Bu dosya uygulamada kullanılan tüm metin içeriklerini, dersleri, 
 * quiz sorularını ve diğer statik verileri barındıran merkezi veri deposudur.
 * Yeni bir ders veya soru eklemek istediğinizde burayı güncellemeniz yeterlidir.
 */

export const featureCards: FeatureCardData[] = [
  {
    icon: '⚡',
    title: 'Hızlı & Verimli',
    description: 'Virtual DOM sayesinde sadece değişen kısımlar güncellenir. Bu da uygulamanızı inanılmaz hızlı yapar.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: '🧩',
    title: 'Bileşen Tabanlı',
    description: 'Her şey bir bileşendir. Tekrar kullanılabilir, test edilebilir ve bakımı kolay yapılar oluşturun.',
    color: 'from-violet-400 to-purple-500',
  },
  {
    icon: '🔄',
    title: 'Tek Yönlü Veri Akışı',
    description: 'Veriler yukarıdan aşağıya akar. Bu, uygulamanın davranışını öngörülebilir kılar.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: '🌍',
    title: 'Geniş Ekosistem',
    description: 'Binlerce kütüphane, araç ve topluluk desteği ile her projenize çözüm bulabilirsiniz.',
    color: 'from-emerald-400 to-green-500',
  },
];

export const lessons: Lesson[] = [
  {
    id: 'l1',
    title: 'React Giriş ve Kurulum',
    level: 'Başlangıç',
    duration: '15 dk',
    content: 'React, Facebook tarafından geliştirilen ve modern web uygulamalarının vazgeçilmezi olan bir kütüphanedir. Vite ile saniyeler içinde kurulum yapabilirsiniz.',
    code: 'npm create vite@latest my-app -- --template react-ts',
    videoUrl: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
    docUrl: 'https://react.dev/learn/installation'
  },
  {
    id: 'l2',
    title: 'JSX ve Modern Yazım',
    level: 'Başlangıç',
    duration: '20 dk',
    content: 'JSX, JavaScript içine HTML benzeri kodlar yazmanıza olanak tanır. {} parantezleri ile dinamik verileri render edebilirsiniz.',
    code: 'const name = "Dünya";\nreturn <h1>Merhaba {name}!</h1>;',
    videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
    docUrl: 'https://react.dev/learn/writing-markup-with-jsx'
  },
  {
    id: 'l3',
    title: 'Props ve Tip Güvenliği',
    level: 'Başlangıç',
    duration: '25 dk',
    content: 'Bileşenler arası veri aktarımı Props ile yapılır. TypeScript interface\'leri ile bu verileri güvenli hale getiririz.',
    code: 'interface CardProps { title: string; }\nconst Card = ({ title }: CardProps) => <div>{title}</div>;',
    videoUrl: 'https://www.youtube.com/watch?v=m7OWCtp778E',
    docUrl: 'https://react.dev/learn/passing-props-to-a-component'
  },
  {
    id: 'l4',
    title: 'useState ile State Yönetimi',
    level: 'Orta',
    duration: '30 dk',
    content: 'State, bileşenin hafızasıdır. Değiştiğinde React otomatik olarak ilgili kısmı yeniden render eder.',
    code: 'const [count, setCount] = useState(0);\n<button onClick={() => setCount(count + 1)}>{count}</button>',
    videoUrl: 'https://www.youtube.com/watch?v=4pO-HcG2igk',
    docUrl: 'https://react.dev/learn/state-a-components-memory'
  },
  {
    id: 'l5',
    title: 'useEffect ve Side Effects',
    level: 'Orta',
    duration: '35 dk',
    content: 'API çağrıları, abonelikler veya DOM manipülasyonları gibi işlemler için useEffect kullanılır.',
    code: 'useEffect(() => {\n  fetchData();\n}, [dependency]);',
    videoUrl: 'https://www.youtube.com/watch?v=0ZJgIjIuY7U',
    docUrl: 'https://react.dev/learn/synchronizing-with-effects'
  },
  {
    id: 'l6',
    title: 'Koşullu Render Etme',
    level: 'Başlangıç',
    duration: '15 dk',
    content: 'Mantıksal operatörler (&&, ternary) kullanarak bileşenleri duruma göre gösterip gizleyebilirsiniz.',
    code: '{isLoggedIn ? <UserMenu /> : <LoginButton />}',
    videoUrl: 'https://www.youtube.com/watch?v=7o5FPaVA9GE',
    docUrl: 'https://react.dev/learn/conditional-rendering'
  }
];

export const quizzes: QuizItem[] = [
  {
    question: "React'te durum yönetimi için hangi hook kullanılır?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correctAnswer: 1
  },
  {
    question: "Bileşenler arası veri aktarma yöntemi hangisidir?",
    options: ["State", "Effect", "Props", "Reducer"],
    correctAnswer: 2
  },
  {
    question: "Virtual DOM'un temel avantajı nedir?",
    options: ["Tüm sayfayı yenilemesi", "Sadece değişen kısımları güncellemesi", "Veritabanına doğrudan erişim sağlaması", "CSS dosyalarını küçültmesi"],
    correctAnswer: 1
  },
  {
    question: "Side effect (yan etki) yönetimi için hangi hook kullanılır?",
    options: ["useCallback", "useContext", "useEffect", "useReducer"],
    correctAnswer: 2
  },
  {
    question: "JSX içerisinde JavaScript ifadesi yazmak için hangi sembol kullanılır?",
    options: ["()", "[]", "{}", "<>"],
    correctAnswer: 2
  },
  {
    question: "Bileşenler içinde referans tutmak ve DOM erişimi için hangisi uygundur?",
    options: ["useRef", "useMemo", "useState", "useLayoutEffect"],
    correctAnswer: 0
  },
  {
    question: "TypeScript'te bir bileşenin props yapısını tanımlamak için ne kullanılır?",
    options: ["class", "interface", "function", "array"],
    correctAnswer: 1
  },
  {
    question: "React'te bir bileşenin sadece belirli değişkenler değiştiğinde render edilmesini sağlayan yapı nedir?",
    options: ["React.memo", "useEffect", "useState", "useCallback"],
    correctAnswer: 0
  },
  {
    question: "useMemo hook'u ne amaçla kullanılır?",
    options: ["DOM'a erişmek", "API çağrısı yapmak", "Hesaplama sonuçlarını hafızaya almak", "Sayfa değiştirmek"],
    correctAnswer: 2
  },
  {
    question: "Tailwind CSS'de bir elemanı ortalamak için hangi sınıf kullanılır?",
    options: ["justify-center", "mx-auto", "flex-center", "item-center"],
    correctAnswer: 1
  },
  {
    question: "Vite projesinde 'dev' sunucusunu başlatmak için hangi komut kullanılır?",
    options: ["npm start", "npm run build", "npm run dev", "vite start"],
    correctAnswer: 2
  },
  {
    question: "Framer Motion'da animasyonun başlangıç durumunu hangi prop belirler?",
    options: ["animate", "exit", "initial", "transition"],
    correctAnswer: 2
  },
  {
    question: "React Router'da sayfalar arası geçiş yapmak için hangi bileşen kullanılır?",
    options: ["<a>", "<Navigate>", "<Link>", "<Route>"],
    correctAnswer: 2
  },
  {
    question: "Bir bileşen ilk render edildiğinde çalışması istenen kod nereye yazılır?",
    options: ["useEffect(() => {}, [])", "useEffect(() => {})", "useState()", "Bileşen dışına"],
    correctAnswer: 0
  },
  {
    question: "React'te 'Strict Mode' ne işe yarar?",
    options: ["Kodun hızını artırır", "Potansiyel hataları ve eski kullanımları uyarır", "CSS stillerini denetler", "Sunucu yükünü azaltır"],
    correctAnswer: 1
  },
  {
    question: "useCallback hook'u hangi durumlarda kullanılır?",
    options: ["Veri çekmek için", "Fonksiyon tanımlarını hafızaya almak için", "State güncellemek için", "Hata yakalamak için"],
    correctAnswer: 1
  },
  {
    question: "TypeScript'te 'optional' (isteğe bağlı) bir prop nasıl tanımlanır?",
    options: ["propName!", "propName?", "propName:", "propName*"],
    correctAnswer: 1
  },
  {
    question: "Context API hangi problemi çözmek için tasarlanmıştır?",
    options: ["Hızlı render", "Prop drilling", "API hızlandırma", "Güvenlik"],
    correctAnswer: 1
  },
  {
    question: "React'te 'Key' prop'u neden önemlidir?",
    options: ["Stil vermek için", "Bileşeni isimlendirmek için", "Liste elemanlarını benzersiz şekilde takip etmek için", "Veri tabanına kaydetmek için"],
    correctAnswer: 2
  },
  {
    question: "Custom Hook (Özel Hook) isimleri hangi kelime ile başlamalıdır?",
    options: ["get", "handle", "use", "create"],
    correctAnswer: 2
  }
];

export const codeExamples: CodeExample[] = [
  {
    title: 'Counter Component',
    language: 'tsx',
    code: `import { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div className="flex gap-4">\n      <button onClick={() => setCount(count - 1)}>-</button>\n      <span>{count}</span>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n};`,
    description: 'En temel state kullanımı örneği.',
  }
];

export const tabItems: TabItem[] = [
  {
    id: 'components',
    label: 'Bileşenler',
    content: 'React uygulamaları bileşenlerden oluşur. Her bileşen kendi state\'ini ve mantığını barındıran bağımsız bir yapıdır.',
    code: `const Greeting = ({ name }: { name: string }) => {\n  return <h1>Merhaba, {name}! 👋</h1>;\n};`,
  },
  {
    id: 'props',
    label: 'Props',
    content: 'Props, bileşenler arasında veri aktarımı sağlar. Read-only (salt okunur) özelliktedirler ve üst bileşenden alta doğru akar.',
    code: `interface Props { name: string; }\nconst User = ({ name }: Props) => <p>Kullanıcı: {name}</p>;\n\n<User name="Can" />`,
  },
  {
    id: 'state',
    label: 'State',
    content: 'State, bileşenin zamanla değişebilen verilerini tutar. Değiştiğinde React ilgili kısımları otomatik günceller.',
    code: `const [count, setCount] = useState(0);\n\n<button onClick={() => setCount(count + 1)}>\n  Sayaç: {count}\n</button>`,
  }
];

export const curriculumSteps: CurriculumStep[] = [
  {
    id: 1,
    title: "Temeller ve Kurulum",
    description: "Vite ile proje başlatma ve React yapısına giriş.",
    topics: ["Vite Setup", "JSX/TSX", "Folder Structure"]
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "Neden React?",
    answer: "Virtual DOM, bileşen tabanlı yapı ve devasa bir kütüphane ekosistemi için."
  }
];

export const learningCards: LearningCardData[] = [
  {
    title: 'useState',
    description: 'Bileşenlerinize durum (state) eklemenizi sağlar. Sayaçlar, formlar ve toggle işlemleri için idealdir.',
    icon: '📍',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'useEffect',
    description: 'Yan etkileri (side effects) yönetmenizi sağlar. API çağrıları ve abonelikler burada yapılır.',
    icon: '⚡',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'useContext',
    description: 'Prop drilling yapmadan derinlerdeki bileşenlere veri aktarımı ve global state yönetimi sağlar.',
    icon: '🌐',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'useRef',
    description: 'DOM elemanlarına doğrudan erişim sağlar veya renderlar arasında değer saklamak için kullanılır.',
    icon: '🎯',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'useMemo',
    description: 'Pahalı hesaplamaları hafızaya alarak (memoization) performansı optimize eder.',
    icon: '🧠',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'useCallback',
    description: 'Fonksiyonları hafızaya alarak alt bileşenlerin gereksiz yere render olmasını engeller.',
    icon: '🔄',
    gradient: 'from-rose-500 to-orange-500'
  }
];
