import { render, screen } from '@testing-library/react';
import React from 'react';

const Test = ({ text }) => {
  return <span>{text}</span>;
};

test('renders learn react link', () => {
  const value = 'learn react';
  render(<Test text={value} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
