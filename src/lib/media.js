import { getPhotoCredit, unsplashPhotoIds } from '../data/photos.js'

function imageUrl(base, width) {
  const photoId = unsplashPhotoIds[base]
  if (photoId) {
    return `https://images.unsplash.com/${photoId}?w=${width}&q=76&fm=webp&fit=crop&auto=format`
  }
  return `./images/${base}-${width}.webp`
}

export function renderResponsiveImage({
  base,
  widths,
  alt,
  sizes,
  priority = false,
  showCaption = false,
}) {
  const sorted = [...widths].sort((a, b) => a - b)
  const fallbackW = sorted[sorted.length - 1]
  const src = imageUrl(base, fallbackW)
  const srcset = sorted.map((w) => `${imageUrl(base, w)} ${w}w`).join(', ')
  const credit = getPhotoCredit(base)
  const aspect = base.startsWith('hero') ? '5 / 4' : '16 / 10'
  const caption =
    showCaption && credit
      ? `<figcaption class="media-credit">Foto: <a href="${credit.profile}" rel="noopener noreferrer" target="_blank">${credit.name}</a> / <a href="${credit.sourceUrl}" rel="noopener noreferrer" target="_blank">${credit.source}</a></figcaption>`
      : ''

  return `
    <figure class="media-frame" style="--media-aspect: ${aspect}">
      <div class="media-frame__inner">
        <img
          src="${src}"
          srcset="${srcset}"
          sizes="${sizes}"
          alt="${alt}"
          width="${fallbackW}"
          height="${Math.round(fallbackW * (base.startsWith('hero') ? 0.8 : 0.625))}"
          loading="${priority ? 'eager' : 'lazy'}"
          decoding="async"
        />
      </div>
      ${caption}
    </figure>
  `
}
