import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        background: 'grey',
        width: '430px',
        height: '100%',
        zIndex: 1,
        minWidth: '430px'
    }
});

export default function LeftDrop() {
    const classes = useStyles();
    return <div className={classes.root}></div>
}