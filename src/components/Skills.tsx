import { Brain, Code, Database, Cpu, Cloud, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Brain,
      title: 'AGI & Cognitive Systems',
      skills: ['MeTTa', 'OpenCog', 'OpenPsi', 'Hyperon', 'Atomese', 'Logic-based Reasoning', 'Ontological Engineering', 'Neuro-Symbolic Integration']
    },
    {
      icon: Cpu,
      title: 'AI & ML Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'Hugging Face', 'OpenAI API', 'RAG pipelines']
    },
    {
      icon: Code,
      title: 'Programming & Tools',
      skills: ['Python', 'FastAPI', 'Node.js', 'React.js', 'Next.js', 'MongoDB', 'PostgreSQL', 'Redis', 'Git']
    },
    {
      icon: Cloud,
      title: 'AI Infrastructure',
      skills: ['Docker', 'GitHub Actions', 'AWS EC2', 'AWS Lambda', 'Streamlit', 'Google Colab']
    }
  ];

  const interests = [
    'AGI Research',
    'Symbolic Reasoning',
    'AI Ethics',
    'Open Source',
    'Reading AI Papers',
    'New Technology Search',
    'Coding',
    'Sport',
    'Music'
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-slate-900/50 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Wrench className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">Interests & Hobbies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="px-5 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-gray-300 font-medium hover:bg-cyan-500/10 hover:text-cyan-400 transition-all"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
