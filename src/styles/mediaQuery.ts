import { Properties, SimplePseudos } from 'csstype';

export const breakpoints = {
  mobile: 0,
  tablet: 600,
  desktop: 1025,
};

export const minWidthQuery = (size: number) =>
  `screen and (min-width: ${size}px)`;

const makeMediaQuery = (type: keyof typeof breakpoints) => {
  return minWidthQuery(breakpoints[type]);
};

type CSSProps = Properties<string | number> & {
  [P in SimplePseudos]?: Properties<string | number>;
};

/**
 * レスポンシブの CSS スタイル記述用
 * @param mobile
 * @param tablet
 * @param desktop
 */
export const responsiveStyle = ({
  mobile,
  tablet,
  desktop,
}: {
  mobile?: CSSProps;
  tablet?: CSSProps;
  desktop?: CSSProps;
}) => {
  const hasMediaQueries =
    typeof tablet !== 'undefined' || typeof desktop !== 'undefined';

  return {
    ...(mobile ?? {}),
    ...(hasMediaQueries
      ? {
          '@media': {
            ...(tablet ? { [makeMediaQuery('tablet')]: tablet } : {}),
            ...(desktop ? { [makeMediaQuery('desktop')]: desktop } : {}),
          },
        }
      : {}),
  };
};
