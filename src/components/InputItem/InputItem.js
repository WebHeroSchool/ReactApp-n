import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<span>
	<TextField
          id="standard-password-input"
          label="Новое дело"
          type="password"
          autoComplete="current-password"
    />
</span>);

export default InputItem;