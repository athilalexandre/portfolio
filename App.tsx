import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ProfileData } from './types';

// Centralized Profile Data
// ATENÇÃO: Edite aqui os dados principais do perfil se necessário
const profileData: ProfileData = {
  name: "Athila Alexandre",
  tagline: "Desenvolvedor Front-End | Especialista React & TypeScript",
  phrase: "Criando experiências web modernas que conectam design e tecnologia",
  location: "Fortaleza – CE, Brasil",
  avatarUrl: "https://github.com/athilalexandre.png",
  bio: "", // Populated in About component for richer HTML structure
  social: {
    github: "https://github.com/athilalexandre",
    linkedin: "https://www.linkedin.com/in/athila-alexandre",
    email: "athilalexandre@gmail.com"
  }
};

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-brand-primary selection:text-white">
      <Header />
      <main>
        <Hero profile={profileData} />
        <About profile={profileData} />
        <Skills />
        <Projects />
        <Contact profile={profileData} />
      </main>
      <Footer />
    </div>
  );
};

export default App;