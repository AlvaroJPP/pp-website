# SP Auto Peças — React + Vite

Site institucional multipágina da **SP Auto Peças**, em Vila dos Cabanos, Barcarena — PA.

## Tecnologias

- React e React DOM
- Vite para desenvolvimento e build
- Lucide React para ícones
- CSS responsivo
- Navegação por hash para funcionar no GitHub Pages sem configuração de rotas no servidor

## Páginas

- **Início** — banner panorâmico, apresentação e categorias em destaque
- **Catálogo** — lista de 22 itens de referência, busca por nome/descrição e filtros rápidos por categoria
- **Dicas automotivas** — checklist para identificar peças, orientações por categoria e perguntas frequentes
- **Sobre a loja** — informações e orientações para identificar a peça correta
- **Contato e localização** — endereço informado, mapa, rota e Street View

O catálogo apresenta grupos de produtos e exemplos para consulta; não representa estoque, preços ou disponibilidade em tempo real.

## Rodar localmente

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
npm run dev
```

Para gerar e testar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicação no GitHub Pages

O workflow em `.github/workflows/pages.yml` compila o site e publica a pasta `dist` ao enviar alterações para a branch `main`.

1. No GitHub, abra **Settings → Pages**.
2. Em **Build and deployment**, selecione **GitHub Actions** como fonte.
3. Acompanhe **Actions → Deploy SP Auto Peças website**.

Endereço esperado após uma publicação bem-sucedida:
https://alvarojpp.github.io/pp-website/

## Estrutura do código

- `src/components/SiteLayout.jsx` — navegação, logotipo e rodapé
- `src/pages/Home.jsx` — página inicial
- `src/pages/Catalogo.jsx` — categorias e filtro de busca
- `src/pages/Dicas.jsx` — guia automotivo e perguntas frequentes
- `src/pages/Sobre.jsx` — apresentação da loja
- `src/pages/Localizacao.jsx` — mapa e localização
- `src/data/site.js` — dados das categorias, endereço e links do mapa
- `src/styles.css` — estilos e responsividade

Confirme com a loja a disponibilidade, os preços, os horários e a compatibilidade dos produtos antes da compra.