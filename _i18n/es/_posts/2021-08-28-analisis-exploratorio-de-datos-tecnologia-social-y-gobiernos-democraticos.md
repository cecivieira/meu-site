---
layout: post
title: "Análisis exploratorio de datos: tecnología social y gobiernos democráticos"
author: cecivieira
date: 2021-08-28 12:00
lang: es
categories: [datos abiertos, gobierno abierto, américa latina, análisis exploratorio, innovación cívica, pandas]
tags: [artículo, charla]
image: assets/images/cover/9.jpg
description: "Datos abiertos son recursos para el desarrollo de tecnologías que ayudan a solventar problemas sociales y fomentar la gestión participativa en los gobiernos locales. El artículo enseñará técnicas iniciales para explotar conjuntos de datos abiertos Pandas. Además, abordará acerca de la importancia de la transparencia de datos y el panorama regional de transparencia de los datos en América Latina y Caribe."
toc: true
beforetoc: ""
---
# Datos abiertos
Datos abiertos son datos digitales puestos a disposición con las características técnicas y jurídicas necesarias para que puedan ser usados, reutilizados y redistribuidos libremente por cualquiera, en cualquier momento y en cualquier sitio.

Estamos hablando de información no personal, es decir, datos que no contienen información sobre individuos específicos y de datos gubernamentales que no tienen restricciones nacionales de seguridad.

Los datos abiertos permiten a los gobiernos, ciudadanas y organizaciones de la sociedad civil y del sector privado tomar mejores decisiones informadas, basadas en evidencias. El acceso eficaz y oportuno a los datos nos ayuda a desarrollar nuevos hallazgos e ideas innovadoras que pueden generar beneficios sociales y económicos, para mejorar nuestras vidas. Además  generan  una  mayor  interacción  entre  los  gobiernos  y  los ciudadanos, y permiten oportunidades de co-creación.

Los datos abiertos permiten a las usuarias comparar, combinar y seguir las conexiones entre distintos conjuntos de datos. Cuando se puede hacer esto efectivamente, es posible resaltar las tendencias, identificar desafíos, inequidades económicas y sociales, así como referenciar avances en los programas y servicios públicos.

Un ejemplo muy cercano a nosotras es la lucha colectiva contra la pandemia. Pudemos acompañar en tiempo real la situación en cada país, administrar los recursos destinados a enfrentar el COVID-19, y diseñar herramientas tecnológicas que útiles para la crisis y que sirvem de soporte a las acciones en el corto plazo.

Construir una sociedad más próspera, equitativa y justa requiere gobiernos transparentes, que rindan cuentas, y que colaboren de manera regular y significativa con la sociedad. En este sentido, existe una revolución global de datos que busca avanzar la colaboración en torno a los desafíos sociales claves, proporcionar una supervisión eficaz de las actividades gubernamentales, apoyar la innovación, el desarrollo económico sostenible y la creación y expansión de políticas públicas eficientes y efectivas.

Los datos abiertos son uno de los ejes para lograr un Gobierno Abierto y democrático.

# Panorama de los datos abiertos en América Latina y Caribe

