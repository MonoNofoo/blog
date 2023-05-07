import { style } from '@vanilla-extract/css';
import { darkTheme } from '@/styles/variants.css';
import { text } from '@/components/atom/custom-mdx/Text.css';

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
