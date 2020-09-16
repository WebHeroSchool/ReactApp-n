import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DoneIcon from '@material-ui/icons/Done';
import ViewListIcon from '@material-ui/icons/ViewList';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styles from './Footer.module.css';

const Footer = ({count}) => (<div className={styles.button}>
	<BottomNavigationAction className={styles.active} label="Активные" icon={<AccessAlarmIcon />} />Еще выполнить: {count}
	<BottomNavigationAction className={styles.done} label="Выполнено" icon={<DoneIcon />} />
	<BottomNavigationAction className={styles.all} label="Весь список" icon={<ViewListIcon />} />
	<BottomNavigationAction className={styles.completed} label="Завершенные" icon={<DoneAllIcon />} />
	<BottomNavigationAction className={styles.delete} label="Удалить завершенные" icon={<DeleteForeverIcon />} />	
</div>);

Footer.defaultProps = {
	count: 3
};

export default Footer;