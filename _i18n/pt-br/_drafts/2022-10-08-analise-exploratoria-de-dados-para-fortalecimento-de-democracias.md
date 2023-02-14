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
image: assets/images/cover/24.jpg
description: "Dados abertos são recursos importantes para o desenvolvimento de tecnologia cívica e fomento de gestões participativas. Este artigo apresentará técnicas de exploração de conjunto de dados abertos usando a biblioteca Pandas, visando estimular o uso de dados abertos governamentais."
toc: false
beforetoc:
---
> Nesse artigo você encontrará o material ([notebook](XXXX) e [slides](XXXXXX)) usados na palestra "Análise exploratória de dados para fortalecimento de democracias", apresentada na Python Brasil 2022.

Para começar qualquer análise de dados, é necessário compreender o contexto no qual você está desenvolvendo o estudo. O nosso, é a celebração de [90 anos do Código Eleitoral](https://www2.camara.leg.br/legin/fed/decret/1930-1939/decreto-21076-24-fevereiro-1932-507583-publicacaooriginal-1-pe.html), instrumento que permitiu às mulheres votarem e serem votadas para cargos eletivos. Também faz parte do nosso contexto, a publicação de leis sobre cotas de gênero (Lei [9.504/1997](http://www.planalto.gov.br/ccivil_03/leis/l9504.htm) e [12.034/2009](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l12034.htm)) e as propostas legislativas apresentadas.

A Organização dos Estados Americanos (OEA) prevê que a partir de 30% de mulheres ocupando cargos eletivos, em casas legislativas, é possível notar um aumento substancial em propostas legislativas com temas relacionados a defesa da democracia e proteção de direitos de grupos historicamente marginalizados, a saber: mulheres, população campesina, negra, LGBTQIA+, idosos, PCDs, artistas, população economicamente vulneáveis e indígenas.

Nessa análise exploraremos o conjunto de dados XXXX publicados pelo Tribunal Superior Eleitoral, afim de verificar o impacto das citadas legislações na composição de gênero da Câmara de Deputados Federais, além da correlação dessa composição com os temas das propostas legislativas ano após ano.

**Sumário**


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
 
Esse Panorama, publicado em 2020, é a publicação mais recente sobre dados abertos públicos da América Latina. Foi produzido pela [OCDE (Organización para la Cooperación y el Desarrollo Económicos)](https://www.oecd.org/acerca/miembros-y-socios/), uma organização que agrupa 38 países com a missão de promover políticas públicas que melhorem o bem estar econômico e social das pessoas; e pelo [BID (Banco Interamericano de Desarrollo)](https://www.iadb.org/es/acerca-del-bid/como-estamos-organizados), que é a principal fonte de financiamento para o desenvolvimento da América Latina e Caribe, além disso ajuda a melhorar a vida das cidadãs ao brindar soluções financeiras e conhecimento sobre o desenvolvimento para clientes do setor público e privado.
 
Este [Panorama](https://publications.iadb.org/es/panorama-de-las-administraciones-publicas-america-latina-y-el-caribe-2020) informa que el 81% de los países en América Latina y Caribe cuentan con una estrategia de mediano plazo y el 75% tiene un plan de acción nacional que incluye implementación de portales y publicación de datos abiertos. En cuanto a participación ciudadana, la mitad de los países latinoamericanos tienen programas gubernamentales para apoyar el conocimiento sobre datos abiertos gubernamentales entre las organizaciones de la sociedad civil. Sin embargo, esta proporción es inferior a los países de la OCDE, donde el 75% de los gobiernos los tienen.
 
Aunque la agenda de datos abiertos ha despegado en nuestra región, aún hay margen de mejora. En consonancia con el [Open Data Barómetro](https://opendatabarometer.org/), los análisis muestran que los gobiernos todavía tratan los datos abiertos como iniciativas aisladas. O sea, deberíamos priorizar e invertir en la gobernanza de datos abiertos para respaldar los cambios sustanciales necesarios para incorporar un enfoque abierto en todos los ámbitos y estimular la participación ciudadana en las políticas y programas gubernamentales.
 
La democracia en América Latina y Caribe abarca mucho más que las elecciones, de acuerdo con el [proyecto LATINNO](https://latinno.net/es/), en los últimos años estamos convirtiéndonos en un laboratorio de innovaciones políticas y de gobernanza participativa. Mucho se da por la transparencia de datos gubernamentales, aunque nos quede mucho por hacer.
 
# Análisis exploratório de datos
 
Hasta aquí hemos visto la importancia de los datos abiertos gubernamentales para desarrollo de innovación y una gestión más participativa, también echamos un vistazo en el panorama de América Latina acerca del nivel de apertura de los datos y políticas de los gobiernos acerca del tema. Ahora podremos las manos en la masa... ops.. en los datos.
 
La ideia del análisis es enseñar un poquito de Pandas y ser un ejemplo de lo qué podemos hacer con datos abiertos, presentar para vosotras la potencia de este recurso y instigar vosotras a utilizarlos sea para desarrollar nuevas tecnología que mejore la vida de su comunidad o cobrar al gobierno.
 
Elegí para nuestro análisis, los datos de vacunación contra COVID-19 de algunos países de América Latina. Si quieres, puedes profundizarlo cogiendo datos de todos los países de la región.


## Pipeline

<img class="rounded mx-auto d-block" src="../../assets/images/2022-04-29/pipeline.png">

El pipeline de este análisis es compuesto por colecta, pre-procesamiento y análisis de datos. Todavía, antes del análisis de las proposiciones hizo falta estandarizar sus palabras claves, por lo tanto fue desarrolado un classificador (modelo de aprendizaje de máquina).

Los datos fueron colectados del [Portal de Datos Abiertos de la Cámara de Diputados de Brasil]() y corresponden a las candidaturas electas en el periodo de 1934 y 2021. El objetivo del análisis es compreender la evolución de la cantidad de mujeres elegidas como diputadas federal, el impacto de las legislaciones de cuotas de género y si ya se nota cambio en las temáticas de las propuestas legislativas.

### Colecta de datos
Fue usada la API RestFul en Python para recolectar los datos, excepto los de las proposiciones legislativas que no estaban disponible por API, en este caso los datos fueron descargados manualmente año a año.

Es importante decir que en el [Portal de Datos Abiertos de la Cámara de Diputados de Brasil](https://dadosabertos.camara.leg.br/) no están disponibles todas las proposiciones legislativas hasta el año 2000. Entonces, puede que los resultados del análisis no refleje la realidad, todavía creo que es un buen ejercicio para tener ideas de cómo podemos manejar datos abiertos y actuar desde la sociedad civil.

### Pre procesamiento

Las seguintes etapas del *pipeline* puedes encontrar en [este notebook](https://github.com/cecivieira/cotas-genero-eleicoes-e-proposicoes-legislativas/blob/main/PyCon_US.ipynb).

## Consideraciones finales

Desde la sociedad civil, hay un montón de iniciativas que trabajan y luchan por mejoras en nuestra sociedad. Únete a una de ellas!! Nadie cambia el mundo sola, todavía puedes aportar tu granito de arena.

## Organizaciones que promueven uso de la tecnología para el fortalecimiento de democracias

- [Aúna](https://www.auna.org.mx/)
- [Cívica Digital](https://civica.digital/)
- [Codeando México](http://codeandomexico.org/)
- [Ciudadanía inteligente](https://ciudadaniai.org/)
- [Data Cívica](https://datacivica.org/)
- [ILDA](https://idatosabiertos.org/)
- [Instituto Cidade Democrática](https://cidadedemocratica.org.br)
- [Instituto de Tecnologia e Sociedade](https://itsrio.org/pt/home/)
- [Latinno](https://latinno.net/es/)
- [Open Knowledge Brasil](https://ok.org.br/)

--------------------
<img class="rounded mx-auto d-block" src="../../assets/images/2022-04-29/cartel-pycon-charlas-2022.jpg">

Este texto son los apuntes de la charla "Análisis exploratorio de datos abiertos para el fortalecimiento de democracias" presentada en la [PyCon US 2022 (PyCon Charlas)](https://us.pycon.org/2022/schedule/presentation/97/) en el 29 abr 2022 en la ciudad de Salt Lake City(EUA). 

Recursos:
- [Diapositivas](../../assets/images/2022-04-29/PyCon US - Análisis exploratorio de datos abiertos para el fortalecimiento de democracias.pdf)
- [Notebook](https://github.com/cecivieira/cotas-genero-eleicoes-e-proposicoes-legislativas/blob/main/PyCon_US.ipynb)
- [Charla en video](https://youtu.be/AXQ7cFm9WLI)