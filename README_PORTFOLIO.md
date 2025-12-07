# 🚀 Portfólio Profissional - Next.js

Portfólio moderno e escalável desenvolvido com Next.js 15, React 19 e Tailwind CSS.

## ✨ Características

- ⚡ **Performance Otimizada** - SSR/SSG com Next.js
- 🎨 **Design Moderno** - Interface elegante com Tailwind CSS
- 📱 **100% Responsivo** - Funciona perfeitamente em todos os dispositivos
- 🔍 **SEO Otimizado** - Metadata e estrutura otimizadas para mecanismos de busca
- 🎯 **Sistema Escalável** - Fácil adicionar novos projetos via JSON
- 🌙 **Dark Mode Ready** - Preparado para modo escuro
- ✉️ **Formulário de Contato** - Sistema de contato integrado
- 🎭 **Animações Suaves** - Transições e animações elegantes

## 📋 Estrutura do Projeto

```
webapp/
├── app/
│   ├── layout.tsx          # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── sections/            # Seções do portfólio
│   │   ├── Hero.tsx         # Seção hero/apresentação
│   │   ├── About.tsx        # Sobre mim
│   │   ├── Skills.tsx       # Habilidades
│   │   ├── Projects.tsx     # Projetos (com filtros)
│   │   ├── Contact.tsx      # Contato
│   │   └── Footer.tsx       # Rodapé
│   └── ui/                  # Componentes reutilizáveis
│       ├── Button.tsx       # Botão
│       ├── Card.tsx         # Card
│       ├── Section.tsx      # Seção
│       └── Badge.tsx        # Badge
├── data/
│   └── portfolio.json       # 📝 DADOS DO PORTFÓLIO
├── styles/
│   └── globals.css          # Estilos globais
└── public/
    └── projects/            # Imagens dos projetos
```

## 🚀 Como Começar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Personalizar Seus Dados

Edite o arquivo `data/portfolio.json` com suas informações:

```json
{
  "personal": {
    "name": "Seu Nome Aqui",
    "title": "Seu Título",
    "subtitle": "Sua especialidade",
    "bio": "Sua biografia...",
    "email": "seu@email.com",
    "phone": "+55 (11) 99999-9999",
    "location": "Sua Cidade, País",
    "availability": "Disponível para projetos",
    "social": {
      "github": "https://github.com/seuusuario",
      "linkedin": "https://linkedin.com/in/seuusuario",
      "twitter": "https://twitter.com/seuusuario"
    }
  }
}
```

### 3. Adicionar Seus Projetos

No mesmo arquivo `data/portfolio.json`, na seção `projects`:

```json
{
  "projects": [
    {
      "id": "projeto-unico",
      "title": "Nome do Projeto",
      "description": "Descrição curta",
      "longDescription": "Descrição detalhada do projeto...",
      "image": "/projects/imagem.jpg",
      "tags": ["React", "Node.js", "MongoDB"],
      "category": "Full Stack",
      "github": "https://github.com/usuario/projeto",
      "demo": "https://projeto-demo.com",
      "featured": true,
      "year": 2024,
      "features": [
        "Funcionalidade 1",
        "Funcionalidade 2"
      ]
    }
  ]
}
```

### 4. Adicionar Imagens dos Projetos

Coloque as imagens dos seus projetos na pasta `public/projects/`:

```
public/
└── projects/
    ├── projeto1.jpg
    ├── projeto2.jpg
    └── projeto3.jpg
```

### 5. Rodar em Desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### 6. Build para Produção

```bash
npm run build
npm start
```

## 📝 Como Adicionar Novos Projetos

### Método Fácil (Recomendado)

1. Abra `data/portfolio.json`
2. Adicione um novo objeto no array `projects`:

```json
{
  "id": "meu-novo-projeto",
  "title": "Meu Novo Projeto",
  "description": "Uma descrição breve e atrativa",
  "longDescription": "Descrição completa do projeto com mais detalhes",
  "image": "/projects/novo-projeto.jpg",
  "tags": ["Laravel", "MySQL", "Vue.js"],
  "category": "Backend",
  "github": "https://github.com/usuario/novo-projeto",
  "demo": "https://demo.com",
  "featured": false,
  "year": 2024,
  "features": [
    "API RESTful",
    "Autenticação JWT",
    "Dashboard administrativo"
  ]
}
```

3. Adicione a imagem em `public/projects/`
4. Pronto! O projeto aparecerá automaticamente

## 🎨 Personalização de Cores

Edite o arquivo `tailwind.config.js` para mudar as cores:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Azul principal
        secondary: '#8B5CF6', // Roxo secundário
      }
    }
  }
}
```

## 📱 Seções do Portfólio

### 1. Hero/Apresentação
- Nome e título profissional
- Links para redes sociais
- Botões de CTA (call-to-action)
- Animação de fundo gradiente

### 2. Sobre Mim
- Biografia profissional
- Localização e disponibilidade
- Estatísticas (anos de experiência, projetos, clientes)
- Pilares (Design, Performance, Segurança)

### 3. Habilidades
- Categorias organizadas (Backend, Frontend, DevOps)
- Barras de progresso animadas
- Nível de proficiência visual

### 4. Projetos
- **Filtros por categoria** (Todos, Backend, Frontend, Full Stack)
- Cards de projeto com tags
- Modal com detalhes completos
- Links para GitHub e Demo
- Projetos em destaque

### 5. Contato
- Formulário de contato
- Informações de contato direto
- Links para redes sociais
- Integração com email

### 6. Footer
- Links rápidos
- Redes sociais
- Copyright

## 🔧 Tecnologias Utilizadas

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3
- **Icons**: Heroicons
- **TypeScript**: Para type safety
- **Animações**: CSS Animations customizadas

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça commit do seu código no GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe seu repositório
4. Deploy automático! ✨

### Netlify

1. Faça commit do seu código no GitHub
2. Acesse [netlify.com](https://netlify.com)
3. Conecte seu repositório
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 📊 SEO

O portfólio já vem configurado com:
- Metadata otimizada
- Open Graph tags
- Sitemap ready
- Semantic HTML
- Performance otimizada

## 🎯 Próximos Passos

Sugestões para expandir seu portfólio:

1. **Blog/Artigos**: Adicione uma seção de blog
2. **Dark Mode**: Implemente toggle dark/light
3. **Analytics**: Adicione Google Analytics
4. **Backend**: Integre com backend para formulário de contato
5. **CMS**: Conecte com Strapi ou Contentful
6. **i18n**: Adicione múltiplos idiomas
7. **Animações**: Use Framer Motion para animações avançadas

## 📄 Licença

MIT - Sinta-se livre para usar e modificar!

## 💡 Dicas Importantes

### ✅ Boas Práticas

- Mantenha o arquivo JSON organizado
- Use imagens otimizadas (WebP quando possível)
- Atualize regularmente seus projetos
- Mantenha a biografia concisa e impactante
- Use tags consistentes nos projetos

### 🚫 Evite

- Imagens muito grandes (> 500KB)
- Excesso de projetos (foque na qualidade)
- Informações desatualizadas
- Links quebrados

## 🤝 Suporte

Se tiver dúvidas:
1. Consulte a documentação do Next.js
2. Verifique os exemplos no código
3. Revise o arquivo JSON de exemplo

## 🎉 Pronto!

Seu portfólio está pronto para impressionar! 

Lembre-se:
- ✨ Mantenha-o atualizado
- 📱 Teste em vários dispositivos
- 🔍 Otimize para SEO
- 💼 Mostre seus melhores projetos

**Boa sorte! 🚀**
