import { TextField, Typography } from '@material-ui/core';
import useStyles from './styles';

export const RegValidation = () => {
    const classes = useStyles();
    return (
        <section>
            <Typography variant="h2">
                Form validation with Regex
            </Typography>
            <form className={classes.form} noValidate autoComplete="off">
  <TextField className={classes.txtField} id="standard-basic" label="Standard" />
  <TextField className={classes.txtField} id="filled-basic" label="Filled" variant="filled" />
  <TextField className={classes.txtField} id="outlined-basic" label="Outlined" variant="outlined" />
</form>
        </section>
    )
};
