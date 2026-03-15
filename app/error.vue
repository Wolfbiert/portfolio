<template>
  <div class="error-page">
    <div class="error-content">
      <img src="/error-bg.png" alt="Bonfire" class="error-image" />
      <div class="error-text">
        <p class="error-message">Algo salió mal, descansa un momento junto a la hoguera y vuelve a intentarlo.</p>
        <div class="bonfire-container">
          <NuxtLink to="/" class="btn-bonfire">
            <span class="icon">🔥</span>
            HOGUERA ENCENDIDA
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Clear the error and redirect home
const props = defineProps({
  error: Object
})

useSeoMeta({
  title: 'Página no encontrada | Agustín Massoni',
  description: 'Parece que te has perdido en el abismo. Descansa un momento.'
})
</script>

<style scoped>
.error-page {
  height: 100vh;
  width: 100%;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: var(--font-display), serif;
  overflow: hidden;
  position: relative;
}

.error-content {
  text-align: center;
  max-width: 800px;
  width: 90%;
}

.error-image {
  width: 100%;
  max-width: 600px;
  border-radius: var(--radius-lg);
  box-shadow: 0 0 50px rgba(255, 68, 0, 0.2);
  margin-bottom: var(--space-8);
  opacity: 0.8;
  animation: flicker 3s infinite alternate;
}

@keyframes flicker {
  0% { filter: brightness(1) drop-shadow(0 0 10px rgba(255,68,0,0.1)); }
  100% { filter: brightness(1.2) drop-shadow(0 0 30px rgba(255,68,0,0.3)); }
}

.error-title {
  font-size: clamp(3rem, 10vw, 5rem);
  color: #c41e15;
  letter-spacing: 0.2em;
  margin-bottom: var(--space-4);
  text-shadow: 0 0 20px rgba(196, 30, 21, 0.5);
  font-weight: 900;
}

.error-message {
  font-size: var(--text-lg);
  color: #ccc;
  margin-bottom: var(--space-12);
  font-style: italic;
}

.btn-bonfire {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-8);
  background: transparent;
  border: 1px solid #c41e15;
  color: #c41e15;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.1em;
  transition: all 0.5s ease;
  border-radius: var(--radius-sm);
}

.btn-bonfire:hover {
  background: #c41e15;
  color: #fff;
  box-shadow: 0 0 30px rgba(196, 30, 21, 0.8);
  transform: scale(1.05);
}

.icon {
  filter: grayscale(0) contrast(1.2);
}
</style>
