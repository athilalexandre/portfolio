<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🚀 Portfólio - Athila Alexandre

Portfólio profissional responsivo desenvolvido com React, TypeScript e Vite. Design moderno com tema dark e animações suaves.

## 🛠️ Tecnologias

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultra-rápido
- **TailwindCSS** - Framework CSS
- **Lucide React** - Ícones modernos

## 💻 Executar Localmente

**Pré-requisitos:** Node.js (v16+)

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar no navegador:**
   - A aplicação estará disponível em `http://localhost:5173`

## 📦 Build para Produção

```bash
npm run build
```

O build otimizado será gerado na pasta `dist/`.

## 🌐 Deploy na Vercel

### Opção 1: Deploy via Interface Web (Recomendado)

1. **Acesse:** [vercel.com](https://vercel.com/)
2. **Faça login** com sua conta GitHub
3. **Clique em "Add New Project"**
4. **Importe** este repositório do GitHub
5. **Configure o projeto:**
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build` (já configurado automaticamente)
   - Output Directory: `dist` (já configurado automaticamente)
6. **Clique em "Deploy"**

Pronto! Seu site estará no ar em poucos minutos com URL automática.

### Opção 2: Deploy via CLI

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Fazer login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy para produção:**
   ```bash
   vercel --prod
   ```

## 🔧 Personalização

Para personalizar os dados do portfólio, edite o arquivo `App.tsx` (objeto `profileData`) e os componentes em `/components`.

## 📝 Licença

MIT © Athila Alexandre
