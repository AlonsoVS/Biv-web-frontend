import { AppBar, Button, IconButton, InputBase, MenuItem, Toolbar } from '@material-ui/core'
import Icon from '@mdi/react'
import { mdiAccountCircle, mdiCog, mdiMenu } from '@mdi/js'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import useStyles from '../styles/UserNavbarStyles'
import Link from 'next/link'

export default function UserNavbar() {
    const classes = useStyles();
    const shadow = '0px 0px 8px 0.5px rgb(0 0 0 / 20%), inset 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)';
    return(
        <AppBar position="static" style={ { background: 'white', boxShadow: shadow } }>
            <Toolbar className={classes.toolbar}>
                <div className={classes.selectContainer}>
                    <IconButton edge="start" className={classes.customUserIcons} color="inherit" aria-label="menu">
                        <Icon
                            path={mdiMenu}
                            title="Menu"
                            size={1}
                        />
                    </IconButton>
                    <IconButton 
                        edge="start"
                        className={classes.logoButton}
                        color="inherit" aria-label="logo"
                    >
                        <MenuItem />
                    </IconButton>
                    <Link
                        className={classes.selectNavButton}
                        href='/home'>
                        <a className={classes.selectNavButton}>Home</a>
                    </Link>
                    <Link
                        href='/new'>
                        <a className={classes.selectNavButton}>New</a>
                    </Link>
                </div>

                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                        <Typography className={classes.searchIconText} noWrap>
                            Search in Biv
                        </Typography>
                    </div>
                    <InputBase
                        placeholder="Travel, Location, Date..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>

                <div className={classes.logContainer}>
                    <div className={classes.customUserIcons} aria-label="user-profile">
                        <Typography className={classes.userName} >
                            Username
                        </Typography>
                        <IconButton
                            
                            color='inherit'
                        >
                            <Icon 
                                path={mdiAccountCircle}
                                title="User Profile"
                                size={2}
                            />
                        </IconButton>
                    </div>
                    
                    <IconButton className={classes.customUserIcons} aria-label="settings"
                    >
                        <Icon 
                            path={mdiCog}
                            title="User Profile"
                            size={1}
                        />
                    </IconButton>
                
                </div>
            </Toolbar>
            <div className={classes.toolbarDelimiter}/>
        </AppBar>
    );
}