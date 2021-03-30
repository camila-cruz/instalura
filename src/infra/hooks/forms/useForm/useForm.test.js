import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from './index';

describe('useForm()', () => {
  describe('when user types', () => {
    test('the value changes', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          usuario: 'Camila',
        },
      }));

      const initialValues = { usuario: 'Camila' };
      expect(result.current.values).toEqual(initialValues);

      const event = {
        target: {
          getAttribute: () => 'usuario',
          value: 'Pacoca',
        },
      };

      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.values).toEqual({ usuario: 'Pacoca' });
    });
  });
});
