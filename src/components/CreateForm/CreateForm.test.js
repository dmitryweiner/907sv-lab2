import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CreateForm from './CreateForm';

describe('CreateForm tests', () => {
  test('create item with valid name', () => {
    const createHandler = jest.fn();
    render(<CreateForm create={createHandler} />);
    const field = 'some text';
    const input = screen.getByTestId('create-input');
    const button = screen.getByTestId('create-button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.input(input, { target: { value: field } });
    expect(createHandler).not.toBeCalled();
    fireEvent.click(button);

    expect(createHandler).toBeCalledWith(
      expect.objectContaining({ item: expect.objectContaining({ name: field }), name: 'create' })
    );
  });

  test('try to create item with empty name', () => {
    const createHandler = jest.fn();
    render(<CreateForm create={createHandler} />);

    const field = '';
    const input = screen.queryByTestId('create-input');
    const button = screen.queryByTestId('create-button');
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    fireEvent.input(input, { target: { value: field } });
    expect(createHandler).not.toBeCalled();
    fireEvent.click(button);
    expect(alert).toHaveBeenCalled();
  });
});
