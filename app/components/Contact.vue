<template>
  <section id="contacto" class="section contacto">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Contacto</h2>
        <p class="section-subtitle">¿Tienes un proyecto en mente o solo quieres saludar? Mi bandeja de entrada siempre está abierta.</p>
      </div>

      <div class="contact-grid">
        <!-- Direct Contact Cards -->
        <div class="contact-info">
          <div class="info-card">
            <Icon name="lucide:mail" class="info-card__icon" />
            <div class="info-card__content">
              <span class="info-card__label">Email</span>
              <a href="mailto:agustinmassoni10@gmail.com" class="info-card__link">agustinmassoni10@gmail.com</a>
            </div>
          </div>

          <div class="info-card info-card--whatsapp">
            <Icon name="logos:whatsapp-icon" class="info-card__icon" />
            <div class="info-card__content">
              <span class="info-card__label">WhatsApp</span>
              <a href="https://wa.me/5493425464539" target="_blank" class="info-card__link">Enviar mensaje directo</a>
            </div>
          </div>

          <div class="info-card">
            <Icon name="lucide:linkedin" class="info-card__icon" />
            <div class="info-card__content">
              <span class="info-card__label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/agustinmassoni" target="_blank" class="info-card__link">linkedin.com/in/agustinmassoni</a>
            </div>
          </div>

          <div class="info-card">
            <Icon name="lucide:github" class="info-card__icon" />
            <div class="info-card__content">
              <span class="info-card__label">GitHub</span>
              <a href="https://github.com/Wolfbiert" target="_blank" class="info-card__link">github.com/Wolfbiert</a>
            </div>
          </div>

          <div class="availability-status">
            <span class="status-indicator"></span>
            <span class="status-text">Disponible para nuevos proyectos</span>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-wrapper">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name" class="form-label">Nombre</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required 
                class="form-input" 
                placeholder="Tu nombre"
              />
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required 
                class="form-input" 
                placeholder="tu@email.com"
              />
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Mensaje</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required 
                class="form-input form-textarea" 
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>

            <!-- Honeypot field for anti-spam -->
            <div style="display:none">
              <input type="text" name="_gotcha" v-model="form.gotcha" />
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span>{{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}</span>
              <Icon v-if="!isSubmitting" name="lucide:send" size="18" />
              <Icon v-else name="lucide:loader-2" size="18" class="animate-spin" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
  gotcha: ''
})

const isSubmitting = ref(false)

const success = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Reemplaza 'TU_ID_DE_FORMSPREE' con el ID que te darán al crear el formulario en Formspree
    const FORMSPREE_ID = 'mojkneqp' 
    
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _gotcha: form.gotcha
      })
    })

    if (response.ok) {
      alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.')
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      throw new Error('Error al enviar el mensaje')
    }
  } catch (error) {
    alert('Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo o contáctame por LinkedIn/WhatsApp.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contacto {
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
  max-width: 600px;
}

/* ── Grid ─────────────────────────────────────────────────── */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--space-12);
  align-items: start;
}

/* ── Info Cards ───────────────────────────────────────────── */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.info-card {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: transform var(--duration-fast) var(--ease-out);
}

.info-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
}

.info-card__icon {
  width: 24px;
  height: 24px;
  color: var(--color-accent);
}

.info-card__content {
  display: flex;
  flex-direction: column;
}

.info-card__label {
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  font-weight: 600;
}

.info-card__link {
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.info-card__link:hover {
  color: var(--color-accent);
}

.availability-status {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: color-mix(in srgb, var(--color-accent) 5%, transparent);
  border-radius: var(--radius-md);
  align-self: flex-start;
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 10px #22c55e;
  animation: pulse 2s infinite;
}

.status-text {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

/* ── Form ─────────────────────────────────────────────────── */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding: var(--space-8);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
}

.form-input {
  padding: var(--space-4);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-family: inherit;
  font-size: var(--text-base);
  transition: all var(--duration-fast) var(--ease-out);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-accent) 10%, transparent);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--color-accent);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: 700;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.submit-btn:hover:not(:disabled) {
  background: color-mix(in srgb, var(--color-accent) 80%, black);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .contact-info {
    order: 2;
  }

  .contact-form-wrapper {
    order: 1;
  }
}
</style>
