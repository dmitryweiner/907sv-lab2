import React, { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [item, setItem] = useState('');
  const [itemsList, setItemList] = useState([]);
  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  function createListItem() {
    if (validate()) {
      itemsList.push({ id: uid(), name: item });
      setItem('');
    } else {
      alert('?');
    }
  }

  function removeHandler(id) {
    let list = itemsList.filter(el => el.id !== id);
    setItemList(list);
  }

  function validate() {
    return item !== '';
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Добавляем элемент в список</h2>
      </div>
      <div>
        <input type="text" value={item} onChange={event => setItem(event.target.value)} />
        <button onClick={() => createListItem()}>Добавить</button>
        <List removeHandler={removeHandler} list={itemsList} />
      </div>
    </div>
  );
}

export default App;
