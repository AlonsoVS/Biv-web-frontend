import { Button, makeStyles } from "@material-ui/core"
import { useContext } from "react";
import { CreateDesignContext } from "../pages/create";


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
    const {addResource} = useContext(CreateDesignContext);

    return (
        <div id={props.src} className={classes.resourceElement}>
            {props.src}
            <Button onClick={() => addResource(props)}>
                Add {'>'}
            </Button>
        </div>
    )
}

export default ResourceElement;