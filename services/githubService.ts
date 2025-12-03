import { GitHubRepo } from '../types';

const USERNAME = 'athilalexandre';

// Fallback data in case GitHub API rate limit is hit or network fails
const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'portfolio-v2',
    description: 'Meu portfólio pessoal construído com React, TypeScript e Tailwind CSS. Design responsivo e moderno com suporte a dark mode.',
    html_url: `https://github.com/${USERNAME}/portfolio-v2`,
    homepage: 'https://athila.dev',
    topics: ['react', 'typescript', 'tailwind', 'vite'],
    language: 'TypeScript',
    stargazers_count: 15,
    updated_at: new Date().toISOString(),
    fork: false,
  },
  {
    id: 2,
    name: 'game-engine-prototype',
    description: 'Um protótipo de engine de jogo 2D focado em performance, utilizando HTML5 Canvas e WebGL para renderização.',
    html_url: `https://github.com/${USERNAME}/game-engine-prototype`,
    homepage: null,
    topics: ['javascript', 'canvas', 'game-dev', 'webgl'],
    language: 'JavaScript',
    stargazers_count: 8,
    updated_at: new Date().toISOString(),
    fork: false,
  },
  {
    id: 3,
    name: 'ai-image-generator-wrapper',
    description: 'Interface front-end para geração de imagens via API, com controles avançados de prompt e galeria local.',
    html_url: `https://github.com/${USERNAME}/ai-image-generator`,
    homepage: null,
    topics: ['react', 'ai', 'api-integration', 'ux'],
    language: 'TypeScript',
    stargazers_count: 12,
    updated_at: new Date().toISOString(),
    fork: false,
  },
   {
    id: 4,
    name: 'react-native-finance',
    description: 'App mobile para controle financeiro pessoal com gráficos interativos e sincronização em nuvem.',
    html_url: `https://github.com/${USERNAME}/finance-app`,
    homepage: null,
    topics: ['react-native', 'mobile', 'finance'],
    language: 'JavaScript',
    stargazers_count: 5,
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
    
    // Filter and sort
    return data
      .filter(repo => !repo.fork && repo.description) // Prefer non-forks with descriptions
      .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
      .slice(0, 6); // Take top 6
      
  } catch (error) {
    console.error('Error fetching repos:', error);
    return FALLBACK_REPOS;
  }
};