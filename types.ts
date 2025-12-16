export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

export interface Skill {
  name: string;
  category: 'Linguagem' | 'Framework' | 'Backend' | 'Estilo' | 'Ferramenta' | 'Outros';
  iconName: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  phrase: string;
  location: string;
  avatarUrl: string;
  bio: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  }
}