import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';
import React from 'react';

test('renders empty list', () => {
  const title = 'title';
  const handleClick = jest.fn();
  render(<Button title={title} handleClick={handleClick} />);
  const element = screen.getByText(title);
  expect(element).toBeInTheDocument();
  expect(handleClick).not.toBeCalled();
  fireEvent.click(element);
  expect(handleClick).toBeCalled();
});
