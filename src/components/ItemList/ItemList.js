import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ glass, charge, breakfast, book }) => (<ul>
		<li>{glass} </li>
		<li><Item charge={charge} /></li>
		<li>{breakfast} </li>
		<li>{book} </li>
	</ul>);

export default ItemList;