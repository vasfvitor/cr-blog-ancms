---
title: É tipo uma pesquisa que faço para entender melhor como cada aluno já está
  indo no seu domínio das finanças.
publishDate: 09/10/2022
author: Diego Ayres
authorURL: https://twitter.com/swithinbank
thumbnail: /assets/blog/header.png
description: Esses 25 vídeos foram escolhidos entre todos os que recebi. Cada
  vídeo foi extremamente inspirador e impactante para mim e foi muuuuuuuuito
  desafiador selecionar apenas esses para essa página. Eu quero agradecer com
  muito carinho e respeito a cada um que me enviou e dizer que me dói o coração
  não poder colocar todos aqui.
layout: ../../layouts/BlogPost.astro
---
É o seguinte:

logo abaixo deste texto, você vai ver 25 depoimentos de alunos que levaram suas vidas financeiras para outro patamar, das mais variadas formas possíveis.

Esses 25 vídeos foram escolhidos entre todos os que recebi. Cada vídeo foi extremamente inspirador e impactante para mim e foi muuuuuuuuito desafiador selecionar apenas esses para essa página. Eu quero agradecer com muito carinho e respeito a cada um que me enviou e dizer que me dói o coração não poder colocar todos aqui.

Bom… a questão é que eu prometi um prêmio para o melhor depoimento e eu preciso da sua ajuda assim óh… basta você fazer um comentário dizendo qual vídeo você mais gostou e por que… A escolha NÃO É por votação, mas a sua opinião pode me ajudar a escolher o vencedor.

Eu sei que é muita coisa, mas se você assistir alguns e já me der sua opinião já vai ser uma grande ajuda. É só você deixar seu comentário aqui embaixo no rodapé dessa página.

E para recompensar sua ajuda eu farei um SORTEIO de um livro entre todos aqueles que deixarem seu comentário, como retribuição a sua dedicação em me ajudar. É só escrever seu email na hora em que você for deixar seu comentário (seu email só vai aparecer pra mim, não se preocupe).

O sorteio será no dia 24 de julho no Instagram @dominesuasfinancas

Muito obrigada!
![Astro + Netlify CMS logos](/assets/blog/header.png)

[Netlify CMS](https://www.netlifycms.org/) is an open-source, Git-based content management system. It provides a single-page app for editing content and can publish that content by committing it to a hosted Git repo (for example on GitHub or GitLab).

Adding Netlify CMS to an [Astro](https://astro.build/) site would usually involve creating a number of files in different parts of your project directory and then keeping all those moving parts in sync. With the [`astro-netlify-cms`](https://github.com/delucis/astro-netlify-cms/) integration, you configure the integration in your `astro.config.mjs` file and the integration takes care of the rest.

```javascript
import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          // Content collections
        ],
      },
    }),
  ],
});
```