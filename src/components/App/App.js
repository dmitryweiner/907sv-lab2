import React, { useState } from 'react';
import './App.css';
import List from '../List/List';
import SearchPanel from '../SearchPanel/SearchPanel';
import reducer from '../../store';
import CreateForm from '../CreateForm/CreateForm';
import CategorySelect from '../CategorySelect/CategorySelect';

function App() {
  const [itemsList, setItemList] = useState([]);
  const [search] = useState('');

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
        <CategorySelect filterValues={filterValues} />
        <br />
        <SearchPanel filter={dispatch} />
        <br />
        <List list={itemsList} filterItem={filterList} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
