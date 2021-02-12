import React, { useState, useRef } from 'react';

export default function EditListItem({ item, editName, closeItem }) {
  const [name, setName] = useState(item.name);
  const button = useRef(null);

  function submitHandler(e) {
    e.preventDefault();
    editName(item.id, name);
    closeItem();
  }

  function blurHandler(e) {
    if (e.relatedTarget === button.current) {
      editName(item.id, name);
    }
    closeItem();
  }

  return (
    <div>
      <form action="" onSubmit={e => submitHandler(e)}>
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
