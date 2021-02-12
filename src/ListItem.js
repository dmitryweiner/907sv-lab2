import React, { useState } from 'react';

export default function ListItem({ item, removeHandler, changeState, editName }) {
  const isDone = { textDecoration: 'line-through' };
  const [isEdit, setIsEdit] = useState('');
  const [name, setName] = useState(item.name);
  function edit() {
    setIsEdit(!isEdit);
  }
  return (
    <>
      {!isEdit && <li style={item.isDone ? isDone : {}}>{item.name}</li>}
      {isEdit && (
        <>
          <br />
          <form
            action=""
            onSubmit={e => {
              console.log('submit');
              e.preventDefault();
              editName(item.id, name);
              setIsEdit(!isEdit);
            }}
          >
            <input
              type="text"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              onBlur={() => {
                console.log('blur');
                setIsEdit(!isEdit);
              }}
            />
            <button type="submit">Save</button>
          </form>
          <br />
        </>
      )}
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => changeState(item.id, !item.isDone)}
      />
      <button onClick={() => removeHandler(item.id)}>Remove</button>
      <button onClick={() => edit()}>{!isEdit ? 'Edit' : 'Cancel'}</button>
    </>
  );
}
