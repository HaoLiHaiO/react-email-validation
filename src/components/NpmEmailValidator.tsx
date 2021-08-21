import { useState } from 'react';
import { TextField, Typography } from "@material-ui/core"
import * as EmailValidator from 'email-validator';
import useStyles from "./styles"

export const NpmEmailValidator = () => {
    const [email, setEmail] = useState('');
    const classes = useStyles();
    return (
        <section>        
            <Typography className={classes.titles} variant="h4">
        Using email-validator NPM package
            </Typography>
            <TextField 
                className={classes.txtField} 
                id="standard-basic" 
                label="Standard"
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                error={!EmailValidator.validate(email)}
                helperText={EmailValidator.validate(email) ? '' : 'Invalid email!'} />
        </section>

    )
}