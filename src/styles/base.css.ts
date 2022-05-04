import { globalStyle } from '@vanilla-extract/css';
import { darkTheme, sizeTheme } from '@/styles/variants.css';
import { responsiveStyle } from '@/styles/mediaQuery';

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('body', {
  color: darkTheme.color.defaultFont,

  minHeight: '100vh',
  fontFamily:
    '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
  ...responsiveStyle({
    mobile: { fontSize: sizeTheme.fontSize.default.mobile },
    tablet: { fontSize: sizeTheme.fontSize.default.tablet },
  }),
});

globalStyle('a', {
  color: darkTheme.color.primary,
});

globalStyle('a:hover', {
  color: darkTheme.color.primaryLight,
});
