import React, { useState } from 'react';

export default function CreateForm({ create }) {
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
      create({ name: 'create', item: newItem });
    } else {
      alert('?');
    }
  }
  return (
    <>
      <input type="text" value={item} onChange={event => setItem(event.target.value)} />
      <button onClick={() => createListItem()}>Добавить</button>
    </>
  );
}
