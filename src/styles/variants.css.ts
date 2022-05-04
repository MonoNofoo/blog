import { createGlobalTheme, styleVariants } from '@vanilla-extract/css';

export const darkTheme = createGlobalTheme(':root', {
  color: {
    primary: '#80a8e0',
    primaryLight: '#a4bbdb',
    defaultFont: '#fafafa',
    grayFont: '#bbb',
    gray: '#aaa',
    embedBackColor: 'rgba(0, 0, 0, 0.4)',
  },
  fontSize: {
    default: '1.6rem',
  },
  gradient: {
    base: 'linear-gradient(-45deg, #090a12, #1a1d30)',
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
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    boxShadow: '0 30px 35px rgba(0,0,0,0.25)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
});
