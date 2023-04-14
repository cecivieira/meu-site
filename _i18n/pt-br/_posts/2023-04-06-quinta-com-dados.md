---
layout: post
title: "Quinta com dados"
author: cecivieira
date: 2023-04-06 09:00
lang: pt-br
translated-es: 
translated-en: 
translated-ptbr: 
tags: [artigo]
categories: [dados abertos]
image: assets/images/cover/26.jpg
description: "Entenda conceitos básicos sobre dados abertos, os instrumentos normativos que fomentam o aumento da oferta de dados abertos, além disso são apresentados portais de dados abertos governamentais, empresas que aderiram o movimento de abertura de dados e iniciativas da sociedade civil que disponibilizam dados em formato aberto. Por fim, são apresentadas organizações da sociedade civil que possuem projetos de código aberto que todos podem contribuir."
toc: false
beforetoc:
---
> Nesse artigo você encontrará os slides, links e código apresentados durante a palestra apresentada no evento "Quinta com Dados" promovido pela Alura, além de sua gravação.

Foi um prazer participar do evento "Quinta com dados" promovido pela [Alura](https://www.alura.com.br/) para a turma da trilha de Ciência de Dados.

Nessa palestra foram apresentados conceitos básicos sobre dados abertos, os instrumentos normativos que fomentam o aumento da oferta de dados abertos. Além disso, foram apresentados portais de dados abertos governamentais, empresas que aderiram o movimento de abertura de dados e iniciativas da sociedade civil que disponibilizam dados em formato aberto. Por fim, foram apresentadas organizações da sociedade civil que possuem projetos de código aberto que todos podem contribuir, não importando o nível de conhecimento na área.

Também foi realizada uma demonstração de como consumir dados a partir do [Portal de Dados Abertos da UFPE](dados.ufpe.br/) usando o código abaixo:

```python
import requests
import pandas as pd

discentes = requests.get('https://dados.ufpe.br/dataset/cba99924-ad97-45f6-9d1c-f4fb7a940c6f/resource/3ec70513-eca6-453d-95d1-fde1f1972a11/download/discentes-ingressos-cursos-graduacao-2022-ufpe.csv.csv')

print(discentes.headers)

discentes.encoding = discentes.apparent_encoding

with open('discentes_2022_ufpe.csv', 'w') as arquivo:
  arquivo.write(discentes.text)

df_discentes = pd.read_csv('discentes_2022_ufpe.csv')

print(df_discentes.sample(10))
```
<div class="container text-center">
  <iframe width="90%" title="Quinta Com Dados com Ana Cecília | 06/04" src="https://www.youtube.com/embed/__lmwfkaOjE" frameborder="0" allowfullscreen></iframe>
</div>
-----
Recursos:

- [Slides](../../assets/images/2023-04-06/Dados abertos - Quinta com dados - Alura.pdf)

-----

## Citações
- [Podcast Pizza de Dados](https://pizzadedados.com/)
- [PyLadies Recife](https://www.instagram.com/pyladiesrecife/)
- [CSV Conference](https://twitter.com/CSVConference)
- [Querido Diário](https://queridodiario.ok.org.br/)
- [Criando mapa do Festival Recife Coffee com Folium](ttps://cecivieira.com/criando-o-mapa-do-festival-recife-coffee-com-folium/)

## Referências

- [4 examples of projects by private companies that are committed to open data sharing](https://datos.gob.es/en/blog/4-examples-projects-private-companies-are-committed-open-data-sharing)
- [Análisis exploratorio de datos abiertos para el fortalecimiento de democracias](https://cecivieira.com/es/analisis-exploratorio-de-datos-abiertos-para-el-fortalecimiento-de-democracias/)
- [Aúna](https://www.auna.org.mx/)
- [Base dos dados](https://basedosdados.org/)
- [Brasil IO](https://brasil.io/home/)
- [Ciudadanía inteligente](https://ciudadaniai.org/)
- [Cívica Digital](https://civica.digital/)
- [Codeando México](http://codeandomexico.org/)
- [Como dados abertos contribui para o desenvolvimento de cidades inteligentes](https://cecivieira.com/como-dados-abertos-contribui-para-o-desenvolvimento-de-cidades-inteligentes/)
- [Dados Abertos para Gestão Pública](https://cecivieira.com/dados-abertos-para-gestao-publica/)
- [Dados são o novo petróleo. Quão segura está essa nova riqueza?](https://www.cesar.org.br/pt/w/dados-sao-o-novo-petroleo-quao-segura-esta-essa-nova-riqueza)
- [Data Cívica](https://datacivica.org/)
- [Google Hearth](https://health.google.com/covid-19/open-data/)
- [HealthData29](https://www.healthdata29.org/platform)
- [ILDA](https://idatosabiertos.org/)
- [Instituto Cidade Democrática](https://cidadedemocratica.org.br)
- [Instituto de Tecnologia e Sociedade](https://itsrio.org/pt/home/)
- [Latinno](https://latinno.net/es/)
- [Open Knowledge Brasil](https://ok.org.br/)
- [The Open definition](http://opendefinition.org/)
- [Uber Movement](https://movement.uber.com/?lang=pt-BR)