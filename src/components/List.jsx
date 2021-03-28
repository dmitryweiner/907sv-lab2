import ListItem from './ListItem';
import React from 'react';

export default function List({ list, deleteHandler }) {
  if (list.length === 0) {
    return <>not elements</>;
  }
  return (
    <ul>
      {list.map(item => (
        <ListItem id={item.id} key={item.id} text={item.text} deleteHandler={deleteHandler} />
      ))}
    </ul>
  );
}
