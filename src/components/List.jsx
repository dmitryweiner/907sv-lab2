import React from 'react';
import ListItem from './ListItem';

export default function List({ list, deleteHandler }) {
  if (list.length === 0) {
    return 'Список пустой';
  }
  return (
    <ul>
      {list.map(item => (
        <ListItem id={item.id} key={item.id} title={item.title} deleteHandler={deleteHandler} />
      ))}
    </ul>
  );
}
