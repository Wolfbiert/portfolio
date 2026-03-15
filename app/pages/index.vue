<template>
  <main>
    <Navbar />

    <!-- Hero Section -->
    <Hero />

    <!-- Sobre mí -->
    <AboutMe />

    <!-- Proyectos -->
    <Projects />

    <!-- Stack Tecnológico -->
    <TechStack />

    <!-- Contacto -->
    <Contact />
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Portfolio | Agustín Massoni',
  ogTitle: 'Agustín Massoni - Técnico Superior en Desarrollo de Software',
  description: 'Explora mi trayectoria como Técnico Superior en Desarrollo de Software: proyectos innovadores, stack tecnológico moderno y soluciones digitales eficientes.',
  ogDescription: 'Desarrollador de Software enfocado en la calidad y la innovación. Mira mis proyectos y expertise.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  definePerson({
    name: 'Agustín Massoni',
    image: '/avatar.webp', // Placeholder/Avatar si existiera
    jobTitle: 'Técnico Superior en Desarrollo de Software',
    url: 'http://localhost:3000', // Actualizar a URL real al desplegar
    sameAs: [
      'https://github.com/Wolfbiert',
      'https://www.linkedin.com/in/agustinmassoni'
    ]
  }),
  defineWebSite({
    name: 'Portfolio de Agustín Massoni',
  }),
  defineWebPage()
])
</script>

<style scoped>
.section-title {
  font-size: clamp(var(--text-2xl), 4vw, var(--text-4xl));
  margin-bottom: var(--space-12);
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

.sobre-mi  { background: var(--color-bg); }
.proyectos { background: var(--color-surface-alt); }
.stack     { background: var(--color-bg); }
.contacto  { background: var(--color-surface-alt); }
</style>
