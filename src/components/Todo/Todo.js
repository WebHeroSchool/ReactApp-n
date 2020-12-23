import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
	const state = {
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
		],
		count: 4
	}

	const [items, setItems] = useState(state.items);
	const [visibleItems, setVisibleItems] = useState(state.items);
	const [count, setCount] = useState(state.count);

	const onButtonClick = id => {
		const newItemList = items.map(item => {
			const newItem = { ...item };
			if(item.id === id) {
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});
		setItems(newItemList);
		setVisibleItems(newItemList);
	};
	
	const onClickDelete = id => {
		const deleteItemList = items.filter(item => item.id !== id);
		setItems(deleteItemList)
		setVisibleItems(newItemList);
		setCount(count - 1)
	};

	const onClickAdd = value => {
	
		setItems([...items,
					{
						value,
						isDone: false,
						id: count + 1
					}]);
		setCount( count + 1);
		setVisibleItems(newItemList);
	};

	const onClickFilter = e => {
		let filterItem = item;
		switch(e) {
			case 'all': 
				filterItem = item;
			break;
			case 'active': 
				filterItem = items.filter(item => item.isDone !== true);;
			break;
			case 'completed': 
				filterItem = items.filter(item => item.isDone === true);
			break;
			default:
     			filterItem = state.items;
		}
		setVisibleItems(newItemList);
	};

	const onClickAllDelete = isDone => {
		const deleteItemList = items.filter(item => item.isDone !== true);
		setItems(deleteItemList);
		setVisibleItems(deleteItemList);
	  };



		return (
			<div className={styles.wrap}>
				<div className={styles.color}>
					<h1 className={styles.title}>Дела на день:</h1>
					<InputItem onClickAdd={onClickAdd}/>
					<ItemList 
						items={items} 
						onButtonClick={onButtonClick} 
						onClickDelete={onClickDelete}/>
					<Footer 
						count={count}
						onClickAdd={onClickAdd}
						onClickFilter={onClickFilter}
						onClickAllDelete={onClickAllDelete}/>
				</div>
			</div>);
};

export default Todo;
