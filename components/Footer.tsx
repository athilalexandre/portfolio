import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 flex items-center justify-center gap-2 mb-2">
          Desenvolvido com <Heart size={16} className="text-red-500 fill-red-500" /> por Athila Alexandre &copy; {new Date().getFullYear()}
        </p>
        <a
          href="https://github.com/athilalexandre/portfolio"
          className="text-slate-600 text-sm hover:text-brand-primary transition-colors"
        >
          Ver código fonte deste portfólio
        </a>
      </div>
    </footer>
  );
};

export default Footer;