// Portfolio/Tesfalegn_portfolio/src/components/Hero.tsx
import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Cpu, Brain, Zap } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 animated-grid"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full floating-shape"></div>
        <div
          className="absolute top-3/4 right-1/3 w-6 h-6 bg-purple-500 rounded-full floating-shape"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-400 rounded-full floating-shape"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100 slide-in-left'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-4 glow-on-hover">
              <Sparkles className="text-cyan-400" size={20} />
              <span className="text-gradient font-semibold text-sm">
                AI Engineer & AGI Researcher
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Tesfalegn{' '}
                <span className="text-gradient bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Petros
                </span>
              </h1>

              <div className="typewriter-container">
                <p className="text-xl md:text-2xl text-gray-300 mb-2 typewriter">
                  Building the future of Artificial General Intelligence
                </p>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Specializing in{' '}
                <span className="text-cyan-400 font-semibold">
                  neuro-symbolic reasoning
                </span>
                ,{' '}
                <span className="text-purple-400 font-semibold">
                  cognitive architectures
                </span>
                , and{' '}
                <span className="text-pink-400 font-semibold">
                  intelligent systems
                </span>{' '}
                that bridge symbolic and neural paradigms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={scrollToAbout}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover-lift glow-on-hover flex items-center space-x-2 group"
              >
                <Zap size={20} className="group-hover:animate-pulse" />
                <span>Explore My Work</span>
              </button>
              <a
                href="https://github.com/tesfalegnp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-effect text-white rounded-xl font-semibold hover-lift border border-cyan-500/30 flex items-center space-x-2"
              >
                <Cpu size={20} />
                <span>View GitHub</span>
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              {[
                { number: '5+', label: 'Years Experience', icon: Brain },
                { number: '50+', label: 'Projects', icon: Cpu },
                { number: 'AGI', label: 'Research Focus', icon: Sparkles },
                { number: '100%', label: 'Remote Ready', icon: Zap },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-4 text-center hover-lift group"
                >
                  <stat.icon
                    className="text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform"
                    size={24}
                  />
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100 slide-in-right'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="gradient-border rounded-3xl p-2 hover-lift">
                <img
                  src="./image/my_image.jpg"
                  alt="Tesfalegn Petros"
                  className="rounded-2xl object-cover shadow-2xl"
                  style={{
                    maxWidth: '380px',
                    height: 'auto',
                    borderRadius: '1rem',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-2000"></div>

              {/* Status indicator */}
              <div className="absolute bottom-6 left-6 glass-effect rounded-full px-4 py-2 flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce hover-lift"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-cyan-400 font-medium">Scroll Down</span>
          <ArrowDown size={32} />
        </div>
      </button>
    </section>
  );
}
