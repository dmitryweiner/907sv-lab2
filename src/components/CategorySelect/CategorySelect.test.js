import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CategorySelect } from './CategorySelect';

const values = ['FIRST', 'SECOND'];

describe('CategorySelect tests', () => {
  test('pass option object with two elements', () => {
    render(<CategorySelect filterValues={values} />);
    const elements = screen.getAllByTestId('category-option');

    expect(elements).toHaveLength(values.length);
    for (let i = 0; i < elements.length; i++) {
      expect(elements[i]).toHaveTextContent(values[i]);
    }
  });

  test('pass empty option object', () => {
    render(<CategorySelect filterValues={[]} />);
    const elements = screen.queryAllByTestId('category-option');

    expect(elements).toHaveLength(0);
  });

  test('change option', () => {
    const value = values[1];
    const updateCategoryHandler = jest.fn();

    render(<CategorySelect filterValues={values} updateCategory={updateCategoryHandler} />);
    fireEvent.change(screen.getByTestId('select'), { target: { value: value } });
    const options = screen.queryAllByTestId('category-option');

    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(updateCategoryHandler).toHaveBeenCalledWith({ name: 'updateCategory', value: value });
  });
});
