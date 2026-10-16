# Portfólio — Gabriel Plagens Schuinsekel

Site de portfólio pessoal (one-page) desenvolvido com **React**, **TypeScript**, **Vite** e **Tailwind CSS**. Apresenta quem eu sou, experiência profissional, formação e cursos, habilidades, projetos e formas de contato.

> **Demo:** _adicione aqui o link do deploy_

## Seções

| Seção | Descrição |
| --- | --- |
| **Sobre** | Apresentação com foto e botões de contato/LinkedIn |
| **Experiência** | Trajetória profissional (projeto Cidades Inteligentes, Jovem Aprendiz e estágio) |
| **Cursos** | Graduação e cursos complementares |
| **Habilidades** | Hard skills e soft skills |
| **Projetos** | Link para os repositórios no GitHub |
| **Contato** | E-mail, telefone e redes sociais |

A navegação é por âncoras (`#sobre`, `#experiencia`, …), com menu responsivo no cabeçalho e no rodapé.

## Tecnologias

- [React 19](https://react.dev/)
- [TypeScript 5.9](https://www.typescriptlang.org/)
- [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [ESLint 9](https://eslint.org/) com `typescript-eslint`, `react-hooks` e `react-refresh`
- Fonte [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)

## Pré-requisitos

- **Node.js** 20.19+ ou 22.12+ (exigência do Vite 7)
- **npm** (acompanha o Node.js)

## Como executar

O projeto da aplicação fica dentro da pasta `portfolio/`:

```bash
# 1. Clone o repositório
git clone https://github.com/GabrielPlagensS/Portifolio.git
cd Portifolio/portfolio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse o endereço exibido no terminal (por padrão `http://localhost:5173`).

## Scripts disponíveis

Execute dentro de `portfolio/`:

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Verifica os tipos (`tsc -b`) e gera a build de produção em `dist/` |
| `npm run preview` | Serve localmente a build de produção |
| `npm run lint` | Executa o ESLint em todo o projeto |

## Estrutura do projeto

```
Portifolio/
└── portfolio/
    ├── public/              # Arquivos estáticos (favicon)
    ├── src/
    │   ├── assets/          # Imagens e ícones
    │   ├── Components/      # Componentes reutilizáveis
    │   │   ├── Button.tsx       # Botão/link com variantes (default, outline, gitStyle)
    │   │   ├── CardCursos.tsx   # Card de curso
    │   │   ├── CardHab.tsx      # Card de habilidade
    │   │   ├── Expecard.tsx     # Card de experiência
    │   │   ├── Header.tsx       # Cabeçalho com menu responsivo
    │   │   └── Footer.tsx       # Rodapé com menu, redes sociais e copyright
    │   ├── Pages/           # Seções da página
    │   │   ├── Card.tsx         # Sobre (hero)
    │   │   ├── Experiencia.tsx
    │   │   ├── Cursos.tsx
    │   │   ├── Habilidades.tsx
    │   │   ├── Projetos.tsx
    │   │   └── Contato.tsx
    │   ├── App.tsx          # Composição das seções
    │   ├── main.tsx         # Ponto de entrada
    │   └── index.css        # Tailwind + fonte global
    ├── index.html
    ├── vite.config.ts
    ├── eslint.config.js
    └── tsconfig*.json
```

## Personalização

O conteúdo está escrito diretamente nos componentes de `src/Pages/`:

- **Experiência / Cursos / Habilidades:** edite as props dos componentes `Expecard`, `CardCursos` e `CardHab` nos arquivos correspondentes.
- **Links e contatos:** `src/Pages/Contato.tsx`, `src/Pages/Card.tsx` e `src/Components/Footer.tsx`.
- **Itens do menu:** array `menuItems` em `Header.tsx` e `Footer.tsx`.
- **Cores:** o tema usa roxo `#AA5BFF` como cor de destaque, sobre fundo escuro.

## Deploy

Por ser um site estático, pode ser publicado em qualquer serviço de hospedagem estática (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Configure:

- **Diretório raiz:** `portfolio`
- **Comando de build:** `npm run build`
- **Diretório de saída:** `dist`

## Autor

**Gabriel Plagens Schuinsekel**
Estudante de Ciência da Computação (Unijuí) e desenvolvedor Front-end.

- LinkedIn: [gabriel-plagens-schuinsekel](https://www.linkedin.com/in/gabriel-plagens-schuinsekel-98430a35a/)
- GitHub: [@GabrielPlagensS](https://github.com/GabrielPlagensS)
