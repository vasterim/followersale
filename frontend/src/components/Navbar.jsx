import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInstagramOpen, setIsInstagramOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleInstagram = () => setIsInstagramOpen(!isInstagramOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-transparent bg-clip-text gradient text-2xl font-extrabold">
              Likeboosty
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-black font-medium">
              Anasayfa
            </a>
            <a href="#" className="text-gray-600 hover:text-black font-medium">
              Hakkında
            </a>
            <div className="relative">
              <button
                onClick={toggleInstagram}
                className="flex items-center text-gray-600 hover:text-black font-medium"
              >
                Instagram
                {isInstagramOpen ? (
                  <ChevronUp className="ml-1 w-4 h-4" />
                ) : (
                  <ChevronDown className="ml-1 w-4 h-4" />
                )}
              </button>
              {isInstagramOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-40">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Takipçi
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Beğeni
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-600 hover:text-black font-medium">
              İletişim
            </a>
            <a
              href="#"
              className="ml-4 bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
            >
              Ücretsiz Deneyin
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-black">
            Anasayfa
          </a>
          <a href="#" className="block text-gray-700 hover:text-black">
            Hakkında
          </a>
          <button
            onClick={toggleInstagram}
            className="w-full flex items-center justify-between text-gray-700 hover:text-black"
          >
            Instagram
            {isInstagramOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          {isInstagramOpen && (
            <div className="pl-4 space-y-1">
              <a href="#" className="block text-sm text-gray-600 hover:text-black">
                Takipçi
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-black">
                Beğeni
              </a>
            </div>
          )}
          <a href="#" className="block text-gray-700 hover:text-black">
            İletişim
          </a>
          <a
            href="#"
            className="block text-center bg-black text-white py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
          >
            Ücretsiz Deneyin
          </a>
        </div>
      )}
    </nav>
  );
}