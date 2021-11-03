---
layout: post
title: "Extensão CKAN Pages: instalação e uso"
author: cecivieira
date: 2021-10-27 15:00
lang: pt-br
tags: [tutorial]
categories: [ckan, docker, extensão ckan]
image: assets/images/cover/14.jpg
description: "Como criar páginas extras no CKAN usando a extensão ckanext-pages. Aprenda como instalar no ambiente do CKAN no Docker e a como usá-la"
toc: false
beforetoc: 
---
A extensão [Pages (ckanext-pages)](https://github.com/ckan/ckanext-pages) permite a criação de páginas extras no [CKAN](https://ckan.org/) a partir da interface de administradora da plataforma. 

Caso você ainda não tenha o CKAN instalado, segue o tutorial [CKAN no Docker: instalando o ambiente de desenvolvimento e iniciando a criação de um plugin](https://cecivieira.com/ckan-no-docker-instalando-o-ambiente-de-desenvolvimento-e-iniciando-a-criacao-de-um-plugin/) até o capítulo "Instalando o CKAN (ambiente de desenvolvimento)". É nesse ambiente que faremos a adição do *plugin* Pages.

# CKAN Pages

As páginas criadas pelo CKAN Pages poderão ser filiadas a uma organização ou a um grupo, além disso podem ter a visibilidade "pública" ou "privada". Nesse tutorial você verá como:

- [Instalar o CKAN Pages](#instalar-ckan-pages-ckanext-pages)
- [Criar uma nova página](#criar-uma-nova-página)

## Instalar ckanext-pages

No terminal, execute os seguintes comandos:

1. Navegue até a pasta docker-ckan/src;
2. Clone o repositório da extensão:
```
git clone git@github.com:ckan/ckanext-pages.git
```
3. No arquivo .env:
   
   - Ative a extensão adicionando-a na variável "CKAN__PLUGINS", ou seja, encontre a citada variável e insira "pages" no final da linha, por exemplo:
    ```
    CKAN__PLUGINS=envvars image_view text_view recline_view datastore pages
    ```
    Essa ativação habilita a criação de páginas genéricas, sem filiação. Os demais tipos podem ser habilitados conforme orientações abaixo.

   - Insira as variáveis de ambiente pertinentes para seu projeto:
        - **CKANEXT__PAGES__FORM -** Determina o arquivo que será usado como formulário padrão para criação de novas páginas. Essa variável só deve ser usada caso você não deseje usar o formulário padrão; nesse caso, deverás criar um novo formulário e infomar seu caminho completo.
        - **CKANEXT__PAGES__ALLOW_HTML -** Habilita a edição das páginas usando HTML. Valores possíveis: *True* ou *False*
        - **CKANEXT__PAGES__EDITOR -** Define o editor a ser incorporado na interface de administradora do CKAN. As opções disponíveis são: [medium](https://jakiestfu.github.io/Medium.js/docs/) e [ckeditor](https://ckeditor.com/)
        - **CKANEXT__PAGES__ORGANIZATION -** Habilita a criação de páginas vinculadas às organizações. Valores possíveis: *True* ou *False*.
        - **CKANEXT__PAGES__GROUP -** Habilita a criação de páginas vinculadas aos grupos. Valores possíveis: *True* ou *False*.
    
    Abaixo um exemplo de trecho de código, o qual usa o formulário padrão para criação de páginas e habilita a criação de páginas filiadas à organizações.

    ``` 
    CKANEXT__PAGES__ALLOW_HTML=True
    CKANEXT__PAGES__EDITOR=ckeditor
    CKANEXT__PAGES__ORGANIZATION=True
    ```
4. Inicie as imagens do Docker:
```
docker-compose -f docker-compose.dev.yml up
```
5. Inicie a base de dados:
```
docker-compose -f docker-compose.dev.yml exec ckan-dev /bin/bash -c "ckan --config=$CKAN_INI pages initdb"
```
6. Caso você tenha um tema customizado, vá até sua pasta, localize o arquivo .plugin.py e adicione o trecho de código abaixo. Isso permitirá que outras extensões atualizem o esquema de páginas e adicionem campos personalizados:
```
from ckanext.pages.interfaces import IPagesSchema
class MyextPlugin(plugins.SingletonPlugin):
    plugins.implements(IPagesSchema)
    #IPagesSchema
    def update_pages_schema(self, schema):
        schema.update({
            'new_field': [
                toolkit.get_validator('not_empty'),
                toolkit.get_validator('boolean_validator')]
            })
        return schema
```

Pronto! Extensão instalada e configurada. Agora bora aprender a criar páginas =D

## Criar uma nova página

É possível criar dois tipos de páginas genéricas, sem filiação:

- **Blog post -** Usada comumente para divulgação de notícias.
- **Página -** Utilizada na criação de páginas estáticas.

Para isso, no menu principal, clique no lápis para criar um *blog post* e na folha para criar uma página:
<img class="rounded mx-auto d-block" src="../assets/images/2021-10-27/icones-blog-pagina.png">

Caso você deseje criar uma página vinculada a uma organização ou grupo:

- Selecione:
  - A organização desejada, na página "Organização" (`<seu-dominio>/organization`), ou
  - O grupo desejado, na página "Grupos" (`<seu-dominio>/group`)
  
- No menu, selecione a opção "Pages"
   <img class="rounded mx-auto d-block" src="../assets/images/2021-10-27/submenu.png">

- Em seguida, clique no botão "+ Add page"
   <img class="rounded mx-auto d-block" src="../assets/images/2021-10-27/botao-add-page.png">

A partir daqui, os demais passos são comuns para todos os tipos de páginas:

1. Especifique as seguintes informações:
   - **Título -** Título da página;
   - **URL -** Determine o sufixo da url da página;
    <img class="rounded mx-auto d-block" src="../assets/images/2021-10-27/url-organization.png">
    <img class="rounded mx-auto d-block" src="../assets/images/2021-10-27/url-groups.png">
   - **Publish Date -** Data de publicação;
   - **Visibilidade -** Escolha entre "pública" (todas as usuárias da página poderão vê-la) ou "privada"(apenas usuárias logadas e com permissão de administradora poderão visualizá-la);
   - **Header order -** Ordem que a página aparecerá no menu (navbar). Essa configuração funcinou para páginas genéricas, sem filiação, mas não para páginas vinculadas à organização e grupo. Então, abri [essa issue no repositório da extensão](https://github.com/ckan/ckanext-pages/issues/115). Dá uma olhadinha lá pra vê se já tem alguma resposta;
   - **Content -** Conteúdo completo da página. É possível editá-lo usando HTML, basta selecionar a opção "Source" do menu de edição.

2. Salve a página clicando no botão "Adicionar".
    <img class="rounded mx-auto d-block" src="../assets/images/2021-10-27/botao-adicionar.png">

Tchanran! Páginas criadas!

# Referências
- [Extensão CKAN Pages (ckanext-pages)](https://github.com/ckan/ckanext-pages)
- [Just a few more pages… ckanext-pages](https://keitaroinc.medium.com/just-a-few-more-pages-ckanext-pages-577cde20d989)