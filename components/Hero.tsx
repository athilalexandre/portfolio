import React from 'react';
import { ChevronRight, Download } from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="inicio" className="min-h-[85vh] scroll-mt-28 flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-brand-accent/10 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center z-10">

        {/* Profile Image Wrapper */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-slate-900 object-cover shadow-2xl"
          />
        </div>

        <h2 className="text-brand-accent font-semibold tracking-wider uppercase mb-4 animate-fade-in">
          {profile.tagline}
        </h2>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-slide-up">
          {profile.name}
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 animate-slide-up delay-100">
          "{profile.phrase}"
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
          <a
            href="#projetos"
            className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-bold transition-all shadow-lg shadow-brand-primary/25 flex items-center justify-center gap-2 group"
          >
            Ver Projetos
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#contato"
            className="px-8 py-4 bg-transparent border border-slate-600 hover:border-brand-accent text-slate-300 hover:text-brand-accent rounded-lg font-bold transition-all flex items-center justify-center gap-2"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;