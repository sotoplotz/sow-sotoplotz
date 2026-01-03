## 🧩 Commit 7  

### Integración de iframe para visualización del sitio Dropbox Brand

**Commit:** `feat: integración de iframe para visualización del sitio Dropbox Brand`

---

## 🎯 Objetivo del commit

El objetivo de este commit es integrar una vista embebida del sitio web analizado mediante un iframe, permitiendo al usuario observar directamente la web original sin abandonar la aplicación de análisis.

Esta funcionalidad refuerza el carácter comparativo y académico del proyecto, facilitando la relación entre el análisis teórico y el resultado visual real.

---

## 📚 Relación con la guía docente y la práctica

Este commit se vincula con los siguientes contenidos de la asignatura:

- Inserción de elementos multimedia en HTML
- Uso del iframe como recurso de análisis y documentación
- Evaluación visual directa de sitios web sobresalientes
- Relación entre teoría, diseño y ejecución real
- Desarrollo de interfaces web orientadas al análisis crítico

---

## 🧱 Desarrollo técnico realizado

### Integración de iframe en HTML

Se ha incorporado un iframe dentro de la sección correspondiente al sitio Dropbox Brand, utilizando los siguientes atributos:

- `src`: URL del sitio original
- `title`: descripción accesible del contenido embebido
- `loading="lazy"`: optimización de carga
- `referrerpolicy="no-referrer"`: mejora de privacidad

El iframe se presenta como un recurso complementario al análisis textual.

---

### Estilizado y adaptación responsive

El iframe se ha encapsulado dentro de un contenedor específico (`.site-preview`) y se ha adaptado para ocupar el ancho completo del layout, con una altura controlada y bordes suaves.

Esta solución garantiza una correcta visualización en distintos tamaños de pantalla.

---

## ⚠️ Problemas detectados durante el desarrollo

### Posible bloqueo de iframes por parte de sitios externos

Algunos sitios web restringen su visualización dentro de iframes mediante encabezados de seguridad.

**Problemas detectados:**

- Riesgo de que el contenido no se muestre en el futuro
- Dependencia de políticas externas

---

## ✅ Soluciones aplicadas

### Uso del iframe con finalidad académica y contextualizada

El iframe se utiliza exclusivamente como herramienta de análisis visual, acompañado de texto explicativo y sin sustituir el análisis crítico.

Además, el proyecto mantiene sentido y coherencia incluso si el iframe no pudiera mostrarse en algún navegador.

---

## 🧠 Aprendizaje obtenido

Este commit demuestra cómo los elementos embebidos pueden enriquecer el análisis web cuando se utilizan con criterio.

Principales aprendizajes:

- El iframe es un recurso útil para análisis comparativos
- Es importante acompañar los elementos técnicos con contexto académico
- La accesibilidad y la optimización deben considerarse incluso en contenido embebido
- El análisis web se beneficia de la observación directa del producto final

---

## 📍 Estado actual del proyecto

- Análisis textual y visual integrados
- Vista directa del sitio Dropbox Brand dentro de la aplicación
- Experiencia de usuario enriquecida
- Proyecto preparado para integrar nuevos análisis con el mismo patrón
