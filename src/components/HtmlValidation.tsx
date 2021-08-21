import { Typography } from '@material-ui/core'
import useStyles from './styles'

export const HtmlValidation = () => {
    const classes = useStyles();
    return (
        <>
        <Typography className={classes.titles} variant="h4">
            Form validation with HTML
        </Typography>
        <form action="">
            <input className={classes.htmlInput} type="email" id="email" name="email" placeholder="email" required />
        </form>
        </>
    )
}