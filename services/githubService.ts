import { GitHubRepo } from '../types';

// Hardcoded data to guarantee availability and avoid API rate limits
const HARDCODED_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "portfolio",
    description: "Meu portfólio profissional desenvolvido com React, TypeScript e Vite.",
    html_url: "https://github.com/athilalexandre/portfolio",
    homepage: "https://athilaalexandre.dev",
    topics: ["typescript", "react", "vite", "portfolio"],
    language: "TypeScript",
    stargazers_count: 15,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 2,
    name: "gamebox",
    description: "Coleção de mini-games web desenvolvidos com JavaScript puro.",
    html_url: "https://github.com/athilalexandre/gamebox",
    homepage: null,
    topics: ["javascript", "games"],
    language: "JavaScript",
    stargazers_count: 5,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 3,
    name: "digibot",
    description: "Bot para Discord com funcionalidades de RPG e interação.",
    html_url: "https://github.com/athilalexandre/digibot",
    homepage: null,
    topics: ["javascript", "discord-bot"],
    language: "JavaScript",
    stargazers_count: 3,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 4,
    name: "memoriae",
    description: "OurHistory - Crie e compartilhe experiências memoráveis com fotos e música.",
    html_url: "https://github.com/athilalexandre/memoriae",
    homepage: "https://memoriae.vercel.app",
    topics: ["typescript", "react", "nextjs"],
    language: "TypeScript",
    stargazers_count: 12,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 5,
    name: "AllNime",
    description: "Aplicação web completa para gerenciar sua jornada pelos animes.",
    html_url: "https://github.com/athilalexandre/AllNime",
    homepage: "https://allnime.vercel.app",
    topics: ["javascript", "react", "firebase"],
    language: "JavaScript",
    stargazers_count: 8,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 6,
    name: "digimon-searcher",
    description: "API RESTful e frontend para busca completa de Digimons.",
    html_url: "https://github.com/athilalexandre/digimon-searcher",
    homepage: null,
    topics: ["javascript", "nodejs", "api"],
    language: "JavaScript",
    stargazers_count: 5,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 7,
    name: "g1",
    description: "Using Llama-3.1 70b on Groq to create o1-like reasoning chains.",
    html_url: "https://github.com/athilalexandre/g1",
    homepage: null,
    topics: ["python", "ai", "llm"],
    language: "Python",
    stargazers_count: 20,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 8,
    name: "putInputOut",
    description: "Biblioteca utilitária para manipulação de inputs complexos.",
    html_url: "https://github.com/athilalexandre/putInputOut",
    homepage: null,
    topics: ["typescript"],
    language: "TypeScript",
    stargazers_count: 2,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 9,
    name: "randomovier",
    description: "App para recomendar filmes aleatórios baseado em preferências.",
    html_url: "https://github.com/athilalexandre/randomovier",
    homepage: null,
    topics: ["typescript", "react"],
    language: "TypeScript",
    stargazers_count: 1,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 10,
    name: "projeto_streamer",
    description: "Layout responsivo para página de streamer.",
    html_url: "https://github.com/athilalexandre/projeto_streamer",
    homepage: null,
    topics: ["css", "html"],
    language: "CSS",
    stargazers_count: 4,
    updated_at: new Date().toISOString(),
    fork: false
  }
];

// Fallback extra repos if needed, but the main list covers most important ones
const EXTRA_REPOS: GitHubRepo[] = [
  {
    id: 11,
    name: "dsr-translation-br",
    description: "Tradução não oficial do Digimon Super Rumble para PT-BR.",
    html_url: "https://github.com/athilalexandre/dsr-translation-br",
    homepage: null,
    topics: ["translation", "game-mod"],
    language: "Outros",
    stargazers_count: 1,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 12,
    name: "darkmode001",
    description: "Implementação simples de Dark Mode com JS puro.",
    html_url: "https://github.com/athilalexandre/darkmode001",
    homepage: null,
    topics: ["javascript", "css"],
    language: "JavaScript",
    stargazers_count: 1,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 13,
    name: "responsive_form",
    description: "Formulário totalmente responsivo e acessível.",
    html_url: "https://github.com/athilalexandre/responsive_form",
    homepage: null,
    topics: ["css", "html"],
    language: "CSS",
    stargazers_count: 0,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 14,
    name: "icon_animation",
    description: "Estudos de animação de ícones com CSS.",
    html_url: "https://github.com/athilalexandre/icon_animation",
    homepage: null,
    topics: ["css", "animation"],
    language: "CSS",
    stargazers_count: 0,
    updated_at: new Date().toISOString(),
    fork: false
  },
  {
    id: 15,
    name: "cssborderanimation001",
    description: "Animação de borda com gradiente rotativo.",
    html_url: "https://github.com/athilalexandre/cssborderanimation001",
    homepage: null,
    topics: ["css", "animation"],
    language: "CSS",
    stargazers_count: 0,
    updated_at: new Date().toISOString(),
    fork: false
  }
];

// Backup list just in case API fails
const BACKUP_REPOS = [...HARDCODED_REPOS, ...EXTRA_REPOS];

const USERNAME = 'athilalexandre';

export const fetchRepos = async (): Promise<GitHubRepo[]> => {
  try {
    // 1. Try to fetch from GitHub API (Real-time data)
    const response = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`);

    if (!response.ok) {
      throw new Error('GitHub API Request Failed');
    }

    const data: any[] = await response.json();

    // 2. Filter and map to our format
    const realTimeData = data
      .filter(repo => !repo.fork) // Showing only personal projects (source)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage || null,
        topics: repo.topics || [],
        language: repo.language || 'Outros',
        stargazers_count: repo.stargazers_count,
        updated_at: repo.updated_at,
        fork: repo.fork
      }))
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

    // If API returns empty (edge case), use backup
    if (realTimeData.length === 0) return BACKUP_REPOS;

    return realTimeData;

  } catch (error) {
    console.warn('GitHub API failed or rate limited, using static backup data.', error);
    // 3. Fallback to hardcoded data if API fails
    return BACKUP_REPOS;
  }
};