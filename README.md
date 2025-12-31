## 🧩 Commit 5  

### Navegación sticky, scroll suave y mejoras de interacción

**Commit:** `feat: navegación sticky, scroll suave y mejoras de interacción`

---

## 🎯 Objetivo del commit

El objetivo de este commit es mejorar la experiencia de navegación del sitio web mediante la implementación de una barra de navegación persistente (sticky), un comportamiento de scroll suave y estados interactivos en los enlaces del menú.

Estas mejoras refuerzan la usabilidad del sitio y facilitan la exploración del contenido analítico, especialmente en documentos largos.

---

## 📚 Relación con la guía docente y la práctica

Este commit se alinea con los siguientes contenidos de la asignatura:

- Patrones UI de navegación
- Mejora de la experiencia de usuario (UX)
- Uso de propiedades modernas de CSS
- Microinteracciones y feedback visual
- Análisis de patrones reales utilizados en sitios premiados

La implementación sigue la propuesta técnica facilitada por el profesor en la práctica.

---

## 🧱 Desarrollo técnico realizado

### Navegación persistente (sticky)

Se ha aplicado la propiedad `position: sticky` a la etiqueta `<nav>`, permitiendo que el menú de navegación permanezca visible en la parte superior de la pantalla durante el desplazamiento vertical.

Este patrón mejora la accesibilidad al contenido y facilita el cambio entre secciones.

---

### Scroll suave entre secciones

Se ha incorporado la propiedad `scroll-behavior: smooth` a la etiqueta `<html>`, logrando una transición suave al navegar entre las distintas secciones mediante enlaces internos.

Este comportamiento mejora la percepción de fluidez y la experiencia de usuario.

---

### Estilos visuales del header

El encabezado del sitio se ha reforzado visualmente mediante:

- Fondo blanco
- Sombra suave (`box-shadow`)

Esta decisión permite separar visualmente la navegación del contenido principal y mejora la jerarquía visual del sitio.

---

### Estados interactivos en enlaces

Se han definido estados `:hover` y `:focus` para los enlaces del menú de navegación, proporcionando feedback visual al usuario.

Estos estados:

- Mejoran la usabilidad
- Refuerzan la accesibilidad mediante navegación por teclado
- Aportan claridad en la interacción

---

## ⚠️ Problemas detectados durante el desarrollo

### Pérdida de referencia al desplazarse por el documento

Antes de este commit, al hacer scroll prolongado, el usuario perdía el acceso inmediato al menú de navegación.

**Problemas detectados:**

- Navegación menos eficiente
- Dificultad para cambiar de sección rápidamente

---

### Transiciones abruptas entre secciones

El salto directo entre anclajes producía una experiencia de navegación brusca.

**Problemas detectados:**

- Sensación de corte visual
- Menor fluidez en la interacción

---

## ✅ Soluciones aplicadas

### Implementación de navegación sticky

La navegación persistente permite al usuario acceder al menú en cualquier momento, mejorando la usabilidad general del sitio.

---

### Uso de scroll suave mediante CSS

El scroll suave se resolvió de forma nativa con CSS, evitando la necesidad de JavaScript y manteniendo el proyecto ligero y accesible.

---

## 🧠 Aprendizaje obtenido

Este commit demuestra cómo pequeñas mejoras en CSS pueden tener un impacto significativo en la experiencia de usuario.

Principales aprendizajes:

- La navegación es un elemento clave en sitios de análisis extensos
- CSS moderno permite resolver interacciones sin JavaScript
- Las microinteracciones mejoran la percepción de calidad del sitio
- Seguir propuestas docentes refuerza el rigor académico del proyecto

---

## 📍 Estado actual del proyecto

- Navegación persistente implementada
- Scroll suave funcional entre secciones
- Estados interactivos accesibles en el menú
- Proyecto preparado para introducir contenido analítico avanzado o JavaScript
