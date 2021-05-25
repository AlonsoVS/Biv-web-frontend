import { makeStyles } from "@material-ui/core"
import CommentForm from "./CommentForm"
import SearchField from "../components/SearchField"
import ResourceBox from "./ResourceBox";

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
    return <div className={classes.root}>
        <SearchField/>
        <CommentForm formType='comment'/>
        <CommentForm formType='description'/>
        <ResourceBox resourcesType='Images' resources={['image', 'image', 'image']}/>
        <ResourceBox resourcesType='Videos' resources={['video', 'video', 'video']}/>
        <ResourceBox resourcesType='Recent' resources={['recent', 'recent', 'recent']}/>
    </div>
}