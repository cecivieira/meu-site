---
layout: post
title: "CKAN no Docker: instalando o ambiente de desenvolvimento e iniciando a criação de um plugin"
author: cecivieira
date: 2021-08-30 12:00
lang: pt-br
translated-es: 
translated-en: 
translated-ptbr: 
tags: [tutorial]
categories: [ckan, dados abertos, docker]
image: assets/images/cover/11.jpg
description: "Aprenda a instalar o ambiente de desenvolvimento do CKAN usando Docker e a iniciar a criação de um plugin."
toc: false
beforetoc: 
---
[CKAN](https://ckan.org/) (Comprehensive Knowledge Archive Network) é uma aplicação web de código aberto para gerenciamento de dados. Tem como algumas das funcionalidade: armazenamento de dados, uso de metadados para catalogação e API para consumo dos dados publicados. Esse sistema é mantido pela [Open Knowledge Foundation](https://okfn.org/) e possui uma comunidade de código aberto muito ativa, a qual disponibiliza uma quantidade importante de plugins úteis. 

Atualmente é o principal sistema usado em portais de dados abertos governamentais, sendo alguns exemplos: [Datos Argentina](https://datos.gob.ar/), [Open Africa](https://africaopendata.org/), [Data Singapore](https://data.gov.sg/) e [Portal Brasileiro de Dados Abertos](https://dados.gov.br/).

Existem três caminhos para fazer a instalação do CKAN, via:

- [Pacote do sistema operacional](https://docs.ckan.org/en/2.9/maintaining/installing/install-from-package.html);
- [Código fonte](https://docs.ckan.org/en/2.9/maintaining/installing/install-from-source.html);
- [Docker](https://docs.ckan.org/en/2.9/maintaining/installing/install-from-docker-compose.html).

Nesse artigo focaremos na instalação do ambiente de desenvolvimento usando Docker. Caso você não vá desenvolver nenhum plugin, nem mexer no código fonte do CKAN, sugiro que você instale usando o tutorial [Como instalar e configurar o CKAN 2.9.0 usando o Docker escrito por Augusto Herrmann](https://herrmann.tech/pt/blog/2020/09/30/como-instalar-e-configurar-ckan-2-9-0-usando-docker.html). Faço essa sugestão porque a documentação oficial de instalação do CKAN via Docker não está das melhores.

No meu caso, estou desenvolvendo um plugin, então fazia falta algumas facilidades que um ambiente de desenvolvimento pode oferecer. 

# Tutorial

O CKAN possui um repositório exclusivo para a instalação usando o Docker, o qual possue um ambiente de desenvolvimento muito massa, que apresenta as modificações realizadas em tempo de execução dos containers.

Esse tutorial abrange a instalação do CKAN e de todos os requisitos necessários para o uso do Docker. 

A partir daqui todas as instruções pressupõe que você está usando o sistema operacional [Ubuntu 20.04](https://ubuntu.com/).

**Sumário**
- [Instalar Git](#instalando-o-git)
   - [GitLab: configurar chave SSH](#gitlab-configurando-a-chave-ssh)
- [Instalar Docker](#instalando-o-docker)
- [Instalar Docker compose](#instalando-o-docker-compose)
- [Instalar CKAN (ambiente de desenvolvimento)](#instalando-o-ckan-ambiente-de-desenvolvimento)
- [Testar plugin existente](#testando-plugin-existente)
- [Criar novo plugin](#iniciando-a-criação-de-um-plugin)

## Instalando o Git
No terminal execute os seguintes comandos:

- Instale o Git
```
sudo apt-get install git-all
```

- Configure o nome e e-mail que identificarão teus commits. Isso só é necessário 1 vez
```
git config --global user.name "<nome>"
git config --global user.email "<e-mail>"
```

### GitLab: configurando a chave SSH

Esse passo é opcional, ele será útil para você versionar o código do plugin que você irá desenvolver.

No terminal execute os seguintes comandos:

- Gere uma par de chave SSH
```
ssh-keygen -t rsa -b 2048 -C "<comentário que identifique sua chave, ex.: pc-trabalho-dell"
```

**Obs.:** Nesse passo será solicitado um local para armazenamento da chave e uma senha. Não é necessário que você forneça essas informações. Caso você deseje guardar a chave no local padrão (recomendado) e não informar uma senha, basta deixar o espaço vazio e teclar "enter".

- Copie sua chave pública
```
xclip -sel clip < ~/.ssh/id_rsa.pub
```

- Logue no seu GitLab e navegue até a página da Foto de perfil > Settings > SSH Keys
- Na janela destinada a chave, tecle Ctrl + V ou clique no botão direito do mouse e selecione “colar”
- Dê um título a sua chave. Sugiro que seja algo que identifique a qual computador ela está atrelada
- Clique em "Adicionar nova chave"

## Instalando o Docker

No terminal execute os seguintes comandos:

- Atualize o comando apt-get
```
sudo apt-get update
```

- Remova as versões antigas do Docker (execute, ainda que seu computador seja novo):
```
sudo apt-get remove docker-engine docker.io
```

- Instale o Docker
```
sudo apt install docker.io
```

- Inicie o Docker
```
sudo systemctl start docker
```

- Verifique o status do docker
```
systemctl start docker
```
    A saída esperada é: `status running`

- Habilite a inicialização do Docker junto com seu sistema operacionar
```
sudo systemctl start docker
```
 
- Configure a sua usuária do sistema operacional como a superusuária no Docker
```
sudo usermod -aG docker $<user> 
```

- Por fim, verifique se a instalação foi feita com sucesso
```
docker --version
docker run hello-world
```

## Instalando o Docker Compose

- No terminal, execute o seguinte comando
```
sudo apt install docker-compose
```

## Instalando o CKAN (ambiente de desenvolvimento)
No terminal, navegue até a pasta desejada para armazenar o repositório e execute os seguintes comandos:

- Clone o repositório
```
git clone https://github.com/okfn/docker-ckan.git
```

- Entre na pasta do repositório
```
cd docker-ckan/
```

Abra o editor de código da sua preferência e realize as próximas etapas:

- Duplique o arquivo ".env.example" e renomeie a cópia para “.env”
- No arquivo ".env" , atualize as seguintes variáveis de ambiente:
```
CKAN_SITE_URL=http://localhost:5000/
CKAN__DATAPUSHER__CALLBACK_URL_BASE=http://localhost:5000/
```

Volte para o terminal e execute:

- Construa as imagens (você só precisa realizar isso uma vez)
```
docker-compose -f docker-compose.dev.yml build
```

> Nesse passo há o seguinte erro conhecido:
> 
> *OpenSSL SSL_connect: Connection reset by peer in connection to github.com:443*
> 
> Caso ele ocorra, atualize seus gerenciadores de pacotes do Ubuntu executando:
> ```
> sudo apt-get update && sudo apt-get upgrade
> ```

- Inicie as imagens (esse comando você usará sempre que precisar iniciar seu trabalho no CKAN)
```
docker-compose -f docker-compose.dev.yml up
```

- Comprove que o CKAN está rodando no seu computador. Acesse:
http://localhost:5000/

- Nesse ambiente já existe uma usuária master. Faça login usando as credenciais:
**login:** ckan_admin
**senha:** test1234 

## Plugin

Nesse capítulo mostrarei como testar um plugin já existente e como iniciar o seu próprio plugin.

### Testando plugin existente

Nessa imagem você pode testar plugins sem precisar exatamente instalá-los, basta seguir os passos:

- No terminal, navegue até a pasta "src/" e clone o repositório:
```
git clone <link do repositório que deseja testar>
```
    ** Caso você deseje fazer modificações nele e não seja mantenedora do plugin, é necessário que você [crie um fork](https://docs.github.com/pt/github/getting-started-with-github/quickstart/fork-a-repo) e clone a partir dele.

- Crie sua branch para salvar suas modificações, caso deseje fazê-las:
```
git checkout -b <seu-nome-branch>
```

Abra o editor de código da sua preferência e realize as próximas etapas para ativar o plugin:

- No arquivo ".env", atualize as seguintes variáveis de ambiente:
```
CKAN_SITE_URL=http://localhost:5000/
CKAN__DATAPUSHER__CALLBACK_URL_BASE=http://localhost:5000/
CKAN__PLUGINS=envvars image_view text_view recline_view datastore datapusher <titulo-sua-extensao>
```

- Comprove se a sua aplicação está ativada. Acesse: [http://localhost:5000/api/action/status_show](http://localhost:5000/api/action/status_show). Nesse link deve aparecer, entre outras informações, a lista dos plugins ativos.

### Iniciando a criação de um plugin

No terminal execute os seguintes comandos:

- Crie um plugin  
```
docker-compose -f docker-compose.dev.yml exec ckan-dev /bin/bash -c "ckan generate extension --output-dir /srv/app/src_extensions"
```

    Será solicitado o título para a extensão, seu nome, nome da sua instituição e e-mail. No título para a extensão, use "_" no lugar de espaço em branco.

    Após fornecer esses dados, será criada uma pasta com os arquivos iniciais da sua extensão. Ela estará localizada em:
    `src/ckanext-<titulo-sua-extensao>`

    Para que você tenha permissão para editar essa pasta e, assim, desenvolver o seu plugin, é necessário editar sua permissão. Para isso, execute:
```
sudo chown -R <sua usuária no sistema operacional> <caminho completo para a pasta /src/ckanext-<título-plugin>
sudo chmod -R u+rwx <caminho completo para a pasta /src/ckanext-<título-plugin>
```

Abra o editor de código da sua preferência e realize as próximas etapas para ativar o plugin:

- No arquivo ".env", atualize as seguintes variáveis de ambiente:
```
CKAN_SITE_URL=http://localhost:5000/
CKAN__DATAPUSHER__CALLBACK_URL_BASE=http://localhost:5000/
CKAN__PLUGINS=envvars image_view text_view recline_view datastore datapusher <titulo-sua-extensao>
```

- Comprove se a sua aplicação está ativada. Acesse: http://localhost:5000/api/action/status_show. Nesse link deve aparecer, entre outras informações, a lista dos plugins ativos.
- (Etapa opcional) Crie um repositório git para guardar o seu código e, no terminal, execute:
```
git init
git remote add origin <link do repositório>
git checkout -b master
git pull
```

# Referências
- [Começando - Instalando o Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
- [Descomplicando Docker - #1: Instalando Docker no Linux](https://youtu.be/2T3itw-2xkg)
- [GitLab and SSH keys](https://docs.gitlab.com/ee/ssh/)
- [Repositório Docker Compose setup for CKAN](https://github.com/okfn/docker-ckan)

> Esse artigo foi escrito em parceria com <a href="mailto:lemmg@cin.ufpe.br">Lucas Gois</a>.