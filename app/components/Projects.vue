<template>
  <section id="proyectos" class="section proyectos">
    <div class="container">

      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title">Proyectos</h2>
        <p class="section-subtitle">Cosas que construí, rompí y volví a construir mejor</p>
      </div>

      <!-- Projects list -->
      <div class="projects-list">
        <article
          v-for="(project, i) in projects"
          :key="project.slug"
          class="project-card"
          :class="{ 'project-card--reverse': i % 2 !== 0 }"
        >
          <!-- Visual side -->
          <div class="project-card__visual">
            <ProjectCarousel
              :slug="project.slug"
              :project-name="project.name"
              :fallback-gradient="project.gradient"
              :fallback-emoji="project.emoji"
            />
            <!-- Status badge -->
            <div class="project-card__status" :class="`project-card__status--${project.status}`">
              <span class="project-card__status-dot"></span>
              {{ project.statusLabel }}
            </div>
          </div>

          <!-- Content side -->
          <div class="project-card__content">
            <div class="project-card__meta">
              <span class="project-card__type">{{ project.type }}</span>
              <span v-if="project.context" class="project-card__context">{{ project.context }}</span>
            </div>

            <h3 class="project-card__title">{{ project.name }}</h3>
            <p class="project-card__description">{{ project.description }}</p>

            <!-- Highlights -->
            <ul v-if="project.highlights" class="project-card__highlights">
              <li v-for="h in project.highlights" :key="h" class="project-card__highlight-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {{ h }}
              </li>
            </ul>

            <!-- Tech stack -->
            <div class="project-card__stack">
              <span v-for="tech in project.stack" :key="tech" class="tech-badge">{{ tech }}</span>
            </div>

            <!-- Links -->
            <div class="project-card__links">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link project-link--github"
                :aria-label="`Ver código de ${project.name} en GitHub`"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                Ver en GitHub
              </a>
              <span v-if="!project.github" class="project-link project-link--private">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Repositorio privado
              </span>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link project-link--demo"
                :aria-label="`Ver demo de ${project.name}`"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Ver demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  slug: string
  name: string
  type: string
  context?: string
  description: string
  highlights?: string[]
  stack: string[]
  github?: string
  demo?: string
  emoji: string
  gradient: string
  status: 'wip' | 'done' | 'live'
  statusLabel: string
}

const projects: Project[] = [
  {
    slug: 'ia-challenge-game',
    name: 'IA Challenge Game',
    type: 'Aplicación de escritorio',
    context: 'Trabajo de cursada',
    description:
      'El jugador se enfrenta a un oponente virtual con personalidad simulada en una serie de minijuegos clásicos reinventados. El sistema reacciona en función del progreso del jugador y puede intervenir con modificadores en tiempo real, haciendo cada partida impredecible.',
    highlights: [
      'Oponente virtual simulado con diálogos e intervenciones dinámicas según tu progreso',
      '3 minijuegos: Piedra/Papel/Tijera, Simón Dice y Adivina el Número',
      'Dificultad evolutiva: mecánicas que cambian según la habilidad del jugador',
      'Estética Cyberpunk con glassmorphism y animaciones GSAP fluidas',
    ],
    stack: ['Vue.js 3', 'Electron.js', 'GSAP', 'Howler.js', 'CSS Glassmorphism'],
    github: 'https://github.com/Wolfbiert/my-ia-challenge-game',
    emoji: '🎮',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #0f2a4a 100%)',
    status: 'done',
    statusLabel: 'Terminado',
  },
  {
    slug: 'dom-polski',
    name: 'Dom Polski Santa Fe',
    type: 'Plataforma Integral de Comunidad',
    context: undefined,
    description:
      'Ecosistema digital integral para la preservación y difusión de la cultura polaca. Combina un sitio institucional público con un Campus Virtual para la gestión de talleres educativos y un panel administrativo robusto para el control de la comunidad y contenidos.',
    highlights: [
      'Sistema de roles jerárquicos (Público, Socio, Profe, Admin) con contenido dinámico y áreas privadas.',
      'Campus Virtual con gestión de inscripciones a talleres y descarga segura de material de estudio.',
      'Back-office completo para administración de socios, noticias y moderación de registros en tiempo real.',
      'Sitio institucional moderno con buscador avanzado de novedades y formularios de contacto dinámicos.',
    ],
    stack: ['Vue.js', 'Vite', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Cloudinary', 'Vercel'],
    emoji: '🇵🇱',
    gradient: 'linear-gradient(135deg, #7f0000 0%, #c0392b 40%, #e8e8e8 100%)',
    status: 'wip',
    statusLabel: 'En progreso',
  },
  {
    slug: 'coderoom',
    name: 'CodeRoom',
    type: 'Plataforma web',
    context: 'Trabajo Final de Cursada',
    description:
      'Editor colaborativo ultraligero y LAN-first diseñado para el aula. Permite que docentes y estudiantes editen el mismo código en tiempo real sin internet, sin cuentas y sin instalación. El docente tiene control total: permisos granulares, bloqueos, visibilidad de cursores y ejecución de código integrada directamente en el navegador.',
    highlights: [
      'LAN-first: funciona sin internet, el flujo principal no depende de la nube',
      'Sincronización sin conflictos mediante CRDT (Yjs + Hocuspocus) — tecnología de Figma y Notion',
      'Ejecución de JavaScript en el navegador con fallback automático a Piston API',
      'Control pedagógico total: roles, permisos granulares por alumno y bloqueos en tiempo real',
      'PWA con soporte offline e IndexedDB para persistencia local',
    ],
    stack: ['Vue.js 3', 'Nuxt', 'Tiptap', 'Yjs', 'Hocuspocus', 'WebSockets', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'PWA'],
    emoji: '💻',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 50%, #5b21b6 100%)',
    status: 'wip',
    statusLabel: 'En progreso',
  },
]
</script>

<style scoped>
.proyectos {
  background: var(--color-surface-alt);
}

.section-header {
  margin-bottom: var(--space-12);
}

.section-title {
  font-size: clamp(var(--text-2xl), 4vw, var(--text-4xl));
  margin-bottom: var(--space-2);
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40%;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent), transparent);
  border-radius: 2px;
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  margin-top: var(--space-4);
}

