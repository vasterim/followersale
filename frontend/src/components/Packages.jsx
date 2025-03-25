import React, { useState } from "react";
import { Check } from "lucide-react";

const PackageCard = ({ title, features, price }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <Check className="text-green-500 w-5 h-5 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full cursor-pointer bg-black text-white py-2 rounded-md font-semibold hover:opacity-90 transition">
        Satın Al - {price}
      </button>
    </div>
  );
};

export default function Packages() {
  const [platform, setPlatform] = useState("Instagram");

  const packages = {
    Instagram: [
      {
        title: "100 Takipçi",
        price: "19.99 TL",
        features: ["Anında teslimat", "Gerçek kullanıcılar", "Takip çıkmayan hesaplar"],
      },
      {
        title: "500 Takipçi",
        price: "69.99 TL",
        features: ["Anında teslimat", "Uygun fiyat", "Destek dahil"],
      },
    ],
    TikTok: [
      {
        title: "100 Takipçi",
        price: "14.99 TL",
        features: ["Anında teslimat", "Yüksek etkileşim", "Trend uyumu"],
      },
      {
        title: "1000 Takipçi",
        price: "99.99 TL",
        features: ["Hızlı yükleme", "Kaliteli hesaplar", "7/24 destek"],
      },
    ],
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {platform} Paketleri
        </h2>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setPlatform("Instagram")}
            className={`px-4 py-2 rounded-full font-semibold text-sm ${
              platform === "Instagram"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Instagram
          </button>
          <button
            onClick={() => setPlatform("TikTok")}
            className={`px-4 py-2 rounded-full font-semibold text-sm ${
              platform === "TikTok"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            TikTok
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {packages[platform].map((pkg, index) => (
          <PackageCard
            key={index}
            title={pkg.title}
            features={pkg.features}
            price={pkg.price}
          />
        ))}
      </div>
    </section>
  );
}
