import React from 'react';

const Footer = ({ num, count }) => (<div>
		<span>Выволнено: {num} </span>
		<span>Осталось выполнить: {count} </span>
	</div>);

export default Footer;