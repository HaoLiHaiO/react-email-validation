import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    form: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        display: 'flex',
        flexDirection: 'column',
    },
    txtField: {
        margin: theme.spacing(4, 0, 0)
    }
}));

export default useStyles;