import { Button, makeStyles, Typography } from "@material-ui/core"
import Icon from '@mdi/react'
import { mdiChevronDown, mdiChevronLeft, mdiChevronRight, mdiChevronUp } from '@mdi/js'
import { useEffect, useState } from "react";
import ResourceElement from "./ResourceElement";

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
        marginRight: '6px',
        textTransform: 'capitalize'
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
        height: '100px',
        margin: '5px'
    },
    resourceDrop: {
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    resourcesContainer: {
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row'
    },
    resourcesContainerExpanded: {
        height: 'fit-content',
        display: 'grid',
        gridTemplateColumns: '110px 110px 110px',
        gridTemplateRows: '110px 110px 110px'
    }
});

export default function ResourceBox(props) {
    const { resourcesType, resources } = props;
    const classes = useStyles();
    const [expandContainer, setExpand] = useState({expanded: false, 
                                                    class: classes.resourcesContainer});

    const elementsShowing = (list) => {
        const maxShow = expandContainer.expanded ? list.length : 3;
        let newArr = [];
        list.forEach((item, index) => {
            if (index < maxShow) {
                newArr.push({ ...item, index });
            } 
        })
        return newArr;
    }

    const [elements, setElements] = useState(resources);

    const showElements = elementsShowing(resources);

    const [showing, setShowing] = useState(showElements);

    useEffect(() => {
        setShowing(showElements);
    }, [expandContainer]);

    const handleExpandBox = () => {
        if (resources.length > 3) {
            const newClass = expandContainer.expanded ? 
                                { expanded: false, class: classes.resourcesContainer } :
                                { expanded: true, class: classes.resourcesContainerExpanded };
            setExpand(newClass);   
        }
    }

    const handleNext = () => {
        const showingIndex = [];
        showing.forEach(item => {
            if (item.index >= elements.length-1) {
                showingIndex.push(0);
            } else {
                showingIndex.push(item.index + 1);
            };
        });
        const newArr = [];
        showingIndex.forEach(index => {
            newArr.push({ ...elements[index], index });
        });
        setShowing(newArr);
    }

    const handlePrev = () => {
        const showingIndex = [];
        showing.forEach(item => {
            if (item.index <= 0) {
                showingIndex.push(elements.length-1);
            } else {
                showingIndex.push(item.index - 1);
            };
        });
        const newArr = [];
        showingIndex.forEach(index => {
            newArr.push({ ...elements[index], index });
        });
        setShowing(newArr);
    }

    return (
        <div className={classes.boxRoot}>
            <div 
                className={classes.title} 
                onClick={handleExpandBox}>
                <Typography className={classes.titleText} variant='subtitle1'>
                    {resourcesType}
                </Typography>
                <Icon path={expandContainer.expanded ? mdiChevronUp : mdiChevronDown}
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
                <div className={expandContainer.class}>
                    {
                        showing.map( (element) => {
                            const formatElement = elements[element.index];
                            return <ResourceElement {...formatElement} />
                        })
                    }
                </div>
                <Button className={classes.slideButton} onClick={handleNext}>
                    <Icon
                        path={mdiChevronRight}
                        title="Next Element"
                        size={1}
                    />
                </Button>
            </div>
        </div>
    )
};