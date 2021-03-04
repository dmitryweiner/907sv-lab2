import React, { useState, useRef } from 'react';
import { Action, Item } from '../../store';

interface EditListItemFormProps {
  item: Item;
  dispatch: (action: Action) => void;
  closeItem: () => void;
}

export const EditListItem: React.FC<EditListItemFormProps> = ({ item, dispatch, closeItem }) => {
  const [name, setName] = useState(item.name);
  const button = useRef(null);

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name !== '') {
      dispatch({
        name: 'edit',
        itemId: item.id,
        itemName: name
      });
    }
    closeItem();
  }

  function blurHandler(e: React.FocusEvent<HTMLInputElement>) {
    if (e.relatedTarget === button.current && name !== '') {
      dispatch({
        name: 'edit',
        itemId: item.id,
        itemName: name
      });
    }
    closeItem();
  }

  return (
    <div>
      <form
        data-testid="editForm"
        action=""
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitHandler(e)}
      >
        <input
          data-testid="edit-input"
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          onBlur={e => blurHandler(e)}
        />
        <button data-testid="edit-button" ref={button} type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
