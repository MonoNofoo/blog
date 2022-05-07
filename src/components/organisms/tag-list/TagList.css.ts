import { style } from '@vanilla-extract/css';
import { darkGlass, darkTheme } from '@/styles/variants.css';

export const tagList = style({
  margin: 0,
  paddingLeft: 0,
  listStyle: 'none',
});

export const tag = style({
  display: 'inline-block',
  selectors: {
    '&:not(:first-child)': {
      marginLeft: '8px',
    },
  },
});

export const link = style([
  darkGlass.dark,
  {
    padding: '4px 8px',
    display: 'inline-block',
    borderRadius: '8px',
    color: darkTheme.color.defaultFont,
    fontSize: '1.2rem',
    selectors: {
      '&:not(:first-child)': {
        marginLeft: '8px',
      },
      '&:hover': {
        color: darkTheme.color.defaultFont,
      },
    },
  },
]);

export const icon = style({
  marginRight: '8px',
  fontSize: '1.6rem',
});
