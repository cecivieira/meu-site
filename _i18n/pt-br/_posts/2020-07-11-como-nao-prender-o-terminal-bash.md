---
layout: post
title: "Como não prender o terminal (shell)"
author: cecivieira
date: 2020-07-11
lang: pt-br
translated-es: 
translated-en: 
translated-ptbr: 
categories: [bash, controle de tarefas, linux, terminal commands, terminal]
tags: [tutorial]
image: assets/images/cover/4.jpg
description: "Aprenda a não prender seu bash: alguns comandos para Controle de Tarefas no Linux."
toc: false
beforetoc:
---
> Alguns comandos para Controle de Tarefas no Linux.

Solução rápida:

```ruby
#Adicione & no final da linha do script

bundle exec jekyll serve &
```

É bem comum eu ter uma dúvida besta, procurar rapidinho a solução no Google, achar, aplicar e não guardar o comando porque “vai ser fácil achar de novo”. O tempo passa e a mesma dúvida volta, sendo que dessa vez passo meia hora buscando aquele específico link maravilhoso que me ajudou outrora.

Saber como continuar usando o terminal ainda que esteja rodando uma aplicação bloqueante é uma dessas coisas que me leva minutos de vida regoogleando por uma solução.

Aplicações bloqueantes são aquelas que prendem o terminal mostrando os logs com o que tá acontecendo enquanto você faz alterações e testes, por exemplo o Pelican e o Bundle. Quando isso acontece, as vezes, abro um novo terminal, maaaasssss é possível continuar vendo os logs e seguir o usando o mesmo shell.

Meu fluxo, geralmente, é assim:

1. Adicionar & no final do script pra não prender o terminal;

    ```ruby
    bundle exec jekyll serve &
    ```

2. Pressionar Enter para reaparecer o cursor;

3. Fazer todas as modificações necessárias e quando quiser fechar a aplicação;

4. Verificar as tarefas (job) que tão rodando no fundo (background);

    ```ruby
    jobs
    ```

5. Selecionar a tarefa (job) que desejo trazer para primeiro plano;
   
    ```ruby
    fg [n. tarefa]
    ```

6. Encerrar a tarefa (job).

A linguagem Bash é massa, então existem mais uns comandos para Controle de Tarefas. Dá uma olhadinha nesse [capítulo 15 do Advanced Bash-Scripting Guide](https://www.tldp.org/LDP/abs/html/x9644.html) ou [nesse post sobre Controle de Tarefas no Shell do Linux](http://www.bosontreinamentos.com.br/linux/controle-de-tarefas-no-shell-comandos-bg-fg-jobs/).