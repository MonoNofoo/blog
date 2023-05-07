import { style } from '@vanilla-extract/css';
import { darkTheme } from '@/styles/variants.css';

export const quote = style({
  marginLeft: '1em',
  paddingLeft: '8px',
  borderLeft: `5px solid ${darkTheme.color.gray}`,
  color: darkTheme.color.grayFont,
});
