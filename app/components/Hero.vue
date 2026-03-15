<template>
  <section id="inicio" class="hero section">
    <div class="container hero__inner">
      <!-- Text content -->
      <div class="hero__content animate__animated animate__fadeInUp">
        <div class="hero__badge animate__animated animate__fadeIn">
          <span class="hero__badge-dot"></span>
          Disponible para proyectos
        </div>

        <h1 class="hero__title">
          Hola, soy
          <span class="hero__name">Agustín Massoni</span><br>
          <span class="hero__role">Full-Stack Developer</span>
        </h1>

        <p class="hero__description">
          Como Técnico Superior en Desarrollo de Software, creo que una buena arquitectura desde el inicio es ya el 70% del trabajo. 
          Me apasionan los sistemas complejos —especialmente los de los videojuegos— y aplico esa misma lógica en cada proyecto.
        </p>

        <div class="hero__cta">
          <a href="#proyectos" class="btn btn--primary btn--lg">
            Ver proyectos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contacto" class="btn btn--ghost btn--lg">
            Contactarme
          </a>
        </div>

        <!-- Social links -->
        <div class="hero__social">
          <a href="https://github.com/Wolfbiert" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/agustinmassoni" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Decorative blob / visual -->
      <div class="hero__visual animate__animated animate__fadeIn animate__delay-1s" aria-hidden="true">
        <div class="hero__avatar-ring">
          <div class="hero__avatar">
            <span>AM</span>
          </div>
        </div>
        <!-- Floating tech badges -->
        <div class="hero__float hero__float--1">Vue 3</div>
        <div class="hero__float hero__float--2">Nuxt 4</div>
        <div class="hero__float hero__float--3">Node.js</div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll" aria-hidden="true">
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero is purely presentational for now
</script>

<style scoped>
.hero {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px; /* offset for fixed navbar */
}

/* Background gradient blobs */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 70% 40%, color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 70%),
    radial-gradient(ellipse 40% 40% at 20% 70%, color-mix(in srgb, #a78bfa 10%, transparent), transparent 70%);
  pointer-events: none;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Badge */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: var(--space-2) var(--space-4);
  margin-bottom: var(--space-6);
  width: fit-content;
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px #22c55e;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Title */
.hero__title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.05;
  margin-bottom: var(--space-6);
}

.hero__name {
  background: linear-gradient(135deg, var(--color-accent), #a78bfa, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__role {
  color: var(--color-text-muted);
  font-weight: 400;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}

/* Description */
.hero__description {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
  max-width: 48ch;
}

/* CTA */
.hero__cta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-8);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  border-radius: var(--radius-full);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition:
    background-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out);
  text-decoration: none;
  font-family: var(--font-sans);
}

.btn--lg {
  padding: 0.75rem 1.75rem;
  font-size: var(--text-base);
}

.btn--primary {
  background-color: var(--color-accent);
  color: #fff;
}

.btn--primary:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px color-mix(in srgb, var(--color-accent) 35%, transparent);
  color: #fff;
}

.btn--ghost {
  background-color: transparent;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}

.btn--ghost:hover {
  background-color: var(--color-surface-alt);
  color: var(--color-text);
  transform: translateY(-2px);
}

/* Social */
.hero__social {
  display: flex;
  gap: var(--space-3);
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  transition:
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.social-link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background-color: var(--color-accent-light);
  transform: translateY(-2px);
}

/* Visual / Avatar */
.hero__visual {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero__avatar-ring {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, var(--color-accent), #a78bfa, #38bdf8);
  box-shadow: var(--shadow-lg);
}

.hero__avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-accent);
}

/* Floating badges */
.hero__float {
  position: absolute;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
  box-shadow: var(--shadow-md);
  animation: float 4s ease-in-out infinite;
}

.hero__float--1 { top: 15%; left: -5%; animation-delay: 0s; }
.hero__float--2 { bottom: 20%; right: -5%; animation-delay: 1.3s; }
.hero__float--3 { top: 40%; right: -12%; animation-delay: 0.7s; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}

.hero__scroll-line {
  width: 1.5px;
  height: 48px;
  background: linear-gradient(to bottom, var(--color-accent), transparent);
  animation: scroll-line 2s ease-in-out infinite;
}

@keyframes scroll-line {
  0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
  50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
  100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
}

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 768px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__badge {
    margin-inline: auto;
  }

  .hero__description {
    margin-inline: auto;
  }

  .hero__cta {
    justify-content: center;
  }

  .hero__social {
    justify-content: center;
  }

  .hero__visual {
    order: -1;
  }

  .hero__avatar-ring {
    width: 200px;
    height: 200px;
  }

  .hero__float--1,
  .hero__float--2,
  .hero__float--3 {
    display: none;
  }
}
</style>
