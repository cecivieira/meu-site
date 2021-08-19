---
layout: post
title: "Configurando uma máquina virtual e Instalando Windows 10 na VMBox"
author: cecivieira
date: 2020-10-28 18:00:00
lang: pt_BR
categories: [oracle virtual box, vmbox, ubuntu 20.04]
tags: [tutorial]
image: assets/images/6.jpg
description: "Passo a passo de como configurar a virtual box e instalar o Windows 10."
toc: false
beforetoc:
---
Com a VMBox instalada, vamos configurar uma máquina virtual do Windows 10 para fazer tudo o que a gente tiver precisando nesse sistema operacional ~~não muito amado por pessoas desenvolvedoras~~.

> Se você ainda não sabe como instalar a Virtual Box da Oracle no Ubuntu 20, vai [nesse post](/instalando-a-oracle-virtual-box-no-ubuntu-20-04/) que expliquei tudo bem direitinho.

A VMBox permite que você configure o computador exatamente como desejar (memória RAM, HD, etc) e isso é muito útil quando temos a imagem ISO de um sistema operacional que não precisa de licença — o que não é o caso do Windows. Então, vou mostrar dois caminhos para configurar uma máquina virtual e instalar o Windows 10:

1. [Usando uma imagem com licença de para teste](#passo-a-passo--usando-a-imagem-windows-para-teste);
2. [Usando uma ISO considerando que você tem a chave para autenticação do Windows](#passo-a-passo--usando-uma-iso-considerando-que-você-tem-a-chave-para-autenticação-do-windows).

---

## Passo a passo — Usando a imagem Windows para teste

0. Baixe a [ISO do Windows 10](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/);
1. Descompacte o arquivo;
2. Clique duas vezes no executável .ova, verifique se o campo “Machine Base Folder” aponta para a pasta onde a VMBox armazena as máquinas virtuais;

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/1.png">

3. Tá feito!
4. Para iniciar a máquina, abra a VMBox e faça duplo clique em cima da máquina MSEdge — Windows 10

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/2.png">

5. A senha para login está na página que você fez o download da imagem.

---

## Passo a passo — Usando uma ISO considerando que você tem a chave para autenticação do Windows

0. Baixe a [ISO do Windows 10](https://www.microsoft.com/pt-br/software-download/windows10ISO);
1. Execute a VirtualBox;
2. Clique no botão “New”;

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/3.png">

2. Digite um nome para sua máquina virtual e selecione a versão do Windows;

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/4.png">

3. Selecione a memória (RAM) desejada e clique no botão “Next”. Nesse caso configurei 4Gb pois é o necessário para o que eu quero fazer;

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/5.png">

4. Deixe selecionada a opção “Create a virtual hard disk nowa” e clique no botão “Create”;

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/6.png">

5. Selecione o tipo de disco rígido desejado e clique em “Next”. Sugiro usar o padrão da VMBox, “VDI (VirtualBox Disck Image)”;

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/7.png">

6. Escolha como será o armazenamento em disco e clique em “Next”. A opção “Dynamically allocated” utilizará o espaço em seu disco rígido a medida que for sendo utilizado;

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/8.png">

7. Finalmente, verifique o tamanho do HD da máquina virtual e clique em “Create”

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/9.png">

8. Agora vamos instalar o Windows 10 na máquina virtual que acabamos de criar. Dê duplo clique no título da máquina virtual;

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/10.png">

9. Na primeira execução, será necessário localizar o arquivo ISO do Windows. Clique no ícone amarelo da tela;

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/11.png">

10. Clique em “+ Add” e localize a imagem no seu computador. Após isso, selecione a imagem e clique em “Choose”;

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/12.png">

11. Tá feito!

12. Para iniciar a máquina, abra a VMBox e faça duplo clique em cima da máquina que você acabou de criar. Te lembra que na primeira inicialização o Windows vai configurar todinho e te pedir a chave de autenticação, sem ela não é possível instalar esse sistema operacional.

    <img class="rounded mx-auto d-block" src="../assets/images/2020-10-28/13.png">

---
Por aqui tudo funcionou sem problema, espero que tu também tenha conseguido.