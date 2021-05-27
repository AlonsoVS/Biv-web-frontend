import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    page:{
        background: '#F3F3F3',
        width: '1000px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignSelf: 'center'
    }
});

export default function BookPage() {
    const classes = useStyles();
    return <div className={classes.page}></div>
}