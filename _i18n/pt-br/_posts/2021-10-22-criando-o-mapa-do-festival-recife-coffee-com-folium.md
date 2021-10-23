---
layout: post
title: "Criando o mapa do Festival Recife Coffee com Folium"
author: cecivieira
date: 2021-10-22 18:00
lang: pt-br
tags: [tutorial]
categories: [folium, mapa]
image: assets/images/cover/12.png
description: "Criando um mapa para o Festival Recife Coffee usando a biblioteca Folium."
toc: false
beforetoc: 
---
Neste ano, novembro será o mês do [Recife Coffee](https://www.instagram.com/recifecoffeeoficial/)!! Um festival criado em 2016 para movimentar as cafeterias da cidade. Atualmente estão participando 25 cafeterias da região metropolitana e Petrolina, e o valor do menu será R$32,90.

Todo ano eu repito a mesma ladainha: "Era pra ter um mapa bonito pra eu encontrar fácil a cafeteria mais próxima". Apois, o momento chegou!! Eu poderia só ter criado uma lista pública no Google Maps? Sim, mas que graça teria? Não teriam marcadores rosa, nem o menu de cada lugar em primeiro plano. Então, lembrei de uma biblioteca python que conheci lá em 2018, do tutorial [Creating Interactive Maps with Python](https://youtu.be/FdqDgoG-SFM) que a maravilhosa [Jéssica Temporal](https://jtemporal.com/) fez no começo do ano e criei esse mapinha com todas as cafeterias do festival:

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="../../assets/images/2021-10-22/mapa_recife_coffee_2021.html" allowfullscreen></iframe>
</div>

Vou mostrar para vocês como foi montá-lo.  O código completo e os dados estão disponíveis [nesse repositório](https://github.com/cecivieira/mapa-recife-coffee). E o mapa completo pode ser acessado [aqui](https://cecivieira.com/assets/images/2021-10-22/mapa_recife_coffee_2021.html).

# Coleta de dados

A primeira coisa que eu precisava era dos dados de geolocalização das cafeterias, menu, horário e contato. Todas essas informações estão disponíveis no [instagram do festival](https://www.instagram.com/recifecoffeeoficial/), no entanto faltava converter os endereços em coordenadas de latitude e longitude. Essa busca foi feita manualmente no Google Maps e os dados reunidos em uma tabela em formato csv.

# Criação do mapa

Utilizei as bibliotecas [Pandas](https://pandas.pydata.org/docs/) e [Folium](https://python-visualization.github.io/folium/index.html) para tratar os dados e criar o mapa.

1. Criei o mapa e determinei a Praça do Derby como ponto central:
   ```python
   mapa = folium.Map(location=[-8.056608873022698, -34.89952347323082], #Praça do Derby
                  title = 'Recife Coffee 2021',
                  zoom_start=12)
   ```
    O Folium usa a API do [OpenStreetMap](https://www.openstreetmap.org/) e não consegui encontrar um jeito simples de fazer com que o ponto central do mapa seja a minha localização atual, então utilizei uma praça central do Recife.

2. Iterei nas linhas do dataframe para criar as cafeterias:
    ```python
    for _, cafeteria in cafeterias.iterrows():    
        folium.Marker(
            location=[cafeteria['latitude'], cafeteria['longitude']],
            tooltip='''
                <b>{}</b>
                <br>
                Clique para saber mais
            '''.format(cafeteria['titulo']),
            popup='''
                <img src='{imagem}' height='400'> 
                <br> 
                <b>Horário:</b>
                <br>
                {horario}
                <br>
                <a href="https://www.instagram.com/{instagram}">https://www.instagram.com/{instagram}</a>
            '''.format(imagem=cafeteria['menu'], horario=cafeteria['horario'], instagram=cafeteria['instagram']),
            icon=folium.Icon(color='purple', prefix='fa', icon='coffee')
        ).add_to(mapa)
    ```
    A função `iterrows()` do Pandas, sempre vai retornar dois elementos, o índice da linha e o conteúdo da linha em si, por isso informei o "_" no lugar do índice, pois é um elemento que não usaremos.

    Já na função `Marker` do Folium, passei os seguintes argumentos:
    - **location:** coordenadas geográficas (latitude e longitude) de cada marcador no mapa;
    - **tooltip:** mensagem que aparecerá ao passar o mouse em cima do marcador. Esse campo suporta HTML e string format;
    - **popup:** mensagem que aparecerá ao clicar em cima do marcador. Esse campo, também, suporta HTML e string format;
    - **icon:** permite customizar o ícone. Aqui pode ser usado [Font Awesome](https://fontawesome.com/) para especificar o desenho do centro do marcador.

3. Por fim, salvei o mapa em HTML porque queria compartilhá-lo com todo mundo.
   ```python
   mapa.save('mapa_recife_coffee_2021.html')
   ```

E assim, esse ano paro de reclamar que não tem um mapa do [Recife Coffee](https://www.instagram.com/recifecoffeeoficial/).

** Este projeto possui licença aberta, então fica a vontade para usar, copiar, fazer um mapa de um festival da tua cidade e, se animar, mandar melhorias (pull request) para [o repositório](https://github.com/cecivieira/mapa-recife-coffee), pois esse mapa do festival Recife Coffee ainda pode ser muito melhorado.