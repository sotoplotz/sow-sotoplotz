## 🧩 Commit 3  

### Diseño responsive con Flexbox y adaptación mobile-first

**Commit:** `feat: diseño responsive con Flexbox y adaptación mobile-first`

---

## 🎯 Objetivo del commit

El objetivo de este commit es adaptar el sitio web a distintos tamaños de pantalla mediante un enfoque mobile-first, utilizando Flexbox y media queries para construir un diseño responsive y accesible.

Se busca garantizar una correcta visualización y usabilidad del sitio tanto en dispositivos móviles como en pantallas de mayor tamaño, uno de los principios fundamentales del diseño web moderno.

---

## 📚 Relación con la guía docente

Este commit se relaciona directamente con los siguientes contenidos de la asignatura:

- Maquetación adaptada a distintos tamaños de pantalla
- Diseño responsive y adaptable
- Uso de Flexbox para la construcción de layouts
- Breakpoints y media queries
- Valores del diseño web: accesibilidad, usabilidad y experiencia de usuario

---

## 📐 Desarrollo técnico realizado

### Enfoque mobile-first

El diseño se ha planteado siguiendo una estrategia mobile-first, definiendo primero el comportamiento del layout en dispositivos móviles y adaptándolo posteriormente a pantallas de mayor tamaño mediante media queries.

Este enfoque prioriza la simplicidad, el rendimiento y la accesibilidad.

---

### Uso de Flexbox en la cabecera y navegación

Se ha aplicado Flexbox al contenedor del `header` y a la lista de navegación para controlar la disposición de los elementos de forma flexible y adaptable.

En dispositivos móviles:

- La cabecera se organiza en columna
- El menú de navegación se muestra en vertical

---

### Media queries y breakpoint principal

Se ha definido un breakpoint principal a partir de los `768px`, comúnmente utilizado para la transición entre dispositivos móviles y tablets/escritorio.

A partir de este punto:

- La cabecera se reorganiza en una fila horizontal
- La navegación pasa a disposición horizontal
- Se ajustan los espacios internos del contenido principal

---

## ⚠️ Problemas detectados durante el desarrollo

### Navegación poco usable en pantallas pequeñas

En una primera versión, la navegación horizontal resultaba poco usable en dispositivos móviles.

**Problemas detectados:**

- Enlaces demasiado juntos
- Dificultad de interacción táctil
- Lectura poco clara del menú

---

### Desajustes en la alineación del header

Al adaptar el layout a pantallas grandes, se produjeron desajustes en la alineación vertical de los elementos del header.

**Problemas detectados:**

- Falta de alineación entre título y navegación
- Espaciados inconsistentes

---

## ✅ Soluciones aplicadas

### Reorganización vertical del menú en mobile

Se optó por mostrar el menú de navegación en columna en dispositivos móviles, mejorando la legibilidad y la interacción táctil.

---

### Ajuste de alineaciones con Flexbox

Se utilizaron propiedades como `align-items` y `justify-content` para controlar la alineación del header en pantallas grandes, logrando una disposición equilibrada y clara.

---

## 🧠 Aprendizaje obtenido

Este commit refuerza la importancia del diseño responsive como parte esencial del desarrollo web actual.

Principales aprendizajes:

- El enfoque mobile-first mejora la usabilidad y el rendimiento
- Flexbox es una herramienta eficaz para layouts adaptables
- Las media queries permiten adaptar el diseño de forma progresiva
- Un diseño responsive debe pensarse desde la estructura, no añadirse al
