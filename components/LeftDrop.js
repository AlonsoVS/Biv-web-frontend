import { Button, makeStyles, Typography } from "@material-ui/core"
import CommentForm from "./CommentForm"
import SearchField from "../components/SearchField"
import ResourceBox from "./ResourceBox"
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { useState } from "react"

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
        overflow: 'auto'
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
        minWidth: '40px',
        marginLeft: '-10px'
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
    },
    searchResult: {
        width: '170px',
        height: '150px',
        margin: '10px 0',
        background: 'grey'
    },
    searchResultContainer: {
        margin: '2rem 0 0',
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        alignContent: 'baseline',
        justifyItems: 'center',
        overflow: 'auto'
    }
});

export default function LeftDrop(props) {
    let { resources } = props;
    resources = {images: ['image1', 'image2', 'image3',
                        'image4', 'image5', 'image6',
                        'image7', 'image8', 'image9'],
                videos:  ['video1', 'video2', 'video3'],
                recents: ['recent1', 'recent2', 'recent3',
                        'recent4', 'recent5', 'recent6',
                        'recent7', 'recent8', 'recent9']}
    const [open, setOpen] = useState(true);
    const classes = useStyles();

    const [searching, setSearching] = useState(false);

    const [searchResult, setSearchResult] = useState(false);

    const searchResource = (res) => {
        const resContent = Object.values(resources);
        let found = 'Not found';
        let idx = 0;
        while (idx < resContent.length && found == 'Not found') {
            const resColection = resContent[idx];
            found = resColection.find(element => element == res.toLowerCase()) || 'Not found';
            idx++;
        }
        return found;
    }

    return <> {open && <div className={classes.dropContainer}>
                <div className={classes.dropRoot}>
                    {/* <CommentForm formType='comment'/>
                    <CommentForm formType='description'/> */}
                    <SearchField search={searchResource}
                                setSearchState={setSearching}
                                searchState={searching}
                                setResult={setSearchResult}/>

                    {!searching &&
                        <div className={classes.dropBoxContainer}>
                            <ResourceBox 
                                        resourcesType='Images' 
                                        resources={['image1', 'image2', 'image3',
                                                    'image4', 'image5', 'image6',
                                                    'image7', 'image8', 'image9']}/>
                            <ResourceBox resourcesType='Videos' resources={['video1', 'video2', 'video3']}/>
                            <ResourceBox resourcesType='Recent' resources={['recent1', 'recent2', 'recent3',
                                                                            'recent4', 'recent5', 'recent6',
                                                                            'recent7', 'recent8', 'recent9']}/>
                        </div>
                        || <div className={classes.searchResultContainer}>
                                <div className={classes.searchResult}>{searchResult}</div>
                            </div>}
                </div>
        </div>} 
        <Button className={classes.closeDropButton} onClick={()=>setOpen(!open)}>
                    <Icon
                        name="Close Drop"
                        path={open ? mdiChevronLeft:mdiChevronRight}
                        size={1}
                    />
        </Button>
        </>
}