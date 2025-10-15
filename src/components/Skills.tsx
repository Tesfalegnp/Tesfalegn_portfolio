// Portfolio/Tesfalegn_portfolio/src/components/Skills.tsx
import { Brain, Code, Database, Cpu, Cloud, Wrench, Zap, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      icon: Brain,
      title: 'AGI & Cognitive Systems',
      skills: ['MeTTa', 'OpenCog', 'OpenPsi', 'Hyperon', 'Atomese', 'Logic-based Reasoning', 'Ontological Engineering', 'Neuro-Symbolic Integration'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cpu,
      title: 'AI & ML Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'Hugging Face', 'OpenAI API', 'RAG pipelines'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Code,
      title: 'Programming & Tools',
      skills: ['Python', 'FastAPI', 'Node.js', 'React.js', 'Next.js', 'MongoDB', 'PostgreSQL', 'Redis', 'Git'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Cloud,
      title: 'AI Infrastructure',
      skills: ['Docker', 'GitHub Actions', 'AWS EC2', 'AWS Lambda', 'Streamlit', 'Google Colab'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const interests = [
    { name: 'AGI Research', emoji: '🧠' },
    { name: 'Symbolic Reasoning', emoji: '⚡' },
    { name: 'AI Ethics', emoji: '🌐' },
    { name: 'Open Source', emoji: '🔓' },
    { name: 'Reading AI Papers', emoji: '📚' },
    { name: 'New Technology Search', emoji: '🔍' },
    { name: 'Coding', emoji: '💻' },
    { name: 'Sport', emoji: '⚽' },
    { name: 'Music', emoji: '🎵' }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-4 shimmer-text"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Expertise in cutting-edge AI technologies and cognitive systems
          </p>
        </div>

        {/* Skills Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                activeCategory === index
                  ? 'glass-effect text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <category.icon size={20} />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl p-8 hover-lift transform transition-all duration-500 ${
                activeCategory === index ? 'scale-105 border-cyan-500/50' : 'scale-100'
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-cyan-400 font-medium hover-lift glow-on-hover group relative overflow-hidden"
                  >
                    <span className="relative z-10">{skill}</span>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interests & Hobbies */}
        <div className="gradient-border rounded-2xl p-8 hover-lift">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Zap className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Interests & Hobbies</h3>
              <p className="text-gray-400">Beyond code and algorithms</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 text-center hover-lift group cursor-pointer"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {interest.emoji}
                </div>
                <div className="text-gray-300 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  {interest.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { skill: 'AGI Research', level: 90, color: 'bg-purple-500' },
            { skill: 'Machine Learning', level: 85, color: 'bg-cyan-500' },
            { skill: 'Full-Stack Development', level: 80, color: 'bg-green-500' }
          ].map((item, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 hover-lift">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-semibold">{item.skill}</span>
                <span className="text-cyan-400 font-bold">{item.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div
                  className={`${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}