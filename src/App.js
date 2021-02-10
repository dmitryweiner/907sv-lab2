import React, { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [item, setItem] = useState('');
  const [itemsList, setItemList] = useState([]);
  const [filter, setFilter] = useState('all');
  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };
  const filterValues = {
    ALL: 'all',
    DONE: 'done',
    NOT_DONE: 'not done'
  };

  function createListItem() {
    if (validate()) {
      itemsList.push({ id: uid(), name: item, isDone: false });
      setItem('');
    } else {
      alert('?');
    }
  }

  function removeHandler(id) {
    const withoutDeleted = itemsList.filter(el => el.id !== id);
    setItemList(withoutDeleted);
  }

  function validate() {
    return item !== '';
  }

  function filterList(c) {
    if (c === filterValues.DONE) {
      return el => el.isDone;
    } else if (c === filterValues.NOT_DONE) {
      return el => !el.isDone;
    }
    return () => true;
  }

  function changeState(id, state) {
    setItemList(
      itemsList.map(item => {
        if (item.id === id) {
          item.isDone = state;
        }
        return item;
      })
    );
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
        <select
          name="select"
          value={filter}
          onChange={e => {
            setFilter(e.target.value);
          }}
        >
          {Object.keys(filterValues).map((filterItem, index) => (
            <option key={index} value={filterValues[filterItem]}>
              {filterValues[filterItem]}
            </option>
          ))}
        </select>
        <List
          changeState={changeState}
          removeHandler={removeHandler}
          list={itemsList}
          filterItem={filterList(filter)}
        />
      </div>
    </div>
  );
}

export default App;
