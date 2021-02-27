import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function List({ list, dispatch }) {
  return (
    <ul>
      {list.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          isFirst={index === 0}
          isLast={index === list.length - 1}
          dispatch={dispatch}
        />
      ))}
    </ul>
  );
}
