import { style } from '@vanilla-extract/css';
import { darkGlass } from '@/styles/variants.css';

export const showcase = style([
  darkGlass.dark,
  {
    marginTop: '24px',
    padding: '16px 8px 32px',
  },
]);
