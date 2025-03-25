import { Sparkles, Zap, ShieldCheck, Clock } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Anında Teslimat",
    description:
      "Sipariş verdiğiniz anda takipçiler hesabınıza ulaşır. Beklemek yok, anında etki!",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Güvenli Ödeme",
    description:
      "SSL ile korunan ödeme sistemi sayesinde tüm bilgileriniz güvende.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "7/24 Destek",
    description:
      "Her zaman yanınızdayız. Canlı destek ile tüm sorularınıza anında yanıt alın.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: "Organik Görünüm",
    description:
      "Gerçek kullanıcı profilleriyle doğal bir büyüme deneyimi sunuyoruz.",
    gradient: "from-yellow-400 to-orange-500",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Neden Likeboosty?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Likeboosty ile sosyal medyada öne çıkmak artık daha kolay. İşte bizi
          farklı kılan özellikler:
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div
                className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-full mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}