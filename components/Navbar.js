import { AppBar, Button, IconButton, makeStyles, MenuItem, Toolbar } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles({
    logoButton: {
        background: 'grey',
        height: '35px',
        width: '35px',
        margin: '0'
    },
    loginButton: {
        background: 'white',
        color: 'black',
        textTransform: 'none'
    },
    logContainer: {
        display: 'flex',
        margin: '0rem 0rem 0rem 8rem'
    },
    selectContainer: {
        color: 'grey',
        margin: '0 6rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        "& button:active": {
            background: 'green',
            outline: 'none'
        },
        "& button:hover": {
            color: 'green',
            outline: 'none'
        }
    },
    signUpButton: {
        background: 'green',
        width: 'max-content',
        "&:hover": {
            background: 'purple'
        }
    },
    selectNavButton: {
        background: 'none',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '0rem 0.5rem',
        "&:focus": {
            outline: 'none'
        },
    },
    toolbar: {
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto'
    }
});

export default function Navbar(props) {
    const classes = useStyles();
    return(
        <AppBar position="static" style={ { background: 'white' } }>
            <Toolbar className={classes.toolbar}>
                <IconButton 
                    edge="start"
                    className={classes.logoButton}
                    color="inherit" aria-label="logo"
                >
                    <MenuItem />
                </IconButton>
                <div className={classes.selectContainer}>
                    <button className={classes.selectNavButton}>
                        Select 1
                    </button>
                    <Button className={classes.selectNavButton}>
                        Select 2
                    </Button>
                    <Button className={classes.selectNavButton}>
                        Select 3
                    </Button>
                </div>
                <div className={classes.logContainer}>
                    <Button className={classes.loginButton} color="inherit">Log In</Button>
                    <Button className={classes.signUpButton} color="inherit">Sign Up</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}