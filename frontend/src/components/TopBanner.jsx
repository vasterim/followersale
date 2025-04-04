import { useState } from 'react';
import { IoClose } from "react-icons/io5";

const TopBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative bg-[#F37022] text-white py-2 px-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm sm:text-base">
                    <span className="hidden sm:inline">🌟</span>
                    <span>Özel Teklif: Kaydolun ve 15 ücretsiz kredi kazanın!</span>
                </div>
                <div className="flex items-center gap-4">
                    <a 
                        href="#" 
                        className="hidden sm:inline-flex items-center px-4 py-1 bg-white text-[#F37022] rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
                    >
                        Ücretsiz Deneyin →
                    </a>
                    <button 
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-[#d65d15] rounded-full transition-colors"
                        aria-label="Kapat"
                    >
                        <IoClose size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner; 