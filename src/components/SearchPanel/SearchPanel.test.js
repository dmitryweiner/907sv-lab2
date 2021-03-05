import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchPanel } from './SearchPanel';

describe('SearchPanel tests', () => {
  test('search items', () => {
    const searchHandler = jest.fn();
    render(<SearchPanel filter={searchHandler} />);
    const field = 'some text';
    const input = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.input(input, { target: { value: field } });
    expect(searchHandler).not.toBeCalled();
    fireEvent.click(button);

    expect(searchHandler).toBeCalledWith(
      expect.objectContaining({ value: field, name: 'updateSearch' })
    );
  });
});
