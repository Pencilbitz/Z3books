import beginAgain from '../assets/images/books/begin-again.png'
import spaceToWork from '../assets/images/books/space-to-work.png'
import theLongestTalk from '../assets/images/books/the-longest-talk.png'
import theSwipeRightEffect from '../assets/images/books/the-swipe-right-effect.png'
import whenYouChooseToRise from '../assets/images/books/when-you-choose-to-rise.png'

// `cover` is the real book mockup image (saved in src/assets/images/books).
// Books without a `cover` fall back to an illustrated placeholder chosen by `scene`.
export const BOOKS = [
  {
    title: 'The Longest Talk',
    author: 'Avery Baines',
    insidePages: {
      left: {
        kicker: 'THE FIRST PAUSE',
        heading: 'It begins with listening',
        paragraphs: [
          'A meaningful conversation does not always start with perfect words. Sometimes it starts when one person makes room for another.',
          'In that quiet space, a pause can be an invitation, and an honest answer can become the beginning of trust.',
        ],
      },
      right: {
        kicker: 'A CLOSER CONNECTION',
        heading: 'Stay for the whole story',
        paragraphs: [
          'Listening is more than waiting for your turn. It is noticing what is said, what is felt, and what needs time.',
          'Closeness grows in ordinary moments: shared silences, patient questions, and the choice to keep showing up for each other.',
        ],
      },
    },
    cover: theLongestTalk,
    coverClip: 'polygon(4.8% 4.5%, 96.5% 4.5%, 96.5% 95.2%, 4.8% 95.2%)',
  },
  {
    title: 'Space to Work',
    author: 'Kat Romulo',
    insidePages: {
      left: {
        kicker: 'A SPACE OF YOUR OWN',
        heading: 'Make room for good work',
        paragraphs: [
          'A workspace can support your attention without demanding it. Start with the tools you use, and give each one a home.',
          'Clear a little space around the next task. A calmer surface can make it easier to see where to begin.',
        ],
      },
      right: {
        kicker: 'A STEADIER RHYTHM',
        heading: 'Build a rhythm that lasts',
        paragraphs: [
          'Light, comfort, and a simple routine shape how a workday feels. Adjust one thing at a time until the space serves you.',
          'Take a breath between tasks, reset what you can, and leave room for ideas to arrive without being forced.',
        ],
      },
    },
    cover: spaceToWork,
    coverClip: 'polygon(6.3% 3.8%, 95% 3.8%, 95% 93.2%, 6.3% 93.2%)',
  },
  {
    title: 'Begin Again',
    author: 'Jenny Lynne Morrison',
    insidePages: {
      left: {
        kicker: 'A FRESH PAGE',
        heading: 'Begin again, gently',
        paragraphs: [
          'Beginning again does not erase what came before. It lets you carry what you learned into a kinder next attempt.',
          'You do not need a perfect plan today. Choose one small step that feels possible, then let that be enough.',
        ],
      },
      right: {
        kicker: 'AT YOUR OWN PACE',
        heading: 'Keep moving forward',
        paragraphs: [
          'Progress can be quiet: a question asked, a boundary kept, or a day when you decide to try once more.',
          'Some steps will be easier than others. Rest when you need to, and return when you are ready.',
        ],
      },
    },
    cover: beginAgain,
    coverClip: 'polygon(7.5% 3.5%, 91% 3.5%, 91% 99%, 7.5% 99%)',
  },
  {
    title: 'The Swipe Right Effect',
    author: 'C.K. Collins',
    insidePages: {
      left: {
        kicker: 'WHEN YOU FEEL STUCK',
        heading: 'Make space for a new move',
        paragraphs: [
          'Feeling stuck can make every option look final. Give yourself room to pause and see the choices more clearly.',
          'You are not required to solve everything at once. Name the smallest decision that could change your direction.',
        ],
      },
      right: {
        kicker: 'CHOOSE WITH INTENTION',
        heading: 'Let curiosity lead',
        paragraphs: [
          'A new connection, idea, or opportunity begins with curiosity. Stay open, but let your own values guide the next step.',
          'Notice what gives you energy and what pulls you away from your goals. Use that knowledge to keep moving forward.',
        ],
      },
    },
    cover: theSwipeRightEffect,
    coverClip: 'polygon(4.2% 4.1%, 97% 4.1%, 97% 87.2%, 4.2% 87.2%)',
  },
  {
    title: 'When You Choose to Rise',
    author: 'Marina C. Hale',
    insidePages: {
      left: {
        kicker: 'A GENTLER BEGINNING',
        heading: 'Strength starts small',
        paragraphs: [
          'Hard seasons can change the way you see yourself. Healing begins by meeting the present moment with patience.',
          'Give yourself credit for what it takes to keep going. Rest and asking for support are part of strength, too.',
        ],
      },
      right: {
        kicker: 'ONE STEP AT A TIME',
        heading: 'Rise in your own way',
        paragraphs: [
          'There is no single pace for rebuilding. Let your progress be yours, shaped by the support and hope you find along the way.',
          'When you are ready, take one step toward what matters. Each choice can help you trust yourself again.',
        ],
      },
    },
    cover: whenYouChooseToRise,
    coverClip: 'polygon(4.5% 2.5%, 97% 2.5%, 97% 98%, 4.5% 98%)',
  },
]
