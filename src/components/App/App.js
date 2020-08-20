import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const glass = 'Выпить стакан воды';
const charge = 'Сделать зарядку';
const breakfast = 'Завтрак';
const book = 'Почитать книгу';

const App = () => (<div>
		<h1>Дела на день:</h1>
		<InputItem />
		<ItemList glass={glass} charge={charge} breakfast={breakfast} book={book}/>
		<Footer num={1} count={2} />
	</div>);

export default App;
