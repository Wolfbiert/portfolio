<template>
  <section id="sobre-mi" class="section sobre-mi">
    <div class="container">

      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title">Sobre mí</h2>
        <p class="section-subtitle">Quién soy, de dónde vengo y hacia dónde voy</p>
      </div>

      <!-- Grid layout -->
      <div class="about-grid">

        <!-- Bio card -->
        <div class="about-card about-card--bio">
          <div class="about-card__icon" aria-hidden="true">
            <Icon name="lucide:layout-template" size="32" />
          </div>
          <h3 class="about-card__title">Perfil Profesional</h3>
          <p class="about-card__text">
            Desarrollador Full-Stack con una fuerte mentalidad analítica. Mi enfoque no es solo escribir código, sino construir
            <strong>sistemas escalables y mantenibles</strong>. Considero que una arquitectura sólida es el cimiento de cualquier
            proyecto exitoso.
          </p>
          <p class="about-card__text">
            Actualmente estoy en la fase final de mi formación como <strong>Técnico Superior en Desarrollo de Software</strong>,
            enfocándome en integrar la lógica de sistemas complejos con herramientas de 
            <strong>IA generativa para maximizar la productividad</strong> y la calidad del desarrollo.
          </p>
          <p class="about-card__text">
            Mi experiencia previa en diagnóstico y mantenimiento de hardware me dio una base sólida para entender el software
            desde sus capas más bajas, lo que me permite tener una visión 360° del ciclo de vida de un sistema.
          </p>
        </div>

        <!-- Intereses -->
        <div class="about-card about-card--interests">
          <div class="about-card__icon" aria-hidden="true">
            <Icon name="lucide:sparkles" size="32" />
          </div>
          <h3 class="about-card__title">Intereses</h3>
          <ul class="interest-list">
            <li v-for="interest in interests" :key="interest.label" class="interest-item">
              <Icon :name="interest.icon" size="18" class="interest-item__icon" />
              <span>{{ interest.label }}</span>
            </li>
          </ul>
        </div>

        <!-- Cimientos / Hardware -->
        <div class="about-card about-card--extras">
          <div class="about-card__icon" aria-hidden="true">
            <Icon name="lucide:cpu" size="32" />
          </div>
          <h3 class="about-card__title">Cimientos de IT</h3>
          <p class="about-card__text about-card__text--sm">
            Mi formación técnica se apoya en el entendimiento profundo de la infraestructura física del software.
          </p>
          <ul class="extra-list">
            <li v-for="extra in extras" :key="extra" class="extra-item">
              <Icon name="lucide:check-circle-2" size="14" class="extra-item__check" />
              {{ extra }}
            </li>
          </ul>
        </div>

        <!-- Formación / Ejes clave -->
        <div class="about-card about-card--study">
          <div class="about-card__icon" aria-hidden="true">
            <Icon name="lucide:graduation-cap" size="32" />
          </div>
          <h3 class="about-card__title">Ingeniería & Formación</h3>
          <div class="study-info">
            <p class="study-info__degree">Téc. Sup. en Desarrollo de Software</p>
            <p class="study-info__status">
              <span class="status-badge">
                <span class="status-badge__dot"></span>
                Ultima materia — Título en trámite
              </span>
            </p>
          </div>

          <!-- Subjects replaced by Core Pillars -->
          <div class="pillars">
            <div v-for="pillar in pillars" :key="pillar.title" class="pillar-item">
              <div class="pillar-item__header">
                <Icon :name="pillar.icon" size="16" class="pillar-item__icon" />
                <h4 class="pillar-item__title">{{ pillar.title }}</h4>
              </div>
              <p class="pillar-item__desc">{{ pillar.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const interests = [
  { 
    icon: 'lucide:binary', 
    label: 'Arquitectura de Sistemas' 
  },
  { 
    icon: 'lucide:bot', 
    label: 'IA como herramienta de desarrollo' 
  },
  { 
    icon: 'lucide:code-2', 
    label: 'Construcción de Software' 
  },
  { 
    icon: 'lucide:mic', 
    label: 'Podcasts de Tecnología' 
  },
  { 
    icon: 'lucide:wrench', 
    label: 'Mecánica de Sistemas (Hardware)' 
  },
]

const extras = [
  'Diagnóstico profundo de Hardware',
  'Administración básica de Servidores',
  'Mantenimiento preventivo de Sistemas',
  'Arquitectura de estaciones de trabajo',
]

const pillars = [
  {
    icon: 'lucide:layers',
    title: 'Arquitectura & Metodología',
    desc: 'Bases sólidas en ingeniería de software, patrones de diseño y gestión ágil de proyectos.',
  },
  {
    icon: 'lucide:database',
    title: 'Desarrollo & Datos',
    desc: 'Estructuras de datos avanzadas y gestión profesional de bases de datos relacionales.',
  },
  {
    icon: 'lucide:scroll-text',
    title: 'Ingeniería Social & Ética',
    desc: 'Gestión profesional enfocada en la responsabilidad, derecho laboral y resolución de problemas.',
  },
]
</script>

<style scoped>
.sobre-mi {
  background: var(--color-bg);
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

/* ── Grid ─────────────────────────────────────────────────── */
.about-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.about-card--bio {
  grid-column: 1 / 2;
}

/* ── Card base ────────────────────────────────────────────── */
.about-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  transition:
    border-color var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.about-card:hover {
  border-color: color-mix(in srgb, var(--color-accent) 40%, var(--color-border));
  box-shadow: var(--shadow-md);
}

.about-card__icon {
  font-size: 2rem;
  margin-bottom: var(--space-4);
  display: block;
}

.about-card__title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-4);
  font-family: var(--font-display);
}

.about-card__text {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
  max-width: 100%;
  line-height: 1.7;
}

.about-card__text:last-child {
  margin-bottom: 0;
}

.about-card__text strong {
  color: var(--color-text);
  font-weight: 600;
}

/* ── Interests ────────────────────────────────────────────── */
.interest-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.interest-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  background: var(--color-surface-alt);
  transition: background-color var(--duration-fast) var(--ease-out);
}

.interest-item:hover {
  background: var(--color-accent-light);
  color: var(--color-text);
}

.interest-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  flex-shrink: 0;
}

/* ── Study ────────────────────────────────────────────────── */
.study-info {
  margin-bottom: var(--space-6);
}

.study-info__degree {
  font-weight: 600;
  color: var(--color-text);
  font-size: var(--text-base);
  margin-bottom: var(--space-2);
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  font-weight: 500;
  color: #22c55e;
  background: color-mix(in srgb, #22c55e 12%, transparent);
  border: 1px solid color-mix(in srgb, #22c55e 30%, transparent);
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-3);
}

.status-badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  flex-shrink: 0;
}

/* Pillars */
.pillars {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.pillar-item {
  padding-left: var(--space-4);
  border-left: 3px solid var(--color-accent);
}

.pillar-item__header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-1);
}

.pillar-item__icon {
  color: var(--color-accent);
  opacity: 0.8;
}

.pillar-item__title {
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-text);
}

.pillar-item__desc {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  line-height: 1.5;
}

.about-card__text--sm {
  font-size: var(--text-sm);
  margin-bottom: var(--space-6);
}

.interest-item__icon {
  color: var(--color-accent);
  flex-shrink: 0;
}

/* ── Extras ───────────────────────────────────────────────── */
.extra-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.extra-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.extra-item__check {
  color: var(--color-accent);
  flex-shrink: 0;
}

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-card--bio {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>
