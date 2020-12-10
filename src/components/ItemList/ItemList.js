import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './ItemList.module.css'

// class ItemList extends React.Component {
// 	componentDidMount() {
// 		console.log('componentDidMount');
// 	}

// 	compomentDidUpdate() {
// 		console.log('compomentDidUpdate');
// 	}

// 	render() {
// 		const { items, onButtonClick, onClickDelete } = this.props;
// 		return (
// 			<div className={styles.list}>
// 				<ul className={styles.item}>
// 					{items.map(item => <li className={styles.li} key={item.id}>
// 						<Checkbox
// 							onClick={() => onButtonClick(item.id)}
// 							color="default"
// 							checked={item.isDone}
// 				            inputProps={{ 'aria-label': 'checkbox with default color' }} /> 
// 						<Item
// 							value={item.value}
// 							isDone={item.isDone}
// 							id={item.id}  
// 						/>
// 						<IconButton aria-label="delete" className={styles.remove}>
// 			          		<DeleteIcon onClick={() => onClickDelete(item.id)}/>
// 			        	</IconButton>
// 					</li>)
// 					}	
// 				</ul>
// 			</div>
// 		);
// 	}
// };

const ItemList = ({ items, onButtonClick, onClickDelete }) => (<div className={styles.list}>
	<ul className={styles.item}>
		{items.map(item => <li className={styles.li} key={item.id}>
			<Checkbox
				onClick={() => onButtonClick(item.id)}
				color="default"
				checked={item.isDone}
	            inputProps={{ 'aria-label': 'checkbox with default color' }} /> 
			<Item
				value={item.value}
				isDone={item.isDone}
				id={item.id}  
			/>
			<IconButton aria-label="delete" className={styles.remove}>
          		<DeleteIcon onClick={() => onClickDelete(item.id)}/>
        	</IconButton>
		</li>)}	
	</ul>
</div>);


ItemList.propTypes = {
	items: PropTypes.array
};

export default ItemList;
