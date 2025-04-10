import React from 'react'
import { motion } from 'framer-motion'
import instagramLikesImage from '../assets/images/instagram.jpeg'

const InstagramFollowers = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Gerçek <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Instagram</span> Takipçileri
            </h1>
            <div className="flex items-center gap-2 mt-4">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Şu Anda Aktif
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">4.9/5 (2.5k+ Değerlendirme)</span>
              </div>
            </div>
            <p className="mt-6 text-lg text-gray-600">
              Gerçek kullanıcılarla otantik etkileşim deneyimini yaşayın. Hizmetimiz, sosyal medyada doğal bir şekilde büyümenize yardımcı olan gerçek etkileşimler sunar.
            </p>
          </div>
          <div className="relative">
            <img 
              src={instagramLikesImage}
              alt="Instagram Mockup" 
              className="w-60 h-85 transform hover:scale-105 transition-transform duration-300 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Anında Teslimat */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Anında Teslimat</h3>
              <p className="text-gray-600">Siparişiniz onaylandıktan hemen sonra sonuçları görmeye başlayın</p>
            </div>

            {/* Gerçek Kullanıcılar */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Gerçek Kullanıcılar</h3>
              <p className="text-gray-600">%100 gerçek hesaplar ve gerçek etkileşim</p>
            </div>

            {/* Güvenli ve Emniyetli */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Güvenli ve Emniyetli</h3>
              <p className="text-gray-600">Hesap güvenliğiniz birinci önceliğimizdir, güvenli işlemler sunuyoruz</p>
            </div>

            {/* 7/24 Destek */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">7/24 Destek</h3>
              <p className="text-gray-600">Adanmış ekibimiz ihtiyaç duyduğunuz her an yanınızda</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nasıl Çalışır?</h2>
          <div className="max-w-2xl mx-auto relative">
            {/* Timeline çizgisi */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#4070F4] to-[#FF77BC]" />
            
            {/* Adım 1 */}
            <div className="relative flex items-center mb-16">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-semibold mb-2">Kullanıcı Adınızı Girin</h3>
                <p className="text-gray-600">Sadece kullanıcı adınızı girin - şifre gerekmez</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#4070F4] rounded-full text-white flex items-center justify-center">
                1
              </div>
            </div>

            {/* Adım 2 */}
            <div className="relative flex items-center mb-16">
              <div className="w-1/2" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#9333EA] rounded-full text-white flex items-center justify-center">
                2
              </div>
              <div className="w-1/2 pl-8">
                <h3 className="text-xl font-semibold mb-2">Paketinizi Seçin</h3>
                <p className="text-gray-600">İhtiyaçlarınıza uygun etkileşim paketlerimizi seçin</p>
              </div>
            </div>

            {/* Adım 3 */}
            <div className="relative flex items-center mb-16">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-semibold mb-2">Ödemeyi Tamamlayın</h3>
                <p className="text-gray-600">Tercih ettiğiniz ödeme yöntemiyle güvenli bir şekilde ödeme yapın</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#9333EA] rounded-full text-white flex items-center justify-center">
                3
              </div>
            </div>

            {/* Adım 4 */}
            <div className="relative flex items-center">
              <div className="w-1/2" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#FF77BC] rounded-full text-white flex items-center justify-center">
                4
              </div>
              <div className="w-1/2 pl-8">
                <h3 className="text-xl font-semibold mb-2">Büyümenizi İzleyin</h3>
                <p className="text-gray-600">Arkanıza yaslanın ve etkileşimlerinizin doğal olarak artmasını izleyin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold">
              Instagram <span className="text-[#4070F4]">Takipçileri</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Gerçek ve aktif takipçilerle Instagram etkileşiminizi artırın. Mükemmel etkileşim paketinizi seçin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {/* 100 Followers Package */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M8 10L3 15L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>100 Takipçi</span>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">100 Followers</h3>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-2xl font-bold text-[#4070F4]">$0.99</span>
                  <span className="text-gray-500">/paket</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Aktif kullanıcılardan gerçek takipçiler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında teslimat
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre gerektirmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 günlük yenileme garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-[#833AB4] to-[#C13584] hover:from-[#C13584] hover:to-[#833AB4] text-white rounded-full transition-all flex items-center justify-center gap-2">
                Başlayın
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 7l5 5-5 5"/>
                </svg>
              </button>
            </div>

            {/* 1000 Followers Package - Featured */}
            <div className="bg-white rounded-lg shadow-md p-6 relative border-2 border-[#4070F4] hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#FF9119] text-white text-sm py-1 px-3 rounded-full">En İyi Fırsat</span>
              </div>
              <div className="flex items-center gap-2 text-[#FF9119] mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M8 10L3 15L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>1000 Takipçi</span>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">1000 Followers</h3>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-2xl font-bold text-[#4070F4]">$3.19</span>
                  <span className="text-gray-500">/paket</span>
                </div>
                <div className="text-sm text-[#FF9119] mt-1">🔥 Kaydet 60%</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Aktif kullanıcılardan gerçek takipçiler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında teslimat
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre gerektirmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 günlük yenileme garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-[#E1306C] to-[#F77737] hover:from-[#F77737] hover:to-[#E1306C] text-white rounded-full transition-all flex items-center justify-center gap-2">
                Başlayın
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 7l5 5-5 5"/>
                </svg>
              </button>
            </div>

            {/* 5000 Followers Package */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M8 10L3 15L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>5000 Takipçi</span>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">5000 Followers</h3>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-2xl font-bold text-[#4070F4]">$14.39</span>
                  <span className="text-gray-500">/paket</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Aktif kullanıcılardan gerçek takipçiler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında teslimat
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre gerektirmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 günlük yenileme garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-[#833AB4] to-[#C13584] hover:from-[#C13584] hover:to-[#833AB4] text-white rounded-full transition-all flex items-center justify-center gap-2">
                Başlayın
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 7l5 5-5 5"/>
                </svg>
              </button>
            </div>

            {/* 10000 Followers Package */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M8 10L3 15L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>10000 Takipçi</span>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">10000 Followers</h3>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-2xl font-bold text-[#4070F4]">$22.39</span>
                  <span className="text-gray-500">/paket</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Aktif kullanıcılardan gerçek takipçiler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında teslimat
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre gerektirmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 günlük yenileme garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-[#833AB4] to-[#C13584] hover:from-[#C13584] hover:to-[#833AB4] text-white rounded-full transition-all flex items-center justify-center gap-2">
                Başlayın
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 7l5 5-5 5"/>
                </svg>
              </button>
            </div>

            {/* 25000 Followers Package */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M8 10L3 15L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>25000 Takipçi</span>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">25000 Followers</h3>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-2xl font-bold text-[#4070F4]">$51.99</span>
                  <span className="text-gray-500">/paket</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Aktif kullanıcılardan gerçek takipçiler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında teslimat
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre gerektirmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 günlük yenileme garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-[#833AB4] to-[#C13584] hover:from-[#C13584] hover:to-[#833AB4] text-white rounded-full transition-all flex items-center justify-center gap-2">
                Başlayın
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 7l5 5-5 5"/>
                </svg>
              </button>
            </div>

            {/* 50000 Followers Package */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M8 10L3 15L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>50000 Takipçi</span>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">50000 Followers</h3>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-2xl font-bold text-[#4070F4]">$95.99</span>
                  <span className="text-gray-500">/paket</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Aktif kullanıcılardan gerçek takipçiler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında teslimat
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre gerektirmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 günlük yenileme garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-[#833AB4] to-[#C13584] hover:from-[#C13584] hover:to-[#833AB4] text-white rounded-full transition-all flex items-center justify-center gap-2">
                Başlayın
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 7l5 5-5 5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramFollowers; 