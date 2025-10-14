import { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';

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
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

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
      default: 'bg-gray-500'
    };
    return colors[language] || colors.default;
  };

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work in AI, machine learning, and full-stack development
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedRepos.map((repo) => (
                <div
                  key={repo.id}
                  className="bg-gradient-to-br from-slate-900/50 to-slate-700/50 border border-slate-600 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Github className="text-white" size={20} />
                      </div>
                      {repo.language && (
                        <div className="flex items-center space-x-1">
                          <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                          <span className="text-xs text-gray-400">{repo.language}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-1">
                    {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 min-h-[60px]">
                    {repo.description || 'No description available'}
                  </p>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center space-x-4 text-sm text-gray-400 pt-4 border-t border-slate-600">
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-500" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork size={16} className="text-gray-400" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={16} className="text-gray-400" />
                      <span>{repo.watchers_count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              {!showAll && repos.length > 6 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 mr-4"
                >
                  View More Projects
                </button>
              )}
              <a
                href="https://github.com/tesfalegnp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View All on GitHub
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
