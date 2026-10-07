/** Cubo di ghiaccio 3D (Three.js) — più leggero del backdrop WebGPU a schermo intero. */
export async function initHeroIce(container) {
  if (!container) return null

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    container.classList.add('shader-backdrop--static')
    return null
  }

  const { initHeroIceScene } = await import('./lib/hero-ice-scene.js')
  const dispose = initHeroIceScene(container)
  container.classList.add('shader-backdrop--ice')
  document.body.classList.add('has-ice-backdrop')

  return dispose
}
