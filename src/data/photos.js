export const photoCredits = [
  {
    id: 'hero-remote',
    name: 'Brooke Cagle',
    profile: 'https://unsplash.com/@brookecagle',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/photos/5fNmWej4tAA',
  },
  {
    id: 'service-siti',
    name: 'Clem Onojeghuo',
    profile: 'https://unsplash.com/@clemono',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/photos/pRg5pkHSLM8',
  },
  {
    id: 'service-ecommerce',
    name: 'Blake Wisz',
    profile: 'https://unsplash.com/@blakewisz',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/photos/Xn5FbEM9564',
  },
  {
    id: 'service-app',
    name: 'Luke Chesser',
    profile: 'https://unsplash.com/@lukechesser',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/photos/JKUTrJ4vK00',
  },
  {
    id: 'service-software',
    name: 'Scott Graham',
    profile: 'https://unsplash.com/@homajob',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/photos/8eNQ6u7CNwM',
  },
  {
    id: 'work-dashboard',
    name: 'Carlos Muza',
    profile: 'https://unsplash.com/@kmuza',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/photos/klWUHRvPr1Y',
  },
  {
    id: 'work-booking',
    name: 'Ian Schneider',
    profile: 'https://unsplash.com/@goian',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/photos/33QUg6jXxFU',
  },
  {
    id: 'work-docs',
    name: 'Maarten van den Heuvel',
    profile: 'https://unsplash.com/@mvdheuvel',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/photos/8EzNkvLQosk',
  },
]

export const unsplashPhotoIds = {
  'hero-remote': 'photo-1522071820081-009f0129c71c',
  'service-siti': 'photo-1497215842964-222b430dc094',
  'service-ecommerce': 'photo-1556742049-0cfed4f6a45d',
  'service-app': 'photo-1551288049-bebda4e38f71',
  'service-software': 'photo-1454165804606-c3d57bc86b40',
  'work-dashboard': 'photo-1460925895917-afdab827c52f',
  'work-booking': 'photo-1600880292203-757bb62b4baf',
  'work-docs': 'photo-1450101499163-c8848c66ca85',
}

const creditsById = Object.fromEntries(photoCredits.map((p) => [p.id, p]))

export function getPhotoCredit(id) {
  return creditsById[id]
}
