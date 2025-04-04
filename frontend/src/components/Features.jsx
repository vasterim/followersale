import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Comparison from "./Comparison";
import FAQ from "./FAQ";
import Reviews from "./Reviews";
import Stats from "./Stats";

export default function Features() {
  const features = [
    {
      title: "Anında Teslimat",
      description: "Siparişleriniz anında teslim edilir. Otomatik sistemimiz, isteklerinizin hemen işlemesini sağlar.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: "bg-blue-50"
    },
    {
      title: "Güvenli Ödeme",
      description: "İşlemleriniz banka düzeyinde güvenlik ile korunmaktadır. Tüm büyük ödeme yöntemlerini destekliyoruz.",
      icon: (
        <svg className="w-12 h-12 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      bgColor: "bg-emerald-50"
    },
    {
      title: "7/24 Destek",
      description: "Özel destek ekibimiz size her zaman yardımcı olmaya hazırdır. İstediğiniz zaman, istediğiniz yerden yardım alın.",
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      bgColor: "bg-orange-50"
    },
    {
      title: "Gerçek Etkileşim",
      description: "Tüm etkileşimler gerçek ve aktif kullanıcılardan gelir, bu da içeriğiniz için otantik etkileşim sağlar.",
      icon: (
        <svg className="w-12 h-12 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: "bg-purple-50"
    },
    {
      title: "Özel Paketler",
      description: "İhtiyaçlarınıza mükemmel şekilde uyan çeşitli paketler arasından seçim yapın veya kendi özel planınızı oluşturun.",
      icon: (
        <svg className="w-12 h-12 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      bgColor: "bg-pink-50"
    },
    {
      title: "Hesap Güvenliği",
      description: "Hesap güvenliğiniz önceliğimizdir. Tüm hizmetlerimiz platform yönergelerine uygundur.",
      icon: (
        <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-sm text-blue-600 font-medium mb-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
            Premium Özellikler
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sosyal Medyanızı Premium Özelliklerle Güçlendirin
          </h2>
        </div>

        {/* Mobilde Slider, Masaüstünde Grid */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={`${feature.bgColor} rounded-2xl p-6 transition-transform duration-300 hover:scale-105`}>
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-6 transition-transform duration-300 hover:scale-105`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Comparison />
      <FAQ />
      <Reviews />
      <Stats />
    </div>
  );
}