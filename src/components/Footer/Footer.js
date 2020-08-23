import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DoneIcon from '@material-ui/icons/Done';
import ViewListIcon from '@material-ui/icons/ViewList';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styles from './Footer.module.css';

const Footer = () => (<div className={styles.button}>
		<span><BottomNavigationAction className={styles.done} label="Выполнено" icon={<DoneIcon />} /></span>
		<span><BottomNavigationAction className={styles.all} label="Весь список" icon={<ViewListIcon />} /></span>
		<span><BottomNavigationAction className={styles.active} label="Активные" icon={<AccessAlarmIcon />} /></span>
		<span><BottomNavigationAction className={styles.completed} label="Завершенные" icon={<DoneAllIcon />} /></span>
		<span><BottomNavigationAction className={styles.delete} label="Удалить завершенные" icon={<DeleteForeverIcon />} /></span>
	</div>);

export default Footer;