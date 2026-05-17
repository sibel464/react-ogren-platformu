import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

// Bileşenin dışarıdan alacağı (props) verilerin tip tanımı
interface CodeBlockProps {
  code: string;  // Gösterilecek kod metni
  title: string; // Üst kısımdaki etiket (örn: "React", "CSS")
}

const KodBlok: React.FC<CodeBlockProps> = ({ code, title }) => {
  // Kullanıcının kodu kopyalayıp kopyalamadığını tutan state (durum)
  const [copied, setCopied] = useState(false);

  // Kopyalama butonuna tıklandığında çalışan fonksiyon
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code); // Kodu panoya kopyala
    setCopied(true); // İkonu "Check" (Onay) işaretine çevir
    
    // 2 saniye sonra tekrar eski haline (kopyalama ikonuna) getir
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block group">
      {/* Üst bilgi ve buton alanı (Mac OS pencere butonlarına benzer tasarım) */}
      <div className="code-block-header justify-between">
        <div className="flex items-center">
          <div className="flex gap-1.5 mr-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c841]" />
          </div>
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{title}</span>
        </div>
        
        {/* Kopyalama Butonu */}
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-white transition-colors p-1"
          title="Kodu Kopyala"
        >
          {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </button>
      </div>
      
      {/* Kodun kendisinin gösterildiği alan */}
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm font-mono text-zinc-100 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default KodBlok;
