import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");

  const platformInfo = {
    Instagram: {
      title: "Instagram Takipçi Satışı",
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
    <header className={`w-full py-16 px-6 text-white gradient ${current.gradient}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 flex justify-center gap-4">
          {Object.keys(platformInfo).map((platform) => (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 shadow-md hover:opacity-90 ${
                selectedPlatform === platform
                  ? "bg-white text-black"
                  : "bg-black bg-opacity-20"
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        <motion.h1
          key={current.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold mb-4"
        >
          {current.title}
        </motion.h1>

        <motion.p
          key={current.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg max-w-2xl mx-auto mb-6"
        >
          {current.description}
        </motion.p>

        <a
          href="#"
          className="inline-block mt-4 px-6 py-3 bg-white text-black text-sm font-semibold rounded-md shadow-md hover:scale-105 transition-transform"
        >
          Hemen Takipçi Satın Al
        </a>
      </div>
    </header>
  );
}