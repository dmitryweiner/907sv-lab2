import React, { useState } from 'react';
import './App.css';
import List from './List';
import SearchPanel from './SearchPanel';

function App() {
  const [item, setItem] = useState('');
  const [position, setPosition] = useState(0);
  const [itemsList, setItemList] = useState([]);
  const [filter, setFilter] = useState('all');
  const [setSearch] = useState('');
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
      itemsList.push({ id: uid(), name: item, isDone: false, position: position });
      setPosition(position => position + 1);
      setItem('');
    } else {
      alert('?');
    }
  }

  function validate() {
    return item !== '';
  }
  /*
  function changePosition(id, number) {
    let previous;
    let current;
    let temp;

    if (number > 0) {
      previous = 0;
    } else {
      previous = itemsList.length - 1;
    }

    let elms = itemsList.sort((el1, el2) => el1.position - el2.position);
    for (let i = 0; i < elms.length; i++) {
      if (elms[i].id === id) {
        if (number > 0) {
          if (i !== 0) {
            previous = i - 1;
          }
          current = i;
          break;
        } else {
          if (i !== itemsList.length - 1) {
            previous = i + 1;
          }
          current = i;
          break;
        }
      }
    }

    temp = elms[previous].position;
    elms[previous].position = elms[current].position;
    elms[current].position = temp;

    setItemList(elms.map(el => el));
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
      return el => el.isDone && el.name.includes(search);
    } else if (c === filterValues.NOT_DONE) {
      return el => !el.isDone && el.name.includes(search);
    }
    return el => el.name.includes(search);
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

  function editName(id, name) {
    setItemList(
      itemsList.map(item => {
        if (item.id === id) {
          item.name = name;
        }
        return item;
      })
    );
  }
*/
  function searchFilter(name) {
    setSearch(name);
  }

  function reducer(action, previousList = []) {
    switch (action.name) {
      case 'remove': {
        return [...previousList.filter(el => el.id !== action.payload)];
      }
      default:
        return [...previousList];
    }
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
        <input type="text" value={item} onChange={event => setItem(event.target.value)} />
        <button onClick={() => createListItem()}>Добавить</button>
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
        <List list={itemsList} dispatch={action => dispatch(action)} />
      </div>
    </div>
  );
}

export default App;
