<template>
  <div class="carousel-wrapper">
    <!-- Loading -->
    <div v-if="pending" class="carousel-state">
      <div class="carousel-shimmer" />
    </div>

    <!-- No images → gradient fallback -->
    <div
      v-else-if="!images.length"
      class="carousel-state carousel-fallback"
      :style="{ background: fallbackGradient }"
      aria-hidden="true"
    >
      <span class="carousel-fallback__emoji">{{ fallbackEmoji }}</span>
      <span class="carousel-fallback__label">{{ projectName }}</span>
    </div>

    <!-- Single image -->
    <div v-else-if="images.length === 1" class="carousel-state" @click="openLightbox(0)">
      <div class="carousel-bg-blur" :style="{ background: fallbackGradient }" />
      <NuxtImg
        :src="images[0]"
        :alt="`Captura de ${projectName}`"
        class="carousel-img"
        loading="lazy"
        format="webp"
        quality="80"
      />
      <div class="carousel-zoom-hint">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
      </div>
    </div>

    <!-- Carousel -->
    <div
      v-else
      class="carousel"
      role="region"
      :aria-label="`Imágenes de ${projectName}`"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
    >
      <!-- Track -->
      <div class="carousel__track" :style="{ transform: `translateX(-${current * 100}%)` }">
        <div 
          v-for="(src, i) in images" 
          :key="src" 
          class="carousel__slide"
          @click="openLightbox(i)"
        >
          <div class="carousel-bg-blur" :style="{ background: fallbackGradient }" />
          <NuxtImg
            :src="src"
            :alt="`${projectName} — imagen ${i + 1} de ${images.length}`"
            class="carousel-img"
            loading="lazy"
            format="webp"
            quality="80"
          />
        </div>
      </div>

      <!-- Prev button -->
      <Transition name="btn-fade">
        <button
          v-show="hovered && current > 0"
          class="carousel__btn carousel__btn--prev"
          aria-label="Imagen anterior"
          @click.stop="prev"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      </Transition>

      <!-- Next button -->
      <Transition name="btn-fade">
        <button
          v-show="hovered && current < images.length - 1"
          class="carousel__btn carousel__btn--next"
          aria-label="Imagen siguiente"
          @click.stop="next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </Transition>

      <!-- Counter -->
      <div class="carousel__counter" aria-live="polite">
        {{ current + 1 }}&thinsp;/&thinsp;{{ images.length }}
      </div>

      <!-- Dots -->
      <div class="carousel__dots" role="tablist">
        <button
          v-for="(_, i) in images"
          :key="i"
          class="carousel__dot"
          :class="{ 'carousel__dot--active': i === current }"
          :aria-label="`Imagen ${i + 1}`"
          :aria-selected="i === current"
          role="tab"
          @click.stop="current = i"
        />
      </div>

      <div class="carousel-zoom-hint">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showLightbox" class="lightbox" @click="closeLightbox">
          <button class="lightbox__close" @click="closeLightbox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          
          <div class="lightbox__content" @click.stop>
            <Transition name="lightbox-fade">
              <NuxtImg 
                :key="lightboxIndex"
                :src="images[lightboxIndex]" 
                :alt="projectName" 
                class="lightbox__img" 
                format="webp" 
              />
            </Transition>
          </div>

          <div v-if="images.length > 1" class="lightbox__nav">
             <button class="lightbox__btn" @click.stop="prevLightbox" :disabled="lightboxIndex === 0">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
             </button>
             <span class="lightbox__counter">{{ lightboxIndex + 1 }} / {{ images.length }}</span>
             <button class="lightbox__btn" @click.stop="nextLightbox" :disabled="lightboxIndex === images.length - 1">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
             </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  slug: string
  projectName: string
  fallbackGradient: string
  fallbackEmoji: string
}>()

const { data, pending } = useFetch<{ images: string[] }>(
  `/api/project-images/${props.slug}`,
  { key: `project-imgs-${props.slug}`, lazy: true }
)

const images = computed(() => data.value?.images ?? [])
const current = ref(0)
const hovered = ref(false)

// Lightbox logic
const showLightbox = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index: number) {
  lightboxIndex.value = index
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  showLightbox.value = false
  document.body.style.overflow = ''
}

function prevLightbox() { if (lightboxIndex.value > 0) lightboxIndex.value-- }
function nextLightbox() { if (lightboxIndex.value < images.value.length - 1) lightboxIndex.value++ }

function prev() { if (current.value > 0) current.value-- }
function next() { if (current.value < images.value.length - 1) current.value++ }
</script>

