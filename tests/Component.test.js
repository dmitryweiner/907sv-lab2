import { render, screen } from '@testing-library/react';
import {Component} from '../components/Component';
import React from 'react';

test('renders what it got', () => {
    const text = 'Test text';
    render(<Component text={text} />);
    const element = screen.getByTestId('component');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(text);
});
