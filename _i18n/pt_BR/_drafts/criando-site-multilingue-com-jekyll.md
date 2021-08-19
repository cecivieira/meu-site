---
layout: post
title: Criando site multilíngue com Jekyll
author: cecivieira
date: 2021-08-19 00:00:00 -0300
lang: pt_BR
categories:
- tutorial
tags:
- internacionalização
- plugin
- site multilíngue
- ruby
- jekyll
image: "/assets/images/5.png"
description: Como internacionalizar um site estático desenvolvido em Jekyll e fazer
  o deploy no GitHub Page.
toc: true
beforetoc: Pode ser que deixar seu site em vários idiomas não seja tão rápido quanto
  você espera, então dividi esse post em capítulos para te ajudar.

---
# Contextualização

Pensando em ter um espaço para reunir minhas andanças nas comunidades de TI e artigos sobre o que estou estudando, criei este site. Você pode ler sobre a escolha e customização do tema \[nesse post\](/meu-site-customizando-o-tema-mediumish).

Essas andanças começaram, com maior frequência, lá em 2019 na Espanha. Então eu precisava de um site que fosse, pelo menos, em português e castelhano/espanhol. Achei que isso seria fácil, escolhi o tema, customizei e fui pesquisar como fazer isso usando Jekyll... ban... descobri que precisava de um plugin e de uma gambiarra para que o GitHub Page entendesse a internacionalização. Isso me levou 1 semana de pesquisa e bastante horas de vida.

Abaixo deixo um tutorial para implementar a internacionalização em sites estáticos desenvolvidos em Jekyll e publicados no GitHub Page.

# Ferramentas 