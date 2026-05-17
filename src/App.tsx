import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UstBaslik from './components/UstBaslik';
import AltBilgi from './components/AltBilgi';
import AnaSayfa from './pages/AnaSayfa';
import DerslerSayfasi from './pages/DerslerSayfasi';
import TestSayfasi from './pages/TestSayfasi';
import KaynaklarSayfasi from './pages/KaynaklarSayfasi';
import YukariKaydir from './components/YukariKaydir';

const App: React.FC = () => {
  // Tema durumunu tutuyoruz (açık veya koyu mod).
  // Sayfa yenilendiğinde kullanıcının tercihini hatırlamak için localStorage kullanıyoruz.
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  // Tema değiştiğinde HTML kök elemanına (<html>) 'data-theme' özniteliği ekliyoruz.
  // Bu sayede CSS tarafında temaya göre renkleri değiştirebiliyoruz.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Temayı değiştiren fonksiyon.
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Router>
      {/* Sayfa her değiştiğinde en üste kaydırılmasını sağlar. */}
      <YukariKaydir />
      {/* Üst menü (UstBaslik) tüm sayfalarda ortak görünür. */}
      <UstBaslik theme={theme} onToggleTheme={toggleTheme} />
      
      {/* Ana içerik alanı */}
      <main className="overflow-hidden min-h-screen">
        <Routes>
          {/* Farklı URL yolları için hangi sayfanın render edileceğini belirliyoruz. */}
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/lessons" element={<DerslerSayfasi />} />
          <Route path="/quiz" element={<TestSayfasi />} />
          <Route path="/resources" element={<KaynaklarSayfasi />} />
        </Routes>
      </main>

      {/* Alt bilgi alanı (AltBilgi) tüm sayfalarda ortak görünür. */}
      <AltBilgi />
    </Router>
  );
};

export default App;
