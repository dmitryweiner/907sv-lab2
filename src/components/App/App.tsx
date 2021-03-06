import React, { useState } from 'react';
import './App.css';
import { List } from '../List/List';
import { SearchPanel, FilterArguments } from '../SearchPanel/SearchPanel';
import { selectListByFilter, reducer } from '../../store';
import { CreateForm } from '../CreateForm/CreateForm';
import { CategorySelect } from '../CategorySelect/CategorySelect';
import { Item, Action, FILTER_VALUES } from '../../store';

function App() {
  const [itemsList, setItemList] = useState<Item[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(FILTER_VALUES[0]);

  function dispatch(action: Action) {
    setItemList(
      reducer(action, { list: itemsList, filterParams: { category, searchString: search } }).list
    );
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

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Добавляем элемент в список</h2>
      </div>
      <div>
        <CreateForm dispatch={dispatch} />
        <CategorySelect filterValues={FILTER_VALUES} updateCategory={updateState} />
        <br />
        <SearchPanel filter={updateState} />
        <br />
        <List
          list={selectListByFilter({
            list: itemsList,
            filterParams: { category, searchString: search }
          })}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default App;
