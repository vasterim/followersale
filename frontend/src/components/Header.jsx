import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Eye, Heart, Users } from "lucide-react";

export default function Header() {
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");
  const [currentStat, setCurrentStat] = useState({
    views: "4.7K",
    username: "@gaming.pro",
    status: "İşleniyor",
    time: "2dk ago",
    statusColor: "yellow"
  });

  const stats = [
    {
      views: "4.7K",
      username: "@gaming.pro",
      status: "İşleniyor",
      time: "2dk ago",
      statusColor: "yellow"
    },
    {
      views: "3.2K",
      username: "@lifestyle.coach",
      status: "Tamamlandı",
      time: "1dk ago",
      statusColor: "green"
    },
    {
      views: "2.8K",
      username: "@travel.blog",
      status: "Bekliyor",
      time: "3dk ago",
      statusColor: "red"
    }
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % stats.length;
      setCurrentStat(stats[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const platformInfo = {
    Instagram: {
      title: "Instagram'",
      description:
        "Markanızı öne çıkartın, sosyal medyada öne geçin. En uygun fiyatlarla organik Instagram takipçileri burada!",
      gradient: "bg-instagram",
    },
    TikTok: {
      title: "TikTok Takipçi Satışı",
      description:
        "Trendleri yakalayın, viral olun! Gerçek TikTok takipçileri ile hesabınızı güçlendirin.",
      gradient: "bg-tiktok",
    },
  };

  const current = platformInfo[selectedPlatform];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-4 sm:py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Sol Taraf - Form ve Bilgiler */}
        <div className="flex-1 space-y-4 sm:space-y-6">
          {/* Platform Seçici */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
            <button
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
              onClick={() => setSelectedPlatform("Instagram")}
            >
              <Instagram size={20} />
              Instagram
            </button>
            <button
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setSelectedPlatform("TikTok")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              TikTok
            </button>
          </div>

          {/* Başlık ve Açıklama */}
          <div className="bg-gradient-to-r from-[#F8FAFF] to-[#F0F7FF] rounded-2xl p-4 sm:p-6">
            <div className="flex flex-wrap items-center gap-2 text-sm text-blue-600 font-medium">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="flex-shrink-0">Instagram Takipçi, Beğeni ve Görüntüleme Satın Al</span>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full text-xs whitespace-nowrap">En İyi Büyüme Hizmeti</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            <span className="text-blue-600">{current.title}</span>da Gerçek Takipçi Satın Al
          </h1>

          <p className="text-sm sm:text-base text-gray-600">
            Güvenli ödeme ve şifresiz teknoloji ile anında takipçi, beğeni ve görüntüleme alın <span className="font-medium">dakikalar içinde</span>.
          </p>

          {/* İstatistikler */}
          <div className={`flex items-center gap-2 text-sm text-gray-500 p-2.5 rounded-lg ${
            currentStat.statusColor === 'red' ? 'bg-red-50' :
            currentStat.statusColor === 'green' ? 'bg-green-50' :
            'bg-orange-50'
          }`}>
            <span className="text-purple-600 font-medium">{currentStat.views} views</span>
            <span>•</span>
            <span className="text-gray-400">{currentStat.username}</span>
            <span className={`ml-auto px-2 py-0.5 rounded-full text-xs ${
              currentStat.statusColor === 'red' ? 'bg-red-100 text-red-600' :
              currentStat.statusColor === 'green' ? 'bg-green-100 text-green-600' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {currentStat.status}
            </span>
            <span className="text-gray-400">{currentStat.time}</span>
          </div>

          {/* Kullanıcı Adı Girişi */}
          <div className="bg-white rounded-3xl p-6 space-y-4 shadow-sm">
            <h3 className="text-gray-900 text-base font-medium">Instagram Kullanıcı Adı</h3>
            <div className="relative">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
                <input
                  type="text"
                  placeholder="@kullaniciadı"
                  className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-400"
                />
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Kullanıcı Adı Girin
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-7-7l7 7-7 7"/>
              </svg>
            </button>

            {/* Özellikler */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 bg-[#F8FAFF] p-3 rounded-xl">
                <svg className="w-5 h-5 text-[#6366F1]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
                <div>
                  <h3 className="text-sm font-medium">%100 Gerçek Takipçiler</h3>
                  <p className="text-xs text-gray-500">Aktif ve gerçek profiller</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#F8FAFF] p-3 rounded-xl">
                <svg className="w-5 h-5 text-[#6366F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <div>
                  <h3 className="text-sm font-medium">Anında Teslimat</h3>
                  <p className="text-xs text-gray-500">Dakikalar içinde büyümeye başlayın</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#F8FAFF] p-3 rounded-xl">
                <svg className="w-5 h-5 text-[#6366F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15v2m0 0v2m0-2h2m-2 0H8" />
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div>
                  <h3 className="text-sm font-medium">Güvenli Erişim</h3>
                  <p className="text-xs text-gray-500">Şifre gerekmez</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#F8FAFF] p-3 rounded-xl">
                <svg className="w-5 h-5 text-[#6366F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <div>
                  <h3 className="text-sm font-medium">7/24 Destek</h3>
                  <p className="text-xs text-gray-500">Canlı yardım</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Taraf - Profil Kartı */}
        <div className="lg:w-[400px]">
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full p-[2px]">
                  <div className="w-full h-full bg-white rounded-full p-[2px]">
                    <img
                      src="https://i.pravatar.cc/48"
                      alt="Profile"
                      className="w-11 h-11 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-12 h-12"></div>
              </div>
              <div>
                <h3 className="font-medium">@lifestyle.blogger</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-emerald-500">Premium Hesap</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">Takipçiler</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">2000</span>
                  <span className="text-emerald-500 text-sm">+750</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-600">Beğeniler</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">11430</span>
                  <span className="text-emerald-500 text-sm">+2,890</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-600">Görüntülemeler</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">20500</span>
                  <span className="text-emerald-500 text-sm">+5,250</span>
                </div>
              </div>
            </div>

            {/* Büyüme Grafiği */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Büyüme Grafiği</h4>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Son 7 gün</span>
                  <span className="text-emerald-500 font-medium">324% artış</span>
                </div>
              </div>
              <div className="h-[140px] bg-[#F8FAFF] rounded-xl p-4 relative">
                <div className="absolute top-3 right-3">
                  <button className="text-sm text-blue-600 font-medium hover:underline flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Premium
                  </button>
                </div>
                <div className="h-full flex items-end gap-1.5 pt-6">
                  {[15, 25, 35, 50, 65, 80, 100].map((height, index) => (
                    <motion.div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-[#818CF8] to-[#6366F1] rounded-lg"
                      style={{
                        opacity: 0.2 + (index * 0.11)
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ödeme Metodları */}
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex gap-2">
                <img src="/assets/images/stripe_logo.png" alt="Stripe" className="h-6" />
                <img src="/assets/images/apple_pay.png" alt="Apple Pay" className="h-6" />
                <img src="/assets/images/google-pay-logo.png" alt="Google Pay" className="h-6" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-emerald-500">Güvenli Ödeme</span>
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}