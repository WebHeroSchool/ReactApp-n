import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

const App = () => 
(<Router>
	<div>
		<div className={styles.wrap}>
			<div className={styles.nav}>
				<div className={styles.navlist}>
					<ul className={styles.list}>
						<Link to='/' className={styles.link}><li className={styles.item}>Обо мне</li></Link>
						<Link to='/todo' className={styles.link}><li className={styles.item}>Дела</li></Link>
						<Link to='/contacts' className={styles.link}><li className={styles.item}>Контакты</li></Link>
					</ul>
				</div>
			</div>
			<div>
				<Route path='/' exact component={About} />
				<Route path='/todo' component={Todo} />
				<Route path='/contacts' component={Contacts} />
			</div>	
		</div>
	</div>
</Router>);

export default App;
