import theme from '../../theme';
import { css } from 'styled-components';

const { breakpoints } = theme;

export function breakpointsMedia(cssByBreakpoints) {
    const breakpointsNames = Object.keys(cssByBreakpoints);
    
    return breakpointsNames.map((breakpointsName) => {
        return css`
            @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
                ${cssByBreakpoints[breakpointsName]}
            }
        `
    });
}