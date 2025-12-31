# 📘 Análisis de Sitios Web Sobresalientes

## Información general del proyecto

Este proyecto consiste en el desarrollo de un sitio web dedicado al análisis crítico de sitios web sobresalientes, abordando aspectos relacionados con el diseño visual, la experiencia de usuario (UX/UI) y la implementación técnica en el frontend.

El desarrollo se realiza utilizando tecnologías web estándar (HTML5, CSS3 y JavaScript), siguiendo las buenas prácticas profesionales, los estándares actuales de la web y los criterios académicos establecidos en la asignatura **Diseño de Aplicaciones Móviles y WebApp**.

El proyecto se construye de forma progresiva mediante commits documentados, justificando en cada fase las decisiones técnicas, conceptuales y de diseño adoptadas.

---

## 🧩 Commit 1  

### Inicialización del proyecto y estructura base HTML semántica

**Commit:** `chore: inicialización del proyecto y estructura base HTML semántica`

---

## 🎯 Objetivo del commit

El objetivo de este primer commit es establecer una base sólida y profesional para el proyecto, definiendo la estructura inicial del sitio web y asegurando un uso correcto del lenguaje HTML5 desde una perspectiva semántica, accesible y mantenible.

Este commit se centra en la fase de conceptualización y estructura, sin aplicar todavía estilos visuales ni interactividad.

---

## 📚 Relación con la guía docente

Este commit se vincula directamente con los siguientes contenidos y resultados de aprendizaje de la asignatura:

- Fundamentos y semántica del HTML + CSS moderno
- Comprensión del diseño de una aplicación digital interactiva
- Traslado del contenido a un entorno web mediante HTML
- Uso correcto de estándares de desarrollo web
- Introducción al trabajo con control de versiones y documentación

---

## 🗂️ Estructura del proyecto

La estructura inicial del proyecto es la siguiente:

```txt
/analisis-web
│── index.html
│
├── /css
│   └── style.css
│
├── /js
│   └── main.js
│
└── /assets
    └── /images

---

## 🧱 Desarrollo técnico realizado

### Documento HTML5 semántico

Se ha desarrollado el archivo `index.html` empleando una estructura semántica completa de HTML5, con el objetivo de dotar al documento de significado, claridad estructural y accesibilidad.

Las principales etiquetas semánticas utilizadas son:

- `<header>`: contiene la cabecera del sitio y la navegación principal.
- `<nav>`: agrupa los enlaces de navegación del sitio.
- `<main>`: delimita el contenido principal del documento.
- `<section>`: organiza el contenido en bloques temáticos.
- `<footer>`: incluye la información de cierre del sitio.

El uso de estas etiquetas facilita la interpretación del contenido por parte de motores de búsqueda y tecnologías asistivas, además de mejorar la mantenibilidad del código.

---

### Configuración básica del documento

Se han incorporado las configuraciones mínimas necesarias para garantizar un comportamiento correcto del documento en distintos dispositivos y navegadores:

- Declaración `<!DOCTYPE html>` para activar el modo estándar del navegador.
- Atributo `lang="es"` en la etiqueta `<html>` para mejorar la accesibilidad y el SEO.
- Metaetiqueta `<meta name="viewport">` para asegurar una visualización adaptada a dispositivos móviles.
- Enlace a la hoja de estilos principal (`style.css`) y al archivo JavaScript (`main.js`), manteniendo la separación entre estructura, estilo y comportamiento.

---

## ⚠️ Problemas detectados durante el desarrollo

### Uso excesivo de etiquetas `<div>`

Durante la planificación inicial del documento se valoró la posibilidad de estructurar el contenido utilizando únicamente etiquetas `<div>`.

**Problemas detectados:**
- Pérdida de semántica en el documento.
- Menor accesibilidad para usuarios que emplean tecnologías asistivas.
- Código menos legible y con menor valor académico y profesional.

---

### Navegación sin jerarquía estructural clara

En una primera aproximación, la navegación principal se planteó como una serie de enlaces sin una estructura jerárquica definida.

**Problemas detectados:**
- Dificultad de interpretación por parte de lectores de pantalla.
- Menor claridad en la organización del menú de navegación.
- Incumplimiento de buenas prácticas de accesibilidad.

---

## ✅ Soluciones aplicadas

### Uso consciente de HTML semántico

Se optó por emplear etiquetas semánticas de HTML5 para representar correctamente cada bloque funcional del documento, reservando el uso de `<div>` únicamente para casos específicos que lo requieran en futuras fases del proyecto.

Esta decisión mejora la accesibilidad, la claridad del código y la coherencia con los estándares web actuales.

---

### Estructuración correcta del menú de navegación

La navegación principal se encapsuló dentro de la etiqueta `<nav>` y se organizó mediante una lista no ordenada `<ul>`, siguiendo las recomendaciones de accesibilidad y estructura semántica.

Esta solución facilita la comprensión del menú tanto para usuarios como para tecnologías asistivas.

---

## 🧠 Aprendizaje obtenido

Este primer commit pone de relieve la importancia de una correcta planificación estructural antes de abordar aspectos visuales o interactivos.

Los principales aprendizajes obtenidos son:

- El HTML define tanto la estructura como el significado del contenido.
- Una semántica adecuada mejora la accesibilidad, el SEO y la calidad del proyecto.
- Las decisiones estructurales iniciales condicionan el desarrollo posterior.
- Documentar el proceso desde el inicio aporta rigor académico y claridad al proyecto.

---

## 📍 Estado actual del proyecto

- Proyecto inicializado correctamente.
- Estructura de carpetas definida.
- Documento HTML5 semántico implementado.
- Base preparada para iniciar la maquetación visual con CSS en el siguiente commit.