/* ── Projects list ────────────────────────────────────────── */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

/* ── Project card ─────────────────────────────────────────── */
.project-card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--space-12);
  align-items: center;
}

.project-card--reverse {
  direction: rtl;
}

.project-card--reverse > * {
  direction: ltr;
}

/* Visual */
.project-card__visual {
  position: relative;
}

.project-card__status {
  position: absolute;
  top: -10px;
  right: 16px;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  font-weight: 600;
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-3);
}

.project-card__status--wip {
  background: color-mix(in srgb, #f59e0b 15%, var(--color-surface));
  color: #f59e0b;
  border: 1px solid color-mix(in srgb, #f59e0b 30%, transparent);
}

.project-card__status--done {
  background: color-mix(in srgb, #22c55e 15%, var(--color-surface));
  color: #22c55e;
  border: 1px solid color-mix(in srgb, #22c55e 30%, transparent);
}

.project-card__status--live {
  background: color-mix(in srgb, var(--color-accent) 15%, var(--color-surface));
  color: var(--color-accent);
  border: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent);
}

.project-card__status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: blink 2s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* Content */
.project-card__meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
  flex-wrap: wrap;
}

.project-card__type {
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent);
}

.project-card__context {
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-text-subtle);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: 2px 10px;
}

.project-card__title {
  font-size: clamp(var(--text-2xl), 3vw, var(--text-3xl));
  margin-bottom: var(--space-4);
}

.project-card__description {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-6);
  max-width: 100%;
}

/* Highlights */
.project-card__highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.project-card__highlight-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.5;
}

.project-card__highlight-item svg {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
}

/* Tech stack */
.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

.tech-badge {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-text-muted);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-3);
  transition:
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out);
}

.tech-badge:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: var(--color-accent-light);
}

/* Links */
.project-card__links {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 600;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  border: 1.5px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.project-link--github {
  background: var(--color-text);
  color: var(--color-bg);
}

.project-link--github:hover {
  background: var(--color-accent);
  color: #fff;
  transform: translateY(-1px);
}

.project-link--demo {
  border-color: var(--color-border);
  color: var(--color-text-muted);
}

.project-link--demo:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  transform: translateY(-1px);
}

.project-link--private {
  font-size: var(--text-xs);
  color: var(--color-text-subtle);
  gap: var(--space-2);
  padding: 0;
}

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 900px) {
  .project-card,
  .project-card--reverse {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: var(--space-8);
  }
}
</style>
