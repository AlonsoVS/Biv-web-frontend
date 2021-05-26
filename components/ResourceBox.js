import { Button, makeStyles, Typography } from "@material-ui/core"
import Icon from '@mdi/react'
import { mdiChevronDown, mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { useState } from "react";

const useStyles = makeStyles({
    title: {
        display: 'flex',
        flexDirection:'row',
        cursor: 'pointer',
        margin: '1rem',
        width: 'fit-content'
    },
    boxRoot: {
        margin: 10
    },
    titleText: {
        marginRight: '6px'
    },
    slideButton: {
        minWidth: '0px',
        padding: '0',
        width: '28px',
        height: '28px'
    },
    resourceElement: {
        background: 'grey',
        width: '100px',
        height: '100%',
        margin: '0 5px'
    },
    resourceDrop: {
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    }
});

export default function ResourceBox(props) {
    const { resourcesType, resources } = props;
    const classes = useStyles();

    const chargeElements = (resources) => {
        let elements = [];
        if ( resources ) {
            for (let i=0; i<3; i++) {
                elements.push(<div className={classes.resourceElement}>
                                {resourcesType}
                            </div>)}
        }
        return elements;
    }

    const [state, setState] = useState({ showing: chargeElements(resources)});

    return <div className={classes.boxRoot}>
        <div className={classes.title}>
            <Typography className={classes.titleText} variant='subtitle1'>
                {resourcesType}
            </Typography>
            <Icon path={mdiChevronDown}
                title="Expand List"
                size={1}
            />
        </div>
        <div className={classes.resourceDrop}>
            <Button className={classes.slideButton}>
                <Icon
                    path={mdiChevronLeft}
                    title="Prev Element"
                    size={1}
                />
            </Button>
            {state.showing.map((element)=>element)}
            <Button className={classes.slideButton}>
                <Icon
                    path={mdiChevronRight}
                    title="Next Element"
                    size={1}
                />
            </Button>
        </div>
    </div>
};