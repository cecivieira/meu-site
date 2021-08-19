---
layout: post
title: "[Tutorial] Instalando a Oracle Virtual Box no Ubuntu 20.04"
author: cecivieira
date: 2020-10-28 17:00:00
lang: pt_BR
categories: [oracle virtual box, vmbox, ubuntu 20.04]
tags: [tutorial]
image: assets/images/2.png
description: "Passo a passo de como instalar o virtal box no Ubuntu 20.04"
toc: false
beforetoc:
---
Precisei testar umas coisas no Windows e uso Linux há um bom tempo, então o jeito mais recomendado de fazer isso é subir uma máquina virtual com Windows no meu Ubuntu, mas eu nunca tinha feito isso antes. Conversando com agumas amigas, cheguei na [Virtual Box desenvolvida pela Oracle](https://www.virtualbox.org/), VMBox para as intimas.

A VMBox é um software de virtualização para computadores com arquiteturas x86/amd64 e suporta os principais sistemas operacionais. Além disso, é um Open Source com licença GPL.

## Passo a passo da instalação

0. Caso você tenha versões anteriores da VMBox instalada no computador , recomendo que a desisntale para que não tenha perigo conflito:

    ```
    sudo apt-get remove virtualbox
    ```
1. Antes de tudo precisamos descobrir o codenome da versão do Ubuntu que estamos usando(eu também não fazia ideia de que isso existia). Abre teu terminal e digita:

    ```
    lsb_release -a
    ```

2. Agora, é necessário escrever a linha ‘deb [arch=amd64] https://download.virtualbox.org/virtualbox/debian <codenome da distribuição> contrib’ dentro do arquivo /etc/apt/sources.list. Faremos isso executando o seguinte comando:

    ```
    sudo sh -c 'echo "deb [arch=amd64] https://download.virtualbox.org/virtualbox/debian focal contrib" >> /etc/apt/sources.list'
    ```

3. Faça download e registre a chave pública do repositório:

    ```
    wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
    wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -
    ```

4. Atualize o apt-get:

    ```
    sudo apt-get update
    ```

5. Instale a última versão da VMBox:

    ```
    sudo apt-get install virtualbox
    ```

6. Verifique que tá tudo lindo checando a versão que foi instalada:

    ```
    vboxmanage --version
    ```

Se a saída foi algo do tipo “6.1.10_Ubuntur138449”, você arrasou na instalação!!! Agora bora aprender a instalar o Windows 10 nessa VM Box, vai [nesse post aqui](2020-10-28-instalando-a-oracle-virtual-box-no-ubuntu-20-04.md) que expliquei o passo a passo.

Se a saída foi diferente da versão instalada, dá uma olhadinha de novo no passo a passo ou nas orientações da [própia página da Virtual Box](https://www.virtualbox.org/wiki/Linux_Downloads), pode ser que tenha havido alguma modificação.