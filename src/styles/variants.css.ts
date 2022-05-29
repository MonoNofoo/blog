import { createGlobalTheme, styleVariants } from '@vanilla-extract/css';

export const darkTheme = createGlobalTheme(':root', {
  color: {
    primary: '#32f8fd',
    primaryLight: '#7dfbfe',
    defaultFont: '#fafafa',
    grayFont: '#bbb',
    gray: '#aaa',
    embedBackColor: 'rgba(0, 0, 0, 0.4)',
  },
  fontSize: {
    default: '1.6rem',
  },
  gradient: {
    base: 'linear-gradient(to right bottom, #1a1d30, #171928, #131521, #0f101a, #090a12)',
    primary:
      'linear-gradient(to right bottom, #32f8fd, #2ac9cd, #219c9f, #187274, #0f4a4b)',
  },
  shadow: {
    darkLarge: '0 30px 35px rgba(0, 0, 0, 0.25)',
    light: '0 0 3px rgba(255, 255, 255, 0.3)',
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
    middle: {
      mobile: '1.8rem',
      tablet: '1.8rem',
      desktop: '2rem',
    },
  },
});

export const darkGlass = styleVariants({
  dark: {
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    boxShadow: darkTheme.shadow.darkLarge,
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
});
