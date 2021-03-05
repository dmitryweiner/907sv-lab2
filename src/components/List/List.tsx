import React from 'react';
import { ListItem } from '../ListItem/ListItem';
import { Item, Action } from '../../store';

interface ListProps {
  list: Item[];
  dispatch: (action: Action) => void;
}

export const List = ({ list, dispatch }: ListProps) => {
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
};
