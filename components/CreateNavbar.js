import { AppBar, Button, IconButton, InputBase, MenuItem, TextField, Toolbar } from '@material-ui/core'
import Icon from '@mdi/react'
import { mdiUndoVariant, mdiRedoVariant, mdiShare, mdiMenu, mdiDelete, mdiContentSave, mdiChevronLeft } from '@mdi/js'
import Typography from '@material-ui/core/Typography'
import useStyles from '../styles/UserNavbarStyles'
import Link from 'next/link'
import { mdiArrowLeft } from '@mdi/js/commonjs/mdi'
import { useState } from 'react'

export default function CreateNavbar() {

    const [travelTitle, setTravelTitle] = useState('');

    const classes = useStyles();
    const shadow = '0px 0px 8px 0.5px rgb(0 0 0 / 20%), inset 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)';

    const handleSetTitle = (event) => {
        event.preventDefault();
    }

    const handleTitleChange = (event) => {
        event.preventDefault();
        setTravelTitle(event.target.value);
    }

    return(
        <AppBar position="static" style={ { background: 'white', boxShadow: shadow, zIndex: '10' } }>
            <Toolbar className={classes.toolbar}>
                <div className={classes.selectContainer}>
                    
                    <Link
                        className={classes.selectNavButton}
                        href='/home'>
                        <a className={classes.selectNavButton}>
                        <Icon
                            path={mdiChevronLeft}
                            title="Back to Home"
                            size={1}
                        />
                            Home
                        </a>
                    </Link>
                    <Link
                        href='/create'>
                        <a className={classes.selectNavButton}>Create</a>
                    </Link>
                </div>
                    <form 
                        className={classes.travelTitleField}
                        noValidate
                        autoComplete="off"
                        onChange={handleTitleChange}
                        onSubmit={handleSetTitle}>
                        <label>
                            <input
                                className={classes.travelTitleInput} 
                                type='text'
                                name='travelTitle'
                                value={travelTitle}
                                placeholder='General Location - Travel Title'
                            />
                        </label>
                    </form>
                <div className={classes.logContainer}>
                    <IconButton
                        className={classes.customUserIcons} aria-label="undo-button"
                        color='inherit'
                        >
                            <Icon 
                                path={mdiUndoVariant}
                                title="Undo"
                                size={1}
                            />
                    </IconButton>
                    
                    <IconButton className={classes.customUserIcons} aria-label="redo-button"
                    >
                        <Icon 
                            path={mdiRedoVariant}
                            title="Redo"
                            size={1}
                        />
                    </IconButton>

                    <IconButton className={classes.customUserIcons} aria-label="share-button"
                    >
                        <Icon 
                            path={mdiShare}
                            title="Share"
                            size={1}
                        />
                    </IconButton>

                    <IconButton className={classes.customUserIcons} aria-label="delete-button"
                    >
                        <Icon 
                            path={mdiDelete}
                            title="Delete"
                            size={1}
                        />
                    </IconButton>

                    <IconButton className={classes.customUserIcons} aria-label="Save-button"
                    >
                        <Icon 
                            path={mdiContentSave}
                            title="Save"
                            size={1}
                        />
                    </IconButton>
                </div>
            </Toolbar>
            <div className={classes.toolbarDelimiter}/>
        </AppBar>
    );
}