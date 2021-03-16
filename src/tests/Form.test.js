import { screen, render, fireEvent } from '@testing-library/react';
import Form from './Form';
import React from 'react';

test('form test', () => {
  const text = '123';
  const handleSubmit = jest.fn();
  render(<Form handleSubmit={handleSubmit} />);
  fireEvent.input(screen.getByTestId('input'), {
    target: {
      value: text
    }
  });
  expect(handleSubmit).not.toBeCalled();
  fireEvent.submit(screen.getByTestId('form'));
  expect(handleSubmit).toBeCalledWith(text);
  expect(screen.getByTestId('input')).toHaveValue('');
});
