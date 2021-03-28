/* eslint-disable consistent-return */
import { breakpointsMedia } from '../breakpointsMedia';

export function propToStyle(propName) {
  // closure
  // eslint-disable-next-line func-names
  return function (props) { // Props do componente que chama essa função
    const propValue = props[propName]; // String ou objeto

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      // return breakpointsMedia({
      //   xs: {
      //     [propName]: propValue.xs,
      //   },
      //   sm: {
      //     [propName]: propValue.sm,
      //   },
      //   md: {
      //     [propName]: propValue.md,
      //   },
      //   lg: {
      //     [propName]: propValue.lg,
      //   },
      //   xl: {
      //     [propName]: propValue.xl,
      //   },
      // });
      return breakpointsMedia({
        ...(propValue.xs && {
          xs: {
            [propName]: propValue.xs,
          },
        }),
        ...(propValue.sm && {
          sm: {
            [propName]: propValue.sm,
          },
        }),
        ...(propValue.md && {
          md: {
            [propName]: propValue.md,
          },
        }),
        ...(propValue.lg && {
          lg: {
            [propName]: propValue.lg,
          },
        }),
        ...(propValue.xl && {
          xl: {
            [propName]: propValue.xl,
          },
        }),
      });
    }
  };
}
