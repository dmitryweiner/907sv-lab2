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
      </div>
    </>
  );
}

export default App;
