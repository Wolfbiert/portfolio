---
name: Vue Component Development (Portfolio)
description: Guía para crear y modificar componentes Vue en este portfolio siguiendo el sistema de diseño.
---

# Desarrollo de Componentes Vue

Este proyecto utiliza Vue 3 con el script setup (`<script setup lang="ts">`).

## Sistema de Diseño (Variables CSS)

Siempre se deben utilizar las variables definidas en `app/assets/css/main.css`. No usar valores hardcodeados excepto para casos muy específicos de diseño.

### Colores Principales
- Fondo: `var(--color-bg)`
- Superficie: `var(--color-surface)`, `var(--color-surface-alt)`
- Bordes: `var(--color-border)`
- Texto: `var(--color-text)`, `var(--color-text-muted)`
- Acento: `var(--color-accent)`, `var(--color-accent-hover)`, `var(--color-accent-light)`

### Tipografía y Espaciado
- Sans: `var(--font-sans)` (Inter)
- Display: `var(--font-display)` (Outfit)
- Espaciado: `var(--space-1)` hasta `var(--space-24)`
- Radios: `var(--radius-sm)`, `var(--radius-md)`, `var(--radius-lg)`, `var(--radius-full)`

## Estructura de un Archivo .vue

```vue
<template>
  <section class="section">
    <div class="container">
      <!-- Contenido -->
    </div>
  </section>
</template>

<script setup lang="ts">
// Props, Emits, Composables
</script>

<style scoped>
/* Estilos usando variables CSS */
.section {
  padding-block: var(--space-24);
}
</style>
```

## Convenciones de Animación
- Usar `animate.css` para entradas (e.g., `animate__fadeInUp`).
- Definir transiciones usando `var(--duration-base)` y `var(--ease-out)`.
- Respetar `prefers-reduced-motion` (ya configurado en `main.css`).
