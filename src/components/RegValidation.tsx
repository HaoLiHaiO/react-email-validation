import { useState } from 'react';
import { TextField, Typography } from '@material-ui/core';
import useStyles from './styles';

import isValidRegEmail from './utils/isValidRegEmail';

export const RegValidation = () => {
    const classes = useStyles();
    
    const [ email, setEmail ] = useState('');
   
    return (
        <section>
            <Typography variant="h4">
                Form validation with Regex
            </Typography>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField 
                className={classes.txtField} 
                id="standard-basic" 
                label="Standard"
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                error={!isValidRegEmail(email)}
                helperText={isValidRegEmail(email) ? '' : 'Invalid email!'} />
                <TextField 
                className={classes.txtField} 
                id="filled-basic" 
                label="Filled" 
                variant="filled" />
                <TextField 
                className={classes.txtField} 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined" />
            </form>
        </section>
    )
};
