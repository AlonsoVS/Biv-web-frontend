import { AppBar, Button, IconButton, MenuItem, Toolbar } from '@material-ui/core'
import { useRouter } from 'next/router'
import useStyles from '../styles/NavbarStyles'
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
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
                    <Link href='/login'>
                        <Button 
                            className={classes.loginButton}
                            color="inherit"
                        >
                            Log In
                        </Button>
                    </Link>
                    <Button className={classes.signUpButton} color="inherit">Plan With Biv!</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}