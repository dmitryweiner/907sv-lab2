import React from 'react';

import { render, screen } from '@testing-library/react';
import {List} from '../components/List';
test('renders full list', () => {
    const list = ['one', 'two', 'three'];
    render(<List list={list} />);
    const elements = screen.getAllByTestId('list-item');
    expect(elements).toHaveLength(list.length);
    expect(elements[0]).toHaveTextContent(list[0]);
});