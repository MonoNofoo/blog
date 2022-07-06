import { style } from '@vanilla-extract/css';

export const summary = style({
  display: 'block',
});

export const contentBox = style({
  transition: ['height .3s', 'margin .3s', 'padding .3s'],
});

export const box = style({
  padding: '24px',
  backgroundColor: '#333',
});
