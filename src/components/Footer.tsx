// Portfolio/Tesfalegn_portfolio/src/components/Footer.tsx
import { Github, Linkedin, Mail, Heart, ArrowUp, Cpu, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const expertise = [
    'AGI Research',
    'Symbolic Reasoning',
    'Machine Learning',
    'Full-Stack Development',
    'AI Ethics',
    'Cognitive Systems'
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/tesfalegnp', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/tesfalegn-petros', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tesfalegn@example.com', label: 'Email' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-10 right-20 w-12 h-12 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Cpu className="text-white" size={24} />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-30"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">Tesfalegn Petros</span>
                <span className="text-gradient font-semibold">AI Engineer & AGI Researcher</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
              Building the future of Artificial General Intelligence through neuro-symbolic reasoning, 
              cognitive architectures, and intelligent systems that bridge symbolic and neural paradigms.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover-lift glow-on-hover group relative"
                >
                  <social.icon className="text-cyan-400 group-hover:scale-110 transition-transform" size={20} />
                  <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center space-x-2">
              <Sparkles size={18} className="text-cyan-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center space-x-2">
              <Cpu size={18} className="text-cyan-400" />
              <span>Expertise</span>
            </h3>
            <ul className="space-y-3">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          <div className="text-gray-400 text-sm flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} fill="currentColor" />
              <span>by Tesfalegn Petros</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>{currentYear} - All rights reserved</span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-cyan-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center hover-lift glow-on-hover transition-all transform hover:scale-110 group"
            >
              <ArrowUp className="text-white group-hover:animate-bounce" size={20} />
            </button>
          </div>
        </div>

        {/* Inspiration Quote */}
        <div className="text-center mt-8 pt-8 border-t border-slate-800">
          <p className="text-gray-500 text-sm italic">
            "The best way to predict the future is to invent it." - Alan Kay
          </p>
        </div>
      </div>
    </footer>
  );
}