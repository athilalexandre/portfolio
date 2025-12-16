import React, { useEffect, useState } from 'react';
import { GitHubRepo } from '../types';
import { fetchRepos } from '../services/githubService';
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Code2,
  FileType,
  FileJson,
  Palette,
  Terminal,
  Gamepad2,
  Globe
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      const data = await fetchRepos();
      setRepos(data);
      setLoading(false);
    };
    getRepos();
  }, []);

  const getProjectIcon = (lang: string | null, topics: string[]) => {
    if (topics.includes('game') || topics.includes('games') || topics.includes('game-dev')) return <Gamepad2 size={40} />;
    if (topics.includes('ai') || topics.includes('python')) return <Terminal size={40} />;
    if (topics.includes('css') || topics.includes('html') || topics.includes('ui')) return <Palette size={40} />;

    switch (lang?.toLowerCase()) {
      case 'typescript': return <FileType size={40} />;
      case 'javascript': return <FileJson size={40} />;
      case 'html':
      case 'css': return <Palette size={40} />;
      case 'python': return <Terminal size={40} />;
      default: return <Code2 size={40} />;
    }
  };

  return (
    <section id="projetos" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projetos em Destaque</h2>
            <p className="text-slate-400">
              Navegue por todos os meus projetos públicos disponíveis no GitHub.
            </p>
          </div>
          <a
            href="https://github.com/athilalexandre"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-medium transition-colors mt-4 md:mt-0"
          >
            Ver todos no GitHub <ExternalLink size={16} />
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-slate-800 h-48 rounded-xl"></div>
            ))}
          </div>
        ) : (
          <div className="relative group/carousel px-4 md:px-12">
            {/* Navigation Buttons */}
            <button
              className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-[calc(50%+1.5rem)] z-10 w-10 h-10 md:w-12 md:h-12 bg-slate-800 border border-slate-700 hover:bg-brand-primary hover:border-brand-primary rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 disabled:opacity-30 disabled:hover:bg-slate-800 opacity-0 group-hover/carousel:opacity-100"
              aria-label="Projeto anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-[calc(50%+1.5rem)] z-10 w-10 h-10 md:w-12 md:h-12 bg-slate-800 border border-slate-700 hover:bg-brand-primary hover:border-brand-primary rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 disabled:opacity-30 disabled:hover:bg-slate-800 opacity-0 group-hover/carousel:opacity-100"
              aria-label="Próximo projeto"
            >
              <ChevronRight size={24} />
            </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="!pb-14"
            >
              {repos.map((repo) => (
                <SwiperSlide key={repo.id} className="h-auto">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div
                      className="bg-slate-800/50 hover:bg-slate-800 p-6 rounded-xl border border-slate-700/50 hover:border-brand-primary transition-all duration-300 flex flex-col items-center justify-center group/card h-full text-center relative overflow-hidden"
                    >
                      <div className="mb-4 text-slate-400 group-hover/card:text-brand-primary transition-colors transform group-hover/card:scale-110 duration-300">
                        {getProjectIcon(repo.language, repo.topics)}
                      </div>

                      <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1 w-full px-2" title={repo.name}>
                        {repo.name}
                      </h3>

                      {repo.language && (
                        <span className="text-xs uppercase tracking-wider text-slate-500 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700/50 mb-3">
                          {repo.language}
                        </span>
                      )}

                      {/* Hover Overlay with Links - Visible on Hover (Desktop) or Always (Mobile if needed) */}
                      <div className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 p-4">
                        <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                          {repo.description || "Projeto público no GitHub"}
                        </p>
                        <div className="flex gap-4">
                          <span className="text-white flex items-center gap-2 font-medium hover:text-brand-primary transition-colors">
                            <Github size={18} /> Código
                          </span>
                          {repo.homepage && (
                            <span
                              className="text-white flex items-center gap-2 font-medium hover:text-brand-accent transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(repo.homepage!, '_blank');
                              }}
                            >
                              <Globe size={18} /> Demo
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <div className="mt-8 text-center md:hidden">
          <a
            href="https://github.com/athilalexandre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-medium transition-colors"
          >
            Ver todos no GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;