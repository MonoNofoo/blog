import { style } from '@vanilla-extract/css';

export const summary = style({
  display: 'block',
});

export const contentBox = style({
  transition: 'height 300ms ease-out',
  overflow: 'hidden',
  selectors: {
    '&[data-status="opened"]': {
      height: 'auto',
      overflow: 'visible',
    },
    '&[data-status="opening"]': {
      height: 'auto',
    },
    '&[data-status="closing"]': {
      height: '0',
    },
    '&[data-status="closed"]': {
      height: '0',
      visibility: 'hidden',
    },
  },
});

export const box = style({
  padding: '50px',
  backgroundColor: '#333',
});
