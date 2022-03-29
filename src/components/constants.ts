export const Colors = {
  white: '#FFFFFF',
  whiteSmoke: '#f5f5f5',
  blue: '#336699',
  pink: '#FF0461',
  gray: '#888888',
} as const;

export const FontSize = {
  title: '5rem',
  h1: '2rem',
  h2: '1.75rem',
  h3: '1.5rem',
  h4: '1.25rem',
  h5: '1rem',
  p: '0.75rem',
} as const;

export const ExperienceTabs = [
  { id: 1, value: 'ALL' },
  { id: 2, value: 'アルバイト' },
  { id: 3, value: 'インターン' },
] as const;

export const DeviceSizes = {
  ipad: 768,
  smallestIphone: 320,
  largestIphone: 476,
} as const;

export const AppearFromTopVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
} as const;

export const AppearFromLeftVariants = {
  initial: {
    opacity: 0,
    x: -222,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
} as const;

export const IncreaseOpacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
} as const;

export const DelayedIncreaseOpacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 1.2,
    },
  },
} as const;
