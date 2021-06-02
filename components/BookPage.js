import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    page:{
        background: '#F3F3F3',
        width: '1000px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignSelf: 'center',
        alignItems: 'center'
    },
    resource: {
        fontSize: 'large',
        width: 'fitContent',
        height: 'fitContent'
    }
});

export default function BookPage(props) {
    const { resources } = props;
    const classes = useStyles();
    return <div className={classes.page}>
        {resources.map( resource => <div className={classes.resource}>{resource}</div> )}
    </div>
}