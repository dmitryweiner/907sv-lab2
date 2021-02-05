import List from './List';
import { shallow, configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({ adapter: new Adapter() });

describe('ListTests', () => {
  test('pass two items', () => {
    const list = [1, 2];
    const component = shallow(<List list={list} />);
    expect(component.find('ListItem')).toHaveLength(2);
  });

  test('pass empty list', () => {
    const list = [];
    const component = shallow(<List list={list} />);
    expect(component.find('ListItem')).toHaveLength(0);
  });
});
