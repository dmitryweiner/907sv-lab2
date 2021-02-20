import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Динамический список</h2>
      </div>
      <div>
        <input type="text" />
        <button>Добавить</button>
        <ul>
          <li>
            Купить картошки
            <button>[x]</button>
          </li>
          <li>
            Помыть пол
            <button>[x]</button>
          </li>
          <li>
            Покормить рыб
            <button>[x]</button>
          </li>
          <li>
            Выгулять кошку
            <button>[x]</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
