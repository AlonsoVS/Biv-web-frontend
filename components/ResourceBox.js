import { Button, makeStyles, Typography } from "@material-ui/core"
import Icon from '@mdi/react'
import { mdiChevronDown, mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { useEffect, useState } from "react";

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

const chargeElements = (list) => {
    let newList = [];
    let i = 0;
    let p = true;
    while(i < list.length){
        const p = list[i];
        newList.push({src: p, prev: i-1, next: i+1});
        i++;
    };
    newList[0].prev = list.length - 1;
    newList[newList.length-1].next = 0;
    return newList;
}

export default function ResourceBox(props) {

    const { resourcesType, resources } = props;
    const classes = useStyles();
    const linkedElements = chargeElements(resources);

    const elementsShowing = (list, option) => {
        if (option == 0) {
            return list.filter((item, idx) => idx < 3);
        }
        if (option == 1) {
            const nextIndex = showing.map(item => item.next);
            let newList = [];
            for (let i = 0; i<nextIndex.length; i++) {
                newList.push(list[nextIndex[i]]);
            }
            return newList;
        }
        if (option == -1) {
            const prevIndex = showing.map(item => item.prev);
            let newList = [];
            for (let i = 0; i<prevIndex.length; i++) {
                newList.push(list[prevIndex[i]]);
            }
            return newList;
        }
    }

    const [showing, setShowing] = useState(elementsShowing(linkedElements, 0));

    const handleNext = () => {
        const show = elementsShowing(linkedElements, 1);
        setShowing(show);
    }

    const handlePrev = () => {
        const show = elementsShowing(linkedElements, -1);
        setShowing(show);
    }

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
            <Button className={classes.slideButton} onClick={handlePrev}>
                <Icon
                    path={mdiChevronLeft}
                    title="Prev Element"
                    size={1}
                />
            </Button>
            {showing.map((element)=> <div className={classes.resourceElement}>{element.src}</div>)}
            <Button className={classes.slideButton} onClick={handleNext}>
                <Icon
                    path={mdiChevronRight}
                    title="Next Element"
                    size={1}
                />
            </Button>
        </div>
    </div>
};