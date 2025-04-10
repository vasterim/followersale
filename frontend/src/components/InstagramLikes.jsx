import React from 'react'
import { motion } from 'framer-motion'
import instagramLikesImage from '../assets/images/instagram.jpeg'

const InstagramLikes = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Gerçek <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Instagram</span> Beğenileri
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
              Instagram <span className="text-[#4070F4]">Beğenileri</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Gerçek ve aktif beğenilerle Instagram etkileşiminizi artırın. Mükemmel etkileşim paketinizi seçin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
            {/* 10 Likes Package */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
              <div className="flex justify-center text-[#4070F4] mb-4">❤️ 10 Beğeniler</div>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-[#4070F4]">$0.39</span>
                <span className="text-gray-500">/paket</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  %100 Gerçek Beğeniler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında Başlangıç (1-3 Dakika)
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre Gerekmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 Günlük Yeniden Doldurma Garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full transition-all">
                Başlayın
              </button>
            </div>

            {/* 30 Likes Package - Featured */}
            <div className="bg-white rounded-lg shadow-md p-6 relative border-2 border-[#4070F4] hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#4070F4] text-white text-sm py-1 px-3 rounded-full">En İyi Paket</span>
              </div>
              <div className="flex justify-center text-[#4070F4] mb-4">❤️ 30 Beğeniler</div>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-[#4070F4]">$0.79</span>
                <span className="text-gray-500">/paket</span>
                <div className="text-sm text-green-600 mt-1">🔥 Kaydet 45%</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  %100 Gerçek Beğeniler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında Başlangıç (1-3 Dakika)
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre Gerekmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 Günlük Yeniden Doldurma Garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full transition-all">
                Başlayın
              </button>
            </div>

            {/* 50 Likes Package */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
              <div className="flex justify-center text-[#4070F4] mb-4">❤️ 50 Beğeniler</div>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-[#4070F4]">$1.29</span>
                <span className="text-gray-500">/paket</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  %100 Gerçek Beğeniler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında Başlangıç (1-3 Dakika)
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre Gerekmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 Günlük Yeniden Doldurma Garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full transition-all">
                Başlayın
              </button>
            </div>

            {/* 100 Likes Package */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
              <div className="flex justify-center text-[#4070F4] mb-4">❤️ 100 Beğeniler</div>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-[#4070F4]">$1.99</span>
                <span className="text-gray-500">/paket</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  %100 Gerçek Beğeniler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında Başlangıç (1-3 Dakika)
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre Gerekmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 Günlük Yeniden Doldurma Garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full transition-all">
                Başlayın
              </button>
            </div>

            {/* 250 Likes Package */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
              <div className="flex justify-center text-[#4070F4] mb-4">❤️ 250 Beğeniler</div>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-[#4070F4]">$4.49</span>
                <span className="text-gray-500">/paket</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  %100 Gerçek Beğeniler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında Başlangıç (1-3 Dakika)
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre Gerekmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 Günlük Yeniden Doldurma Garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full transition-all">
                Başlayın
              </button>
            </div>

            {/* 500 Likes Package */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
              <div className="flex justify-center text-[#4070F4] mb-4">❤️ 500 Beğeniler</div>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-[#4070F4]">$7.99</span>
                <span className="text-gray-500">/paket</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  %100 Gerçek Beğeniler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında Başlangıç (1-3 Dakika)
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre Gerekmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 Günlük Yeniden Doldurma Garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full transition-all">
                Başlayın
              </button>
            </div>

            {/* 1000 Likes Package */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
              <div className="flex justify-center text-[#4070F4] mb-4">❤️ 1000 Beğeniler</div>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-[#4070F4]">$14.99</span>
                <span className="text-gray-500">/paket</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  %100 Gerçek Beğeniler
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Anında Başlangıç (1-3 Dakika)
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Şifre Gerekmez
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  30 Günlük Yeniden Doldurma Garantisi
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full transition-all">
                Başlayın
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default InstagramLikes 