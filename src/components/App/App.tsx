import React, { useState } from 'react';
import './App.css';
import List from '../List/List';
import { SearchPanel, FilterArguments } from '../SearchPanel/SearchPanel';
import reducer from '../../store';
import CreateForm from '../CreateForm/CreateForm';
import CategorySelect from '../CategorySelect/CategorySelect';
import { Item, Action } from '../../store';

function App() {
  const [itemsList, setItemList] = useState<Item[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filterValues = {
    ALL: 'all',
    DONE: 'done',
    NOT_DONE: 'not done'
  };

  function filterList() {
    if (category === filterValues.DONE) {
      return (el: Item) => el.isDone && el.name.includes(search);
    } else if (category === filterValues.NOT_DONE) {
      return (el: Item) => !el.isDone && el.name.includes(search);
    }
    return (el: Item) => el.name.includes(search);
  }

  function dispatch(action: Action) {
    setItemList(reducer(action, itemsList));
  }

  function updateState(action: FilterArguments) {
    switch (action.name) {
      case 'updateSearch':
        setSearch(action.value);
        break;
      case 'updateCategory':
        setCategory(action.value);
        break;
    }
  }

  function filterItems(list: Item[]) {
    return list.filter(filterList()).sort((el1, el2) => el1.position - el2.position);
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Добавляем элемент в список</h2>
      </div>
      <div>
        <CreateForm create={dispatch} />
        <CategorySelect filterValues={filterValues} updateCategory={updateState} />
        <br />
        <SearchPanel filter={updateState} />
        <br />
        <List list={filterItems(itemsList)} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
