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

* [Jekyll Multiple Languages Plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin)
* [Ruby](https://www.ruby-lang.org)
* [GitHub](https://github.com/)

# Tutorial

## 1 . Instalando o plugin Jekyll Multiple Languages 

O plugin Jekyll Multiple Languages vai permitir customizar o tema que você está usando para implementar multiplos idiomas.

1. Abra o arquivo Gemfile localizado na pasta raiz do seu site;

   ![](/assets/images/screenshot-from-2021-08-19-13-40-34.png)
2. Dentro dele haverá o grupo `:jekyll_plugins`. Dentro dele insira a linha `gem 'jekyll-multiple-languages-plugin'`. O código deverá aparecer assim:

   ![](/assets/images/screenshot-from-2021-08-19-15-15-28.png)
3. No terminal, rode o comando abaixo para instalar esse novo plugin:

   `bundle install`
4. Agora, ative o plugin no seu projeto. Para isso, encontre o arquivo `_config.yml `na pasta raiz do seu site e adicione `- jekyll-multiple-languages-plugin`na lista de plugins. O código deverá aparecer assim:

   ![](/assets/images/screenshot-from-2021-08-19-20-31-58.png)