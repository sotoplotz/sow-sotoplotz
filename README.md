## 🧩 Commit 2  

### Maquetación base con CSS, tipografía y jerarquía visual

**Commit:** `feat: maquetación base con CSS y jerarquía visual`

---

## 🎯 Objetivo del commit

El objetivo de este commit es iniciar la maquetación visual del proyecto mediante CSS, estableciendo una jerarquía tipográfica clara y un layout base coherente con los principios del diseño web moderno.

Se busca traducir la estructura semántica previamente definida en HTML a una primera propuesta visual, manteniendo la separación entre contenido y presentación, y sentando las bases para un diseño escalable y responsive.

---

## 📚 Relación con la guía docente

Este commit se vincula con los siguientes contenidos de la asignatura:

- Maquetación del front-end mediante hojas de estilo CSS
- Tipografía y jerarquía visual en interfaces web
- Separación entre contenido (HTML) y estilo (CSS)
- Buenas prácticas de código mantenible
- Valores del diseño web: legibilidad, claridad y accesibilidad

---

## 🎨 Desarrollo técnico realizado

### Hoja de estilos principal

Se ha desarrollado el archivo `style.css`, vinculado al documento HTML desde el commit anterior, para definir los estilos globales del sitio.

Este enfoque permite centralizar la presentación visual y facilita el mantenimiento del proyecto.

---

### Reset CSS y control del box model

Se ha aplicado un reset básico de estilos para eliminar márgenes y paddings por defecto del navegador, junto con la propiedad `box-sizing: border-box`.

Esta decisión garantiza un comportamiento consistente del layout en distintos navegadores.

---

### Uso de variables CSS

Se han definido variables CSS en `:root` para colores, tipografía y ancho máximo del layout.

El uso de variables mejora la escalabilidad del proyecto y facilita cambios globales en fases posteriores.

---

### Tipografía y jerarquía visual

Se ha establecido una jerarquía tipográfica clara mediante:

- Tipografía base sans-serif orientada a la lectura en pantalla
- Diferenciación de tamaños y pesos para encabezados (`h1`, `h2`)
- Control del ancho de línea del texto para mejorar la legibilidad

Estas decisiones guían visualmente al usuario y refuerzan la estructura del contenido.

---

### Layout base

Se ha definido un layout centrado mediante un ancho máximo y márgenes automáticos para los principales bloques estructurales (`header`, `main`, `footer`).

Este planteamiento crea una composición clara y ordenada, preparada para adaptarse a distintos tamaños de pantalla.

---

## ⚠️ Problemas detectados durante el desarrollo

### Inconsistencias visuales entre navegadores

Al aplicar los primeros estilos se detectaron diferencias en márgenes y espaciados según el navegador utilizado.

**Problemas detectados:**

- Resultados visuales inconsistentes
- Dificultad para controlar el espacio entre elementos

---

### Jerarquía tipográfica poco clara en una primera iteración

En una primera versión, los tamaños tipográficos no diferenciaban correctamente los distintos niveles de información.

**Problemas detectados:**

- Lectura poco fluida
- Escasa diferenciación entre títulos y texto

---

## ✅ Soluciones aplicadas

### Aplicación de un reset CSS controlado

Se incorporó un reset básico y el uso de `box-sizing: border-box` para asegurar consistencia visual entre navegadores.

---

### Definición consciente de la jerarquía tipográfica

Se ajustaron tamaños, pesos y espaciados tipográficos para establecer una jerarquía clara y mejorar la experiencia de lectura.

---

## 🧠 Aprendizaje obtenido

Este commit evidencia el papel fundamental del CSS en la construcción de interfaces web claras y accesibles.

Principales aprendizajes:

- La tipografía es un elemento clave en la experiencia de usuario
- Un reset CSS facilita el control del diseño
- La jerarquía visual guía la lectura y comprensión del contenido
- La maquetación debe abordarse de forma progresiva y estructurada

---

## 📍 Estado actual del proyecto

- Maquetación base implementada mediante CSS
- Jerarquía tipográfica definida
- Layout inicial claro y ordenado
- Proyecto preparado para abordar diseño responsive en el siguiente commit
