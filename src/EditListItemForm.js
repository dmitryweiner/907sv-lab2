import React, { useState, useRef } from 'react';

export default function EditListItem({ item, dispatch, closeItem }) {
  const [name, setName] = useState(item.name);
  const button = useRef(null);

  function submitHandler(e) {
    e.preventDefault();
    dispatch({ itemId: item.id, itemName: item.name, name: 'edit' });
    closeItem();
  }

  function blurHandler(e) {
    if (e.relatedTarget === button.current) {
      dispatch({ itemId: item.id, itemName: item.name, name: 'edit' });
    }
    closeItem();
  }

  return (
    <div>
      <form data-testid="editForm" action="" onSubmit={e => submitHandler(e)}>
        <input
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          onBlur={e => blurHandler(e)}
        />
        <button ref={button} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
