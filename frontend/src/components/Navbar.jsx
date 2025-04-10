import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, Heart, Users, Play, BadgeDollarSign, Bell, Megaphone, Mail } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = [
    { code: 'TR', name: 'Türkçe', flag: 'TR' },
    { code: 'EN', name: 'İngilizce', flag: 'GB' },
    { code: 'AR', name: 'Arapça', flag: 'SA' },
    { code: 'FR', name: 'Fransızca', flag: 'FR' },
    { code: 'DE', name: 'Almanca', flag: 'DE' },
    { code: 'IT', name: 'İtalyanca', flag: 'IT' },
    { code: 'RU', name: 'Rusça', flag: 'RU' },
    { code: 'ES', name: 'İspanyolca', flag: 'ES' }
  ];

  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const menuItems = [
    {
      title: 'Instagram',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>,
      submenu: [
        { title: 'Beğeniler', icon: <Heart size={16} />, path: '/instagram/likes' },
        { title: 'Takipçiler', icon: <Users size={16} />, path: '/instagram/followers' },
        { title: 'Görüntülenmeler', icon: <Play size={16} />, path: '/instagram/views' }
      ]
    },
    {
      title: 'TikTok',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>,
      submenu: [
        { title: 'Beğeniler', icon: <Heart size={16} />, path: '/tiktok/likes' },
        { title: 'Takipçiler', icon: <Users size={16} />, path: '/tiktok/followers' },
        { title: 'Görüntülenmeler', icon: <Play size={16} />, path: '/tiktok/views' }
      ]
    },
    {
      title: 'Fiyatlandırma ve Fırsatlar',
      icon: <BadgeDollarSign size={20} className="text-gray-700" />,
      submenu: [
        { title: 'Fiyatlandırma', icon: <BadgeDollarSign size={16} />, path: '/pricing' },
        { title: 'Duyurular', icon: <Bell size={16} />, path: '/announcements' },
        { title: 'Kampanyalar', icon: <Megaphone size={16} />, path: '/campaigns' }
      ]
    },
    {
      title: 'İletişim',
      icon: <Mail size={20} className="text-gray-700" />,
      submenu: []
    }
  ];

  return (
    <nav className="bg-white shadow-md">
      {/* Desktop Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-600 hover:text-[#4070F4] transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-[#4070F4] text-xl font-bold">
              Likeboosty
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <button className="flex items-center gap-2 text-gray-700 hover:text-[#4070F4] py-2 transition-colors text-sm">
                  {item.icon}
                  {item.title}
                </button>
                {item.submenu.length > 0 && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.icon}
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            {/* Language Selector - Desktop Only */}
            <div className="hidden md:flex relative group">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-[#4070F4] py-2 transition-colors text-sm"
              >
                <ReactCountryFlag
                  countryCode={selectedLang.flag}
                  svg
                  style={{
                    width: '20px',
                    height: '20px',
                  }}
                />
                {selectedLang.code}
              </button>
              {/* Language Dropdown */}
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-10 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left"
                      >
                        <ReactCountryFlag
                          countryCode={lang.flag}
                          svg
                          style={{
                            width: '20px',
                            height: '20px',
                          }}
                        />
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Try Free Button */}
            <button className="bg-[#7C3AED] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors text-sm font-medium">
              Ücretsiz Dene
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar */}
        <div className="relative w-64 max-w-sm bg-white h-full shadow-xl">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold text-[#4070F4]">Likeboosty</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-[#4070F4] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="py-4">
            {menuItems.map((item) => (
              <div key={item.title} className="px-4">
                <div className="flex items-center gap-2 py-2 text-gray-700">
                  {item.icon}
                  {item.title}
                </div>
                {item.submenu.length > 0 && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="flex items-center gap-2 py-2 text-sm text-gray-500 hover:text-[#4070F4]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.icon}
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Language Selector in Mobile */}
            <div className="px-4 py-2 border-t mt-2">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-gray-700 w-full justify-between"
              >
                <div className="flex items-center gap-2">
                  <ReactCountryFlag
                    countryCode={selectedLang.flag}
                    svg
                    style={{
                      width: '20px',
                      height: '20px',
                    }}
                  />
                  {selectedLang.code}
                </div>
              </button>
              {/* Mobile Language Dropdown */}
              {isLangMenuOpen && (
                <div className="mt-2 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left"
                      >
                        <ReactCountryFlag
                          countryCode={lang.flag}
                          svg
                          style={{
                            width: '20px',
                            height: '20px',
                          }}
                        />
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="px-4 mt-4">
              <button className="w-full bg-[#7C3AED] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors text-sm font-medium">
                Ücretsiz Dene
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;