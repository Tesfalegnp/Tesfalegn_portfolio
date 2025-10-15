//Tesfalegn_portfolio/src/components/About.tsx
import { Award, BookOpen, MapPin, Phone, Mail, Calendar, Rocket, Brain } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      period: "2023 - Present",
      role: "AI Engineer & Full-Stack Developer",
      company: "iCog-Labs & Independent Projects",
      achievements: [
        "Researched AGI architectures using MeTTa, OpenCog, and OpenPsi for symbolic reasoning",
        "Built LLM-powered apps (React + FastAPI + Redis) and integrated LangChain/OpenAI APIs for automation",
        "Developing and deploying Hugging Face models for text and health-related AI tasks",
        "Contributed to SingularityNET-aligned research on neuro-symbolic AI and reasoning systems",
        "Leading and publishing university ML projects focused on predictive modeling and intelligent systems"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-4 shimmer-text"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Innovative AI Engineer passionate about building the future of Artificial General Intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Professional Summary */}
          <div className="space-y-6">
            <div className="gradient-border rounded-2xl p-8 hover-lift group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Innovative <span className="text-cyan-400 font-semibold">AI Engineer</span> with hands-on experience in{' '}
                  <span className="text-purple-400 font-semibold">Artificial General Intelligence (AGI)</span> research,
                  neuro-symbolic reasoning, and full-stack AI development at iCog-Labs.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Skilled in integrating <span className="text-pink-400 font-semibold">symbolic cognitive architectures</span>{' '}
                  (MeTTa, OpenCog, OpenPsi) with modern LLM systems.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Passionate about developing <span className="text-green-400 font-semibold">intelligent, explainable, and self-evolving AI systems</span>{' '}
                  that bridge symbolic and neural paradigms.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-effect rounded-xl p-6 hover-lift group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white font-semibold">Addis Ababa, Ethiopia</div>
                    <div className="text-cyan-400 text-sm">Remote-First</div>
                  </div>
                </div>
              </div>
              <div className="glass-effect rounded-xl p-6 hover-lift group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white font-semibold">+251-916-225-842</div>
                    <div className="text-cyan-400 text-sm">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            {/* Education */}
            <div className="glass-effect rounded-2xl p-8 hover-lift group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Calendar className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="text-xl font-semibold text-white">B.Sc. in Software Engineering</div>
                    <div className="text-gradient font-medium">Mizan Tepi University</div>
                    <div className="text-gray-400">2014 - 2018</div>
                    <div className="text-gray-300 mt-3">
                      <strong className="text-cyan-400">Relevant Coursework:</strong> Machine Learning, Distributed Systems, Algorithms, AI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-effect rounded-2xl p-8 hover-lift group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "DeepLearning.AI LLM Specialization",
                    description: "Advanced LLM training and deployment",
                    icon: Brain
                  },
                  {
                    title: "AGI & Cognitive Systems Contributor",
                    description: "SingularityNET research contributor",
                    icon: Award
                  },
                  {
                    title: "Research Publication",
                    description: "Under Progress",
                    icon: BookOpen
                  }
                ].map((cert, index) => (
                  <div key={index} className="flex items-start space-x-4 group/item hover:bg-white/5 rounded-lg p-3 transition-all">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      <cert.icon className="text-white" size={16} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{cert.title}</div>
                      <div className="text-gray-400 text-sm">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="gradient-border rounded-2xl p-8 hover-lift group">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Brain className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-cyan-500/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gradient">{exp.role}</h4>
                  <span className="text-cyan-400 font-medium glass-effect px-4 py-2 rounded-lg">
                    {exp.period}
                  </span>
                </div>
                <div className="text-gray-300 mb-6 text-lg font-medium">{exp.company}</div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-3 group/item">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-gray-300 leading-relaxed flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}