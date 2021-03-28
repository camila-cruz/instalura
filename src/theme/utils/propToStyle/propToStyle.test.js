import { propToStyle } from '.';

describe('propToStyle()', () => {
  describe('when it receives a simple argument', () => {
    test('and it is a string', () => {
      const propToStyleResult = propToStyle('textAlign');

      // <Text textAlign="center" />
      const componentProps = { textAlign: 'center' }; // number || string

      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toEqual({ textAlign: 'center' });
    });
    test('and it is a number', () => {
      const propToStyleResult = propToStyle('flex');

      // <Text textAlign={1} />
      const componentProps = { flex: 1 }; // number || string

      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when it receives an argument with breakpoints', () => {
    test('it renders one breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign');

      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center' } };

      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
    test('it renders two or more breakpoints resolutions', () => {
      const propToStyleResult = propToStyle('textAlign');

      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center', md: 'right' } };

      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });
});
