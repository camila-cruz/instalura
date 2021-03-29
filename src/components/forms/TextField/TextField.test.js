import React from 'react';
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
});
