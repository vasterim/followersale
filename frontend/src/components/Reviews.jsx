import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    time: "2 gün önce",
    comment: "Beğeniler anında geldi, hepsi gerçek hesaplardan. Teşekkür ederim!",
    package: "Beğeni Paketi"
  },
  {
    id: 2,
    name: "James Brown",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    time: "3 gün önce",
    comment: "İşlem 1 dakikada tamamlandı. Hızlı ve güvenilir.",
    package: "Beğeni Paketi"
  },
  {
    id: 3,
    name: "Sophia Martinez",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
    time: "2 hafta önce",
    comment: "Beğeniler hızlı bir şekilde geldi, harika fiyatlara. Çok memnun kaldım!",
    package: "Beğeni Paketi"
  },
  {
    id: 4,
    name: "Michael Smith",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    time: "1 hafta önce",
    comment: "Yüksek kaliteli ve aktif takipçiler. Şiddetle tavsiye ederim!",
    package: "Takipçi Paketi"
  },
  {
    id: 5,
    name: "Olivia Davis",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
    time: "1 gün önce",
    comment: "Gerçek takipçiler, kalıcı ve aktif. Mükemmel hizmet!",
    package: "Takipçi Paketi"
  },
  {
    id: 6,
    name: "William Anderson",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 5,
    time: "6 gün önce",
    comment: "Tam olarak istediğim gibi. Kesinlikle tavsiye ederim!",
    package: "Takipçi Paketi"
  }
];

export default function Reviews() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Müşteri Yorumları
          </h2>
          <p className="text-lg text-gray-600">
            Binlerce mutlu müşterimizden bazıları
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.time}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{review.comment}</p>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                  review.package === "Beğeni Paketi"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-purple-50 text-purple-600"
                }`}>
                  {review.package === "Beğeni Paketi" ? (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {review.package}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
} 