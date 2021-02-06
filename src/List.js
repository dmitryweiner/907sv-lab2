import React from 'react';
import ListItem from './ListItem';

export default function List({ list, removeHandler }) {
  return (
    <ul>
      {list.map(item => (
        <ListItem key={item.id} item={item} removeHandler={removeHandler} />
      ))}
    </ul>
  );
}
