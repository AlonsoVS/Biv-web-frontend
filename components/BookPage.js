import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    page:{
        background: '#F3F3F3',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    }
});

export default function BookPage() {
    const classes = useStyles();
    return <div className={classes.page}></div>
}