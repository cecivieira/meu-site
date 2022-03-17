---
layout: post
title: "Estatística descritiva e distribuição estatística"
author: cecivieira
date: 2022-03-15 09:00
lang: pt-br
translated-es: 
translated-en: 
translated-ptbr: 
tags: [artigo]
categories: [estatística]
image: https://github.com/cecivieira/cecivieira.github.io/blob/main/assets/images/cover/18.png
description: "Primeiro artigo de uma série sobre conceitos (bem) básicos de estatística aplicada a ciência de dados. Nesse é apresentado o conceito de estatística descritiva, distribuição estatística e o contexto no qual se desenvolverá a série."
toc: false
beforetoc: 
---
Estatística foi um dos assuntos que mais tive dificuldade em engajar nos estudos, inclusive em compreender os conceitos mais básicos. Sempre que começava a estudar, parava, me dava uns dias ou semanas e voltava a estudar a mesma coisa. A cada nova tentativa eu sentia como se aquele tópico ganhasse algo de sentido. E assim vou me arrastando até... hoje... ainda que em novos temas.

Esse artigo é o primeiro de uma série sobre conceitos (bem) básicos de estatística aplicada a ciência de dados. Oh, é bem básico mesmo, se essa é uma das tuas primeiras tentativas, espero que a leitura seja massa. Mas, se tu já sabe alguma coisa, talvez não encontre aqui o está procurando.

## Contexto

Nesse ano, 2022, celebramos 90 anos da conquista do voto feminino, ou seja, apenas em 1932 nós mulheres conquistamos com muita luta o direito ao voto. Naquele momento apenas as mulheres casadas com autorização do marido, viúvas ou solteiras com renda própria podiam votar. O sufrágio universal veio dois anos depois, em 1934, onde todas nós pudemos votar, sermos votadas e eleitas para cargos políticos. Por essa razão, vou apresentar conceitos básicos de estatística usando os [dados abertos do Tribunal Superior Eleitoral, especificamente os dados das candidaturas para a Câmara dos Vereadores de Recife em 2020](https://dadosabertos.tse.jus.br/dataset/candidatos-2020-subtemas). É a esse conjunto de dados que vamos realizar nossas perguntas e respondê-las usando os conceitos apresentados ao longo dessa série, aplicados com a biblioteca Pandas.

> Não precisa saber sobre Pandas para acompanhar a série, essa biblioteca será usada para demonstrar como o conceito apresentado pode ser aplicado a um dado real. Isso vai ajudar que ele faça sentido pra gente.

## Estatística

A estatística nos ajuda a responder perguntas que queremos fazer aos dados. É uma área do conhecimento que utiliza um conjunto de técnicas para coletar, organizar, descrever, analisar e interpretá-los. Focaremos na **estatística descritiva**, que se dedica a sintetizar, organizar e descrever dados por meios de instrumentos como medidas, indicadores, gráficos e tabelas.

## Distribuição estatística

A distribuição estatística demonstra a concentração de dados de uma variável. Isso é muito abstrado, né?!

Para esse conceito fazer sentido, vamos observar graficamente a distribuição estatística dos dados da coluna `NR_IDADE_DATA_POSSE` do conjunto de dados do TSE. Essa coluna representa a idade que as pessoas candidatas teriam na data de sua posse. 

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/distribuicao.png">
Fonte: [Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)

Essa curva representa a distribuição estatística da coluna, é feita a partir da quantidade de vezes que cada idade aparece, ou seja, existem mais pessoas candidatas com 40 anos do que com 80.

Esse tipo de distribuição que o gráfico só tem 1 pico, chamamos de distribuição normal ou gaussiana simétrica, pois a maior parte dos dados estão ao redor da média. Existem outros tipos (binomial, poisson e uniforme), mas vamos falar só sobre a distribuição normal nessa série, pois é a que possui a variável que estamos analisando, `NR_IDADE_DATA_POSSE`.

Mais pra frente vamos falar sobre desvio padrão, mas deixa eu te adiantar uma coisa: a área dessa curva determina a probabilidade de ocorrer um evento, nesse caso o evento é a idade de uma pessoa candidata.

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/desvio-padrao-diagrama.svg">
Fonte: [Wikimedia](https://pt.wikipedia.org/wiki/Desvio_padr%C3%A3o#/media/Ficheiro:Standard_deviation_diagram.svg)

O próximo artigo é sobre medidas de tendência central (média, moda e mediana). Ainda que tu não tenha entendido nada do que escrevi aqui, sugiro que sigas lendo a série até o final, pois os assuntos se complementam e vão ajudar que na tua próxima tentativa de estudo o tema faça um pouquinho mais de sentido.

## Continue estudando

- **WHEELAN, Charles. Estatística: O que é, para que serve, como funciona. São Paulo: Zahar, 2016.** (como uma das primeiras tentativas, também recomendo a leitura desse livro)
- [Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)
- [Portal de Dados Abertos do Tribunal Superior Eleitoral: candidaturas 2020.](https://dadosabertos.tse.jus.br/dataset/candidatos-2020-subtemas)
- [Tribunal Superior Eleitoral. Há 80 anos mulheres conquistaram o direito de votar e ser votadas.](https://www.tse.jus.br/imprensa/noticias-tse/2013/Marco/ha-80-anos-mulheres-conquistaram-o-direito-de-votar-e-ser-votadas)