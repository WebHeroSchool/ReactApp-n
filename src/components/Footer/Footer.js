import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DoneIcon from '@material-ui/icons/Done';
import ViewListIcon from '@material-ui/icons/ViewList';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styles from './Footer.module.css';

const Footer = ({count, onClickAdd, onClickFilter, onClickAllDelete}) => (<div className={styles.button}>
	<div className={styles.active} id="active" onClick={(e) => onClickFilter('active')}>{<AccessAlarmIcon />}{count}</div>
	<div className={styles.done} id="done" onClick={(e) => onClickFilter('done')}>{<DoneIcon />}</div>
	<div className={styles.all} id="all" onClick={(e) => onClickFilter('all')}>{<ViewListIcon />}</div>
	<div className={styles.delete} onClick={onClickAllDelete}> {<DeleteForeverIcon />}</div>
</div>);

Footer.propTypes = {
	count: PropTypes.number.isRequired
};

export default Footer;