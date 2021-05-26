import { Button, makeStyles } from "@material-ui/core"
import CommentForm from "./CommentForm"
import SearchField from "../components/SearchField"
import ResourceBox from "./ResourceBox"
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

const useStyles = makeStyles({
    dropContainer:{
        display: 'grid',
        gridTemplateColumns: '420px 0.5rem',
        height: '100%',
        position: 'relative'
    },
    dropRoot: {
        background: 'white',
        width: '430px',
        height: '100%',
        zIndex: 2,
        minWidth: '430px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px grey',
        borderStyle: 'none solid',
    },
    closeDropButton: { 
        zIndex: 1,
        position: 'relative', 
        alignSelf: 'center',
        background: 'white',
        width: '40px',
        height: '70px',
        borderRadius: '0 100px 100px 0',
        border: '1px solid grey',
        minWidth: '0px'
    },
    dropBoxContainer: {
        width: '100%',
        height: '100%',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', 
        alignSelf: 'center',
        margin: '2rem 0 0'
    }
});

export default function LeftDrop() {
    const classes = useStyles();
    return <div className={classes.dropContainer}>
                <div className={classes.dropRoot}>
                    {/* <CommentForm formType='comment'/>
                    <CommentForm formType='description'/> */}
                    <div className={classes.dropBoxContainer}>
                        <SearchField/>
                        <ResourceBox 
                                    resourcesType='Images' 
                                    resources={['image1', 'image2', 'image3',
                                                 'image4', 'image5', 'image6',
                                                 'image7', 'image8', 'image9']}/>
                        <ResourceBox resourcesType='Videos' resources={['video1', 'video2', 'video3']}/>
                        {/* <ResourceBox resourcesType='Recent' resources={['recent1', 'recent2', 'recent3']}/> */}
                    </div>
                </div>
                <Button className={classes.closeDropButton}>
                    <Icon
                        name="Close Drop"
                        path={mdiChevronLeft}
                        size={1}
                    />
                </Button>
        </div> 
}