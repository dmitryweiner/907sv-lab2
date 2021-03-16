import React from 'react';
import './App.css';
import List from './component/List';
import Form from './component/Form';

function App() {
  const [list, setList] = React.useState([]);

  function handleSubmit({ field }) {
    setList([...list, field]);
  }

  function remove(index) {
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Динамический список</h2>
      </div>
      <div>
        <List list={list} remove={remove} />
        <Form handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
