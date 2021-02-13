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
  return (
    <ul>
      {list
        .filter(filterItem)
        .sort((el1, el2) => el1.position - el2.position)
        .map((item, index) => (
          <ListItem
            key={item.id}
            item={item}
            removeHandler={removeHandler}
            changeState={changeState}
            editName={editName}
            changePosition={changePosition}
            isFirst={index === 0}
            isLast={index === list.length - 1}
          />
        ))}
    </ul>
  );
}
