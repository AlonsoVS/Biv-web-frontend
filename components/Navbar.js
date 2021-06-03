import { AppBar, Button, IconButton, MenuItem, Toolbar } from '@material-ui/core'
import { useRouter } from 'next/router'
import useStyles from '../styles/NavbarStyles'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar(props) {
    const { openCloseLogin } = props;
    const classes = useStyles();
    const router = useRouter();
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
                    <Link
                        className={classes.selectNavButton}
                        href='/main'>
                        Main
                    </Link>
                </div>
                <div className={classes.logContainer}>
                    <Button 
                        className={classes.loginButton}
                        color="inherit"
                        onClick={()=>openCloseLogin('sign in')}
                    >
                        Log In
                    </Button>
                    <Button 
                        className={classes.signUpButton} 
                        color="inherit"
                        onClick={()=>openCloseLogin('sign up')}
                        >
                        Plan With Biv!
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}