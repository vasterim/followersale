import React from "react";

export default function Footer() {
  const footerLinks = {
    HİZMETLER: [
      { name: "Instagram", href: "/instagram" },
      { name: "TikTok", href: "/tiktok" },
      { name: "Fiyatlandırma", href: "/pricing" },
    ],
    ŞİRKET: [
      { name: "Hakkımızda", href: "/about" },
      { name: "İletişim", href: "/contact" },
      { name: "Fiyatlandırma", href: "/pricing" },
    ],
    İLETİŞİM: [
      { name: "E-posta: info@likeboosty.com", href: "mailto:info@likeboosty.com" },
      { name: "Telegram", href: "https://t.me/likeboosty" },
    ],
  };

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo ve Açıklama */}
          <div className="md:col-span-3">
            <a href="/" className="text-blue-600 text-xl font-semibold">
              Likeboosty
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Sosyal medya hesaplarınızı güçlendirin, etkileşiminizi artırın.
            </p>
          </div>

          {/* Linkler */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-3">
              <h3 className="font-medium text-gray-900">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alt Kısım */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            © 2023 Likeboosty
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-sm text-gray-600 hover:text-gray-900">
              <span className="flex items-center gap-1">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                TR
              </span>
            </button>
            <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Kullanım Şartları
            </a>
            <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Gizlilik Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
  