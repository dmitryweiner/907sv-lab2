import React, { useState } from 'react';
import { EditListItem } from '../EditListItemForm/EditListItemForm';
import { Item, Action } from '../../store';

interface ListItemProps {
  item: Item;
  isFirst: boolean;
  isLast: boolean;
  dispatch: (action: Action) => void;
}

export const ListItem = ({ item, isFirst, isLast, dispatch }: ListItemProps) => {
  const isDone = { textDecoration: 'line-through' };
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {!isEdit && (
        <li data-testid="list-item" style={item.isDone ? isDone : {}}>
          {item.name}
        </li>
      )}
      {isEdit && (
        <EditListItem item={item} dispatch={dispatch} closeItem={() => setIsEdit(false)} />
      )}
      <input
        data-testid="item-checkbox"
        type="checkbox"
        checked={item.isDone}
        onChange={() =>
          dispatch({
            type: 'changeState',
            payload: {
              id: item.id,
              isDone: !item.isDone
            }
          })
        }
      />
      <button
        data-testid="remove-button"
        onClick={() =>
          dispatch({
            type: 'remove',
            payload: {
              id: item.id
            }
          })
        }
      >
        Remove
      </button>
      <button data-testid="edit-cancel-button" onClick={() => setIsEdit(!isEdit)}>
        {!isEdit ? 'Edit' : 'Cancel'}
      </button>
      {!isFirst && (
        <button
          data-testid="up"
          onClick={() =>
            dispatch({
              type: 'changePosition',
              payload: {
                id: item.id,
                number: 1
              }
            })
          }
        >
          ↑
        </button>
      )}
      {!isLast && (
        <button
          data-testid="down"
          onClick={() =>
            dispatch({
              type: 'changePosition',
              payload: {
                id: item.id,
                number: -1
              }
            })
          }
        >
          ↓
        </button>
      )}
    </>
  );
};
