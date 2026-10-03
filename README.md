# Santo Vidro · Redesign do site

One-page da **Santo Vidro** (vidraçaria em Santo André, SP), feita em HTML + CSS + JS puro com Tailwind CSS via CDN. Sem build, sem bundler, sem dependências para instalar.

- Site anterior: https://santovidro.com.br/
- Todos os CTAs levam ao WhatsApp **(11) 93029-7232** com mensagem pronta por seção.
- Analytics: **GoatCounter** (sem cookies, sem banner de consentimento).

## Estrutura de arquivos

```
SantoVidro/
├── index.html                  Página única (todas as seções)
├── favicon.ico                 Gerado a partir do logo original
├── README.md
├── PRODUCT.md                  Contexto de produto (documentação interna do projeto)
├── DESIGN.md                   Sistema visual (documentação interna do projeto)
└── assets/
    ├── logo-santo-vidro.png    Logo ORIGINAL do site atual (não alterar)
    ├── css/styles.css          Tokens (cores, raio, easing), fontes, componentes e motion
    ├── js/main.js              Menu, scroll-reveal, galeria/lightbox, filtro e rastreio GoatCounter
    ├── fonts/                  Bricolage Grotesque + Schibsted Grotesk (variáveis, auto-hospedadas)
    ├── icons/                  Favicon 32px, apple-touch-icon, ícones 192/512
    └── img/                    Fotos reais dos projetos em WebP (+ og-image.jpg)
```

## Rodar localmente

Qualquer servidor estático serve. Exemplo:

```bash
python -m http.server 8080
```

Abra http://localhost:8080. (Abrir o `index.html` direto no navegador também funciona, mas o preview de fontes/preload só se comporta como em produção via HTTP.)

## Deploy

É um site estático: suba a pasta inteira.

- **GitHub Pages:** Settings → Pages → Branch `main` / pasta `/ (root)`.
- **Netlify / Vercel / Cloudflare Pages:** conecte o repositório, sem build command, diretório de publicação `/`.
- **Hospedagem tradicional:** envie todos os arquivos por FTP para a raiz do domínio.

Depois do deploy, confira em `index.html` (no `<head>`) o domínio usado em `canonical`, `og:url` e `og:image`. Estão configurados como `https://santovidro.com.br/`. Se o site for publicado em outro domínio, troque essas URLs (o preview do WhatsApp/Instagram exige URL absoluta da imagem).

## GoatCounter (analytics e eventos de clique)

**Onde está o script:** no `<head>` de `index.html`, exatamente assim:

```html
<script data-goatcounter="https://teocode.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
```

**Como os cliques são registrados:** todo CTA de WhatsApp tem o atributo `data-gc-event="nome-do-evento"`. Um único listener em `assets/js/main.js` captura o clique e chama `window.goatcounter.count({ path, title, event: true })`, protegido por `if (window.goatcounter && window.goatcounter.count)`. Se o script for bloqueado por adblock, o link do WhatsApp continua funcionando normalmente.

**Eventos configurados:**

| Evento | Onde |
| --- | --- |
| `cta-nav` | Botão "Pedir orçamento" no menu (desktop) |
| `cta-nav-mobile` | Botão dentro do menu mobile |
| `cta-hero` | Botão principal do topo |
| `cta-servico-guarda-corpo` | Card de serviço: Guarda-corpo |
| `cta-servico-box` | Card de serviço: Instalação de box |
| `cta-servico-coberturas` | Card de serviço: Coberturas |
| `cta-servico-espelhos` | Card de serviço: Espelhos em geral |
| `cta-servico-sacadas` | Card de serviço: Sacadas |
| `cta-servico-janelas` | Card de serviço: Janelas e fechamentos |
| `cta-portfolio` | Botão abaixo da galeria de projetos |
| `cta-oferta-item-avulso` | Como contratar: Item avulso |
| `cta-oferta-apartamento-completo` | Como contratar: Apartamento completo |
| `cta-oferta-sacada-cobertura` | Como contratar: Sacada e cobertura |
| `cta-avaliacoes` | Botão abaixo das avaliações |
| `cta-contato` | Botão da faixa final (teal) |
| `cta-contato-numero` | Telefone na faixa final |
| `cta-footer` | WhatsApp no rodapé |
| `cta-flutuante` | Botão flutuante do WhatsApp |

**Como ver no painel:** acesse https://teocode.goatcounter.com → **Dashboard → Events**. Cada nome acima aparece como um evento com a contagem de cliques.

**Lembrete importante:** o domínio onde o site for publicado precisa estar cadastrado no painel do GoatCounter (Settings → Sites / "Allowed domains" conforme a configuração da conta). Sem isso, as visitas e os eventos não aparecem. Durante testes em `localhost` os eventos normalmente não são registrados.

## Como editar o conteúdo

- **Mensagens de WhatsApp:** são links `https://wa.me/5511930297232?text=...` já codificados no `index.html`. Para mudar o texto, edite o valor depois de `text=` (use [urlencoder](https://www.urlencoder.org/) ou `encodeURIComponent`).
- **Avaliações:** os 6 cards na seção `#avaliacoes` são texto copiado do Google Meu Negócio (nota 4,8 com 55 avaliações na data da coleta). Atualize periodicamente para manter as mais recentes e confira sempre no link do Google.
- **Fotos:** coloque novas imagens em `assets/img/` (de preferência WebP, largura de 890 px para retrato ou 1024 px para paisagem), com `width`/`height` e `alt` descritivo.
- **Cores:** variáveis no topo de `assets/css/styles.css` (`--accent` é o teal do logo, `--ink` é o azul-marinho do menu original). O site respeita `prefers-color-scheme` (claro/escuro).

## Pendências de conteúdo (não inventadas)

Estes itens não existem no site atual nem no perfil do Google, então **não foram preenchidos**:

- **E-mail** de contato (rodapé exibe WhatsApp e endereço).
- **Horário de funcionamento completo** (o Google informa apenas "abre às 09:00").
- **Preços** (a seção "Como contratar" não exibe valores; o orçamento é feito no WhatsApp).
- **Santo Vídeo** (item do menu antigo): sem conteúdo encontrado, ficou de fora.
- **Blog** (3 títulos no site antigo, sem texto): fora desta versão.
- **Foto da equipe / logos de marcas parceiras:** não usadas por falta de autorização.

## Créditos

Site desenvolvido por [TeoCode](https://teocode.com.br/).
