import React from 'react';
import ListItem from '../ListItem/ListItem';

function List({ list, deleteHandler }) {
  if (list.length === 0) {
    return <>There are no elements yet (-_-)</>;
  }
  return (
    <ul>
      {list.map(item => (
        <ListItem id={item.id} key={item.id} title={item.title} deleteHandler={deleteHandler} />
      ))}
    </ul>
  );
}
export default List;
