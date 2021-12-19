---
layout: post
title: "Como apagar imagens Docker"
author: cecivieira
date: 2021-12-13 17:00
lang: pt-br
tags: [dica]
categories: [docker]
image: assets/images/cover/16.jpg
description: "Passo a passo sobre como apagar imagens do Docker, para pessoas muito iniciantes nessa ferramenta."
toc: false
beforetoc: 
---
Se você, como eu, não sabe absolutamente nada de Docker, apenas rodar os comandos que estão no README dos projetos, então esse artigo é para você.

As vezes, no projeto que estou trabalhando as imagens do Docker passam a não subir mais. Daí, quando não tenho tempo para descobrir o problema e consertá-lo, apenas reinicio tudo(apago e construo/biuldo as imagens de novo).

# Passo a passo

Para apagar todas as imagens Docker do teu computador, abre o terminal e roda os seguintes comandos:

> Não exite pasta específica para executá-los. Qualquer uma serve.

1. Liste todas as imagens:
    ```
    docker ps -a
    ```    
2. Verifica se todas as imagens estão paradas, ou seja, se seu *status* é "exited". 
   <img class="rounded mx-auto d-block" src="../assets/images/2021-12-13/status-imagens-docker.png">
3. Caso uma ou mais imagens estejam com outro *status*, pare-as com esse comando:
   ```
   docker stop $(docker ps -a -q)
   ```
4. Apague todas as imagens:
   ```
   docker system prune -a
   ```

Pronto! Agora teu computador tá limpinho, como se tu nunca tivesse construído nenhuma imagem Docker.
<div style="text-align: right"><a href="https://cecivieira.com/es/como-borrar-imagenes-docker/">Esse texto possui versão em 🇪🇸</a></div>