import { style } from '@vanilla-extract/css';
import { darkGlass } from '@/styles/variants.css';

export const showcase = style([
  darkGlass.dark,
  {
    marginTop: '24px',
    padding: '16px 8px 32px',
  },
]);

export const profile = style([
  darkGlass.dark,
  {
    marginTop: '40px',
    padding: '16px 8px',
  },
]);

export const dateBox = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '8px',
});

export const icon = style({
  marginRight: '8px',
  selectors: {
    '&:not(:first-child)': {
      marginLeft: '16px',
    },
  },
});

export const tagBox = style({
  marginTop: '16px',
});
