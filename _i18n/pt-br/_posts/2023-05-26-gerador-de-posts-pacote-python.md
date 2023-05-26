---
layout: post
title: "Gerador de posts: pacote python"
author: cecivieira
date: 2023-05-26 09:00
lang: pt-br
translated-es: 
translated-en: 
translated-ptbr: 
tags: [artigo]
categories: [jinja, python]
image: https://res.cloudinary.com/damhz6skt/image/upload/v1685128112/capas-site/28_d4zrw1.jpg
description: "Apresenta a motivação e desenvolvimento de uma aplicação que recebe arquivos de dados (.csv e .yaml), templates em qualquer formato de arquivo e aplica os dados nesses templates."
toc: false
beforetoc:
---
Toda vez que eu precisava publicar um episódio do [podcast Pizza de Dados](https://pod.link/pizzadedados), gastava muito tempo escrevendo o post em HTML para publicação nos streams de áudio e, em seguida, adaptando esse post para uma versão resumida em .txt para publicação no Youtube. Mês a mês a estrutura do texto permanece, mas os dados mudam de acordo com o assunto abordado no episódio e entrevistada, ou seja, ambos os posts são um template cujas as variáveis mudam a cada novo episódio.

Para resolver esse problema, desenvolvi uma aplicação que recebe arquivos de dados (.csv e .yaml), templates em qualquer formato de arquivo e aplica os dados nesses templates. 

Esse artigo fala sobre o desenvolvimento dessa aplicação.

## Tecnologias utilizadas

- [Jinja](https://jinja.palletsprojects.com/en/3.1.x/)
- [Python](https://www.python.org/)

## Desenvolvimento da aplicação

### Delimitação do escopo

Em toda gravação coletamos menções de conceitos, ferramentas, livros, pesquisadoras, etc. e buscamos links de referência para inserir na descrição do episódio. Além disso, existem outros dados que variam em cada episódio: podcasters particiantes, resumo, palavras chaves e informações das entrevistadas. Todos esses dados devem estar presentes no corpo do post de publicação do episódio nas plataformas de stream e Youtube. Com isso, preciso gerar a cada novo episódio 2 posts com diferente formatação, mas usando os mesmos dados.

### Implantação

>A partir daqui, recomendo que tu abra o [repositório da aplicação](https://github.com/cecivieira/gerador-posts/) e vá lendo e olhando o código. Acredito que isso vai facilitar o teu entendimento.

Como eu já conhecia o [Jinja](https://jinja.palletsprojects.com/en/3.1.x/), um *template engine* escrito em Python, sabia que poderia usar a sua sintaxe no desenvolvimento dos templates e inserir quantas variáveis eu precisasse, além de consegui fazer filtros, *for loops*, condicionais, etc. Assim, escolhi a principal ferramenta para a aplicação.

Faltava estruturar como eu coletaria os dados a cada novo episódio, para daí pensar em como faria o tratamento e aplicação nos templates. [YAML](https://www.redhat.com/pt-br/topics/automation/what-is-yaml) foi a estrutura de dados que escolhi como fonte de variáveis para o Jinja. No entanto, ficaria muito complexo escrever um arquivo desse tipo enquanto tá rolando a gravação da entrevista, então decidi que para coletar as menções da entrevista usaria um formato de arquivo tabular (planilha). No fim das contas, os dados planilhados também são inseridos no YAML. Essa transformação é parte do pipeline da aplicação.

Os templates já existiam, então eu apenas precisei adequar à sintaxe do Jinja e fazer a mágica acontecer: aplicar as variáveis nos templates e gerar os novos arquivos. Fiz isso com os seguintes scripts:

1. `tratar_dados`: converte o .csv em uma lista de dicionários python e insere essa lista na variável "links" do arquivo YAMl.
1. `configuracao`: identifica o arquivo YAML com as variáveis, identifica os templates e renderiza os novos textos resultado da "soma" do template com as variáveis.

Tudo lindo e funcionando, maaasss queria publicar isso no [PyPI](https://pypi.org/), o repositório de sistemas em Python. Nunca publiquei nada lá, então queria fazê-lo. Para isso, segui [esse tutorial do FreeCodeCamp](https://www.freecodecamp.org/portuguese/news/como-criar-o-seu-primeiro-pacote-em-python/), mas quero compartilhar alguns aprendizados dessa etapa:

1. Uns detalhes bestas fazem a diferença quando tu sobe a aplicação pro PyPI, então na importação de classes e métodos entre arquivos, eu fiz assim:
    ```python
    from .tratar_dados import TratarDados
    ```
    Na execução local, não precisava desse '.' antes do nome do arquivo, mas quando fiz a execução a partir do pacote hospedado no PyPI, a classe não era encontrada.
1. Eu queria que a aplicação fosse uma CLI, então, no arquivo `setup.py`, estabeleci o `entry_point` usando a biblioteca [setuptools](https://setuptools.pypa.io/en/latest/userguide/entry_point.html#console-scripts).
    1. Na minha aplicação, o caminho para o entry_point foi `[variável name do arquivo setup.py].[pasta-aplicaçao]:[classe chamada no arquivo __main__.py]`
1. Antes de subir para o PyPI queria testar a aplicação como um pacote, então fiz a instalação dela local usando o comando:
    ```bash
    python setup.py install
    ```
1. Documentar como a aplicação deve ser instalada e ser executada é essencial para que outras pessoas possam usufruir do que tu desenvolveu.

Agora sim, a aplicação estava funcionando e disponível no PyPI.

### Repositório de exemplos
Pensando em ter um espaço com exemplos de uso da aplicação e aonde as pessoas possam ter dados e templates para testar, criei um [repositório dedicado a isso](https://github.com/cecivieira/gerador-posts-exemplos). Lá coloquei um exemplo de cada post do podcast.


Espero que a aplicação seja útil para mais pessoas, além de mim e das ouvintes do [podcast Pizza de Dados](https://pod.link/pizzadedados).



## Links para a aplicação
- [Gerador de posts](https://pypi.org/project/gerador-posts/)
- [Gerador de posts (código fonte)](https://github.com/cecivieira/gerador-posts/)
- [Gerador de posts: exemplos](https://github.com/cecivieira/gerador-posts-exemplos)

## Referências
- [Python Jinja2 Template: YAML File Cisco Example Tutorial](http://networkbit.ch/python-jinja-template/)
- [Como criar o seu primeiro pacote em Python](https://www.freecodecamp.org/portuguese/news/como-criar-o-seu-primeiro-pacote-em-python/)
- [Python Packaging: Local Installation & Tests Before Uploading](https://holypython.com/python-packaging-local-installation-tests-before-uploading/)
- [Setuptools: Entry Points](https://setuptools.pypa.io/en/latest/userguide/entry_point.html)