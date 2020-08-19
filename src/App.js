import React from 'react';

const ItemList = () => (<ul>
    <li>Стакан воды</li>
    <li>Зарядка</li>
    <li>Завтрак</li>
  </ul>);

const App = () => (<div>
  <ItemList />
  <button>Поехали!</button>
</div>);

export default App;
