---
name: Portfolio General Context
description: Información general sobre el proyecto de portfolio de Agustín Massoni.
---

# Contexto del Proyecto: Portfolio Agustín Massoni

Este proyecto es un portfolio personal moderno construido con tecnologías web de última generación.

## Stack Tecnológico

- **Framework**: [Nuxt 4](https://nuxt.com/) (Vue 3)
- **Estado**: [Pinia](https://pinia.vuejs.org/)
- **Utilidades**: [VueUse](https://vueuse.org/)
- **Estilos**: Vanilla CSS con Custom Properties (Design Tokens)
- **Animaciones**: Animate.css + Transiciones CSS personalizadas
- **Fuentes**: Inter (Sans) y Outfit (Display) vía Google Fonts

## Estructura de Archivos (Nuxt 4 Structure)

- `app/`: Directorio principal de la aplicación.
  - `components/`: Componentes Vue (Hero, Projects, Navbar, etc.).
  - `assets/css/main.css`: Sistema de diseño y estilos globales.
  - `pages/`: Páginas de la aplicación (principalmente `index.vue`).
  - `composables/`: Lógica compartida.
- `public/`: Assets estáticos.
- `server/`: Lógica de servidor (Nitro).

## Reglas de Oro

1. **Estética Premium**: El diseño debe sentirse moderno, con glassmorphism, gradientes suaves y micro-animaciones.
2. **Tokens de Diseño**: Siempre usar las variables definidas en `app/assets/css/main.css` (e.g., `var(--color-accent)`, `var(--space-4)`).
3. **Escritura en Español**: El contenido del portfolio y la documentación para el usuario deben estar en español.
4. **Responsividad**: Todos los componentes deben ser Mobile-First.

## Cómo empezar

Antes de realizar cualquier cambio, revisa las Skills específicas en `_agents/skills/` para mantener la coherencia con el sistema de diseño y la gestión de datos.
