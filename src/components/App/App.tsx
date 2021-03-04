import React, { useState } from 'react';
import './App.css';
import { List } from '../List/List';
import { SearchPanel, FilterArguments } from '../SearchPanel/SearchPanel';
import { selectListByFilter, reducer } from '../../store';
import { CreateForm } from '../CreateForm/CreateForm';
import { CategorySelect } from '../CategorySelect/CategorySelect';
import { Item, Action, IFilterValues } from '../../store';

function App() {
  const [itemsList, setItemList] = useState<Item[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(IFilterValues[IFilterValues.ALL]);

  function dispatch(action: Action) {
    setItemList(reducer(action, { list: itemsList, filter: category, search }));
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
        <CreateForm create={dispatch} />
        <CategorySelect filterValues={IFilterValues} updateCategory={updateState} />
        <br />
        <SearchPanel filter={updateState} />
        <br />
        <List
          list={selectListByFilter({ list: itemsList, filter: category, search: search })}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default App;
