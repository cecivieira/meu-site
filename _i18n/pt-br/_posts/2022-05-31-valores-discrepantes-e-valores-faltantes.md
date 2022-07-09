---
layout: post
title: "Valores discrepantes e valores faltantes"
author: cecivieira
date: 2022-05-31 09:00
lang: pt-br
translated-es: 
translated-en: 
translated-ptbr: 
tags: [artigo]
categories: [estatística]
image: assets/images/cover/21.png
description: "Quarto artigo de uma série sobre conceitos (bem) básicos de estatística aplicada a ciência de dados. Nesse são apresentados valores discrepantes (outliers) e valores faltantes (missings)."
toc: false
beforetoc:
---
Esse artigo é o quarto de uma série sobre conceitos (bem) básicos de estatística aplicada a ciência de dados. Nesse são apresentados conceitos sobre valores discrepantes (outliers) e valores faltantes (missings).

[No artigo anterior falamos sobre medidas de dispersão, especificamente *variância* e *desvio padrão*. Talvez, lê-lo te ajude a entender para que servem as medidas de dispersão que vamos apresentar aqui.](https://cecivieira.com/medidas-de-dispersao/)

Quando falamos da *média* no [artigo sobre medidas de tendência central](https://cecivieira.com/medidas-de-tendencia-central/), comentamos que é uma medida muito afetada por valores discrepantes. Então, agora vamos conversar sobre o que são esses valores.

## Valores discrepantes (outliers)

*Outliers* (valores discrepantes) são valores numericamente distantes da maior parte do conjunto de dados, ou seja, valores extremos. Para determinar esses valores, usamos como parâmetro a medida de intervalo interquartil, que estabelece a dispersão dos dados em torno da mediana.

[Como já vimos](https://cecivieira.com/medidas-de-tendencia-central/), a mediana é o valor que ocupa a posição central do conjunto de dados após a ordenação dos seus valores em ordem crescente. Depois dessa ordenação, também é possível determinar o primeiro e o terceiro quartil e, consequentemente, o intervalo entre eles. O que chamamos de intervalo interquartil é a diferença entre os valores do 3. e 1. quartil.

Os *outliers* são todos os valores que ultrapassam o limite superior ou inferior, ou seja, todos os valores que sejam maiores do que a soma do 3. quartil com 1,5 intervalo interquartil ou menores do que a subtração do 1. quartil por 1,5 intervalo interquartil.

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/boxplot-intervalo-interquartis-valores-discrepantes.png">
Fonte: [Wikimedia](https://commons.wikimedia.org/wiki/File:Elements_of_a_boxplot_pt.svg)

É possível calcular os quartis e o intervalo interquartis usando uma função do[ Pandas](https://pandas.pydata.org/docs/). Para isso, vamos continuar usando a coluna `NR_IDADE_DATA_POSSE`  do [conjunto de dados de candidaturas para a Câmara dos Vereadores de Recife em 2020](https://cecivieira.com/estatistica-descritiva-e-distribuicao-estatistica/#contexto) para mostrar como fazer:

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/quartis.png" alt="primeiro_quartil = df_candidaturas['NR_IDADE_DATA_POSSE'].quantile(0.25) | terceiro_quartil = df_candidaturas['NR_IDADE_DATA_POSSE'].quantile(0.75) | intervalo_interquartil = terceiro_quartil - primeiro_quartil">
Fonte:[ Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)

Percebemos que o primeiro quartil corresponde a 40 anos, ou seja, 25% das pessoas candidatas são mais jovens do que essa idade. Já o terceiro quartil corresponde a 56 anos, isso quer dizer que 75% das pessoas candidatas são mais jovens do que essa idade. Por fim, o intervalointerquartil é o valor 16.

Em resumo, todas as pessoas candidatas mais velhas do que 80 anos (56+16*1,5) e mais jovens do que 16 anos(40-16*1,5) são consideradas *outliers* em relação a sua idade.

Se os valores discrepantes não são erros produzidos na coleta dos dados, eliminá-los ou substituí-los pode modificar as inferências a partir da análise dos dados. O que pode ocasionar desenvolvimento de tecnologias discriminatórias. A diversidade dos dados é a chave para a produção de tecnologias inclusivas. *Outliers* devem ser explicados, não eliminados.

## Valores faltantes (missings)

Se por um lado temos valores extremos, por outro temos valores faltantes (missings) que podem ocorrer de forma aleatória ou estar relacionada com o valor de alguma outra variável, por exemplo, pessoas que moram em bairros periféricos, podem não querer informar seu endereço por receio de sofrer discriminação. Não existe uma diretriz padrão para tratar dados faltantes. Os métodos mais utilizados são exclusão das observações com dados faltantes ou imputação de dados, que pode ser realizado através de várias técnicas. A forma de tratá-los dependerá do tipo de análise a ser realizada.

No próximo artigo vamos falar sobre correlação, que nos permitirá saber a influência de uma variável sobre outra e fazer algumas inferências.

Ainda que tu não tenha entendido nada do que escrevi aqui, sugiro que sigas lendo a série até o final, pois os assuntos se complementam e vão ajudar que na tua próxima tentativa de estudo o tema faça um pouquinho mais de sentido.

Se assistir vídeo aula te ajudar, dá uma olhadinha [nessa sobre conceitos de estatística básica para ciência de dados](https://youtu.be/xiZwte8D1Xs), que fiz para a [Sprint de Dados da PrograMaria](https://youtube.com/playlist?list=PL7h1S1pOf5-t13ktXkAIX5_ZG2nXpU8rE).

## Continue estudando

### Outros artigos da série

- [Estatística descritiva e distribuição estatística](https://cecivieira.com/estatistica-descritiva-e-distribuicao-estatistica/)
- [Medidas de tendência central](https://cecivieira.com/medidas-de-tendencia-central/)
- [Medidas de dispersão](https://cecivieira.com/medidas-de-dispersao/)
- [Correlação entre variáveis](https://cecivieira.com/correlacao-entre-variaveis/)

### Recomendações gerais

- **WHEELAN, Charles. Estatística: O que é, para que serve, como funciona. São Paulo: Zahar, 2016.** (como uma das primeiras tentativas, também recomendo a leitura desse livro)
- [Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)
- [OKBR. Análise com estatística descritiva para leigos](https://escoladedados.org/tutoriais/analise-com-estatistica-descritiva-para-leigos/)
- [Portal de Dados Abertos do Tribunal Superior Eleitoral: candidaturas 2020.](https://dadosabertos.tse.jus.br/dataset/candidatos-2020-subtemas)