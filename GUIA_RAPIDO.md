# 🚀 Guia Rápido - Portfólio

## ⚡ 3 Passos para Personalizar

### 1️⃣ Editar Suas Informações

Abra `data/portfolio.json` e altere:

```json
{
  "personal": {
    "name": "SEU NOME AQUI",
    "title": "Desenvolvedor Full Stack",
    "email": "seu@email.com"
  }
}
```

### 2️⃣ Adicionar Novo Projeto

No mesmo arquivo, em `projects`, adicione:

```json
{
  "id": "novo-projeto",
  "title": "Nome do Projeto",
  "description": "Descrição curta",
  "tags": ["Laravel", "React"],
  "category": "Full Stack",
  "github": "https://github.com/seu-usuario/projeto",
  "featured": true,
  "year": 2024
}
```

### 3️⃣ Testar

```bash
npm run dev
```

Acesse: http://localhost:3000

## 📂 Estrutura Principal

```
data/portfolio.json     ← EDITE AQUI seus dados
components/sections/    ← Seções do site
public/projects/        ← Imagens dos projetos
```

## 🎨 Categorias de Projetos

- **Backend** - APIs, Laravel, Node.js
- **Frontend** - React, Next.js, Vue
- **Full Stack** - Projetos completos

## ✨ Recursos

- ✅ Sistema de filtros automático
- ✅ Modal de detalhes
- ✅ Links para GitHub e Demo
- ✅ Totalmente responsivo
- ✅ Animações suaves

## 🚀 Deploy Rápido

### Vercel (1 minuto)
1. Push para GitHub
2. Import em vercel.com
3. Deploy automático!

### Build Local
```bash
npm run build
npm start
```

## 📝 Dicas

1. **Imagens**: Use imagens leves (< 500KB)
2. **Projetos**: Foque nos melhores (5-10 projetos)
3. **Descrições**: Seja claro e conciso
4. **Links**: Certifique-se que funcionam

## 🎯 Próximos Passos

- [ ] Adicione seus projetos reais
- [ ] Personalize cores (tailwind.config.js)
- [ ] Adicione suas imagens de projetos
- [ ] Teste em mobile
- [ ] Faça deploy!

---

**Pronto! Seu portfólio está configurado! 🎉**
