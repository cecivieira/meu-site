---
layout: post
title: "Criando variáveis a partir de uma lista"
author: cecivieira
date: 2024-03-28 09:00
lang: pt-br
translated-es: 
translated-en: 
translated-ptbr: 
tags: [tutorial]
categories: [python]
image: https://res.cloudinary.com/damhz6skt/image/upload/v1711633757/capas-site/hand_painted_watercolour_background_2401_mp2ahj.jpg
description: "Como usar elementos de uma lista para nomear variáveis em python."
toc: false
beforetoc: 
---
Volta e meia preciso usar elementos de uma lista como nomes de variáveis e atribuir valores distintos para cada uma. O comando é bem simples:

```python
globals()[item_lista]
```

Achar essa solução pela internet é que não é tão simples assim.

Antes de te mostrar a aplicação, lembro que há algumas convensões para nomear as variáveis em Python. Essas boas práticas existem para que o código seja mais explícito e facilmente legível por qualquer pessoa, até pela sua "eu do futuro". Na [PEP 8 - Style Guide fo Python Code](https://peps.python.org/pep-0008/) você encontrará essa e várias outras convensões como: uso da identação e uso de aspas.

## Caso de uso
Atribuir um número inteiro aleatório para cada elemento de umas lista de strings.

## Solução
Para gerar os números, escolhi usar a [biblioteca random](https://docs.python.org/pt-br/3/library/random.html); especificamente a função `randint()`, que retorna um número entre os parâmetros informados (13 e 76):

```python
import random

lista = ["numero_casa", "idade", "tamanho_camisa", "total_gastos"]

for item in lista:
  globals()[item] = random.randint(13, 76)
```

Pronto! As variáveis foram criadas. 

Para verificá-las use a função `print()`:

```python
print(
    numero_casa,
    idade,
    tamanho_camisa,
    total_gastos
)
```

## Saiba mais

Em linhas gerais, python armazena todas as variáveis e símbolos do entorno/programa em um dicionário, sendo a "chave" o nome da variável e o "valor" o valor atribuído à variável. Então, a função `globals()` retorna esse dicionário apenas com as chaves do tipo "global" (pera, já te explico isso). Isso quer dizer que ao executar o comando `globals()['nome_variável']`, com o nome de qualquer que seja a variável global já existente no entorno, o resultado será o valor atribuído a ela:

```python
altura = 1.64

print("A altura é de ", globals()['altura'])
```

Saída esperada:
````
A altura é de 1.64
````

Dessa forma, quando usamos o comando `globals()['nome_variável']` podemos tanto criar uma nova (como já vimos no começo desse artigo), quanto modificar o valor de uma variável existente:

```python
altura = 1.64

globals()['altura'] = 2.2

print("A altura é de ", globals()['altura'])
```

Saída esperada:
````
A altura é de 2.2
````

Te falei que a função `globals()` retorna apenas os símbolos do tipo "global", não foi?! Isso porque, python tem dois tipos: global e local. Os símbolos do tipo "global" são os que foram criados de forma genérica no código, fora de estruturas dos tipos: função, classe, repetição (while e for), etc. Já os símbolos do tipo "local", são os criados dentro dessas estruturas e que, consequentemente, só podem ser usados dentro delas.

Mais informações sobre o funcionamento da função embutida `globals()` estão disponíveis na [documentação da linguagem](https://docs.python.org/pt-br/3/library/functions.html#globals).