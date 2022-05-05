import { style } from '@vanilla-extract/css';
import { darkTheme } from '@/styles/variants.css';

export const heading = style({
  marginBottom: 0,
  selectors: {
    '&:first-child': {
      marginTop: 0,
    },
  },
});

export const text = style({
  marginBottom: 0,
});

export const quote = style({
  marginLeft: '1em',
  paddingLeft: '8px',
  borderLeft: `5px solid ${darkTheme.color.gray}`,
  color: darkTheme.color.grayFont,
});

export const blockCode = style({
  backdropFilter: 'blur(10px)',
  backgroundColor: darkTheme.color.embedBackColor,
  borderRadius: '10px',
  padding: '8px 16px',
  boxShadow: 'none',
});

export const inlineCode = style({
  selectors: {
    [`${text} > &`]: {
      margin: '0 4px',
      display: 'inline-block',
      padding: '0 8px',
      background: darkTheme.color.embedBackColor,
      color: darkTheme.color.grayFont,
    },
  },
});
