## 🧩 Commit 6  

### Resaltado dinámico de la sección activa mediante JavaScript

**Commit:** `feat: resaltado dinámico de sección activa mediante JavaScript`

---

## 🎯 Objetivo del commit

El objetivo de este commit es mejorar la orientación del usuario dentro del documento mediante la incorporación de JavaScript para resaltar dinámicamente la sección activa en el menú de navegación.

Esta funcionalidad resulta especialmente útil en sitios de análisis extensos, donde el usuario necesita identificar en todo momento la sección que está consultando.

---

## 📚 Relación con la guía docente

Este commit se vincula con los siguientes contenidos de la asignatura:

- Introducción a JavaScript
- Lenguajes orientados a eventos
- Manipulación del DOM
- Mejora de la experiencia de usuario mediante interactividad
- Uso consciente y justificado de JavaScript

---

## 🧱 Desarrollo técnico realizado

### Selección de elementos del DOM

Se han seleccionado mediante JavaScript:

- Todas las secciones principales del documento (`<section>`)
- Todos los enlaces del menú de navegación

Esto permite relacionar cada enlace con su sección correspondiente.

---

### Detección de la sección visible

Se ha implementado una función que evalúa la posición del scroll y determina qué sección está actualmente visible en la ventana del navegador.

La lógica se basa en:

- La posición vertical del scroll (`window.scrollY`)
- La posición y altura de cada sección

---

### Actualización dinámica del estado activo

En función de la sección visible:

- Se elimina la clase `active` de todos los enlaces
- Se aplica la clase `active` únicamente al enlace correspondiente

Este proceso se ejecuta en respuesta al evento `scroll`.

---

## ⚠️ Problemas detectados durante el desarrollo

### Falta de referencia visual durante el scroll

Antes de este commit, el usuario no disponía de una indicación clara sobre qué sección estaba visualizando.

**Problemas detectados:**

- Desorientación en documentos largos
- Navegación menos eficiente

---

### Riesgo de uso excesivo de JavaScript

Era necesario evitar una solución compleja o innecesariamente pesada.

**Problemas detectados:**

- Posible sobreingeniería
- Impacto negativo en rendimiento y legibilidad del código

---

## ✅ Soluciones aplicadas

### JavaScript ligero y orientado a eventos

Se optó por una solución sencilla, basada en eventos y sin dependencias externas, manteniendo el código claro y comprensible.

---

### Complemento visual mediante CSS

La clase `active` se gestiona desde JavaScript, pero su representación visual se define en CSS, respetando la separación entre comportamiento y presentación.

---

## 🧠 Aprendizaje obtenido

Este commit demuestra cómo JavaScript puede mejorar la experiencia de usuario cuando se utiliza de forma medida y justificada.

Principales aprendizajes:

- JavaScript debe responder a necesidades reales de interacción
- La manipulación del DOM permite crear interfaces más claras y usables
- Separar lógica y presentación mejora la mantenibilidad del proyecto
- La interactividad debe reforzar, no complicar, la experiencia de usuario

---

## 📍 Estado actual del proyecto

- Navegación dinámica y contextual
- Usuario siempre orientado dentro del contenido
- Integración equilibrada de HTML, CSS y JavaScript
- Proyecto preparado para profundizar en el análisis de contenido o microinteracciones avanzadas
