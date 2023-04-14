---
layout: post
title: "Medidas de dispersão"
author: cecivieira
date: 2022-04-01 09:00
lang: pt-br
translated-es: 
translated-en: 
translated-ptbr: 
tags: [artigo]
categories: [estatística]
image: https://res.cloudinary.com/damhz6skt/image/upload/v1681494290/capas-site/20_aminlw.png
description: "Terceiro  de uma série sobre conceitos (bem) básicos de estatística aplicada a ciência de dados. Nesse são apresentadas medidas de dispersão, especificamente variância e desvio padrão."
toc: false
beforetoc:
---
Esse artigo é o terceiro  de uma série sobre conceitos (bem) básicos de estatística aplicada a ciência de dados. Nesse são apresentadas medidas de dispersão, especificamente *variância* e *desvio padrão*.

[No artigo anterior falamos sobre o conceito das medidas de tendência central e apresentamos as três mais utilizadas: média, moda e mediana. Talvez, lê-lo te ajude a entender para que servem as medidas de dispersão que vamos apresentar aqui.](https://cecivieira.com/medidas-de-tendencia-central/)


## Conceito

As medidas de dispersão medem quanto os dados estão afastados uns dos outros em uma distribuição, ou seja, avaliam quanto os dados diferem entre si. 

Imagina um conjunto de dados com os elementos 7, 2 e 3. A grosso modo, o número 2 e 3 estão afastados entre si por 1 passo, enquanto o 3 e o 7 estão afastados em 4 passos. 

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/dispersao.png">

As medidas de dispersão representam em um único valor este afastamento entre os dados. Elas também ajudam na escolha da medida de tendência central mais adequada para representar um conjunto de dados, por exemplo, em um conjunto de dados que tenha um desvio padrão alto, talvez não seja uma boa ideia usar a média como medida de tendência central. 

As medidas de dispersão mais usadas são: desvio padrão e variância. 


## Variância

A variância indica quanto o conjunto de dados desvia da sua média, ou seja, quão distante cada valor do conjunto está da média. Isso quer dizer que quanto menor é a variância, mais próximo os valores estão da média. Essa medida é base para descobrirmos o desvio padrão.


## Desvio padrão

O desvio padrão indica o grau de dispersão de um conjunto de dados, ou seja, o quanto ele é uniforme. Quanto menor for o desvio padrão, mais homogêneos são os dados. A vantagem de usarmos o desvio padrão (ao invés da variância), é que essa medida é expressa na mesma unidade dos dados, o que facilita a comparação e seu uso.

É possível calcular o desvio padrão usando uma função do[ Pandas](https://pandas.pydata.org/docs/), para isso vamos continuar usando a coluna `NR_IDADE_DATA_POSSE`  do [conjunto de dados de candidaturas para a Câmara dos Vereadores de Recife em 2020](https://cecivieira.com/estatistica-descritiva-e-distribuicao-estatistica/#contexto) no nosso exemplo:

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/desvio-padrao.png" alt="df_candidaturas['NR_IDADE_DATA_POSSE'].std()">
Fonte:[ Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)

Percebemos que o desvio padrão é de 11,34 anos. 

Em uma distribuição normal, como é a dessa coluna, 68,2% dos dados estão distantes da média 1 desvio padrão para mais ou para menos, ou seja, nesse nosso exemplo 68,2% das pessoas candidatas são 11,34 anos mais jovens do que a idade média ou 11,34 anos mais velhas. 

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/desvio-padrao-diagrama.svg">
Fonte: [Wikimedia](https://pt.wikipedia.org/wiki/Desvio_padr%C3%A3o#/media/Ficheiro:Standard_deviation_diagram.svg)

Só aceita isso como verdade e segue o assunto. Os cálculos para compreender esse conceito são tão complexos que nem vale a gente parar para entendê-los agora.

Outro exemplo de como o desvio padrão está no nosso dia a dia é quando, em ano de eleição, vemos as pesquisas de intenções de voto anunciando o percentual de intenção de voto para cada candidatura e logo em seguida informa que esses valores podem variar X pontos percentuais para mais ou para menos. Esses pontos é o desvio padrão da pesquisa.

No próximo artigo vamos falar sobre valores discrepantes, pois é um tema importante para entendermos a qualidade dos dados do conjunto de dados.

Ainda que tu não tenha entendido nada do que escrevi aqui, sugiro que sigas lendo a série até o final, pois os assuntos se complementam e vão ajudar que na tua próxima tentativa de estudo o tema faça um pouquinho mais de sentido.

Se assistir vídeo aula te ajudar, dá uma olhadinha [nessa sobre conceitos de estatística básica para ciência de dados](https://youtu.be/xiZwte8D1Xs), que fiz para a [Sprint de Dados da PrograMaria](https://youtube.com/playlist?list=PL7h1S1pOf5-t13ktXkAIX5_ZG2nXpU8rE).

## Continue estudando

### Outros artigos da série

- [Estatística descritiva e distribuição estatística](https://cecivieira.com/estatistica-descritiva-e-distribuicao-estatistica/)
- [Medidas de tendência central](https://cecivieira.com/medidas-de-tendencia-central/)
- [Valores discrepantes e valores faltantes](https://cecivieira.com/valores-discrepantes-e-valores-faltantes/)
- [Correlação entre variáveis](https://cecivieira.com/correlacao-entre-variaveis/)

### Recomendações gerais

- **WHEELAN, Charles. Estatística: O que é, para que serve, como funciona. São Paulo: Zahar, 2016.** (como uma das primeiras tentativas, também recomendo a leitura desse livro)
- [Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)
- [OKBR. Análise com estatística descritiva para leigos](https://escoladedados.org/tutoriais/analise-com-estatistica-descritiva-para-leigos/)
- [Portal de Dados Abertos do Tribunal Superior Eleitoral: candidaturas 2020.](https://dadosabertos.tse.jus.br/dataset/candidatos-2020-subtemas)
- [Pizza de Dados. Medidas de tendência central: moda, média e mediana](https://medium.com/pizzadedados/medidas-tendencia-central-185924243185)