import { style } from '@vanilla-extract/css';
import { darkGlass } from '@/styles/variants.css';
import { responsiveStyle } from '@/styles/mediaQuery';

export const articleList = style({
  margin: '16px 0 0',
  padding: '0',
  display: 'grid',

  gap: '24px 16px',
  justifyContent: 'center',
  ...responsiveStyle({
    mobile: { gridTemplateColumns: '1fr' },
    tablet: { gridTemplateColumns: 'repeat(2, 1fr)' },
    desktop: { gridTemplateColumns: 'repeat(3, 1fr)' },
  }),
});

export const profShowcase = style([
  darkGlass.dark,
  {
    padding: '16px 8px',
    ...responsiveStyle({
      tablet: { gridColumn: '1 / 3' },
    }),
  },
]);

export const articleListItem = style([
  darkGlass.dark,
  {
    padding: '16px 8px',
    listStyle: 'none',
  },
]);

export const title = style({
  margin: '16px 0 0',
  ...responsiveStyle({
    mobile: {
      fontSize: '1.8rem',
    },
    tablet: {
      fontSize: '1.8rem',
    },
    desktop: {
      fontSize: '2rem',
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
});

export const dateIcon = style({
  marginRight: '8px;',
});

export const date = style({
  fontSize: '1.2rem',
});
