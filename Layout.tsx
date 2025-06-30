import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Key, Shield } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-800 p-2 rounded-lg">
                <Key className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-blue-800">Toronto</span>
                <span className="text-xl font-bold text-gray-700">Locksmith</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-blue-800'
                      : 'text-gray-600 hover:text-blue-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Emergency Call Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+14165551234"
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-800 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+14165551234"
                className="block w-full mt-4 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-red-700 transition-colors duration-200"
              >
                📞 Emergency Call
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Key className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Toronto Locksmith</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted 24/7 emergency locksmith service in Toronto. Fast, reliable, and professional.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                <span>Licensed & Insured</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>📞 (416) 555-1234</p>
                <p>📧 info@torontolocksmith.ca</p>
                <p>📍 Toronto, ON</p>
                <p className="text-yellow-400 font-semibold">24/7 Emergency Service</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Toronto Locksmith. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;