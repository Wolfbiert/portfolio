---
name: Portfolio Data Management
description: Guía para actualizar los datos de los proyectos en el portfolio.
---

# Gestión de Datos del Portfolio

Actualmente, los datos de los proyectos se encuentran hardcodeados en el componente `app/components/Projects.vue`.

## Estructura de un Proyecto

Cada objeto de proyecto en el array `projects` debe seguir esta interfaz:

```typescript
interface Project {
  slug: string        // ID único para URLs
  name: string        // Nombre del proyecto
  type: string        // Tipo (e.g. Aplicación web)
  context?: string    // Contexto (e.g. Trabajo final)
  description: string // Descripción detallada
  highlights?: string[] // Puntos clave (bullets)
  stack: string[]     // Tecnologías usadas
  github?: string     // Link repo (opcional)
  demo?: string       // Link demo (opcional)
  emoji: string       // Emoji representativo
  gradient: string    // Gradiente CSS para el fallback visual
  status: 'wip' | 'done' | 'live'
  statusLabel: string // Texto legible del estado
}
```

## Directrices para el Contenido
- **Descripciones**: Deben ser profesionales pero apasionadas.
- **Highlights**: Máximo 4-5 puntos enfocados en logros técnicos o funcionalidades únicas.
- **Gradientes**: Deben ser `linear-gradient(135deg, color1, color2)`.
- **Status**: Usar `wip` para "En progreso", `done` para "Terminado" y `live` para proyectos publicados.

## Ubicación de los Cambios
El archivo principal a modificar es [app/components/Projects.vue](file:///c:/Users/Wolfbiert/Desktop/portfolio/app/components/Projects.vue).
