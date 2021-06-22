import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles({
    resourceElement: {
        background: 'grey',
        width: '100px',
        height: '100px',
        margin: '5px'
    }
})

function ResourceElement(props) {
    const classes = useStyles();
    return (
        <div id={props.src} className={classes.resourceElement}>{props.src}</div>
    )
}

export default ResourceElement;