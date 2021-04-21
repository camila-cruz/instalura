import { css } from 'styled-components';
import { light as theme } from '..';

const { breakpoints } = theme;

// eslint-disable-next-line import/prefer-default-export
export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);

  return breakpointsNames.map((breakpointsName) => css`
    @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
      ${cssByBreakpoints[breakpointsName]}
    }
  `);
}
