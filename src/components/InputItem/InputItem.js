import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const InputItem = () => (<span className={styles.input}>
	<TextField 
        label="Новое дело"
        className={styles.text}
    />
</span>);

export default InputItem;