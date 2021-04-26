import { AppBar, Button, IconButton, MenuItem, Toolbar } from '@material-ui/core'
import { useRouter } from 'next/router'
import useStyles from '../styles/NavbarStyles'
import Link from 'next/link'

export default function UserNavbar() {
    const classes = useStyles();
    return(
        <AppBar position="static" style={ { background: 'grey' } }>
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
                        href='/home'>
                        Home
                    </Link>
                </div>
                <div className={classes.logContainer}>
                    <Link href='/settigns'>
                        <Button 
                            className={classes.loginButton}
                            color="inherit"
                        >
                            Settings
                        </Button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}