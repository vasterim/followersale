import { useState } from "react";
import { Menu, X, Instagram, Heart, Users, Play, MessageCircle, BadgeDollarSign, Bell, Megaphone, Mail, Globe } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: 'Instagram',
      icon: <Instagram size={20} className="text-gray-700" />,
      submenu: [
        { title: 'Likes', icon: <Heart size={16} /> },
        { title: 'Followers', icon: <Users size={16} /> },
        { title: 'Views', icon: <Play size={16} /> }
      ]
    },
    {
      title: 'TikTok',
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>,
      submenu: [
        { title: 'Followers', icon: <Users size={16} /> },
        { title: 'Likes', icon: <Heart size={16} /> },
        { title: 'Views', icon: <Play size={16} /> }
      ]
    },
    {
      title: 'Fiyatlandırma ve Fırsatlar',
      icon: <BadgeDollarSign size={20} className="text-gray-700" />,
      submenu: [
        { title: 'Fiyatlandırma', icon: <BadgeDollarSign size={16} /> },
        { title: 'Duyurular', icon: <Bell size={16} /> },
        { title: 'Kampanyalar', icon: <Megaphone size={16} /> }
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
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-[#4070F4] text-xl font-bold">
              Likeboosty
            </a>
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
                      <a
                        key={subItem.title}
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.icon}
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#4070F4] py-2 transition-colors text-sm">
                <Globe size={20} />
                TR
              </button>
            </div>

            {/* Try Free Button */}
            <button className="bg-[#4070F4] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors text-sm font-medium">
              Ücretsiz Dene
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-600 hover:text-[#4070F4] transition-colors"
            >
              <Menu size={24} />
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
                      <a
                        key={subItem.title}
                        href="#"
                        className="flex items-center gap-2 py-2 text-sm text-gray-500 hover:text-[#4070F4]"
                      >
                        {subItem.icon}
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Language Selector in Mobile */}
            <div className="px-4 py-2 border-t mt-2">
              <button className="flex items-center gap-2 text-gray-700">
                <Globe size={20} />
                TR
              </button>
            </div>

            <div className="px-4 mt-4">
              <button className="w-full bg-[#4070F4] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors text-sm font-medium">
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