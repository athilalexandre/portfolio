import React from 'react';
import { Gamepad2, Code2, BrainCircuit } from 'lucide-react';
import { ProfileData } from '../types';

interface AboutProps {
  profile: ProfileData;
}

const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="sobre" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
              Sobre Mim
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-brand-primary rounded-full"></span>
            </h2>
            <div className="text-slate-300 space-y-4 text-lg leading-relaxed">
              {/* 
                  NOTE: O texto abaixo é gerado com base na bio do usuário.
                  Pode ser editado diretamente aqui.
               */}
              <p>
                Olá! Sou o <strong>{profile.name}</strong>, desenvolvedor front-end apaixonado por criar experiências digitais incríveis.
                Atualmente baseado em {profile.location}, transformo ideias em produtos digitais que fazem a diferença.
              </p>
              <p>
                Com expertise em <strong>React, TypeScript, Next.js e Node.js</strong>, desenvolvo aplicações web modernas, responsivas e escaláveis.
                Minha especialidade está em combinar design elegante com código limpo e performático.
              </p>
              <p>
                Além do desenvolvimento web, sou entusiasta de <strong>Game Design</strong> e tenho grande interesse em
                <strong> Inteligência Artificial</strong>, explorando formas inovadoras de integrar tecnologias emergentes em soluções práticas.
              </p>
              <p className="text-brand-accent font-medium">
                Sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-brand-primary/50 transition-colors group">
              <Code2 className="text-brand-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Front-End</h3>
              <p className="text-slate-400">Especialista em criar interfaces limpas, modernas e performáticas com React e Ecossistema JS.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-brand-secondary/50 transition-colors group">
              <Gamepad2 className="text-brand-secondary mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Game Dev</h3>
              <p className="text-slate-400">Desenvolvimento de mecânicas de jogos, shaders e experiências interativas imersivas.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-brand-accent/50 transition-colors group md:col-span-2">
              <BrainCircuit className="text-brand-accent mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Inteligência Artificial</h3>
              <p className="text-slate-400">Integração de LLMs e APIs generativas em aplicações web para criar soluções inteligentes.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;