import { style } from '@vanilla-extract/css';
import { darkGlass, sizeTheme } from '@/styles/variants.css';
import { responsiveStyle } from '@/styles/mediaQuery';

export const articleList = style({
  margin: '16px 0 0',
  padding: '0',
  display: 'grid',
  gap: '16px',
});

export const articleListItem = style([
  darkGlass.dark,
  {
    padding: '16px 8px',
    listStyle: 'none',
  },
]);

export const title = style({
  margin: '0',
  ...responsiveStyle({
    mobile: {
      fontSize: sizeTheme.fontSize.big.mobile,
    },
    tablet: {
      fontSize: sizeTheme.fontSize.big.tablet,
    },
    desktop: {
      fontSize: sizeTheme.fontSize.big.desktop,
    },
  }),
});
