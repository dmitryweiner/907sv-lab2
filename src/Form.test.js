import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

test('Shows input field and add-button', () => {
  render(<Form />);
  const input = screen.getByTestId('input');
  const button = screen.getByTestId('button');
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('Can enter text to input field and handleSubmit is called with entered text', () => {
  const field = 'Some text';
  const handleSubmit = jest.fn();
  render(<Form handleSubmit={handleSubmit} />);
  const input = screen.getByTestId('input');
  const form = screen.getByTestId('form');
  fireEvent.input(input, { target: { value: field } });
  expect(handleSubmit).not.toBeCalled();
  fireEvent.submit(form);
  expect(handleSubmit).toBeCalledWith(expect.objectContaining({ field }));
});
