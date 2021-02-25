import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';

const task = 'Принять таблетки';
const id = 1;
const handleClick = jest.fn();

test('ListItem to have given text', () => {
  render(<ListItem title={task} id={id} handleClick={handleClick} />);
  const element = screen.getByTestId('task');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(task);
  screen.getByText(content => content.startsWith('таблетки', 8));
});

test('ClickHandler to be called with id', () => {
  render(<ListItem title={task} id={id} handleClick={handleClick} />);
  const button = screen.getByTestId('test-button');
  expect(button).toBeInTheDocument();
  expect(handleClick).not.toBeCalled();
  fireEvent.click(button);
  expect(handleClick).toBeCalledWith(id);
});
