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
global()[item_lista]
```

Achar essa solução pela internet é que não é tão simples assim.

Antes de te mostrar a aplicação, lembro que há algumas convensões para nomear as variáveis em Python. Essas boas práticas existem para que o código seja mais explícito e facilmente legível por qualquer pessoa, até pelo seu "eu do futuro". Na [PEP 8 - Style Guide fo Python Code](https://peps.python.org/pep-0008/) você encontrará essa e várias outras convensões como: uso da identação e uso de aspas.

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

Mais informações sobre o funcionamento da função embutida `globals()` estão disponíveis na [documentação da linguagem](https://docs.python.org/pt-br/3/library/functions.html#globals).