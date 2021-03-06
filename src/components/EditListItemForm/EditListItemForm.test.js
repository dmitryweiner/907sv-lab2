import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { EditListItem } from './EditListItemForm';
import { ACTION_TYPES } from '../../store';

const item = {
  id: '123',
  name: 'first'
};

describe('EditListItemForm tests', () => {
  test('form contains input with passed value and button', () => {
    render(<EditListItem item={item} />);
    const form = screen.getByTestId('editForm');
    const input = screen.getByTestId('edit-input');
    const button = screen.getByTestId('edit-button');

    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(item.name);
    expect(button).toBeInTheDocument();
  });

  test('submit form with valid name', () => {
    const closeItemHandler = jest.fn();
    const editHandler = jest.fn();
    const field = 'some new name';

    render(<EditListItem item={item} dispatch={editHandler} closeItem={closeItemHandler} />);
    const form = screen.getByTestId('editForm');
    const input = screen.getByTestId('edit-input');

    fireEvent.input(input, { target: { value: field } });
    expect(editHandler).not.toBeCalled();
    fireEvent.submit(form);
    expect(editHandler).toBeCalledWith({
      type: ACTION_TYPES.EDIT,
      payload: { id: item.id, name: field }
    });
    expect(closeItemHandler).toHaveBeenCalled();
  });

  test('submit form with empty name', () => {
    const closeItemHandler = jest.fn();
    const editHandler = jest.fn();
    const field = '';

    render(<EditListItem item={item} dispatch={editHandler} closeItem={closeItemHandler} />);
    const form = screen.getByTestId('editForm');
    const input = screen.getByTestId('edit-input');

    fireEvent.input(input, { target: { value: field } });
    expect(editHandler).not.toBeCalled();
    fireEvent.submit(form);
    expect(editHandler).not.toBeCalled();
    expect(closeItemHandler).toHaveBeenCalled();
  });

  test('click on submit button', () => {
    const closeItemHandler = jest.fn();
    const editHandler = jest.fn();
    const field = 'some new name';

    render(<EditListItem item={item} dispatch={editHandler} closeItem={closeItemHandler} />);
    const input = screen.getByTestId('edit-input');
    const button = screen.getByTestId('edit-button');

    fireEvent.input(input, { target: { value: field } });
    expect(editHandler).not.toBeCalled();
    fireEvent.click(button);
    expect(editHandler).toBeCalledWith({
      type: ACTION_TYPES.EDIT,
      payload: { id: item.id, name: field }
    });
    expect(closeItemHandler).toHaveBeenCalled();
  });

  test('focusOut from input', () => {
    const closeItemHandler = jest.fn();
    const editHandler = jest.fn();
    const field = 'some new name';

    render(<EditListItem item={item} dispatch={editHandler} closeItem={closeItemHandler} />);
    const input = screen.getByTestId('edit-input');
    fireEvent.input(input, { target: { value: field } });

    expect(editHandler).not.toBeCalled();
    fireEvent.focusIn(input);
    fireEvent.focusOut(input);
    expect(editHandler).not.toBeCalled();
    expect(closeItemHandler).toHaveBeenCalled();
  });
});
