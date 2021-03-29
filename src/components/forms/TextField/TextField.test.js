import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';
import TextField from '.';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        onChange={() => {}}
        value="Camila"
        name="nome"
      />,
    );

    // screen.debug();

    const textField = screen.getByPlaceholderText(/nome/i);

    expect(textField).toMatchSnapshot();
  });

  describe('when the field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Nome"
            onChange={onChangeMock}
            value=""
            name="nome"
          />,
        );
        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'Camila');
        expect(onChangeMock).toHaveBeenCalledTimes(6);
      });
    });
  });

  describe('when the field is invalid', () => {
    test('it displays the respective error message', () => {
      render(
        <TextField
          placeholder="Email"
          onChange={() => {}}
          value="testegmail.com"
          name="email"
          isTouched
          error="O campo e-mail deve receber um endereço válido"
        />,
      );

      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail)
        .toHaveValue('testegmail.com');

      expect(screen.getByRole('alert'))
        .toHaveTextContent('O campo e-mail deve receber um endereço válido');

      expect(inputEmail)
        .toMatchSnapshot();
    });
  });
});
