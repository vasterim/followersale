import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Elif K.",
    avatar: "https://i.pravatar.cc/100?img=12",
    comment:
      "Likeboosty sayesinde Instagram hesabım 3 gün içinde tam anlamıyla canlandı. Harika hizmet!",
  },
  {
    name: "Baran T.",
    avatar: "https://i.pravatar.cc/100?img=15",
    comment:
      "Takipçiler gerçekten organik gibi. Hiçbir sıkıntı yaşamadım, tüm süreç sorunsuzdu.",
  },
  {
    name: "Melis A.",
    avatar: "https://i.pravatar.cc/100?img=22",
    comment:
      "Destek ekibi gece bile cevap verdi, cidden şaşkınım. Teşekkürler Likeboosty!",
  },
  {
    name: "Emir Y.",
    avatar: "https://i.pravatar.cc/100?img=33",
    comment:
      "TikTok için aldığım takipçilerle viral oldum. Fiyat-performans muazzam!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="bg-gradient-to-br from-gray-200 to-white py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Kullanıcı Yorumları
        </h2>

        <div className="relative">
          <div className="bg-white shadow-xl px-20 rounded-2xl p-6 transition-all duration-700 ease-in-out transform">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="w-12 h-12 rounded-full"
              />
              <h4 className="font-semibold text-gray-800 text-base">
                {testimonials[index].name}
              </h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              "{testimonials[index].comment}"
            </p>
          </div>

          <div className="absolute inset-0 flex items-center justify-between px-2">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}