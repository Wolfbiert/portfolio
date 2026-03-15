<template>
  <section id="stack" class="section tech-stack">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Stack Tecnológico</h2>
        <p class="section-subtitle">Las herramientas y tecnologías que utilizo para dar vida a los proyectos</p>
      </div>

      <div class="stack-grid">
        <div v-for="category in categories" :key="category.name" class="stack-category">
          <div class="category-header">
            <Icon :name="category.icon" size="24" class="category-icon" />
            <h3 class="category-name">{{ category.name }}</h3>
          </div>

          <div class="tech-list">
            <div v-for="tech in category.items" :key="tech.name" class="tech-item">
              <div class="tech-item__icon-wrapper">
                <Icon :name="tech.icon" class="tech-item__icon" />
              </div>
              <div class="tech-item__info">
                <span class="tech-item__name">{{ tech.name }}</span>
                <span class="tech-item__tag">{{ tech.tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    name: 'Frontend',
    icon: 'lucide:monitor',
    items: [
      { name: 'Nuxt 3/4', icon: 'logos:nuxt-icon', tag: 'Framework' },
      { name: 'Vue.js', icon: 'logos:vue', tag: 'Core' },
      { name: 'TypeScript', icon: 'logos:typescript-icon', tag: 'Lenguaje' },
      { name: 'Vanilla CSS', icon: 'logos:css-3', tag: 'Estilos' },
      { name: 'GSAP', icon: 'simple-icons:gsap', tag: 'Animación' },
      { name: 'Electron.js', icon: 'logos:electron', tag: 'Desktop' },
    ]
  },
  {
    name: 'Backend & Data',
    icon: 'lucide:database',
    items: [
      { name: 'Node.js', icon: 'logos:nodejs-icon', tag: 'Runtime' },
      { name: 'Express', icon: 'simple-icons:express', tag: 'Framework' },
      { name: 'PostgreSQL', icon: 'logos:postgresql', tag: 'Database' },
      { name: 'Prisma ORM', icon: 'logos:prisma', tag: 'ORM' },
      { name: 'Supabase', icon: 'logos:supabase-icon', tag: 'BaaS' },
      { name: 'Cloudinary', icon: 'logos:cloudinary-icon', tag: 'Media' },
    ]
  },
  {
    name: 'Tools & Ecosystem',
    icon: 'lucide:settings',
    items: [
      { name: 'Vite', icon: 'logos:vitejs', tag: 'Build Tool' },
      { name: 'WebSockets', icon: 'lucide:zap', tag: 'Real-time' },
      { name: 'Docker', icon: 'logos:docker-icon', tag: 'Containers' },
      { name: 'Git / GitHub', icon: 'logos:git-icon', tag: 'Versionado' },
      { name: 'Vercel', icon: 'logos:vercel-icon', tag: 'Deploy' },
    ]
  }
]
</script>

<style scoped>
.tech-stack {
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
.stack-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.stack-category {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.category-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

.category-icon {
  color: var(--color-accent);
}

.category-name {
  font-size: var(--text-lg);
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: 0.02em;
}

/* ── Tech Item ─────────────────────────────────────────────── */
.tech-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.tech-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-4);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast) var(--ease-out);
}

.tech-item:hover {
  transform: translateX(4px);
  border-color: color-mix(in srgb, var(--color-accent) 40%, var(--color-border));
  background: color-mix(in srgb, var(--color-accent) 4%, var(--color-surface));
}

.tech-item__icon-wrapper {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.tech-item__icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.tech-item__info {
  display: flex;
  flex-direction: column;
}

.tech-item__name {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
}

.tech-item__tag {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  font-weight: 500;
}

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 1024px) {
  .stack-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stack-grid {
    grid-template-columns: 1fr;
  }
}
</style>
