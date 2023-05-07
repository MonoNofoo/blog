import { style } from '@vanilla-extract/css';
import { darkTheme } from '@/styles/variants.css';

export const blockCode = style({
  backdropFilter: 'blur(10px)',
  backgroundColor: darkTheme.color.embedBackColor,
  borderRadius: '10px',
  padding: '8px 16px',
  boxShadow: 'none',
});
