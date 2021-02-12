import React from 'react';
import ListItem from './ListItem';

export default function List({ list, removeHandler, filterItem, changeState, editName }) {
  return (
    <ul>
      {list.filter(filterItem).map(item => (
        <ListItem
          key={item.id}
          item={item}
          removeHandler={removeHandler}
          changeState={changeState}
          editName={editName}
        />
      ))}
    </ul>
  );
}
