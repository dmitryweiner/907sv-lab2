import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function List({ list, filterItem, dispatch }) {
  let items = list.filter(filterItem).sort((el1, el2) => el1.position - el2.position);
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          isFirst={index === 0}
          isLast={index === items.length - 1}
          dispatch={dispatch}
        />
      ))}
    </ul>
  );
}
