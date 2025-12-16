import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'User Guide', id: 'how-to' },
    { label: 'Wiring & Code', id: 'wiring' },
    { label: 'The Team', id: 'team' },
  ];

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Cpu className="w-8 h-8 text-accent" />
            <div>
              <h1 className="text-xl font-bold leading-tight">Mini Mechatronics Training Kit</h1>
              <p className="text-xs text-gray-300 opacity-80 hidden sm:block">Dept. of Mechatronics Engineering</p>
              <p className="text-xs text-gray-300 opacity-80 hidden sm:block">Federal University of Agriculture Abeokuta</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-accent transition-colors font-semibold"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-600 pt-4">
            <ul className="flex flex-col space-y-4 text-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full py-2 hover:bg-gray-700 rounded transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;