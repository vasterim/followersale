import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Hizmetleriniz Instagram ve TikTok kurallarına uygun mu?",
      answer: "Evet, tüm hizmetlerimiz hem Instagram hem de TikTok politikalarına uygundur. Botlar veya sahte hesaplar değil, gerçek ve aktif hesaplar kullanıyoruz."
    },
    {
      id: 2,
      question: "Şifremi girmem gerekiyor mu?",
      answer: "Hayır, asla şifre istemiyoruz. Tek ihtiyacımız olan Instagram veya TikTok kullanıcı adınızdır. Güvenliğiniz bizim için çok önemli."
    },
    {
      id: 3,
      question: "Ödeme yapıldıktan sonra ne kadar sürer?",
      answer: "Ödemeniz onaylandıktan hemen sonra işlemleriniz başlar. Genellikle 1-3 dakika içinde etkileşimler hesabınıza yansımaya başlar."
    },
    {
      id: 4,
      question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
      answer: "Kredi kartı, banka kartı, havale/EFT ve diğer popüler ödeme yöntemlerini destekliyoruz. Tüm ödemeleriniz SSL ile güvence altındadır."
    },
    {
      id: 5,
      question: "Etkileşimde düşüş olacak mı?",
      answer: "Hayır, sağladığımız tüm etkileşimler kalıcıdır. Düşüş yaşanması durumunda telafi garantisi veriyoruz."
    },
    {
      id: 6,
      question: "Hesabım güvende mi?",
      answer: "Kesinlikle! Tüm işlemlerimiz Instagram ve TikTok politikalarına uygun olarak yapılmaktadır. Şifresiz sistem sayesinde hesap güvenliğiniz %100 koruma altındadır."
    },
    {
      id: 7,
      question: "Sorun yaşarsam nasıl destek alabilirim?",
      answer: "7/24 canlı destek ekibimiz her zaman yanınızda! Sağ alt köşedeki destek butonuna tıklayarak anında yardım alabilirsiniz."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Sol Taraf - Canlı Destek */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h2 className="text-[#6366F1] text-xl font-semibold mb-2">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-gray-600">
                Likeboosty hakkında en sık sorulan soruları derledik. 7/24 destek ekibimiz diğer tüm sorularınız için burada!
              </p>
            </div>

            {/* Canlı Destek Kartı */}
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Hala Sorularınız mı Var?</h3>
                  <p className="text-sm text-gray-500">7/24 Canlı Destek</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-[#6366F1] text-white py-3 rounded-xl hover:bg-[#4F46E5] transition-colors flex items-center justify-center gap-2">
                <span>Canlı Desteğe Bağlan</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sağ Taraf - Sorular */}
          <div className="md:col-span-8">
            <div className="space-y-3">
              {questions.map((q) => (
                <motion.div
                  key={q.id}
                  initial={false}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === q.id ? null : q.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                  >
                    <span className="font-medium">{q.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        openQuestion === q.id ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openQuestion === q.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600">{q.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 