import { Award, BookOpen, MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Innovative AI Engineer with hands-on experience in Artificial General Intelligence (AGI) research,
                neuro-symbolic reasoning, and full-stack AI development at iCog-Labs. Skilled in integrating symbolic
                cognitive architectures (MeTTa, OpenCog, OpenPsi) with modern LLM systems.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Passionate about developing intelligent, explainable, and self-evolving AI systems that bridge
                symbolic and neural paradigms.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <MapPin className="text-cyan-400 mb-2" size={24} />
                <div className="text-sm text-gray-400">Location</div>
                <div className="text-white font-semibold">Addis Ababa, Ethiopia</div>
                <div className="text-sm text-cyan-400">Remote-First</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <Phone className="text-cyan-400 mb-2" size={24} />
                <div className="text-sm text-gray-400">Phone</div>
                <div className="text-white font-semibold">+251-916-225-842</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-semibold text-white">B.Sc. in Software Engineering</div>
                <div className="text-cyan-400">Mizan Tepi University</div>
                <div className="text-gray-400">2014 - 2018</div>
                <div className="text-gray-300 mt-4">
                  <strong>Relevant Coursework:</strong> Machine Learning, Distributed Systems, Algorithms, AI
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <div className="text-white font-semibold">DeepLearning.AI LLM Specialization</div>
                    <div className="text-gray-400 text-sm">Advanced LLM training and deployment</div>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <div className="text-white font-semibold">AGI & Cognitive Systems Contributor</div>
                    <div className="text-gray-400 text-sm">SingularityNET research contributor</div>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <div className="text-white font-semibold">Research Publication</div>
                    <div className="text-gray-400 text-sm">Under Progress</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Professional Experience</h3>
          <div className="space-y-4">
            <div>
              <div className="flex flex-wrap items-center justify-between mb-2">
                <h4 className="text-xl font-semibold text-cyan-400">AI Engineer & Full-Stack Developer</h4>
                <span className="text-gray-400">2023 - Present</span>
              </div>
              <div className="text-gray-300 mb-4">iCog-Labs & Independent Projects</div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Researched AGI architectures using MeTTa, OpenCog, and OpenPsi for symbolic reasoning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Built LLM-powered apps (React + FastAPI + Redis) and integrated LangChain/OpenAI APIs for automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Developing and deploying Hugging Face models for text and health-related AI tasks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Contributed to SingularityNET-aligned research on neuro-symbolic AI and reasoning systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Leading and publishing university ML projects focused on predictive modeling and intelligent systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
