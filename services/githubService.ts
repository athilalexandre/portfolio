import { GitHubRepo } from '../types';

const USERNAME = 'athilalexandre';

// Fallback data in case GitHub API rate limit is hit or network fails
const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'AllNime',
    description: 'Aplicação web completa para gerenciar sua jornada pelos animes. Sistema de busca avançado, filtros inteligentes, listas personalizadas, autenticação com Google e controle de conteúdo adulto.',
    html_url: `https://github.com/${USERNAME}/AllNime`,
    homepage: 'https://allnime.vercel.app',
    topics: ['react', 'vite', 'firebase', 'anime', 'tailwindcss', 'jikan-api'],
    language: 'JavaScript',
    stargazers_count: 8,
    updated_at: new Date().toISOString(),
    fork: false,
  },
  {
    id: 2,
    name: 'memoriae',
    description: 'Aplicação web moderna para criar e compartilhar experiências memoráveis com fotos, mensagens e música. Interface elegante com múltiplos layouts e upload de imagens.',
    html_url: `https://github.com/${USERNAME}/memoriae`,
    homepage: 'https://memoriae.vercel.app',
    topics: ['react', 'nextjs', 'typescript', 'firebase', 'uploadcare'],
    language: 'TypeScript',
    stargazers_count: 12,
    updated_at: new Date().toISOString(),
    fork: false,
  },
  {
    id: 3,
    name: 'digimon-searcher',
    description: 'API RESTful e frontend para busca completa de Digimons. Backend Node.js com Express, sincronização com DAPI e Wikimon, paginação, filtros avançados e dataset local enriquecido.',
    html_url: `https://github.com/${USERNAME}/digimon-searcher`,
    homepage: null,
    topics: ['nodejs', 'express', 'api', 'digimon', 'bootstrap', 'rest-api'],
    language: 'JavaScript',
    stargazers_count: 5,
    updated_at: new Date().toISOString(),
    fork: false,
  },
  {
    id: 4,
    name: 'portfolio',
    description: 'Meu portfólio profissional desenvolvido com React, TypeScript e Vite. Design moderno com tema dark, animações suaves e integração com GitHub API.',
    html_url: `https://github.com/${USERNAME}/portfolio`,
    homepage: 'https://athilalexandre.dev',
    topics: ['react', 'typescript', 'vite', 'tailwindcss', 'portfolio'],
    language: 'TypeScript',
    stargazers_count: 15,
    updated_at: new Date().toISOString(),
    fork: false,
  },
];

export const fetchRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`);

    if (!response.ok) {
      console.warn('GitHub API Request Failed, using fallback data.');
      return FALLBACK_REPOS;
    }

    const data: GitHubRepo[] = await response.json();

    // Filter: only non-forks with descriptions, sorted by update date
    return data
      .filter(repo => !repo.fork && repo.description) // Prefer non-forks with descriptions
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()); // Sort by most recently updated

  } catch (error) {
    console.error('Error fetching repos:', error);
    return FALLBACK_REPOS;
  }
};