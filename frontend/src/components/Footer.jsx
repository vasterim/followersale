export default function Footer() {
    return (
      <footer className="bg-black text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text gradient mb-4">
              Likeboosty
            </h3>
            <p className="text-sm text-gray-400">
              Instagram ve TikTok takipçi hizmetlerinde güvenilir adres. Sosyal
              medyada öne çıkmak için Likeboosty yanınızda.
            </p>
          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Hakkında
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram Paketleri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  TikTok Paketleri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <p className="text-sm text-gray-300 mb-2">support@likeboosty.com</p>
            <p className="text-sm text-gray-300">+90 534 599 8646</p>
          </div>
        </div>
  
        <div className="mt-12 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Likeboosty. Tüm hakları saklıdır.
        </div>
      </footer>
    );
  }
  