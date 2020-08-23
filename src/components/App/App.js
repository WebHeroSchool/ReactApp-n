import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

// const glass = 'Выпить стакан воды';
// const charge = 'Сделать зарядку';
// const breakfast = 'Завтрак';
// const book = 'Почитать книгу';

class App extends React.Component {
	state = {
		items: [
			{
				value: 'Выпить стакан воды',
				isDone: true
			},
			{
				value: 'Сделать зарядку',
				isDone: false
			},
			{
				value: 'Завтрак',
				isDone: false
			},
			{
				value: 'Почитать книгу',
				isDone: false
			}
		]
	}
	render() {
		
		return (
			<div className={styles.wrap}>
				<div className={styles.color}>
					<h1 className={styles.title}>Дела на день:</h1>
					<InputItem />
					<ItemList items={this.state.items}/>
					<Footer />
				</div>
			</div>);
	}
};


export default App;
