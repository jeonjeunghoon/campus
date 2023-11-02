const colors = {
  primary: '#00D473',

  background: '#F5F5F5',
  contentWrapper: '#ffffff',
  text: '#ffffff',
  infoText: '#aaaaaa',
} as const;

export type Colors = typeof theme.colors;

export const theme = {
  colors,
};
