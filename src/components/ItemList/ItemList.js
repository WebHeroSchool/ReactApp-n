import React from 'react';
import Item from '../Item/Item';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './ItemList.module.css'

const ItemList = ({ items, onButtonClick }) => (<div className={styles.list}>
	<ul className={styles.item}>
		{items.map(item => <li className={styles.li} key={item.value}>
			<Checkbox
				onClick={() => onButtonClick(item.id)}
				color="default"
	            inputProps={{ 'aria-label': 'checkbox with default color' }} /> 
			<Item
				value={item.value}
				isDone={item.isDone}
				id={item.id} 
				onButtonClick={onButtonClick} 
			/>
			<IconButton aria-label="delete" className={styles.remove}>
          		<DeleteIcon />
        	</IconButton>
		</li>)}	
	</ul>
</div>);

export default ItemList;
