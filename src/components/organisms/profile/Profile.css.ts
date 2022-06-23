import { style } from '@vanilla-extract/css';

export const profile = style({
  display: 'grid',
  gridTemplateColumns: '100px 1fr',
  gap: '8px',
  alignItems: 'start',
});

export const profImage = style({
  width: '100px',
  borderRadius: '50%',
});

export const name = style({
  margin: 0,
  fontWeight: 'bold',
  fontSize: '2rem',
});

export const twitterLink = style({
  marginLeft: '8px',
  fontSize: '2.4rem',
});

export const introduction = style({
  marginTop: '4px',
});
