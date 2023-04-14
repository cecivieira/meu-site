---
layout: post
title: "Correlação entre variáveis"
author: cecivieira
date: 2022-06-26 09:00
lang: pt-br
translated-es: 
translated-en: 
translated-ptbr: 
tags: [artigo]
categories: [estatística]
image: https://res.cloudinary.com/damhz6skt/image/upload/v1681494290/capas-site/22_fos8dv.png
description: "Último de uma série sobre conceitos (bem) básicos de estatística aplicada a ciência de dados. Nesse é apresentado conceito sobre correlação entre variáveis."
toc: false
beforetoc:
---
Esse artigo é o último de uma série sobre conceitos (bem) básicos de estatística aplicada a ciência de dados. Nesse é apresentado conceito sobre correlação entre variáveis. 

[No artigo anterior falamos sobre valores discrepantes (outliers) e valores faltantes (missings). Talvez, lê-lo te ajude a entender a importância de tratar os dados, antes de estudar sobre a influência de uma variável sobre outra e de fazer alguma inferência.](https://cecivieira.com/valores-discrepantes-e-valores-faltantes/)

## Conceito

Às vezes, desejamos analisar um dado cujo comportamento pode está sendo inﬂuenciado por outros dados. Por exemplo, temos mais sede durante os dias que mais suamos, então pode ser que a quantidade de líquido ingerido diariamente por uma pessoa esteja relacionada a quantidade de exercício físico que ela pratica ou ao clima do local aonde ela mora ou por algum outro fator que a faça suar. A esse fenômeno chamamos de correlação entre variáveis, que pode ser de três tipos:

**positiva**: quando as variáveis analisadas tendem a aumentar na mesma direção;

**negativa**: quando as variáveis tendem a crescerem em sentidos opostos, ou seja, quando uma variável aumenta a outra tende a diminuir;

**nula**: quando não se observa variação interdependente.

### Coeficiente de correlação

Para medir a correlação entre as variáveis usamos o “coeﬁciente de correlação, um valor numérico que indica o grau e a direção da tendência de associação entre [elas]” ([Ciência de Dados na Educação Pública, 2021](https://bookdown.org/cienciadedadosnaep/ciencia_de_dados/cap4.html)). 

Existem vários tipos de cálculo que podemos fazer para achar esse coeﬁciente, a depender das características dos dados. Neste artigo vou falar sobre o coeﬁciente de Pearson, também conhecido como *coeficiente de correlação linear*, que é usado para veriﬁcar a correlação entre duas variáveis quantitativas (numéricas). 

Esse coeficiente é resultado da divisão da covariância de duas variáveis pelo produto dos seus desvios padrão, que sempre resultará em valores situados entre -1 e 1. Quanto mais extremos os valores, mais forte é a correlação entre as variáveis analisadas e quanto mais próximo de zero, mais fraca, sendo 0 a indicação de que não há correlação.

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/escala-coeficiente-correlacao.png">

Uma forma comum e muito eﬁciente para visualizar o coeﬁciente é usando a matriz de correlação. Para isso, vamos continuar usando o [conjunto de dados de candidaturas para a Câmara dos Vereadores de Recife em 2020](https://cecivieira.com/estatistica-descritiva-e-distribuicao-estatistica/#contexto). Verificaremos o coeﬁciente de correlação entre as colunas `NR_IDADE_DATA_POSSE` e `CD_ESTADO_CIVIL`, tendo como hipótese que a idade tem uma correlação forte com o estado civil das pessoas candidatas. 

Só é possível realizar essa correlação porque cada estado civil está relacionado a um código numérico, conforme apresentado no dicionário de dados. 

<img class="rounded mx-auto d-block" src="../../assets/images/serie-estatistica-para-ciencia-dados/matriz-de-correlacao.png">
Fonte:[Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)

Observamos que a correlação linear é fraca. Então, nossa hipótese não foi comprovada, ou seja, não é possível afirmar que existe correlação entre as variáveis analisadas.

## Correlação não significa causalidade: fator de confusão

Nesse tema precisamos ﬁcar alertas para não fazermos associações absurdas. Nem sempre uma correlação linear forte signiﬁca que as variáveis possuem uma relação de causa-efeito. Correlação não implica em causalidade. É preciso analisar cuidadosa e criticamente cada relação e seu contexto, além de considerar os fatores de confusão.

Para entender melhor, imaginemos o seguinte caso: nos meses de dezembro e janeiro é observado aumento no número de afogamentos em praias e, ao mesmo tempo, um aumento na venda de picolés. Imaginemos que, segundo os dados analisados, o coeficiente de correlação linear é de 0,96. Nesse caso, podemos concluir que a venda de picolés causa afogamentos em praias? Não. Precisamos considerar uma terceira variável, que nesse contexto, é o *fator de confusão*. Esses meses são de verão, isso significa que costumamos ir mais à praia e consumir mais picolés. Portanto, para essa análise, também precisamos considerar a variável "temperatura" para compreender o contexto e não fazer uma inferência equivocada.

Com esse artigo finalizamos a série sobre conceitos (bem) básicos de estatística para ciência de dados. Espero que essas leituras ajudem que esse tema faça um pouquinho mais de sentido na tua próxima tentativa de estudá-lo.

Se assistir vídeo aula te ajudar, dá uma olhadinha [nessa sobre conceitos de estatística básica para ciência de dados](https://youtu.be/xiZwte8D1Xs), que fiz para a [Sprint de Dados da PrograMaria](https://youtube.com/playlist?list=PL7h1S1pOf5-t13ktXkAIX5_ZG2nXpU8rE).

## **Continue estudando**

### **Outros artigos da série**

- [Estatística descritiva e distribuição estatística](https://cecivieira.com/estatistica-descritiva-e-distribuicao-estatistica/)
- [Medidas de tendência central](https://cecivieira.com/medidas-de-tendencia-central/)
- [Medidas de dispersão](https://cecivieira.com/medidas-de-dispersao/)
- [Valores discrepantes e valores faltantes](https://cecivieira.com/valores-discrepantes-e-valores-faltantes/)

### **Recomendações gerais**

- **WHEELAN, Charles. Estatística: O que é, para que serve, como funciona. São Paulo: Zahar, 2016.** (como uma das primeiras tentativas, também recomendo a leitura desse livro)
- [Notebook “Estatística básica para Ciência de Dados”](https://github.com/cecivieira/estatistica-basica-para-ciencia-de-dados)
- [OKBR. Análise com estatística descritiva para leigos](https://escoladedados.org/tutoriais/analise-com-estatistica-descritiva-para-leigos/)
- [OKBR. Correlação não é causalidade, mas o que é então?](https://escoladedados.org/tutoriais/correlacao-nao-e-causalidade-mas-o-que-e-entao/)
- [Portal de Dados Abertos do Tribunal Superior Eleitoral: candidaturas 2020.](https://dadosabertos.tse.jus.br/dataset/candidatos-2020-subtemas)
- [Spurious Correlations](https://www.tylervigen.com/spurious-correlations)
- [UFBA. Ciência de Dados na Educação Pública. Correlação e causalidade](https://bookdown.org/cienciadedadosnaep/ciencia_de_dados/cap4.html)