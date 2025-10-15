// Portfolio/Tesfalegn_portfolio/src/components/Header.tsx
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Cpu, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <Cpu className="text-white" size={24} />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl leading-5">Tesfalegn</span>
              <span className="text-gradient font-semibold text-sm">Petros</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  {activeSection === item.id && <Sparkles size={16} className="animate-pulse" />}
                  <span>{item.label}</span>
                </span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            {[
              { icon: Github, href: 'https://github.com/tesfalegnp', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/tesfalegn-petros', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:tesfalegn@example.com', label: 'Email' }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover-lift glow-on-hover group relative"
              >
                <social.icon className="text-cyan-400 group-hover:scale-110 transition-transform" size={20} />
                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {social.label}
                </div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover-lift text-white relative"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-2xl p-6 space-y-4 animate-slide-in-right border border-cyan-500/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-4 py-3 rounded-xl font-medium text-left transition-all duration-300 flex items-center space-x-3 ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                }`}
              >
                {activeSection === item.id && <Sparkles size={16} className="animate-pulse" />}
                <span>{item.label}</span>
              </button>
            ))}
            
            <div className="flex space-x-4 pt-4 border-t border-cyan-500/20">
              {[
                { icon: Github, href: 'https://github.com/tesfalegnp' },
                { icon: Linkedin, href: 'https://linkedin.com/in/tesfalegn-petros' },
                { icon: Mail, href: 'mailto:tesfalegn@example.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 glass-effect rounded-xl flex items-center justify-center hover-lift text-cyan-400"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}