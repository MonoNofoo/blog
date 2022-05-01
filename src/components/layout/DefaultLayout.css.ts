import { style } from '@vanilla-extract/css';
import { darkGlass, darkTheme } from '@/styles/variants.css';
import { responsiveStyle } from '@/styles/mediaQuery';

export const outer = style({
  background: darkTheme.gradient.base,
  height: '100vh',
  overflowY: 'auto',
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

export const main = style({});

export const siteName = style({
  fontWeight: 'bold',
  color: darkTheme.color.defaultFont,
  textDecoration: 'none',
  ...responsiveStyle({
    mobile: { fontSize: '1.8rem' },
    tablet: { fontSize: '2rem' },
  }),
});
