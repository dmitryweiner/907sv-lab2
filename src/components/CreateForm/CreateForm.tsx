import React, { useState } from 'react';
import { Action, ACTION_TYPES } from '../../store';

interface CreateFormProps {
  dispatch: (item: Action) => void;
}

export const CreateForm = ({ dispatch }: CreateFormProps) => {
  const [item, setItem] = useState('');
  const [position, setPosition] = useState(0);

  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  function validate() {
    return item !== '';
  }

  function createListItem() {
    if (validate()) {
      const newItem = { id: uid(), name: item, isDone: false, position: position };
      setPosition(position => position + 1);
      setItem('');
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: { item: newItem }
      });
    } else {
      alert('?');
    }
  }
  return (
    <>
      <input
        data-testid="create-input"
        type="text"
        value={item}
        onChange={event => setItem(event.target.value)}
      />
      <button data-testid="create-button" onClick={() => createListItem()}>
        Добавить
      </button>
    </>
  );
};
