import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { ProfileData } from '../types';

interface ContactProps {
  profile: ProfileData;
}

const Contact: React.FC<ContactProps> = ({ profile }) => {
  return (
    <section id="contato" className="py-10 bg-slate-900 relative">
      {/* Decorative elements */}
      <div className="absolute left-10 top-1/2 w-32 h-32 bg-brand-secondary/10 rounded-full blur-[50px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vamos Conversar?</h2>
        <p className="text-slate-400 text-lg mb-12">
          Estou sempre aberto a novas oportunidades, colaborações em projetos de jogos ou discussões sobre o futuro do Front-End e IA.
          Entre em contato!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={`mailto:${profile.social.email}`}
            className="flex flex-col items-center p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-brand-primary hover:bg-slate-700/50 transition-all group"
          >
            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-brand-primary" size={28} />
            </div>
            <h3 className="text-white font-bold mb-1">E-mail</h3>
            <p className="text-slate-400 text-sm">{profile.social.email}</p>
          </a>

          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-brand-secondary hover:bg-slate-700/50 transition-all group"
          >
            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="text-brand-secondary" size={28} />
            </div>
            <h3 className="text-white font-bold mb-1">LinkedIn</h3>
            <p className="text-slate-400 text-sm">Conectar-se</p>
          </a>

          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-brand-accent hover:bg-slate-700/50 transition-all group"
          >
            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Github className="text-brand-accent" size={28} />
            </div>
            <h3 className="text-white font-bold mb-1">GitHub</h3>
            <p className="text-slate-400 text-sm">Ver código</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;