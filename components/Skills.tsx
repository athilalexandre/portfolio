import React from 'react';
import { Skill } from '../types';
import {
  FileJson,
  FileType,
  Atom,
  Server,
  Layout,
  Box,
  Zap,
  Database,
  Network,
  GitBranch
} from 'lucide-react';

const skills: Skill[] = [
  { name: 'React.js', category: 'Framework', iconName: 'Atom' },
  { name: 'TypeScript', category: 'Linguagem', iconName: 'FileType' },
  { name: 'JavaScript', category: 'Linguagem', iconName: 'FileJson' },
  { name: 'Next.js', category: 'Framework', iconName: 'Box' },
  { name: 'Node.js', category: 'Backend', iconName: 'Server' },
  { name: 'Vite', category: 'Ferramenta', iconName: 'Zap' },
  { name: 'Tailwind CSS', category: 'Estilo', iconName: 'Layout' },
  { name: 'Firebase', category: 'Backend', iconName: 'Database' },
  { name: 'REST APIs', category: 'Backend', iconName: 'Network' },
  { name: 'Git & GitHub', category: 'Ferramenta', iconName: 'GitBranch' },
  { name: 'Express.js', category: 'Backend', iconName: 'Server' },
  { name: 'Bootstrap', category: 'Estilo', iconName: 'Layout' },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileType': return <FileType size={32} />;
    case 'FileJson': return <FileJson size={32} />;
    case 'Atom': return <Atom size={32} />;
    case 'Box': return <Box size={32} />;
    case 'Server': return <Server size={32} />;
    case 'Layout': return <Layout size={32} />;
    case 'Zap': return <Zap size={32} />;
    case 'Database': return <Database size={32} />;
    case 'Network': return <Network size={32} />;
    case 'GitBranch': return <GitBranch size={32} />;
    default: return <FileJson size={32} />;
  }
};

const Skills: React.FC = () => {
  return (
    <section id="tecnologias" className="py-10 scroll-mt-28 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tecnologias & Ferramentas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Minha caixa de ferramentas técnica, focada em desenvolvimento moderno, performance e experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800/50 hover:bg-slate-800 p-6 rounded-xl border border-slate-700/50 hover:border-brand-primary transition-all duration-300 flex flex-col items-center justify-center group"
            >
              <div className="mb-4 text-slate-400 group-hover:text-brand-primary transition-colors">
                {getIcon(skill.iconName)}
              </div>
              <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
              <span className="text-xs uppercase tracking-wider text-slate-500 mt-2 bg-slate-900 px-2 py-1 rounded">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;