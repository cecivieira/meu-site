---
layout: post
title: "Como borrar imágenes Docker"
author: cecivieira
date: 2021-12-13 17:00
lang: es
tags: [tip]
categories: [docker]
image: assets/images/cover/16.jpg
description: "Paso a paso sobre como borrar imágenes Docker, para personas muy iniciales en la herramienta"
toc: false
beforetoc: 
---
Si tú, como yo, no sabes nada de Docker, solamente ejecutar los comandos que encuentras en el README de los proyectos, entonces este artículo es para ti.

A vezes, las imágenes del Docker del proyecto que estoy trabajando pasa a no ejecutar más. Luego, cuando no tengo tiempo para buscar el error y la solución, simplemente reinicio todo (borro y construyo de nuevo las imágenes).

# Paso a paso

Para borar todas las imágenes Docker de tu ordenador, abre el terminal y ejecuta los comandos que sigue:

> No hace falta que sea en una carpeta específica. Qualquiera te vale.

1. Enumere todas las imágenes:
   ```
    docker ps -a
    ``` 
2. Comprobe que todas las imágenes estén detenidas, o sea, fijate si el *status* es *exited*.
    <img class="rounded mx-auto d-block" src="../assets/images/2021-12-13/status-imagens-docker.png">
3. Por si acaso una o más imágenes tengan otro *status*, necesitarás detenerlas con el comando:
   ```
   docker stop $(docker ps -a -q)
   ```
4. Borre todas las imágenes:
   ```
   docker system prune -a
   ```

Listo! Ahora tu ordenador está como si nunca tuvieras construido imágenes Docker.
<div style="text-align: right"><a href="https://cecivieira.com/como-apagar-imagens-docker/">El texto tiene versión en 🇧🇷</a></div>