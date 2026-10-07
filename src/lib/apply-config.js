import { siteConfig } from '../config.js'
import { photoCredits } from '../data/photos.js'

function photoCreditsHtml() {
  const unique = photoCredits.filter(
    (p, i, arr) => arr.findIndex((x) => x.name === p.name && x.profile === p.profile) === i,
  )
  const links = unique
    .map(
      (p) =>
        `<a href="${p.profile}" rel="noopener noreferrer" target="_blank">${p.name}</a>`,
    )
    .join(' · ')
  return `Foto stock su <a href="https://unsplash.com/license" rel="noopener noreferrer" target="_blank">Unsplash</a>: ${links}`
}

export function applySiteConfig() {
  document.querySelectorAll('[data-config]').forEach((el) => {
    const key = el.getAttribute('data-config')
    const value = siteConfig[key]
    if (value) el.textContent = value
  })

  document.querySelectorAll('[data-config-href="email"]').forEach((el) => {
    el.href = `mailto:${siteConfig.email}`
  })

  const mailCta = document.querySelector('[data-mail-cta]')
  if (mailCta) {
    const subject = encodeURIComponent(`Progetto — ${siteConfig.brand}`)
    mailCta.href = `mailto:${siteConfig.email}?subject=${subject}`
  }

  document.title = `${siteConfig.brand} — ${siteConfig.role}`

  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) {
    metaDesc.content = `${siteConfig.brand}: siti, e-commerce, app web e software custom. ${siteConfig.remoteLabel} da ${siteConfig.city}.`
  }

  const social = document.querySelector('[data-social]')
  if (social) {
    const items = [
      { key: 'linkedin', label: 'LinkedIn' },
      { key: 'github', label: 'GitHub' },
    ].filter(({ key }) => siteConfig.links[key])
    if (items.length) {
      social.hidden = false
      social.innerHTML = items
        .map(
          ({ key, label }) =>
            `<a href="${siteConfig.links[key]}" rel="noopener noreferrer" target="_blank">${label}</a>`,
        )
        .join('')
    }
  }

  const year = document.querySelector('[data-year]')
  if (year) year.textContent = String(new Date().getFullYear())

  const credits = document.querySelector('[data-photo-credits]')
  if (credits) credits.innerHTML = photoCreditsHtml()
}
