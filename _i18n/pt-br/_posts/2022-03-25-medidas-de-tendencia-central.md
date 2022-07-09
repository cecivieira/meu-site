---
layout: post
title: "Medidas de tendência central"
author: cecivieira
date: 2022-03-25 09:00
lang: pt-br
translated-es: 
translated-en: 
translated-ptbr: 
tags: [artigo]
categories: [estatística]
image: assets/images/cover/19.png
description: "Segundo artigo de uma série sobre conceitos (bem) básicos de estatística aplicada a ciência de dados. Nesse são apresentadas medidas de tendência central, especificamente média, moda e mediana."
toc: false
beforetoc:
---
Esse artigo é o segundo de uma série sobre conceitos (bem) básicos de estatística aplicada a ciência de dados. Nesse são apresentadas medidas de tendência central, especificamente *média*, *moda* e *mediana*.

[No artigo anterior falamos sobre o conceito de estatística descritiva, distribuição estatística e o contexto dos dados que estão sendo utilizados nos exemplos. Talvez, lê-lo te ajude a entender sobre as medidas de tendência central que vamos apresentar aqui.](https://cecivieira.com/estatistica-descritiva-e-distribuicao-estatistica/)

## Conceito

Algumas das principais medidas usadas em estatística são as medidas de tendência central, que servem para representar o centro de um conjunto de dados. É aquele valor que se aproxima da maior parte dos dados. 

Sabe quando você olha para um grupo de pessoas e pensa “esse povo tem mais ou menos 20 anos?” Pronto, 20 anos é a medida de tendência central que você identificou. Em ciência de dados as mais utilizadas são: média, mediana e moda.

### Moda

A *moda* é o valor que mais se repete em um conjunto de dados. Das três medidas que vamos falar nesse artigo, ela é a única que pode ser usada em dados não numéricos (o que chamamos de dados qualitativos).

No [conjunto de dados de candidaturas para a Câmara dos Vereadores de Recife em 2020](https://cecivieira.com/estatistica-descritiva-e-distribuicao-estatistica/#contexto) existe uma coluna com a idade que as candidatas teriam no dia da sua posse, chamada `NR_IDADE_DATA_POSSE`. Vamos usá-la para descobrir a idade que mais se repete:

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/moda.png">
Fonte: [Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)

Percebemos que a *moda* dessa coluna é  51.

### Média

Outra medida de tendência central é a *média*, que é a soma de todos os valores do conjunto de dados, dividido pela quantidade de valores do conjunto. Vou desenhar pra ficar mais fácil. Imagina esse conjunto de dados:

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/lista-numeros.png">

- Os elementos são: 7, 2 e 3.
- A quantidade de valores desse conjunto é 3.

$$\frac{7+2+3}{3} = 4$$

- Então, a média é 4.

Mas, a menos que você queira fazer esse cálculo na mão (o que não recomendo), podemos descobrir a média usando uma função do [Pandas](https://pandas.pydata.org/docs/).

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/media.png">
Fonte: [Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)

Observamos que a idade *média* que as candidatas teriam no dia da posse é de 47,9 anos,  o que também corresponde ao ponto mais alto do gráfico de distribuição que vimos no [artigo anterior](https://cecivieira.com/estatistica-descritiva-e-distribuicao-estatistica/).

### Mediana

A última medida de tendência central que vamos conversar é a *mediana*. Ela é o valor que ocupa a posição central do conjunto de dados, após a ordenação dos valores de forma crescente. Isso quer dizer que, após a ordenação dos valores, aquele localizado exatamente no meio dessa lista é a mediana. O que significa que 50% dos valores são menores do que ela e 50% são maiores. 

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/lista-numeros-ordenada.png">

Por exemplo, no nosso conjunto de dados de pessoas candidatas, a *mediana* da coluna `NR_IDADE_DATA_POSSE` significa que metade das pessoas candidatas são mais jovens e metade mais velhas do que o valor apresentado na mediana.

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/mediana.png">

Fonte: [Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)

A mediana desse conjunto é 48 anos.

Quando a quantidade de valores do conjunto de dados é par, a *mediana* é a média entre os dois valores que estão no centro da ordenação.

Vocês perceberam que os valores da média, moda e mediana são muito próximos? Isso acontece porque a distribuição desses dados é *normal simétrica*. Nesse caso, qualquer uma das medidas (médica, moda e mediana) poderia ser escolhida para representar o centro dessa distribuição, ou seja, a idade que a maior parte das candidaturas teriam no dia da sua posse.

A escolha nem sempre é fácil assim, pois cada uma dessas medidas tem seus prós e contras, por exemplo a *média* é muito afetada por valores discrepantes, então seu uso é recomendado para conjuntos de dados com valores mais uniformes. Algo que nos ajuda na escolha de qual medida de tendência central usar são as medidas de dispersão, assunto do próximo artigo.

Ainda que tu não tenha entendido nada do que escrevi aqui, sugiro que sigas lendo a série até o final, pois os assuntos se complementam e vão ajudar que na tua próxima tentativa de estudo o tema faça um pouquinho mais de sentido.

Se assistir vídeo aula te ajudar, dá uma olhadinha [nessa sobre conceitos de estatística básica para ciência de dados](https://youtu.be/xiZwte8D1Xs), que fiz para a [Sprint de Dados da PrograMaria](https://youtube.com/playlist?list=PL7h1S1pOf5-t13ktXkAIX5_ZG2nXpU8rE).

## Continue estudando

### Outros artigos da série

- [Estatística descritiva e distribuição estatística](https://cecivieira.com/estatistica-descritiva-e-distribuicao-estatistica/)
- [Medidas de dispersão](https://cecivieira.com/medidas-de-dispersao/)
- [Valores discrepantes e valores faltantes](https://cecivieira.com/valores-discrepantes-e-valores-faltantes/)
- [Correlação entre variáveis](https://cecivieira.com/correlacao-entre-variaveis/)

### Recomendações gerais

- **WHEELAN, Charles. Estatística: O que é, para que serve, como funciona. São Paulo: Zahar, 2016.** (como uma das primeiras tentativas, também recomendo a leitura desse livro)
- [Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)
- [Portal de Dados Abertos do Tribunal Superior Eleitoral: candidaturas 2020.](https://dadosabertos.tse.jus.br/dataset/candidatos-2020-subtemas)
- [Pizza de Dados. Medidas de tendência central: moda, média e mediana](https://medium.com/pizzadedados/medidas-tendencia-central-185924243185)