import ListItem from './ListItem';
import { shallow, configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({ adapter: new Adapter() });

describe('ListItemTests', () => {
  test('pass value', () => {
    const component = shallow(<ListItem name={'hello'} />);
    expect(component.text()).toContain('hello');
  });
});
