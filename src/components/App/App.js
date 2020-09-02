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
				isDone: true,
				id: 1
			},
			{
				value: 'Сделать зарядку',
				isDone: false,
				id: 2
			},
			{
				value: 'Завтрак',
				isDone: false,
				id: 3
			},
			{
				value: 'Почитать книгу',
				isDone: false,
				id: 4
			}
		]
	}

	onButtonClick = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = { ...item };
			if(item.id === id) {
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});
		this.setState({ items: newItemList})
	}

	onClickDelete = id => {
		const deleteItemList = this.state.items.filter(item => item.id !== id)
		this.setState({ items: deleteItemList})
	}

	render() {
		
		return (
			<div className={styles.wrap}>
				<div className={styles.color}>
					<h1 className={styles.title}>Дела на день:</h1>
					<InputItem />
					<ItemList items={this.state.items} onButtonClick={this.onButtonClick} onClickDelete={this.onClickDelete}/>
					<Footer />
				</div>
			</div>);
	}
};

export default App;
