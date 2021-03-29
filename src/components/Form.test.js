import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
import React from 'react';

test('can enter text and submit', () => {
  const handleSubmit = jest.fn();
  const field = 'field contents';
  render(<Form handleSubmit={handleSubmit} />);
  const input = screen.getByTestId('input');
  const form = screen.getByTestId('form');
  fireEvent.input(input, { target: { value: field } }); // ввод в поле
  expect(handleSubmit).not.toBeCalled();
  fireEvent.submit(form); // отправка формы
  expect(handleSubmit).toBeCalledWith(expect.objectContaining({ field }));
});