<style scoped>
/* ── Container ────────────────────────────────────────────── */
.carousel-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  background: var(--color-surface);
  position: relative;
}

/* ── States ───────────────────────────────────────────────── */
.carousel-state {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Shimmer */
.carousel-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    var(--color-surface-alt) 0%,
    var(--color-border) 50%,
    var(--color-surface-alt) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Fallback gradient */
.carousel-fallback {
  flex-direction: column;
  gap: var(--space-4);
}

.carousel-fallback__emoji {
  font-size: 3.5rem;
  filter: drop-shadow(0 4px 16px rgba(255,255,255,0.25));
}

.carousel-fallback__label {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  color: rgba(255,255,255,0.9);
}

/* ── Image (single & carousel) ────────────────────────────── */
.carousel-img {
  width: 100%;
  height: 100%;
  /* contain = visualización completa sin recortes */
  object-fit: contain;
  /* Padding de seguridad para que el redondeado del wrapper no corte logos */
  padding: var(--space-4);
  position: relative;
  z-index: 1;
  display: block;
  transition: transform var(--duration-base) var(--ease-out);
}

.carousel-state:hover .carousel-img,
.carousel__slide:hover .carousel-img {
  transform: scale(1.02);
}

.carousel-bg-blur {
  position: absolute;
  inset: 0;
  opacity: 0.15;
  filter: blur(40px);
  z-index: 0;
}

.carousel-zoom-hint {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(10, 10, 20, 0.82); /* Más oscuro para contraste */
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 21;
}

.carousel-wrapper:hover .carousel-zoom-hint {
  opacity: 1;
  transform: scale(1);
}

/* ── Carousel ─────────────────────────────────────────────── */
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: zoom-in;
}

.carousel-state {
  cursor: zoom-in;
}

.carousel__track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel__slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  position: relative;
}

/* ── Arrows ───────────────────────────────────────────────── */
.carousel__btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 22;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1.5px solid rgba(255,255,255,0.18);
  background: rgba(10, 10, 20, 0.82); /* Más oscuro para contraste */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
  cursor: pointer;
  transition: all 150ms ease;
}

.carousel__btn:hover {
  background: rgba(10, 10, 20, 0.82);
  border-color: rgba(255,255,255,0.35);
  transform: translateY(-50%) scale(1.08);
}

.carousel__btn--prev { left: 14px; }
.carousel__btn--next { right: 14px; }

/* ── Lightbox ─────────────────────────────────────────────── */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(5, 5, 10, 0.95);
  backdrop-filter: blur(12px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-8);
  cursor: zoom-out;
}

.lightbox__close {
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lightbox__close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.lightbox__content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__img {
  width: 100%;
  height: 100%;
  max-width: 95vw;
  max-height: 85vh;
  object-fit: contain;
  box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  border-radius: var(--radius-sm);
  /* Dimensiones mínimas para evitar colapso del contenedor flex */
  min-width: 200px;
  min-height: 200px;
  pointer-events: auto;
}

.lightbox__nav {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: var(--space-6);
  background: rgba(10, 10, 20, 0.85); /* Más oscuro y opaco para contraste */
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.lightbox__btn {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: var(--space-2);
  opacity: 0.85; /* Más visible */
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.lightbox__btn:hover:not(:disabled) {
  opacity: 1;
  transform: scale(1.1);
}

.lightbox__btn:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}

.lightbox__counter {
  color: rgba(255, 255, 255, 0.6);
  font-size: var(--text-sm);
  font-weight: 600;
  min-width: 60px;
  text-align: center;
}

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.btn-fade-enter-active, .btn-fade-leave-active { transition: all 180ms ease; }
.btn-fade-enter-from, .btn-fade-leave-to { opacity: 0; transform: translateY(-50%) scale(0.88); }

.lightbox-fade-enter-active, .lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-fade-enter-from, .lightbox-fade-leave-to {
  opacity: 0;
}

/* Evitar saltos de layout cuando hay dos imágenes en el DOM (durante el crossfade) */
.lightbox-fade-leave-active {
  position: absolute;
}

/* ── Counter & Dots ────────────────────────────────────────── */
.carousel__counter {
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background: rgba(10,10,20,0.55);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  padding: 3px 10px;
  z-index: 21;
}

.carousel__dots {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 21;
}

.carousel__dot {
  height: 7px;
  width: 7px;
  border-radius: 4px;
  border: none;
  background: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel__dot--active {
  width: 22px;
  background: #fff;
}
</style>
