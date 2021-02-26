import React, { useState } from 'react';
import './App.css';
import List from '../List/List';
import SearchPanel from '../SearchPanel/SearchPanel';
import reducer from '../store';
import CreateForm from '../CreateForm/CreateForm';

function App() {
  //const [item, setItem] = useState('');
  const [itemsList, setItemList] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filterValues = {
    ALL: 'all',
    DONE: 'done',
    NOT_DONE: 'not done'
  };

  function filterList(c) {
    if (c === filterValues.DONE) {
      return el => el.isDone && el.name.includes(search);
    } else if (c === filterValues.NOT_DONE) {
      return el => !el.isDone && el.name.includes(search);
    }
    return el => el.name.includes(search);
  }

  function searchFilter(name) {
    setSearch(name);
  }

  function dispatch(action) {
    setItemList(reducer(action, itemsList));
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Добавляем элемент в список</h2>
      </div>
      <div>
        <CreateForm create={dispatch} />
        <select
          name="select"
          value={filter}
          onChange={e => {
            setFilter(e.target.value);
          }}
        >
          {Object.values(filterValues).map((filterItem, index) => (
            <option key={index} value={filterItem}>
              {filterItem}
            </option>
          ))}
        </select>
        <br />
        <SearchPanel filter={searchFilter} />
        <br />
        <List list={itemsList} filterItem={filterList} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
