import React from 'react';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Form from './components/Form';
import List from './components/List';
function App() {
  const [list, setList] = React.useState([]);

  function add(value) {
    const element = {
      id: Math.random(),
      title: value
    };
    setList([...list, element]);
  }
  function remove(id) {
    setList([...list.filter(item => item.id !== id)]);
  }

  return (
    <>
      <div className="wrapper">
        <Header />
        <Form handleSubmit={value => add(value)} />
        <List list={list} deleteHandler={index => remove(index)} />

        <Item />
        {/*<div>*/}
        {/*  <input type="text" />*/}
        {/*  <button>Добавить</button>*/}
        {/*  <ul>*/}
        {/*    <li>*/}
        {/*      Купить картошки*/}
        {/*      <button>[x]</button>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      Помыть пол*/}
        {/*      <button>[x]</button>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      Покормить рыб*/}
        {/*      <button>[x]</button>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      Выгулять кошку*/}
        {/*      <button>[x]</button>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
    </>
  );
}

export default App;
