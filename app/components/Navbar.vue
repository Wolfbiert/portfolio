<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar__inner">
      <!-- Logo / Brand -->
      <NuxtLink to="/" class="navbar__logo">
        <span class="navbar__logo-text">Agustín M.</span>
      </NuxtLink>

      <!-- Nav links -->
      <nav class="navbar__nav" aria-label="Navegación principal">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="navbar__link"
          active-class="navbar__link--active"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="navbar__actions">
        <ClientOnly>
          <button
            class="btn-icon"
            :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
            @click="toggleTheme()"
          >
            <span v-if="isDark" aria-hidden="true">☀️</span>
            <span v-else aria-hidden="true">🌙</span>
          </button>
        </ClientOnly>

        <!-- CTA -->
        <a href="#contacto" class="btn btn--primary">Contacto</a>
      </div>

      <!-- Mobile hamburger -->
      <button 
        class="navbar__hamburger btn-icon" 
        :class="{ 'navbar__hamburger--active': isMenuOpen }"
        aria-label="Menú"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu Sidebar (Moved outside navbar__inner) -->
    <Transition name="slide">
      <div v-if="isMenuOpen" class="mobile-menu">
        <nav class="mobile-menu__nav">
          <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            class="mobile-menu__link"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
          <a href="#contacto" class="mobile-menu__link mobile-menu__link--cta" @click="closeMenu">
            Contacto
          </a>
        </nav>
      </div>
    </Transition>

    <!-- Backdrop -->
    <Transition name="fade">
      <div v-if="isMenuOpen" class="mobile-menu-backdrop" @click="closeMenu"></div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Prevent scroll when menu is open
watch(isMenuOpen, (val) => {
  if (val) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = ''
})

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#stack', label: 'Stack' },
]

// Scroll shadow effect
const isScrolled = ref(false)
const onScroll = () => { isScrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: transparent;
  transition:
    background-color var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out),
    border-color var(--duration-base) var(--ease-out);
  border-bottom: 1px solid transparent;
}

.navbar--scrolled {
  background-color: color-mix(in srgb, var(--color-surface) 80%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-sm);
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  height: 64px;
}

.navbar__logo {
  flex-shrink: 0;
  text-decoration: none;
}

.navbar__logo-text {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent), #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  margin-left: auto;
}

.navbar__link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  transition: color var(--duration-fast) var(--ease-out);
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--color-text);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition:
    background-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
  text-decoration: none;
}

.btn--primary {
  background-color: var(--color-accent);
  color: #fff;
}

.btn--primary:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--color-accent) 40%, transparent);
  color: #fff;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
  cursor: pointer;
  font-size: var(--text-base);
  transition:
    background-color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.btn-icon:hover {
  background-color: var(--color-surface-alt);
  transform: scale(1.05);
}

/* Mobile hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: transparent;
  border: 1px solid var(--color-border);
}

.navbar__hamburger span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--duration-fast) var(--ease-out);
}

.navbar__hamburger--active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar__hamburger--active span:nth-child(2) {
  opacity: 0;
}

.navbar__hamburger--active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Mobile Menu ──────────────────────────────────────────── */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: var(--color-surface);
  z-index: 1000;
  padding: var(--space-20) var(--space-8) var(--space-8);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.mobile-menu__nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.mobile-menu__link {
  font-size: var(--text-xl);
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
  padding: var(--space-4);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast) var(--ease-out);
}

.mobile-menu__link:hover {
  background: var(--color-surface-alt);
  color: var(--color-accent);
  padding-left: var(--space-6);
}

.mobile-menu__link--cta {
  background: var(--color-accent);
  color: #fff;
  text-align: center;
  margin-top: var(--space-8);
}

.mobile-menu__link--cta:hover {
  background: var(--color-accent-hover);
  color: #fff;
}

.mobile-menu-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 999;
}

/* Transitions */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .navbar__nav {
    display: none;
  }

  .navbar__actions .btn--primary {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
    margin-left: auto;
    z-index: 1001; /* Above mobile menu */
  }

  .navbar__actions {
    margin-left: auto; /* Push actions to right in mobile too */
  }
}
</style>
