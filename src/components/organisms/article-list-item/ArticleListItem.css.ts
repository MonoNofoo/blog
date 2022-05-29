import { style } from '@vanilla-extract/css';
import { darkGlass, sizeTheme } from '@/styles/variants.css';
import { responsiveStyle } from '@/styles/mediaQuery';

export const articleListItem = style([
  darkGlass.dark,
  {
    padding: '16px 8px',
    display: 'grid',
  },
]);

export const title = style({
  margin: '16px 0 0',
  ...responsiveStyle({
    mobile: {
      fontSize: sizeTheme.fontSize.middle.mobile,
    },
    tablet: {
      fontSize: sizeTheme.fontSize.middle.tablet,
    },
    desktop: {
      fontSize: sizeTheme.fontSize.middle.desktop,
    },
  }),
});

export const description = style({
  marginTop: '8px',
});

export const detailLink = style({
  display: 'inline-block',
  marginTop: '16px',
});

export const dateShowcase = style({
  marginTop: '8px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignSelf: 'end',
});

export const dateIcon = style({
  marginRight: '8px;',
});

export const date = style({
  fontSize: '1.2rem',
});
