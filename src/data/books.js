import rootsOfTheBanyan from '../assets/images/books/roots-of-the-banyan.webp'
import theLastMonsoonLetter from '../assets/images/books/the-last-monsoon-letter.webp'

// `cover` is the real book mockup image (saved in src/assets/images/books).
// Books without a `cover` fall back to an illustrated placeholder chosen by `scene`.
export const BOOKS = [
  { title: 'The Last Monsoon Letter', author: 'Meenakshi Raghavan', cover: theLastMonsoonLetter },
  { title: 'Roots of the Banyan', author: 'Karthik Subramaniam', cover: rootsOfTheBanyan },
  { title: 'Start Small, Grow Steady', author: 'Divya Narayanan', scene: 'sunset' },
  { title: 'Whispers on Misty Mountains', author: 'Divya Narayanan', scene: 'mountains' },
]
