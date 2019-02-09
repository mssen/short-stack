export const theme = {
  main: '#d81d7d',
  mainDark: '#a11164',
  grayLight: '#e4e7eb',
  borderRadius: 2,
  fontSizes: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
};

export const th = (property) => (props) => props.theme[property];
