import React from 'react';
import Item from './Item';

export default function List({ list, remove }) {
  // const [arr] = React.useState([1, 2, 3]);
  return (
    <ul>
      {list.map((element, index) => (
        <Item text={element} key={index} index={index} remove={remove} />
      ))}
    </ul>
  );
}
