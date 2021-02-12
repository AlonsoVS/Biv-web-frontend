import { AppBar, Button, IconButton, Link, MenuItem, Toolbar } from '@material-ui/core'
import { useRouter } from 'next/router'
import useStyles from '../styles/NavbarStyles'
import React from 'react'

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
                        href='/main'
                    >
                        Main
                    </Link>
                </div>
                <div className={classes.logContainer}>
                    <Button 
                        className={classes.loginButton}
                        color="inherit"
                        onClick={() => router.push('/login')}
                    >
                        Log In
                    </Button>
                    <Button className={classes.signUpButton} color="inherit">Plan With Biv!</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}