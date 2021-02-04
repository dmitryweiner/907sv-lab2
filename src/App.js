import React, { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [item, setItem] = useState('');
  const [itemsList] = useState([]);

  function createListItem() {
    if (validate()) {
      itemsList.push(item);
      setItem('');
    } else {
      alert('?');
    }
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
        <List list={itemsList} />
      </div>
    </div>
  );
}

export default App;
