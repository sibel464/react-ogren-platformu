import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Tüm projenin genel CSS ayarlarını içeri aktarır

// HTML dosyasındaki id'si 'root' olan div elementini buluruz.
// React uygulamamız tamamen bu div'in içine yerleşecek (render edilecek).
const rootElement = document.getElementById('root');

// TypeScript için güvenlik kontrolü: Eğer root elementi yoksa uygulamayı durdur ve hata ver.
if (!rootElement) {
  throw new Error('Root element not found');
}

// React uygulamasını başlatıyoruz.
createRoot(rootElement).render(
  // StrictMode: Geliştirme aşamasında potansiyel hataları bulmak için React'in katı kurallarını uygular.
  <StrictMode>
    <App />
  </StrictMode>
);
