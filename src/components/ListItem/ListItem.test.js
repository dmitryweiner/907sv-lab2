import ListItem from './ListItem';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

describe('ListItemTests', () => {
  test('pass value', () => {
    const value = { id: 0, name: 'hello', isDone: false, position: 10 };
    render(<ListItem item={value} />);
    const linkElement = screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('click Edit button', () => {
    const value = { id: 0, name: 'hello', isDone: false, position: 10 };

    render(<ListItem item={value} />);
    const linkElement = screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Edit/i));
    expect(screen.getByTestId('editForm')).toBeInTheDocument();
  });

  test('remove item', () => {
    const value = { id: 0, name: 'hello', isDone: false, position: 10 };
    const handleClick = jest.fn();
    render(<ListItem removeHandler={handleClick} item={value} />);
    const linkElement = screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();

    const element = screen.getByText(/Remove/i);
    fireEvent.click(element);
    expect(handleClick).toBeCalled();
  });

  test('change position item', () => {
    const value = { id: 0, name: 'hello', isDone: false, position: 10 };
    const changePosition = jest.fn();
    render(
      <ListItem isFirst={false} isLast={false} changePosition={changePosition} item={value} />
    );
    const linkElement = screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
    //Up test
    const elementUp = screen.getByTestId('up');
    fireEvent.click(elementUp);
    expect(changePosition).toBeCalled();
    //Down test
    const elementDown = screen.getByTestId('down');
    fireEvent.click(elementDown);
    expect(changePosition).toBeCalled();
  });
});
