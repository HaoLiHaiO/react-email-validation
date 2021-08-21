import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    form: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
    },
    txtField: {
        margin: theme.spacing(4, 0, 0)
    },
    titles: {
        marginTop: '20px',
    },
    htmlInput: {
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            display: 'inline-block',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
        
    }
}));

export default useStyles;