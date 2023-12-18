---
layout: post
title: "Análise exploratória de dados para fortalecimento de democracias"
author: cecivieira
date: 2022-10-08 08:00
lang: pt-br
translated-es: es/analisis-exploratorio-de-datos-abiertos-para-el-fortalecimiento-de-democracias
translated-en: 
translated-ptbr: 
categories: [dados abertos, governo aberto, américa latina, análise exploratoria, inovação cívica, pandas]
tags: [artigo, palestra]
image: https://res.cloudinary.com/damhz6skt/image/upload/v1681494290/capas-site/24_qtancy.jpg
description: "Dados abertos são recursos importantes para o desenvolvimento de tecnologia cívica e fomento de gestões participativas. Este artigo apresentará técnicas de exploração de conjunto de dados abertos usando a biblioteca Pandas, visando estimular o uso de dados abertos governamentais."
toc: false
beforetoc:
---
> Nesse artigo você encontrará o material ([repositório](https://github.com/cecivieira/cotas-genero-eleicoes-e-proposicoes-legislativas.git) e [slides](../../assets/images/2022-10-08/pybr2022 - Análise exploratória de dados para fortalecimento de democracias.pdf)) usados na [palestra "Análise exploratória de dados para fortalecimento de democracias"](https://www.youtube.com/watch?v=QGyg0ICDIyY), apresentada na Python Brasil 2022.

Para começar qualquer análise de dados, é necessário compreender o contexto no qual você está desenvolvendo o estudo. O nosso, é a celebração de [90 anos do Código Eleitoral](https://www2.camara.leg.br/legin/fed/decret/1930-1939/decreto-21076-24-fevereiro-1932-507583-publicacaooriginal-1-pe.html), instrumento que permitiu às mulheres votarem e serem votadas para cargos eletivos. Também faz parte do nosso contexto, a publicação de leis sobre cotas de gênero (Lei [9.504/1997](http://www.planalto.gov.br/ccivil_03/leis/l9504.htm) e [12.034/2009](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12034.htm)) e as propostas legislativas apresentadas.

A Organização dos Estados Americanos (OEA) prevê que a partir de 30% de mulheres ocupando cargos eletivos, em casas legislativas, é possível notar um aumento substancial em propostas legislativas com temas relacionados a defesa da democracia e proteção de direitos de grupos historicamente marginalizados, a saber: mulheres, população campesina, negra, LGBTQIA+, idosos, PCDs, artistas, população economicamente vulneáveis e indígenas.

Nessa análise exploraremos os conjuntos de dados "Deputados", "Legislaturas", "Proposições" e "Temas" publicados pela Câmera dos Deputados Federais, afim de verificar o impacto das citadas legislações na composição de gênero da citada casa legislativa, além da correlação dessa composição com os temas das propostas legislativas ano após ano.

**Sumário**
- [Dados abertos](#dados-abertos)
- [Panorama da transparência de dados na América Latina e Caribe](#panorama-da-transparência-de-dados-na-américa-latina-e-caribe)
- [Índice de dados abertos, úteis e reutilizáveis (OURdata Index)](#índice-de-dados-abertos-úteis-e-reutilizáveis-ourdata-index)
- [Panorama das Administrações Públicas de América Latina e Caribe](#panorama-das-administrações-públicas-de-américa-latina-e-caribe)
- [Análise exploratória de dados](#análise-exploratória-de-dados)
    - [Pipeline](#pipeline)
    - [Coleta de datos](#coleta-de-datos)
    - [Código completo](#código-completo)
    - [Considerações finais](#considerações-finais)

Antes de iniciarmos a análise exploratória, vamos observar o panorama atual do nível de transparência de dados na América Latina para comprender a importância da abertura de dados para a manutenção e fortalecimento de gestões democráticas.

# Dados abertos
Dados abertos são dados digitais publicados com as características técnicas e jurídicas necessárias para que possam ser usados, reusados e redistribuidos por qualquer pessoa, em qualquer momento e lugar. Esse conceito aplica-se a dados de interesse público que não sofre nenhuma restrição de acesso.

Dados abertos permitem a governos, cidadãs, organizações da sociedade civil e setor privado tomarem decisões mais acertivas, baseada em evidências. Além disso, o acesso eficaz e oportuno a dados ajuda a desenvolver novos desafios e ideias inovadoras que podem gerar benefícios sociais e econômicos, bem como, fomentam maior interação entre governos e cidadãs, permitindo assim, um ambiente propício à ações colaborativas.
 
Alto nível de transparência de dados nos permite comparar, combinar e realizar conexões entre diversos conjuntos de dados. Isso nos permite identificar tendências, desafios, desigualdades econômicas e sociais, além de monitorar programas e serviços públicos. Um exemplo concreto da importância de ter um alto nível de abertura de dados, foi a luta coletiva contra a pandemia de COVID-19. Só foi possível acompanhar em tempo real a situação em cada país, monitorar a gestão dos recursos, desenvolver ferramentas tecnológicas e soluções científicas em um curto prazo devido ao esforço coletivo e intencional para abertura de dados e prática de ciência aberta.
 
Construir sociedades prósperas, equitativas e justas requer governos transparentes, que prestem contas e contribuam de maneira contante e significativa com a sociedade. Nesse sentido, existe uma revolução global de dados, que busca fomentar a ações colaborativas em torno a desafios chaves, proporcionar um monitoramento eficaz das atividades governamentais, apoiar inovação, desenvolvimento econômico sustentável e criação e expansão de políticas públicas eficientes e eficazes.

Dados abertos é um dos eixos principais para alcançar um governo aberto e democrático.
 
# Panorama da transparência de dados na América Latina e Caribe
 
Aqui, na nossa região, os esforços para incentivar gestões mais participativas, começaram há alguns anos. Em 2011 governos de todo o mundo e representantes da sociedade civil se uniram para criar a [Parceria para Governo Aberto (OGP)](https://www.opengovpartnership.org/) com o objetivo de promover gestões transparentes, participativas, inclusivas e responsáveis. O Brasil foi um dos 8 países fundadores desta Parceria. Atualmente, 16 países da América Latina e Caribe participam da Parceria.
 
Em 2015, como ação do grupo de trabalho de Dados Abertos da OGP, foi lançada a [Carta internacional de Dados Abertos](https://opendatacharter.net/principles-es/). Desenvolvida com participação de representantes da sociedade civil e especialistas no tema, essa carta determina os seguintes princípios:
1. Abertos por padrão
2. Oportunos e exaustivos
3. Acessíveis e utilizáveis
4. Comparáveis e interoperáveis
5. Para melhorar a governança e a participação cidadã
6. Para o desenvolvimento inclusivo e inovação             
 
Atualmente, as seguintes publicações que se baseiam nessa [Carta](https://opendatacharter.net/principles-es/) para analisar o nível de abertura de dados nos governos:
 
- **[Open Data Barometer](https://opendatabarometer.org/)**: produzido pela [World Wide Web Foundation](https://www.w3.org/), mede como governos de todo o mundo publicam e utilizam dados abertos para prestação de contas, inovação e impacto social;
- **[OURdata Index](https://www.oecd.org/gov/digital-government/policy-paper-ourdata-index-2019.htm)**: publicado pela [OCDE](https://www.oecd.org/), esse índice realiza uma análise comparativa do desenvolvimento e implementação de políticas públicas para abertura de dados governamentais.
 
Nesse artigo enfocaremos no [OURdata Index](https://www.oecd.org/gov/digital-government/policy-paper-ourdata-index-2019.htm), pois possue a abordagem mais apropriada para a comparação que desejamos realizar, além de ser usado como base para o [Panorama das Administrações Públicas: América Latina e Caribe](https://publications.iadb.org/es/panorama-de-las-administraciones-publicas-america-latina-y-el-caribe-2020), que detalharemos nos próximos capítulos.

## Índice de dados abertos, úteis e reutilizáveis (OURdata Index)
 
Tem o objetivo de medir o nível de disponibilidade, acessibilidade e apoio governamental para a reutilização de dados, seguindo os princípios da [Carta Internacional de Dados Abertos](https://opendatacharter.net/principles-es/). Os três citados indicadores tem o mesmo peso, além disso pode variar entre 0 e 1.

Com esse índice é possível comparar os níveis de abertura de dados entre os países da América Latina com os membros da OCDE. No OURdata Index de 2019, a pontuação média dos países latinoamericanos foi de 0,43, enquanto a média dos países da OCDE é 0,60.

No entanto, entre os países da América Latina, existe um evidente contraste no desenvolvimento do tema de transparência de dados governamentais. Colombia (0,88), México (0,71) e Brasil  (0,63) lideram a região com uma pontuação mais alta do que a média dos países membros da OCDE, enquanto Equador e El Salvador possuem 0,29 e 0.27, respectivamente.
 
<img class="rounded mx-auto d-block" src="../../assets/images/2021-08-28/grafica-ourdata-index-2019-america-latina.png">
 
## Panorama das Administrações Públicas de América Latina e Caribe
 
A publicação [Panorama das Administrações Públicas de América Latina e Caribe](https://publications.iadb.org/es/panorama-de-las-administraciones-publicas-america-latina-y-el-caribe-2020) abrange aspectos importantes para entender a governança pública e permite analizar o desempenho dos governos da região em comparação com os países membros da OCDE. Um dos apectos considerados para construção de indicadores, nessa publicação, é o tema "dados abertos governamentais", que utiliza os dados do [OURdata Index](https://www.oecd.org/gov/digital-government/policy-paper-ourdata-index-2019.htm).
 
Esse Panorama, publicado em 2020, é a publicação mais recente sobre dados abertos públicos da América Latina. Foi produzido pela [OCDE (Organização para Cooperação e Desenvolvimento Econômico)](https://www.oecd.org/acerca/miembros-y-socios/), uma organização que agrupa 38 países com a missão de promover políticas públicas que melhorem o bem estar econômico e social das pessoas; e pelo [BID (Banco Interamericano de Desenvolvimento)](https://www.iadb.org/es/acerca-del-bid/como-estamos-organizados), que é a principal fonte de financiamento para o desenvolvimento da América Latina e Caribe, além disso ajuda a melhorar a vida das cidadãs ao brindar soluções financeiras e conhecimento sobre o desenvolvimento para clientes do setor público e privado.
 
Este [Panorama](https://publications.iadb.org/es/panorama-de-las-administraciones-publicas-america-latina-y-el-caribe-2020) informa que 81% dos países que compõe a América Latina e Caribe possuem uma estratégia de médio prazo e 75% tem um plano de ação nacional, que prevê implementação de portais e publicação de conjuntos de dados abertos. Quanto a participação cidadã, a metade dos países latinoamericanos possuem programas governamentais para apoiar a qualificação sobre datos abertos para as organizações da sociedade civil. No entanto, essa taxa está abaixo da média dos países da OCDE, que é de 75%.
 
Ainda que a agenda sobre dados abertos está avançando na nossa região, há muito o que avançarmos. De acordo com o [Open Data Barómetro](https://opendatabarometer.org/), os governos da região desenvolvem iniciativas isoladas sobre o tema. Ou seja, deveríamos priorizar e investir na gestão baseada em dados para respaldar as mudanças estruturais necessárias para termos um enfoque "aberto" em todos os âmbitos e esimular a participação cidadã no desenvolvimento de políticas e programas governamentais.

A democracia na América Latina e Caribe vai muito além das eleições, de acordo com o [projeto LATINNO](https://latinno.net/es/), nos últimos anos estamos nos convertendo em um laboratório de inovação política e de gestão participativa. Muito disso se dá devido a transparência de dados governamentais, ainda que tenhamos muito o que avançar nesse tema.
 
# Análise exploratória de dados

Até aqui te mostrei a importância dos dados abertos governamentais para o desenvolvimento de inovação e uma gestão más participativa, além disso também apresentei um panorama do nível de transparência de dados e a política adotada pelos governos da América Latina sobre o tema. Agora, vamos colocar a mão na massa... quer dizer... nos dados.

A ideia dessa análise exploratória é ensinar um pouco da biblioteca Pandas e ser um exemplo de uso de dados abertos, além disso apresentar a potência dos dados e estimular você a consumi dados governamentais, seja para desenvolver novas tecnologia para melhorar a vida da sua comunidade ou acompanhar uma política governamental.

Escolhi para esta análise os dados de candidaturas eleitas e propostas legislativas para a Câmera dos Deputados Federal do Brasil.

## Pipeline

<img class="rounded mx-auto d-block" src="../../assets/images/2022-10-08/pipeline.png">

O pipeline dessa análise é composto por coleta, pré-processamento e análise de dados. Contudo, antes analisar as proposições legislativas foi necessário criar um vocabulário controlado. Para isso, foi desenvolvido um classificador (modelo de aprendizado de máquina).

Os dados foram coletados no [Portal de Dados Abertos da Câmera de Deputados Federal do Brasil](https://dadosabertos.camara.leg.br/) e correspondem às candidaturas eleitas no período entre 1934 e 2021. O objetivo da análise é compreender a evolução da quantidade de mulheres eleitas como deputada federal no período, o impacto da legislação referente a cota de gênero para esta casa legislativa e se já é possível verificar mudança nas temáticas das propostas legislativas.

### Coleta de datos

Foi utilizada a API Restful em Python para coleta dos dados, exceto das propostas legislativas, pois não estavam disponíveis via API. Então, os dados foram coletados manualmente, ano a ano.

É importante dizer que no [Portal de Dados Abertos da Câmera de Deputados Federal do Brasil](https://dadosabertos.camara.leg.br/) nexistem dados apenas de algumas proposições tramitadas entre os anos de 1934 e 1945, além disso os dados das proposições legislativas entre os anos de 1946 e 2000 estão parcialmente disponibilizados - estão abertos apenas os referentes às “proposições de tipos que poderiam se tornar (ou se tornaram) leis e normas jurídicas” (Brasil, [2021?]). Então, é possível que o resulta desta análise não reflita a realidade, no entanto acredito que é um bom exercício para termos ideia de como podemos reutilizar os dados abertos como sociedade civil.

### Código completo

O código de todas as etapas do *pipeline* estão disponíveis [neste repositório](https://github.com/cecivieira/cotas-genero-eleicoes-e-proposicoes-legislativas.git).

## Considerações finais

A análise apresente duas hipóteses e a exploração dos dados em busca da confirmação ou não destas. Por fim, o gráfico abaixo representa a evolução da quantidade de deputadas eleitas para a Câmara dos Deputados do Brasil e os marcos legislativos de cotas de gênero.

<img class="rounded mx-auto d-block" src="../../assets/images/2022-10-08/evolucao-deputadas.png">

--------------------
<img class="rounded mx-auto d-block" src="../../assets/images/2022-10-08/divulgacao-pybr-2022.png">

Esse artigo é composto pelas anotações da palestra “Análise de dados para fortalecimento de democracias”, apresentada na [Python Brasil 2022](https://pretalx.com/python-brasil-2022/talk/AN7RJP/)) em 23 out. no Centro de Convenções do Amazonas Vasco Vasquez (Manaus).

Recursos:
- [Slides](../../assets/images/2022-10-08/pybr2022 - Análise exploratória de dados para fortalecimento de democracias.pdf)
- [Repositório](https://github.com/cecivieira/cotas-genero-eleicoes-e-proposicoes-legislativas.git)
- [Palestra completa](https://www.youtube.com/watch?v=QGyg0ICDIyY) 