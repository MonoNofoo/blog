import { style } from '@vanilla-extract/css';
import { darkGlass, darkTheme } from '@/styles/variants.css';
import { responsiveStyle } from '@/styles/mediaQuery';

export const outer = style({
  background: darkTheme.gradient.base,
  height: '100vh',
  position: 'relative',
  overflowY: 'auto',
});

export const decorationBig = style({
  position: 'fixed',
  top: 0,
  left: 0,
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#ff1497',
  borderRadius: '50%',
  boxShadow: '10px 20px 10px rgba(0, 0, 0, 0.3)',
  ...responsiveStyle({
    mobile: {
      width: '300px',
      height: '300px',
    },
    tablet: {
      width: '500px',
      height: '500px',
    },
    desktop: {
      width: '800px',
      height: '800px',
    },
  }),
});

export const decorationMiddle = style({
  position: 'fixed',
  backgroundColor: '#fc6e22',
  borderRadius: '50%',
  right: '30%',
  boxShadow: '10px 20px 10px rgba(0, 0, 0, 0.3)',
  ...responsiveStyle({
    mobile: {
      width: '150px',
      height: '150px',
      bottom: '-40px',
    },
    tablet: {
      width: '300px',
      height: '300px',
      bottom: '-100px',
    },
    desktop: {
      width: '400px',
      height: '400px',
      bottom: '-200px',
    },
  }),
});

export const decorationSmall = style({
  position: 'fixed',
  width: '15%',
  backgroundColor: '#c24cf6',
  borderRadius: '50%',
  bottom: '40%',
  boxShadow: '10px 20px 10px rgba(0, 0, 0, 0.3)',
  ...responsiveStyle({
    mobile: {
      height: '80px',
      width: '80px',
      right: '18px',
    },
    tablet: {
      height: '150px',
      width: '150px',
      right: '30px',
    },
    desktop: {
      height: '200px',
      width: '200px',
      right: '50px',
    },
  }),
});

export const header = style([
  darkGlass.dark,
  {
    height: '50px',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 1,
  },
]);

export const main = style({
  maxWidth: '1000px',
  minWidth: '320px',
  width: '100%',
  margin: '0 auto',
  padding: '0 16px 80px',
});

export const siteName = style({
  fontWeight: 'bold',
  color: darkTheme.color.defaultFont,
  textDecoration: 'none',
  ...responsiveStyle({
    mobile: { fontSize: '1.8rem' },
    tablet: { fontSize: '2rem' },
  }),
});

export const footer = style([
  darkGlass.dark,
  {
    padding: '8px 0',
    display: 'flex',
    justifyContent: 'center',
  },
]);