En nuestra región empezamos hace unos años los esfuerzos para incentivar gestiones más participativas. En 2011 gobiernos de todo el mundo y representantes de la sociedad civil se unieron para crear la [Alianza para el Gobierno Abierto](https://www.opengovpartnership.org/), con el objetivo de promover una gobernanza transparente, participativa, inclusiva y responsable. Actualmente, 16 países de América Latina y Caribe son miembros de esta Alianza. 

En 2015 fue creada la [Carta internacional de Datos Abiertos](https://opendatacharter.net/principles-es/) con participación del grupo de trabajo de Datos Abiertos de la Alianza, sociedad civil y personas expertas. La carta tiene 6 principios para los datos:
1. Abiertos por defecto
2. Oportunos y Exhaustivos                                    
3. Accesibles y Utilizables                            
4. Comparables e Interoperables
5. Para mejorar la Gobernanza y la Participación Ciudadana    
6. Para el Desarrollo Inclusivo y la Innovación                

Hoy en día, tenemos dos publicaciones que usan esta [Carta](https://opendatacharter.net/principles-es/) como soporte para analizar el nível de apertura de los datos en los gobiernos: 

- **[Open Data Barometer](https://opendatabarometer.org/)**: producido por el [World Wide Web Foundation](https://www.w3.org/), es una medida global de cómo los gobiernos publican y utilizan datos abiertos para la rendición de cuentas, la innovación y el impacto social; 
- **[OURdata Index](https://www.oecd.org/gov/digital-government/policy-paper-ourdata-index-2019.htm)**: producido por la [OCDE](https://www.oecd.org/), este índice realiza un análisis comparativo  del  diseño  y  la  implementación  de políticas de datos abiertos gubernamentales.

Enfocaremos en el [OURdata Index](https://www.oecd.org/gov/digital-government/policy-paper-ourdata-index-2019.htm), pues tiene la información que deseamos y es usado como base para el [Panorama de las Administraciones Públicas de América Latina y el Caribe](https://publications.iadb.org/es/panorama-de-las-administraciones-publicas-america-latina-y-el-caribe-2020), que detallaremos en un momento.

## Índice  de  datos  abiertos,  útiles  y  reutilizables (OURdata Index)

Tiene el objetivo de medir el nivel de disponibilidad, accesibilidad  y apoyo gubernamental para la reutilización de datos basados en los principios de la [Carta Internacional de Datos Abiertos](https://opendatacharter.net/principles-es/). Está compuesto por 3 indicadores: disponibilidad de datos, accesibilidad de datos y apoyo del gobierno a la reutilización de datos. El puntaje de cada país varía entre 0 y 1, siendo que cada indicador tiene el mismo peso, 0.33.

Con este índice es posible comparar los niveles de abertura de datos (los puntajes) entre los países de América Latina y Caribe y los miembros de la OCDE. En promedio, los países de latinoamerica obtuvieron 0,43 puntos, mientras el promedio de los paises de la OCDE fue  0,60.

Sin embargo, existe  un evidente contraste en los niveles de desarrollo acerca de los datos abiertos gubernamentales entre los países de América Latina. Colombia (0,88), México (0,71) y Brasil  (0,63)  lideran la  región  con  puntajes  más  altos que el promedio de la OCDE.

<img class="rounded mx-auto d-block" src="../../assets/images/2021-08-28/grafica-ourdata-index-2019-america-latina.png">

## Panorama de las Administraciones Públicas de América Latina y el Caribe

Es [una publicación](https://publications.iadb.org/es/panorama-de-las-administraciones-publicas-america-latina-y-el-caribe-2020) que cubre aspectos claves de la gobernanza pública y permite a los formuladores de políticas y a la sociedad analizar el desempeño de los gobiernos de América Latina y Caribe en comparación con los países de la OCDE. Uno de los aspectos que tienen en cuenta son “datos abiertos gubernamentales”, lo cual usa como base el [OURdata Index](https://www.oecd.org/gov/digital-government/policy-paper-ourdata-index-2019.htm). 

El Panorama fue publicado en 2020 y es la publicación más reciente acerca del análisis de los datos abiertos públicos de latinoamerica. Fue producido por la [OCDE (Organización para la Cooperación y el Desarrollo Económicos)](https://www.oecd.org/acerca/miembros-y-socios/), una organización que agrupa a 38 países con la misión de promover políticas que mejoren el bienestar económico y social de las personas; y por el [BID (Banco Interamericano de Desarrollo)](https://www.iadb.org/es/acerca-del-bid/como-estamos-organizados), que es la principal fuente de financiamiento para el desarrollo de América Latina y el Caribe, además ayuda a mejorar vidas al brindar soluciones financieras y conocimientos sobre el desarrollo para clientes del sector público y el privado.

Este [Panorama](https://publications.iadb.org/es/panorama-de-las-administraciones-publicas-america-latina-y-el-caribe-2020) informa que el 81% de los países en América Latina y Caribe cuentan con una estrategia de mediano plazo y el 75% tiene un plan de acción nacional que incluye implementación de portales y publicación de datos abiertos. En cuanto a participación ciudadana, la mitad de los países latinoamericanos tienen programas gubernamentales para apoyar el conocimiento sobre datos abiertos gubernamentales entre las organizaciones de la sociedad civil. Sin embargo, esta proporción es inferior a los países de la OCDE, donde el 75% de los gobiernos los tienen.

Aunque la agenda de datos abiertos ha despegado en nuestra región, aún hay margen de mejora. En consonancia con el [Open Data Barómetro](https://opendatabarometer.org/), los análisis muestran que los gobiernos todavía tratan los datos abiertos como iniciativas aisladas. O sea, deberíamos priorizar e invertir en la gobernanza de datos abiertos para respaldar los cambios sustanciales necesarios para incorporar un enfoque abierto en todos los ámbitos y estimular la participación ciudadana en las políticas y programas gubernamentales.

La democracia en América Latina y Caribe abarca mucho más que las elecciones, de acuerdo con el [proyecto LATINNO](https://latinno.net/es/), en los últimos años estamos convirtiéndonos en un laboratorio de innovaciones políticas y de gobernanza participativa. Mucho se da por la transparencia de datos gubernamentales, aunque nos quede mucho por hacer.

# Análisis exploratório de datos

Hasta aquí hemos visto la importancia de los datos abiertos gubernamentales para desarrollo de innovación y una gestión más participativa, también echamos un vistazo en el panorama de América Latina acerca del nivel de apertura de los datos y políticas de los gobiernos acerca del tema. Ahora podremos las manos en la masa... ops.. en los datos.

La ideia del análisis es enseñar un poquito de Pandas y ser un ejemplo de lo qué podemos hacer con datos abiertos, presentar para vosotras la potencia de este recurso y instigar vosotras a utilizarlos sea para desarrollar nuevas tecnología que mejore la vida de su comunidad o cobrar al gobierno.

Elegí para nuestro análisis, los datos de vacunación contra COVID-19 de algunos países de América Latina. Si quieres, puedes profundizarlo cogiendo datos de todos los países de la región.

## Datos de vacunación contra el COVID-19

Busqué los datos de Argentina, Bolívia, Perú y Uruguay, sin embargo no encontré los datos de vacunación contra el COVID-19 en las páginas del gobierno de Bolívia. En Uruguay, encontré los datos, pero su granularidad estava muy alta, o sea, todas las cantidades ya estavan agrupadas. Por lo tanto, descarté dos países del análisis.

<img class="rounded mx-auto d-block" src="../../assets/images/2021-08-28/panorama-conjunto-datos-vacunacion-covid19-ago2021.png">

La documentación de los datos (diccionario de datos) es muy importante para nosostras hacer análisis fiables, pues detalla el contenido de cada columna, además de ser útil en el preprocessamiento de datos cuando trae las informaciones de *encoding*, los tipos de datos de cada columna, etc.

Por fin, quedamos con los datos de [Argentina (datos)](https://www.datos.gob.ar/dataset/salud-vacunas-contra-covid-19-dosis-aplicadas-republica-argentina---registro-desagregado) y [Perú (datos)](https://www.datosabiertos.gob.pe/dataset/vacunacion).

## Notebook del análisis

Usamos el [Google Collab](https://colab.research.google.com/) para desarrollar el análisis, lo cual está disponível en [este enlace](../../assets/images/2021-08-28/analisis_datos_vacunales_ar_pe_2021.ipynb).

# Referencias

- [Datos abiertos en gobiernos de América Latina y el Caribe: ¿cómo avanzamos?, 2020](https://blogs.iadb.org/administracion-publica/es/datos-abiertos-en-gobiernos-de-america-latina-y-el-caribe-como-avanzamos/)
- [Datos abiertos y Coronavirus: El valor de la información para luchar colectivamente contra la pandemia, 2020](https://blogs.iadb.org/administracion-publica/es/datos-abiertos-y-coronavirus-el-valor-de-la-informacion-para-luchar-colectivamente-contra-la-pandemia/)
- [Flourish Studio](https://app.flourish.studio/)
- [Informe: de la promesa al progresso, 2018](https://opendatabarometer.org/leadersedition/report/)
- [Los datos abiertos en América Latina y el Caribe, 2018](https://publications.iadb.org/es/los-datos-abiertos-en-america-latina-y-el-caribe)
- [Open Data Barometer, 3.ed](https://opendatabarometer.org/3rdedition/regional-report/latin-america/?lang=es)
- [Panorama de las Administraciones Públicas: América Latina y el Caribe 2020](https://publications.iadb.org/es/panorama-de-las-administraciones-publicas-america-latina-y-el-caribe-2020)
- [Panorama regional de los datos abiertos: avances y desafíos en América Latina y el Caribe, 2016](https://www.cepal.org/es/publicaciones/40768-panorama-regional-datos-abiertos-avances-desafios-america-latina-caribe)
- [¿Qué son los datos abiertos?](https://opendatahandbook.org/guide/es/what-is-open-data/)

## Organizaciones que promueven uso de la tecnología para el fortalecimiento de las democracias

- [Aúna](https://www.auna.org.mx/)
- [Cívica Digital](https://civica.digital/)
- [Codeando México](http://codeandomexico.org/)
- [Ciudadanía inteligente](https://ciudadaniai.org/)
- [Data Cívica](https://datacivica.org/)
- [ILDA](https://idatosabiertos.org/)
- [Instituto Cidade Democrática](https://cidadedemocratica.org.br)
- [Instituto de Tecnologia e Sociedade](https://itsrio.org/pt/home/)
- [Latinno](https://latinno.net/es/)
- [Open Knowledge Brasil](https://ok.org.br/)

> Este texto son los apuntes de la charla "Análisis exploratorio de datos: tecnología social y gobiernos democráticos" que presenté en [PyCon Latam 2021](https://www.pylatam.org/horario-completo/talk19/).
> Recursos:
- [Propuesta de la charla](../../assets/images/2021-08-28/propuesta-charla-pycon-latam-2021.pdf)
- [Diapositivas](../../assets/images/2021-08-28/diapositivas-pycon-latam-analisis-exploratorio-de-datos-tecnologia-social-y-gobiernos-democraticos.pdf)
- [Notebook](https://github.com/cecivieira/analisis-datos-vacunales-ar-pe-ago2021/blob/main/analisis_datos_vacunales_ar_pe_2021.ipynb)
- [Charla en video](https://youtu.be/kFbsP4wFjag)