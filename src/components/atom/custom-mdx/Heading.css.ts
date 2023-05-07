import { style } from '@vanilla-extract/css';

export const heading = style({
  marginBottom: 0,
  selectors: {
    '&:first-child': {
      marginTop: 0,
    },
  },
});
