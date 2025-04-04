import React from "react";
import { motion } from "framer-motion";

export default function Comparison() {
  const likeboostyFeatures = [
    {
      icon: "👥",
      title: "Gerçek Takipçiler",
      description: "%100 gerçek ve aktif Instagram kullanıcıları",
      badge: null,
      progressBars: ["bg-blue-500", "bg-blue-500", "bg-blue-500"]
    },
    {
      icon: "⚡",
      title: "Anında Teslimat",
      description: "Siparişler 1-3 dakika içinde başlar",
      badge: null,
      progressBar: "bg-purple-500"
    },
    {
      icon: "🔒",
      title: "Güvenli Sistem",
      description: "SSL korumalı, şifre gerekmez",
      badge: "Doğrulandı",
      badgeColor: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: "😊",
      title: "7/24 Destek",
      description: "Profesyonel destek ekibi her zaman yardıma hazır",
      badge: "★★★★★",
      badgeColor: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: "🔐",
      title: "Şifresiz Güvenlik",
      description: "Sadece kullanıcı adınızla güvenli bir şekilde giriş yapın",
      badge: "Güvenli Erişim",
      badgeColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: "🎁",
      title: "Hoş Geldin Hediyesi",
      description: "Yeni üyeler için 10 ücretsiz beğeni",
      badge: "Ücretsiz Deneme",
      badgeColor: "bg-pink-100 text-pink-600"
    },
    {
      icon: "🛡️",
      title: "SSL Güvenliği",
      description: "Verileriniz için 256-bit SSL şifrelemesi",
      badge: "Şifrelendi",
      badgeColor: "bg-emerald-100 text-emerald-600"
    }
  ];

  const otherFeatures = [
    {
      icon: "🤖",
      title: "Bot Hesaplar",
      description: "Profilinize zarar veren sahte hesaplar ve botlar",
      progressBars: ["bg-gray-300", "bg-gray-300", "bg-gray-300"]
    },
    {
      icon: "⏳",
      title: "Yavaş Teslimat",
      description: "Birkaç güne kadar uzayan uzun bekleme süreleri"
    },
    {
      icon: "❌",
      title: "Destek Yok",
      description: "Sınırlı veya hiç müşteri desteği yok",
      badge: "★☆☆☆☆"
    },
    {
      icon: "⚠️",
      title: "Hesap Riski",
      description: "Hesap askıya alınması veya gölge yasağı riski yüksek",
      badge: "Güvenli Değil",
      badgeColor: "bg-gray-200 text-gray-600"
    },
    {
      icon: "🔑",
      title: "Şifre Gerekli",
      description: "Güvenliği tehlikeye atan riskli şifre talepleri",
      badge: "Güvenli Değil",
      badgeColor: "bg-gray-200 text-gray-600"
    },
    {
      icon: "💰",
      title: "Ekstra Maliyetler",
      description: "Her işlem için ek ücretler, ücretsiz seçenek yok",
      badge: "Hediye Yok",
      badgeColor: "bg-gray-200 text-gray-600"
    },
    {
      icon: "🚫",
      title: "Güvenlik Açıkları",
      description: "Yetersiz güvenlik önlemleri verilerinizi riske atar",
      badge: "Güvensiz",
      badgeColor: "bg-gray-200 text-gray-600"
    }
  ];

  const stats = [
    {
      value: "2000K+",
      label: "Mutlu Müşteriler",
      bgColor: "bg-blue-50"
    },
    {
      value: "95%",
      label: "Başarı Oranı",
      bgColor: "bg-purple-50"
    },
    {
      value: "5K+",
      label: "Destek",
      bgColor: "bg-pink-50"
    }
  ];

  const otherStats = [
    {
      value: "20K+",
      label: "Kullanıcılar"
    },
    {
      value: "2%",
      label: "Başarı"
    },
    {
      value: "30K+",
      label: "Destek"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-blue-600 font-medium mb-4"
          >
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
            Neden Bizi Seçmelisiniz?
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold text-gray-900"
          >
            Farkı Görün
          </motion.h2>
        </div>

        {/* Karşılaştırma */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* LikeBoosty */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6 relative"
          >
            <div className="absolute top-6 right-6">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    className="text-gray-200"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="32"
                    cy="32"
                  />
                  <circle
                    className="text-blue-600"
                    strokeWidth="4"
                    strokeDasharray={188.5}
                    strokeDashoffset={188.5 * (1 - 0.95)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="32"
                    cy="32"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-blue-600 font-bold">
                  95%
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 text-blue-600">LikeBoosty</h3>
            <p className="text-gray-600 mb-6">Premium Kalite</p>

            <div className="space-y-6">
              {likeboostyFeatures.map((feature, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  key={index} 
                  className="flex items-start gap-3"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-900">{feature.title}</h4>
                      {feature.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${feature.badgeColor || 'bg-blue-100 text-blue-600'}`}>
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                    {feature.progressBars && (
                      <div className="flex gap-1 mt-1">
                        {feature.progressBars.map((bg, i) => (
                          <div key={i} className={`h-1 w-8 rounded ${bg}`}></div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t">
              {stats.map((stat, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  key={index} 
                  className={`text-center p-3 rounded-xl ${stat.bgColor}`}
                >
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Diğer Hizmetler */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50/50 rounded-2xl p-6 relative opacity-75"
          >
            <div className="absolute top-6 right-6">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    className="text-gray-100"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="32"
                    cy="32"
                  />
                  <circle
                    className="text-gray-300"
                    strokeWidth="4"
                    strokeDasharray={188.5}
                    strokeDashoffset={188.5 * (1 - 0.4)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="32"
                    cy="32"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold">
                  40%
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-gray-300">Diğer Hizmetler</h3>
            <p className="text-gray-400 mb-6">Düşük Kalite</p>

            <div className="space-y-6">
              {otherFeatures.map((feature, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  key={index} 
                  className="flex items-start gap-3"
                >
                  <span className="text-2xl opacity-50">{feature.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-400">{feature.title}</h4>
                      {feature.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-400`}>
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                    {feature.progressBars && (
                      <div className="flex gap-1 mt-1">
                        {feature.progressBars.map((bg, i) => (
                          <div key={i} className="h-1 w-8 rounded bg-gray-200"></div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              {otherStats.map((stat, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  key={index} 
                  className="text-center"
                >
                  <div className="text-xl font-bold text-gray-300">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 