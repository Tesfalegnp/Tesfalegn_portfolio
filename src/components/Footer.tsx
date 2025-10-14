import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TP</span>
              </div>
              <span className="text-white font-semibold text-xl">Tesfalegn Petros</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI Engineer specializing in Artificial General Intelligence, neuro-symbolic reasoning,
              and building intelligent systems that bridge symbolic and neural paradigms.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tesfalegnp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500 transition-all"
              >
                <Github className="text-cyan-400" size={20} />
              </a>
              <a
                href="https://linkedin.com/in/tesfalegn-petros"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500 transition-all"
              >
                <Linkedin className="text-cyan-400" size={20} />
              </a>
              <a
                href="mailto:tesfalegn@example.com"
                className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500 transition-all"
              >
                <Mail className="text-cyan-400" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Expertise</h3>
            <ul className="space-y-2 text-gray-400">
              <li>AGI Research</li>
              <li>Symbolic Reasoning</li>
              <li>Machine Learning</li>
              <li>Full-Stack Development</li>
              <li>AI Ethics</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
            <span>Made with</span>
            <Heart className="text-red-500 mx-2" size={16} fill="currentColor" />
            <span>by Tesfalegn Petros</span>
            <span className="mx-2">•</span>
            <span>{currentYear}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-110"
          >
            <ArrowUp className="text-white" size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
