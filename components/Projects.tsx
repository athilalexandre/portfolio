import React, { useEffect, useState } from 'react';
import { GitHubRepo } from '../types';
import { fetchRepos } from '../services/githubService';
import { Github, ExternalLink, Star, ChevronLeft, ChevronRight } from 'lucide-react';
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

  return (
    <section id="projetos" className="py-20 bg-slate-800/30">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-slate-800 h-64 rounded-xl"></div>
            ))}
          </div>
        ) : (
          <div className="relative group">
            {/* Navigation Buttons */}
            <button
              className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-brand-primary/90 hover:bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-30"
              aria-label="Projeto anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-brand-primary/90 hover:bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-30"
              aria-label="Próximo projeto"
            >
              <ChevronRight size={24} />
            </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-slate-600 !opacity-100',
                bulletActiveClass: '!bg-brand-primary !scale-125',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={repos.length > 3}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="!pb-12"
            >
              {repos.map((repo) => (
                <SwiperSlide key={repo.id}>
                  <div
                    className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 flex flex-col hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2 transition-all duration-300 h-full"
                  >
                    {/* Card Header with gradient */}
                    <div className="h-2 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent"></div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white truncate pr-2" title={repo.name}>
                          {repo.name}
                        </h3>
                        <div className="flex gap-3 text-slate-400 flex-shrink-0">
                          {repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-brand-accent transition-colors"
                              title="Ver Demo"
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            title="Ver Código"
                          >
                            <Github size={20} />
                          </a>
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
                        {repo.description || "Sem descrição disponível."}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {repo.language && (
                          <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md border border-slate-600">
                            {repo.language}
                          </span>
                        )}
                        {repo.topics.slice(0, 3).map(topic => (
                          <span key={topic} className="px-2 py-1 bg-slate-900/50 text-brand-primary text-xs rounded-md border border-brand-primary/20">
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-slate-500 text-sm mt-auto border-t border-slate-700 pt-4">
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-500" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
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