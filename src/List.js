import React from 'react';
import ListItem from './ListItem';

export default function List({
  list,
  removeHandler,
  filterItem,
  changeState,
  editName,
  changePosition
}) {
  let items = list.filter(filterItem).sort((el1, el2) => el1.position - el2.position);
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          removeHandler={removeHandler}
          changeState={changeState}
          editName={editName}
          changePosition={changePosition}
          isFirst={index === 0}
          isLast={index === items.length - 1}
        />
      ))}
    </ul>
  );
}
