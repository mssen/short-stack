export const theme = {
  // Main color
  main: '#d81d7d',
  mainDark: '#a11164',

  // Grays
  offWhite: '#f5f7fA',
  gray100: '#e4e7eb',
  gray200: '#cbd2d9',
  gray300: '#9aa5b1',
  gray400: '#7b8794',
  gray500: '#616e7c',
  gray600: '#52606d',
  gray700: '#3e4c59',
  gray800: '#323f4b',
  gray900: '#1f2933',

  borderRadius: 2,
  fontSizes: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],

  desktop: 992,
  tablet: 768,
  phone: 675,
};

export const th = (property) => (props) => props.theme[property];
