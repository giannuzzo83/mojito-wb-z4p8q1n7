import { services } from '../data/services.js'
import { works } from '../data/works.js'
import { processSteps } from '../data/process.js'
import { marqueeItems } from '../data/marquee.js'
import { renderResponsiveImage } from './media.js'

export function renderMarquee() {
  const root = document.querySelector('[data-marquee]')
  if (!root) return

  const items = marqueeItems
    .map((item) => `<span class="marquee-item">${item}</span>`)
    .join('<span class="marquee-dot" aria-hidden="true">·</span>')

  root.innerHTML = `
    <div class="marquee-track">
      <div class="marquee-group">${items}</div>
      <div class="marquee-group" aria-hidden="true">${items}</div>
    </div>
  `
}

export function renderServices() {
  const root = document.querySelector('[data-services]')
  if (!root) return

  root.innerHTML = services
    .map(
      (service, index) => `
    <article class="service-item reveal" data-reveal style="--reveal-delay: ${index * 80}ms" aria-labelledby="service-${service.id}">
      <span class="service-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
      <div class="service-body">
        <h3 id="service-${service.id}">${service.title}</h3>
        <p>${service.description}</p>
        <ul class="tag-list">
          ${service.highlights.map((h) => `<li>${h}</li>`).join('')}
        </ul>
      </div>
      ${
        service.image
          ? `<div class="service-media">${renderResponsiveImage({
              base: service.image.base,
              widths: [480, 800],
              alt: service.image.alt,
              sizes: '(min-width: 900px) 220px, 40vw',
            })}</div>`
          : ''
      }
    </article>
  `,
    )
    .join('')
}

export function renderWorks() {
  const root = document.querySelector('[data-works]')
  if (!root) return

  root.innerHTML = works
    .map(
      (work, index) => `
    <article class="work-item reveal" data-reveal style="--reveal-delay: ${index * 100}ms" aria-labelledby="work-${work.id}">
      ${
        work.image
          ? `<div class="work-media">${renderResponsiveImage({
              base: work.image.base,
              widths: [480, 800],
              alt: work.image.alt,
              sizes: '(min-width: 900px) 560px, 92vw',
            })}</div>`
          : ''
      }
      <div class="work-item-head">
        <span class="work-badge">${work.badge}</span>
        <span class="work-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 id="work-${work.id}" class="work-title">${work.title}</h3>
      <p class="work-subtitle">${work.subtitle}</p>
      <p class="work-context">${work.context}</p>
      <p class="work-stack"><span class="sr-only">Stack: </span>${work.stack}</p>
      <ul class="work-outcomes">
        ${work.outcomes.map((o) => `<li>${o}</li>`).join('')}
      </ul>
    </article>
  `,
    )
    .join('')
}

export function renderProcess() {
  const root = document.querySelector('[data-process]')
  if (!root) return

  root.innerHTML = processSteps
    .map(
      (step, index) => `
    <li class="process-item reveal" data-reveal style="--reveal-delay: ${index * 90}ms">
      <span class="process-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>${step.title}</h3>
        <p>${step.body}</p>
      </div>
    </li>
  `,
    )
    .join('')
}
