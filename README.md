# SP Auto Peças — React + Vite

Landing page responsiva da **SP Auto Peças**, em Vila dos Cabanos, Barcarena — PA, feita com React e Vite.

## Tecnologias

- React e React DOM
- Vite para desenvolvimento e build
- Lucide React para ícones
- CSS responsivo

## Rodar localmente

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
npm run dev
```

Para validar a versão de produção localmente:

```bash
npm run build
npm run preview
```

## Publicação no GitHub Pages

O workflow em `.github/workflows/pages.yml` instala as dependências, executa o build do Vite e publica a pasta `dist` automaticamente ao enviar alterações para a branch `main`.

1. No GitHub, abra **Settings → Pages**.
2. Em **Build and deployment**, selecione **GitHub Actions** como fonte.
3. Abra a aba **Actions** e verifique o resultado de **Deploy SP Auto Peças website**.

Endereço esperado após uma publicação bem-sucedida:
https://alvarojpp.github.io/pp-website/

## Conteúdo

- Página inicial e apresentação da loja
- Categorias ilustrativas de peças e acessórios
- Seção sobre a empresa
- Endereço completo e mapa incorporado
- Link para abrir a rota no Google Maps
- Layout responsivo com menu móvel

## Personalização

Os componentes estão em `src/App.jsx`, os estilos em `src/styles.css` e a entrada React em `src/main.jsx`. O endereço da loja e os links do mapa também são definidos no componente.

As categorias são exemplos visuais; confirme catálogo, disponibilidade, horário de funcionamento e compatibilidade diretamente com a loja.