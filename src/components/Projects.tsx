//Portfolio/Tesfalegn_portfolio/src/components/Projects.tsx
import { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Eye, Calendar, Sparkles, Zap } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string;
  topics: string[];
  updated_at: string;
  created_at: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/tesfalegnp/repos?sort=updated&per_page=100');
      const data = await response.json();

      const sortedRepos = data
        .filter((repo: GitHubRepo) => !repo.name.includes('fork'))
        .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)
        .slice(0, 12);

      setRepos(sortedRepos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      setLoading(false);
    }
  };

  const featuredProjects = [
    {
      name: "AGI Research Framework",
      description: "Advanced framework for Artificial General Intelligence research using neuro-symbolic approaches",
      tech: ["Python", "MeTTa", "OpenCog", "PyTorch"],
      stars: 24,
      category: "ai-research"
    },
    {
      name: "Cognitive Architecture System",
      description: "Implementation of cognitive architectures for intelligent agent systems",
      tech: ["Python", "OpenPsi", "React", "FastAPI"],
      stars: 18,
      category: "ai-research"
    }
  ];

  const displayedRepos = showAll ? repos : repos.slice(0, 6);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      Java: 'bg-red-500',
      Go: 'bg-cyan-500',
      Rust: 'bg-orange-500',
      HTML: 'bg-orange-400',
      CSS: 'bg-pink-500',
      'Jupyter Notebook': 'bg-purple-500',
      default: 'bg-gray-500'
    };
    return colors[language] || colors.default;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <section id="projects" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-1/4 w-16 h-16 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/3 w-12 h-12 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-4 shimmer-text"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my latest work in AI, machine learning, and full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="gradient-border rounded-2xl p-2 hover-lift group"
            >
              <div className="bg-slate-900 rounded-xl p-8 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-semibold">{project.stars}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-semibold">Featured Project</span>
                  <div className="flex space-x-3">
                    <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Github size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Projects */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {displayedRepos.map((repo) => (
                <div
                  key={repo.id}
                  className="glass-effect rounded-2xl p-6 hover-lift group relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <Github className="text-white" size={20} />
                        </div>
                        {repo.language && (
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                            <span className="text-xs text-gray-400 font-medium">{repo.language}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-1 group-hover:text-cyan-400 transition-colors">
                      {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 min-h-[60px]">
                      {repo.description || 'No description available'}
                    </p>

                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.topics.slice(0, 4).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 text-xs"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-slate-600">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{formatDate(repo.updated_at)}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star size={14} className="text-yellow-500" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork size={14} className="text-gray-400" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4">
              {!showAll && repos.length > 6 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover-lift glow-on-hover flex items-center space-x-3 mx-auto"
                >
                  <Sparkles size={20} />
                  <span>View More Projects</span>
                </button>
              )}
              <div>
                <a
                  href="https://github.com/tesfalegnp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-4 glass-effect text-white rounded-xl font-semibold hover-lift border border-cyan-500/30"
                >
                  <Github size={20} />
                  <span>Explore All on GitHub</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}