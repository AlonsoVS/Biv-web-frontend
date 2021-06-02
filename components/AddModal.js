import { Button, IconButton, makeStyles } from "@material-ui/core";
import { mdiPlusCircleOutline } from "@mdi/js/commonjs/mdi";
import Icon from '@mdi/react';
import { useState } from "react";
import CommentForm from "./CommentForm";
import clsx from 'clsx';


const useStyles = makeStyles({
    rootModal: {
        zIndex: '1',
        position: 'absolute',
        right: '2%',
    },
    addNoteForm: {
      display: 'flex',
      flexDirection: 'column',
      background: 'white',
      border: '1px solid lightgrey',
      borderRadius: '6px',
      padding: '16px'
    },
    formButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    formButton: {
        width: '50%',
        background: 'lightgrey',
        margin: '2px'
    },
    addNoteButton: {
        background: 'rgb(0,198,162)',
        color: 'white',
    },
    unactiveButton: {
        color: 'grey'
    },
    openButton: {
        padding: 0
    },
});

export default function AddModal(props) {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const [addButtonActived, setAddButtonActived] = useState(false);

    const handleOpenClose = () => {
        setOpen(!open);
    }

    const handleAddNote = () => {
        alert('Note Added!');
    }

    const activeAddButton = (fieldContent) => {
        fieldContent == '' ? setAddButtonActived(false) : setAddButtonActived(true);
    }

    return <div className={classes.rootModal}>
        {open && <div className={classes.addNoteForm}>
                <CommentForm formType='note' checkAddActive={activeAddButton} />
                <div className={classes.formButtonsContainer}>
                    <Button className={classes.formButton} onClick={handleOpenClose}>
                        Cancel
                    </Button>
                    <Button 
                        className={clsx(classes.formButton, classes.addNoteButton)}
                        onClick={handleAddNote}
                        disabled={!addButtonActived}
                        >
                        Add Note
                    </Button>
                </div>
            </div> || 
                    <IconButton className={classes.openButton} onClick={handleOpenClose}>
                        <Icon
                            path={mdiPlusCircleOutline}
                            title='Add'
                            size={2}
                        />
                    </IconButton>}
    </div>
}