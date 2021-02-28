import ListItem from './ListItem';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

describe('ListItemTests', () => {
  test('pass value', () => {
    const value = { id: '0', name: 'hello', isDone: false, position: 10 };
    render(<ListItem item={value} />);
    const linkElement = screen.getByText(value.name);
    expect(linkElement).toBeInTheDocument();
  });

  test('click Edit button', () => {
    const value = { id: '0', name: 'hello', isDone: false, position: 10 };

    render(<ListItem item={value} />);
    fireEvent.click(screen.getByTestId('edit-cancel-button'));
    expect(screen.getByTestId('editForm')).toBeInTheDocument();
  });

  test('remove item', () => {
    const value = { id: '0', name: 'hello', isDone: false, position: 10 };
    const dispatchHandler = jest.fn();
    render(<ListItem dispatch={dispatchHandler} item={value} />);

    const element = screen.getByTestId('remove-button');
    fireEvent.click(element);
    expect(dispatchHandler).toBeCalledWith({ name: 'remove', itemId: value.id });
  });

  test('change position item', () => {
    const value = { id: '0', name: 'hello', isDone: false, position: 10 };
    const dispatchHandler = jest.fn();
    render(<ListItem isFirst={false} isLast={false} dispatch={dispatchHandler} item={value} />);
    const linkElement = screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
    //Up case
    const elementUp = screen.getByTestId('up');
    fireEvent.click(elementUp);
    expect(dispatchHandler).toBeCalledWith({
      name: 'changePosition',
      itemId: value.id,
      itemNumber: 1
    });
    //Down case
    const elementDown = screen.getByTestId('down');
    fireEvent.click(elementDown);
    expect(dispatchHandler).toBeCalledWith({
      name: 'changePosition',
      itemId: value.id,
      itemNumber: -1
    });
  });

  test('done item show checked checkbox', () => {
    const value = { id: '0', name: 'hello', isDone: true, position: 10 };
    render(<ListItem item={value} />);
    const checkBox = screen.getByTestId('item-checkbox');
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).toHaveAttribute('checked');
  });

  test('item in progress show unchecked checkbox', () => {
    const value = { id: '0', name: 'hello', isDone: false, position: 10 };
    render(<ListItem item={value} />);
    const checkBox = screen.getByTestId('item-checkbox');
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).not.toHaveAttribute('checked');
  });

  test('click on checkbox triggers event handler with correct arguments', () => {
    const dispatchHandler = jest.fn();
    const value = { id: '0', name: 'hello', isDone: false, position: 10 };

    render(<ListItem item={value} dispatch={dispatchHandler} />);
    const checkBox = screen.getByTestId('item-checkbox');

    expect(dispatchHandler).not.toBeCalled();
    fireEvent.click(checkBox);
    expect(dispatchHandler).toBeCalledWith({
      name: 'changeState',
      itemId: value.id,
      itemIsDone: !value.isDone
    });
  });
});
