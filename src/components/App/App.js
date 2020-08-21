import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

// const glass = 'Выпить стакан воды';
// const charge = 'Сделать зарядку';
// const breakfast = 'Завтрак';
// const book = 'Почитать книгу';

const App = () => {
	const items = [
		{
			value: 'Выпить стакан воды'
		},
		{
			value: 'Сделать зарядку'
		},
		{
			value: 'Завтрак'
		},
		{
			value: 'Почитать книгу'
		}
	]

	return (
		<div className={styles.wrap}>
			<h1 className={styles.title}>Дела на день:</h1>
			<InputItem />
			<ItemList items={items}/>
			<Footer num={1} count={2} />
		</div>);
}


export default App;
