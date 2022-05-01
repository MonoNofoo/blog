import { createGlobalTheme, styleVariants } from '@vanilla-extract/css';

export const darkTheme = createGlobalTheme(':root', {
  color: {
    defaultFont: '#fafafa',
  },
  fontSize: {
    default: '1.6rem',
  },
  gradient: {
    base: 'linear-gradient(-45deg, #000428, #004e92)',
  },
});

export const sizeTheme = createGlobalTheme(':root', {
  maxWidth: '1024px',
  fontSize: {
    default: {
      mobile: '1.4rem',
      tablet: '1.6rem',
      desktop: '1.6rem',
    },
    big: {
      mobile: '2.4rem',
      tablet: '2.4rem',
      desktop: '3.2rem',
    },
  },
});

export const darkGlass = styleVariants({
  dark: {
    backdropFilter: 'blur(5px)',
    backgroundColor: ' rgba(0,191,255, 0.075)',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    borderTop: '1px rgba(255,255,255,0.4) solid',
    borderLeft: '1px rgba(255,255,255,0.4) solid',
    borderBottom: '1px rgba(40,40,40,0.35) solid',
    borderRight: '1px rgba(40,40,40,0.35) solid',
  },
});
