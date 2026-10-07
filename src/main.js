import './styles/main.css'
import { applySiteConfig } from './lib/apply-config.js'
import {
  renderMarquee,
  renderProcess,
  renderServices,
  renderWorks,
} from './lib/render-sections.js'
function initHeader() {
  const header = document.querySelector('[data-header]')
  const toggle = document.querySelector('[data-nav-toggle]')
  const nav = document.querySelector('[data-nav]')

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    document.body.classList.toggle('nav-open', open)
  })

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open')
      toggle?.setAttribute('aria-expanded', 'false')
      document.body.classList.remove('nav-open')
    })
  })

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      nav?.classList.contains('is-open')
    ) {
      nav.classList.remove('is-open')
      toggle?.setAttribute('aria-expanded', 'false')
      document.body.classList.remove('nav-open')
    }
  })

  const onScroll = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 24)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

function initReveal() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const targets = document.querySelectorAll('[data-reveal]')

  if (reduced) {
    targets.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  )

  const revealIfVisible = (el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      el.classList.add('is-visible')
      observer.unobserve(el)
      return true
    }
    return false
  }

  targets.forEach((el) => {
    if (!revealIfVisible(el)) observer.observe(el)
  })
}

function initIceBackdrop() {
  const container = document.querySelector('[data-shader-backdrop]')
  if (!container) return
  void import('./hero-ice.js').then(({ initHeroIce }) => initHeroIce(container))
}

applySiteConfig()
initIceBackdrop()
renderMarquee()
renderServices()
renderWorks()
renderProcess()
initHeader()
initReveal()
