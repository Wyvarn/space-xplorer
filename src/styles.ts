/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { injectGlobal } from 'emotion';

export const unit = 8;
export const colors = {
  primary: '#220a82',
  secondary: '#14cbc4',
  accent: '#e535ab',
  background: '#f7f8fa',
  grey: '#d8d9e0',
  text: '#343c5a',
  textSecondary: '#747790',
};

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default () =>
  injectGlobal({
    // @ts-ignore
    [['html', 'body']]: {
      height: '100%',
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Source Sans Pro', sans-serif",
      backgroundColor: colors.background,
      color: colors.text,
    },
    '#root': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
    },
    '*': {
      boxSizing: 'border-box',
    },
    // @ts-ignore
    [['h1', 'h2', 'h3', 'h4', 'h5', 'h6']]: {
      margin: 0,
      fontWeight: 600,
    },
    h1: {
      fontSize: 48,
      lineHeight: 1,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 36,
    },
    h5: {
      fontSize: 16,
      textTransform: 'uppercase',
      letterSpacing: 4,
    },
  });
