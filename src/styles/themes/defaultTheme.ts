export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '600px',
  tabletM: '660px',
  tabletL: '768px',
  laptopS: '860px',
  laptopM: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
} as const;

export const defaultTheme = {
  white: '#FFF',

  'gray-100': '#FDECED',
  'gray-200': '#f5f8fa',
  'gray-300': '#d3e2e5',
  'gray-400': '#9db4bf',
  'gray-500': '#8FA7B2',

  'blue-700': '#0D3B66',
  'blue-600': '#114A80',
  'blue-500': '#205587',

  'yellow-500': '#F4D35E',
  'yellow-300': '#fce286',

  'red-100': '#fce8e8',
  'red-400': '#F15156',
  'red-500': '#E44449',
  'red-600': '#F75F64',

  'green-500': '#3CDC8C',
  'green-600': '#19b365',

  'orange-500': '#F27006',

  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptopS: `(max-width: ${size.laptopS})`,
    laptopM: `(max-width: ${size.laptopM})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
  },

  fontSize: {
    xs: '0.5rem',
    sm: '0.625rem',
    md: '0.75rem',
    sb: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
  },
} as const;
