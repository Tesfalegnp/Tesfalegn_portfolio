import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TP</span>
            </div>
            <span className="text-white font-semibold text-xl">Tesfalegn Petros</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/tesfalegnp" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/tesfalegn-petros" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:tesfalegn@example.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="block text-gray-300 hover:text-cyan-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="block text-gray-300 hover:text-cyan-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </button>
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/tesfalegnp" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/tesfalegn-petros" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:tesfalegn@example.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
