import { style } from '@vanilla-extract/css';
import { darkGlass } from '@/styles/variants.css';
import { responsiveStyle } from '@/styles/mediaQuery';

export const articleList = style({
  margin: '24px 0 0',
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
