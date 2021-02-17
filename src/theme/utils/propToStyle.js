import { css } from 'styled-components';
import { breakpointsMedia } from './breakpointsMedia';

export function propToStyle(propName) {
    // closure
    return function(props) {
        const propValue = props[propName]; // String ou objeto

        if (typeof propValue === 'string' || typeof propValue === 'number' ) {
            return {
                [propName]: propValue
            }
        }

        if (typeof propValue === 'object') {
            return breakpointsMedia({
                xs: {
                    [propName]: propValue.xs
                },
                sm: {
                    [propName]: propValue.sm
                },
                md: {
                    [propName]: propValue.md
                },
                lg: {
                    [propName]: propValue.lg
                },
                xl: {
                    [propName]: propValue.xl
                },
            })
        }

    }
}